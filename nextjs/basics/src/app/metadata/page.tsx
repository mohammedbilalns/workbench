import type { Metadata } from 'next';
import Link from "next/link"


export const metadata: Metadata = {
	title: "Metadata example ",
	description:"This is an metadata example "
};
export default function MetaDataExample(){

	const examples = [
		{
			id:1, 
			name:"sample name"
		},
		{
			id:2, 
			name:"sample name"
		},{
			id:3, 
			name:"sample name"
		},{
			id:4, 
			name:"sample name"
		},

	]
	return (
	<div>
			<h1>Metadata example</h1>
			<ul>
				{examples.map(example => <li key={example.id}> <p>{example.name}</p> <Link href={`/metadata/${example.id}`}>View details</Link> </li>)}
			</ul>
		</div>
	)
}
