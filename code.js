function dijkstra(graph, sourceNode) {
    
    let dist = [];
    let distance = [];
    let marked = [];
    for (let i = 0; i < graph.length; i++) { //set all nodes esitmated dist to 1000 (which will be our infinity)
        dist[i] = 1000;
        marked[i] = false;
    }
    
    dist[sourceNode] = 0; //set estimated dist to 0 for the sourceNode
    
    while (true) {
        let lowest = 1000; //set lowest to our infinity
        let lowestIndex = 0;
        for (let i = 0; i < dist.length; i++) { //find the node with the lowest estimated dist that is not marked
            for (let j = 0; j < unmarked.length; j++) {
                if (marked[j] == false) { //if not marked
                    if (dist[i] < lowest) { //finding the lowest estimated dist 
                        lowest = dist[i];
                        lowestIndex = i;
                    }   
                }
            }
        }
        marked[lowestIndex] = true; //mark lowestIndex node
        distance[lowestIndex] = lowest; //set distance for the lowest dist to dist
        
        //look at all the edges that leave from lowestIndex
        for (let i = 0; i < graph[lowestIndex].length; i++) {
            
        }
        
        
        
    }
    
    
    
    
    
    
    
    
    return [];
}


graph = [ [[1,5],[4,2]], [[3,1]], [[0,3]], [[2,6]], [[1,2],[3,4]] ];
