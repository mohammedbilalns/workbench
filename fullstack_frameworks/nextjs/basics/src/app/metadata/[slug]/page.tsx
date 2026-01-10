import { Metadata } from "next"


const dummyDat = {"1":{title:"One"},"2":{title:"Two"}}

export async function generateMetadata({params}: {params: Promise<{slug:string}>}) : Promise<Metadata>{
	const {slug} = await params 
	const data  = dummyDat[slug as keyof typeof dummyDat]
	return {
		title: data.title, 
		description: data.title
	}
}

export default async  function DynamicMetadata({params}: {params: Promise<{slug:string}>}){
	
	const {slug} = await params 
	const data = dummyDat[slug as keyof typeof dummyDat]
	return <div>
		<h1>{data.title}</h1>
	</div>

}
