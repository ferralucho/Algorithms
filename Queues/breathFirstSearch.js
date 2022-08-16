const arrayFirst = [1, 2, 3, 4, 5];
const arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.every((value, index) => value === arraySecond[index])
); // true

function bfs(graph, start){
    let queue = [];
    queue.push(start);

    let visited = [];
    visited[start] = true;
    let distances = [];
    distances[start] = 0;

    while(queue.length > 0){
        console.log("Visited nodes: " + visited);
        console.log("Distances: " + distances);
        let node = queue.shift();
        console.log("Removing node " + node + " from the queue...");

        for (let i = 0; i < graph[node].length; i++) {
            if(graph[node][i] && !visited[i]) {
                visited[i] = true;
                distances[i] = distances[node] + 1;
                queue.push(i);
                console.log("Visiting node " + i + ", setting its distance to " + distances[i] + " and adding it to the queue");
            }
        }
    }
    return distances;
}

let oGraph = [[1,2],[2,3,4],[1,4],[4,5]]

console.log(bfs(oGraph,0))