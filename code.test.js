const code = require("./code.js");
const assert = require("assert");

//function for arrayEqualTo
function arrayEqual(a, b) {
  return JSON.stringify(a) == JSON.stringify(b); 
}

//assign graph and sourceNode values:
graph = [ [[1,2],[2,1],[3,4]], //node A          //graph from example in lecture videos
          [[2,1],[4,10],[5,2]], //node B
          [[0,9],[4,8]], //node C
          [[2,2]], //node D
          [[3,7],[6,1]], //node E
          [[7,3]], //node F
          [[4,4],[5,2]], //node G
          [[6,1]] ]; //node H

sourceNode = 2;

let a = code.dijkstra(graph, startNode, targetNode);
let b = [9,11,0,13,8,11,9,14]; //answer from example in lecture video;

//Test
assert(arrayEqualTo(a,b));
