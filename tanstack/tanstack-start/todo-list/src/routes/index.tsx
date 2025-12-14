import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { db } from '@/db'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start'
import { Link } from '@tanstack/react-router'
import {EditIcon, ListTodoIcon, PlusIcon, TrashIcon} from "lucide-react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { ActionButton } from '@/components/ui/action-button'
import z from 'zod'
import { todos } from '@/db/schema'
import { eq } from 'drizzle-orm'

const serverLoader = createServerFn({method: "GET"}).handler(()=>{
  return db.query.todos.findMany()
})

export const Route = createFileRoute('/')({
  component: App ,
  loader: ()=> {
    return serverLoader()
  }
})

function App() {
  const todos = Route.useLoaderData()
  const totalCount = todos.length
  const completedCount = todos.filter((todo) => todo.isComplete).length

  return <div className='min-h-screen container space-y-8' >
    <div className='flex justify-between items-center gap-4' >
      <div className=' space-y-2' >
        <h1 className='text-4xl font-bold' >Todo List</h1>
        {totalCount > 0 && (
          <Badge variant="outline">
            {completedCount} of {totalCount} completed
          </Badge>
        )}

      </div>

      <div>
        <Button asChild >
          <Link to='/todos/new' > <PlusIcon/>  Add Todo</Link> 
        </Button>
      </div>

    </div>

    <TodoListTable todos={todos} />
  </div> 
}


function TodoListTable(
  {todos}: {
    todos:Array<{
      id: string,
      name: string,
      isComplete: boolean,
      createdAt: Date,
      updatedAt: Date
    }>
  }) {

  if(todos.length === 0){
    return <Empty className='border border-dashed' >
      <EmptyHeader>
        <EmptyMedia variant="icon" >
          <ListTodoIcon />
        </EmptyMedia>
        <EmptyTitle>No Todos</EmptyTitle>
        <EmptyDescription>Try adding a new todo</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm" asChild >
          <Link to='/todos/new' > <PlusIcon/>  Add Todo</Link> 
        </Button>

      </EmptyContent>
    </Empty>
  }
  return <Table>
    <TableHeader>
      <TableRow className='hover:bg-transparent' >
        <TableHead></TableHead>
        <TableHead>Task</TableHead>
        <TableHead>Created on</TableHead>
        <TableHead className='w-0' > </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {todos.map(todo => (
        <TodoTableRow key={todo.id} {...todo} />
      ))}
    </TableBody>
  </Table> 

}

const deleteFn = createServerFn({method:"POST"}).inputValidator(
  z.object({id:z.string().min(1)})
).handler( async ({data})=> {

  await db.delete(todos).where(eq(todos.id,data.id))
  return {error: false}
})

function TodoTableRow({id,name, isComplete, createdAt}:{
  id: string,
  name: string,
  isComplete: boolean,
  createdAt:Date
}){

  const  deleteTodoFn = useServerFn(deleteFn)
  const router = useRouter()
  return (

    <TableRow
    
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.closest("[data-actions]")) return 
      }}
    >
      <TableCell>
        <Checkbox checked={isComplete} />
      </TableCell>
      <TableCell className={cn("font-medium", isComplete && "text-muted-foreground line-through" )} >
        {name}
      </TableCell>
      <TableCell className="text-sm text-muted-foreground"  >
        {formatDate(createdAt)}
      </TableCell>
      <TableCell data-actions>
        <div className="flex items-center justify-end gap-1 ">
          <Button variant="ghost" size="icon-sm">
            <Link to='/todos/$id/edit' params={{id}}>
              <EditIcon/>
            </Link>
          </Button>
          <ActionButton variant="destructive" action={async ()=> {
            const res = await deleteTodoFn({data:{id}})
            router.invalidate()
            return res
          }} >
            <TrashIcon/>
          </ActionButton>
        </div>

      </TableCell>
    </TableRow>
  )

}

function formatDate(date: Date){
  const formatter = new Intl.DateTimeFormat(undefined,{
    dateStyle: 'short',
  })
  return formatter.format(date)
}
