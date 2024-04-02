[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

### Answer
I have a while loop to iterate until all nodes are marked, this takes V times. I have a for loop to mark all nodes as not marked, this takes V time. Then I have a for loop with another inside it. The outside loop at worst would iterate through all nodes finding the node with the lowest estimated dist, so V. THe inside loop at worst would iterate over all nodes until it finds a node not already marked, so V as well. The last for loop at worst (when all nodes are connected) would iterate over all connected edges to update the estimated dist, so E. That leaves us with $V + (V * V * V) + E$ and E at it's worse could be $V^2$. So we get big $\Theta(V^3)$

