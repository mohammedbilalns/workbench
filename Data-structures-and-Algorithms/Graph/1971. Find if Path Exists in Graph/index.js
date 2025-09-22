var validPath = function (n, edges, source, destination) {
  let adjacencyArr = new Array(n).fill(0).map(() => []);
  for (let [v1, v2] of edges) {
    adjacencyArr[v1].push(v2);
    adjacencyArr[v2].push(v1);
  }
  let visited = new Set();

  let queue = [source];

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr == destination) return true;
    if (!visited.has(curr)) {
      visited.add(curr);
      for (let neighbor of adjacencyArr[curr]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return false;
};
