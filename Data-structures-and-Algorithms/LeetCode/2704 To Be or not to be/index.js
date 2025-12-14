var expect = function(val) {
    return {
        toBe: (valToCheck) => {
            if(valToCheck == null ) throw new Error("Not Equal")
            return valToCheck  === val 
        },
        notToBe(valToCheck){
            return valToCheck !== val 
        }
    }
    
};

const res = expect(5).toBe(null)
console.log(res)
