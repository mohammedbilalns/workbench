const fetchData = require("./sum")

test('throws on invalid input', ()=>{
	expect(
		()=> {
			myFunction('fsdfdsf')
		}
	).toThrow()
})
