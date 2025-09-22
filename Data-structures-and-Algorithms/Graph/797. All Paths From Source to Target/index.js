var allPathsSourceTarget = function (graph) {
  let result = [];
  let queue = [[0]];

  while (queue.length > 0) {
    let path = queue.shift();
    let node = path[path.length - 1];

    if (node == graph.length - 1) {
      result.push(path);
    }
    for (let neighbor of graph[node]) {
      queue.push([...path, neighbor]);
    }
  }
  return result;
};
