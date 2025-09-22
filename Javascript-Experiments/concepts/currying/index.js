function first(a){
	return function(b){
		return function(c){
			return function(d){
				return function(e){
					console.log(`${a} ${b} ${c} ${d} ${e}`)
				}
			}
		}
	}
}
first(1)(2)(3)(4)(5)
