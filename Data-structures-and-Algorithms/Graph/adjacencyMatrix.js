class Graph{
    constructor(size){
        this.size = size 
        this.adjacentMat = Array.from({length:size}, ()=> Array(size).fill(0))
    }
    addEdge(v1, v2){
        if(v1> this.size || v2 > this.size || v1 < 0 || v2 < 0){
            console.log("Invalid nodes")
            return 
        }
        this.adjacentMat[v1][v2] = 1 
        this.adjacentMat[v2][v1] = 1 
    }

    removeEdge(v1, v2){
        if(v1 > this.size || v2 > this.size || v1 < 0 || v2 < 0 ){
            console.log("Invalid nodes")
            return 
        }

        this.adjacentMat[v1][v2] = 0 
        this.adjacentMat[v2][v1] = 0 
    }



    display(){
        this.adjacentMat.forEach((row)=>console.log(row.join(" ")))
    }
}


const graph = new Graph(5)
graph.addEdge(1,1)
graph.addEdge(1,3)
graph.display()


