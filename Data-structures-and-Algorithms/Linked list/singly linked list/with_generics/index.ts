
class ListNode<T>{
  public val :T 
  public next : ListNode<T> | null
  constructor(val: T){
    this.val = val 
    this.next = null  
  }
}

class LinkedList<T>{
  public head : ListNode<T> | null
  constructor(){
    this.head = null
  }

  prepend(val: T){
    const newNode = new ListNode(val)

    if(this.head  == null ){
      this.head = newNode
      return 
    }

    newNode.next = this.head
    this.head = newNode
  }

  append(val: T){
    const newNode = new ListNode(val)

    if(this.head == null){
      this.head = newNode
      return 
    }

    let curr = this.head
    while(curr?.next !== null){
      curr = curr.next
    }
    curr.next = newNode
  }
}

function findMiddle<T>(head : ListNode<T> | null){
  let slow = head 
  let fast = head 

  while(fast !== null && fast.next !== null){
    fast = fast?.next?.next
    slow = slow!?.next
  }
  return slow 
}

function deleteMiddle<T>(head: ListNode<T> | null ){
  let dummy = new ListNode<T>(null  as unknown as T)
  dummy.next = head 
  let prev = null 
  let slow = head 
  let fast = head 

  while(fast !== null && fast.next !== null ){
    fast = fast.next.next
    prev = slow!
    slow = slow!.next
  }
  prev?.next = slow?.next ?? null 
  
}
