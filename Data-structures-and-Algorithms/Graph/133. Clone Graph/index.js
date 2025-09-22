/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var cloneGraph = function (node) {
  if (!node) return;
  let map = new Map();
  let queue = [node];
  map.set(node, new _Node(node.val));
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let neighbor of curr.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new _Node(neighbor.val));
        queue.push(neighbor);
      }
      map.get(curr).neighbors.push(map.get(neighbor));
    }
  }
  return map.get(node);
};
