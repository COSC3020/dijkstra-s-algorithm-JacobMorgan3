function dijkstra(graph, sourceNode) {
    
    let dist = [];
    let distance = [];
    let marked = [];
    for (let i = 0; i < graph.length; i++) { //set all nodes esitmated dist to 1000 (which will be our infinity)
        dist[i] = 1000;
        marked[i] = false;
    }
    
    dist[sourceNode] = 0; //set estimated dist to 0 for the sourceNode
    loopNumber = 1;
    //console.log("befoere the first loop: " + dist);
    while (true) {
        //console.log("loop " + loopNumber);
        let lowest = 1000; //set lowest to our infinity
        let lowestIndex = 0;
        for (let i = 0; i < dist.length; i++) { //find the node with the lowest estimated dist that is not marked
            for (let j = 0; j < marked.length; j++) {
                if (marked[j] == false) { //if not marked
                    if (dist[j] < lowest) { //finding the lowest estimated dist 
                        lowest = dist[j];
                        lowestIndex = j;
                    }   
                }
            }
        }
        //console.log("lowestIndex: " + lowestIndex);
        marked[lowestIndex] = true; //mark lowestIndex node
        distance[lowestIndex] = lowest; //set distance for the lowest dist to dist
    
        //look at all the edges that leave lowestIndex and update there dist
        for (let i = 0; i < graph[lowestIndex].length; i++) {
            if (graph[lowestIndex][i][1] < 1000) { //if dist is lower than 'infinity' update it
                dist[graph[lowestIndex][i][0]] = Math.min(dist[graph[lowestIndex][i][0]], distance[lowestIndex] + graph[lowestIndex][i][1]);
            }
        }
        
        //loopNumber++;
        //console.log("dist: " + dist);
        //console.log("distance: " + distance);
        //console.log("marked: " + marked);
        
        let trueCount = 0;
        for (let i = 0; i < marked.length; i++) { //check if all nodes are marked and leave loop if so
            if(marked[i] == true) {
                trueCount++;
            }
        }
        if (trueCount == marked.length) {
            return distance;
        }
    }
    return;
}
//graph is from example in lecture videos
//graph = [[[1,2],[2,1],[3,4]], //node A
          [[2,1],[4,10],[5,2]], //node B
          [[0,9],[4,8]], //node C
          [[2,2]], //node D
          [[3,7],[6,1]], //node E
          [[7,3]], //node F
          [[4,4],[5,2]], //node G
          [[6,1]]]; //node H
          
          
//sourceNode = 2;
//console.log(dijkstra(graph, sourceNode))




//add so i can test functions
module.exports = {dijkstra};
