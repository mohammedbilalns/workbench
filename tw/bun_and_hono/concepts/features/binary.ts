
function binaryDataOpearations(){

	const buf = new ArrayBuffer(8)
	console.log("Length", buf.byteLength)
	console.log('Array buffer', buf);

	const dv  = new DataView(buf)
	dv.setUint8(0,3)
	dv.setUint16(1,512)
	console.log(dv.getUint8(0));
	console.log(dv.getInt16(1));
	
	const uint8Array = new Uint8Array([0,1,3,4,6,3])
	console.log(uint8Array);

	const nodeBuffer = Buffer.from("Hello bun")
	console.log(nodeBuffer, nodeBuffer.toString());

	const blob = new Blob(["<html>Hello</html>"],{type:'text/html'})
	console.log(blob.size, blob.type)

	const encoder = new TextEncoder()
	const encodedVAl = encoder.encode("Hello bun ")
	console.log(encodedVAl, "encoded value");

	const decoder = new TextDecoder()
	console.log(decoder.decode(encodedVAl))
		
	
}
binaryDataOpearations()
