class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // Add a node
  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = new Set();
    }
  }
  // Add a node between two nodes
  addEdge(node1, node2) {
    if (!this.adjacencyList[node1]) {
      this.addNode(node1);
    }
    if (!this.adjacencyList[node2]) {
      this.addNode(node2);
    }

    this.adjacencyList[node1].add(node2);
    this.adjacencyList[node2].add(node1);
  }
  // Check if there is an edge between two nodes
  hasEdge(node1, node2) {
    return (
      this.adjacencyList[node1].has(node2) &&
      this.adjacencyList[node2].has(node1)
    );
  }
  // Remove an edge from the graph
  removeEdge(node1, node2) {
    this.adjacencyList[node1].delete(node2);
    this.adjacencyList[node2].delete(node1);
  }
  // Remove a node from the graph
  removeNode(node) {
    if (!this.adjacencyList[node]) {
      return;
    }

    for (let adjacentNode of this.adjacencyList[node]) {
      this.removeEdge(node, adjacentNode);
    }
    delete this.adjacencyList[node];
  }
  // depth first search in the graph
  dfs(start) {
    if (!this.adjacencyList[start]) return;
    let visited = new Set();
    let stack = [start];

    while (stack.length > 0) {
      let node = stack.pop();

      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);

        for (let neighbor of this.adjacencyList[node]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }

  //breadth first seach
  bfs(start) {
    if (!this.adjacencyList[start]) return;
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
      let node = queue.shift();

      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);

        for (let neighbor of this.adjacencyList[node]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  //detect cycle in the graph

  hasCycle() {
    let visited = new Set();

    let helperDfs = (node, parent) => {
      visited.add(node);

      for (let neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          if (helperDfs(neighbor, node)) {
            return true;
          }
        } else if (neighbor !== parent) {
          return true;
        }
      }
      return false;
    };

    for (let node in this.adjacencyList) {
      if (!visited.has(node)) {
        if (helperDfs(node, null)) {
          return true;
        }
      }
    }
    return false;
  }
  // count the number of cycles

  countCycles() {
    let visited = new Set();
    let count = 0;
    let helperDfs = (node, parent) => {
      visited.add(node);

      for (let neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          helperDfs(neighbor, node);
        } else if (neighbor !== parent) {
          count++;
        }
      }
    };

    for (let node in this.adjacencyList) {
      if (!visited.has(node)) {
        helperDfs(node, null);
      }
    }

    return count / 2;
  }

  shortestPath(start, end) {
    if (!this.adjacencyList[start] || !this.adjacencyList[end]) return;
    if (start == end) return [start];
    let queue = [[start]];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      let path = queue.shift();
      let node = path[path.length - 1];

      if (node == end) return path;

      for (let neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
    return null;
  }
  // display the graph
  display() {
    for (let node in this.adjacencyList) {
      console.log(node + " -> " + [...this.adjacencyList[node]]);
    }
  }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
//graph.addEdge("A", "C");
graph.display();
graph.dfs("A");
console.log(graph.shortestPath("A", "C"));
