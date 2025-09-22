class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = new Set();
    }
  }
  addEdge(node1, node2) {
    if (node1 == node2) return;
    if (!this.adjacencyList[node1]) {
      this.addNode(node1);
    }
    if (!this.adjacencyList[node2]) {
      this.addNode(node2);
    }

    this.adjacencyList[node1].add(node2);
    this.adjacencyList[node2].add(node1);
  }

  removeEdge(node1, node2) {
    this.adjacencyList[node1].delete(node2);
    this.adjacencyList[node2].delete(node1);
  }

  removeNode(value) {
    if (!this.adjacencyList[value]) return null;

    for (let adjacentVertice of this.adjacencyList[value]) {
      this.removeEdge(value, adjacentVertice);
    }
    delete this.adjacencyList[value];
  }

  bfs(start) {
    if (!this.adjacencyList[start]) return null;
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
      let curr = queue.shift();

      if (!visited.has(curr)) {
        console.log(curr);
        visited.add(curr);

        for (let adjacentNode of this.adjacencyList[curr]) {
          if (!visited.has(adjacentNode)) {
            stack.push(adjacentNode);
          }
        }
      }
    }
  }

  dfs(start) {
    if (!this.adjacencyList[start]) return null;
    let stack = [start];
    let visited = new Set();

    while (stack.length > 0) {
      let curr = stack.pop();

      if (!visited.has(curr)) {
        console.log(curr);
        visited.add(curr);

        for (let adjacentNode of this.adjacencyList[curr]) {
          if (!visited.has(adjacentNode)) {
            stack.push(adjacentNode);
          }
        }
      }
    }
  }

  shortestPath(start, end) {
    if (!this.adjacencyList[start] || !this.adjacencyList[end]) return;

    let queue = [[start, 0]];
    let visited = new Set();

    while (queue.length > 0) {
      let [curr, distance] = queue.shift();

      if (curr == end) return distance;
      if (!visited.has(curr)) {
        visited.add(curr);
        for (let neighbor of this.adjacencyList[curr]) {
          if (!visited.has(neighbor)) {
            queue.push([neighbor, distance + 1]);
          }
        }
      }
    }
    return -1;
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
graph.addEdge(5, 1);
console.log(graph.shortestPath(1, 4));
