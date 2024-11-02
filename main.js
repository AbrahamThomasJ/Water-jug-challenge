/**
 * Water Jug Problem Solver
 * 
 * This script implements a solution to the classic Water Jug problem using a Breadth-First Search (BFS) algorithm.
 * 
 * Algorithm Overview:
 * 1. Initialize a queue with the starting state [0, 0, []] (empty jugs and no steps taken).
 * 2. While the queue is not empty:
 *    a. Dequeue a state and check if it's the goal state.
 *    b. If not, generate all possible next states by filling, emptying, or transferring water between jugs.
 *    c. Add new, unvisited states to the queue.
 * 3. If the queue empties without finding a solution, conclude that no solution exists.
 * 
 * Key Components:
 * - queue: Stores states to be explored (each state is [jugX, jugY, steps])
 * - visited: A Set to keep track of explored states and avoid cycles
 * - BFS implementation: Ensures the shortest solution is found
 * 
 * Possible Actions:
 * - Fill a jug
 * - Empty a jug
 * - Transfer water between jugs
 * 
 */




document.getElementById('solveButton').addEventListener('click', solveWaterJug);

function solveWaterJug() {
    const jugX = parseInt(document.getElementById('jugX').value);
    const jugY = parseInt(document.getElementById('jugY').value);
    const target = parseInt(document.getElementById('target').value);
    
    if (target > Math.max(jugX, jugY)) {
        displayMessage("No Solution");
        return;
    }
    
    const result = [];
    const visited = new Set();
    const queue = [];
    
    queue.push([0, 0, []]); // [jugX, jugY, steps]
    
    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();
        
        if (x === target || y === target || x + y === target) {
            displaySolution(steps);
            return;
        }
        
        if (visited.has(`${x}-${y}`)) continue;
        visited.add(`${x}-${y}`);
        
        // Fill Jug X
        queue.push([jugX, y, [...steps, `Fill Jug X`]]);
        // Fill Jug Y
        queue.push([x, jugY, [...steps, `Fill Jug Y`]]);
        // Empty Jug X
        queue.push([0, y, [...steps, `Empty Jug X`]]);
        // Empty Jug Y
        queue.push([x, 0, [...steps, `Empty Jug Y`]]);
        // Transfer from X to Y
        const transferToY = Math.min(x, jugY - y);
        queue.push([x - transferToY, y + transferToY, [...steps, `Transfer from Jug X to Jug Y`]]);
        // Transfer from Y to X
        const transferToX = Math.min(y, jugX - x);
        queue.push([x + transferToX, y - transferToX, [...steps, `Transfer from Jug Y to Jug X`]]);
    }
    
    displayMessage("No Solution");
}

function displaySolution(steps) {
    const solutionDiv = document.getElementById('solution');
    solutionDiv.innerHTML = "<h2>Solution Steps:</h2><ul>" + steps.map(step => `<li>${step}</li>`).join('') + "</ul>";
}

function displayMessage(message) {
    const solutionDiv = document.getElementById('solution');
    solutionDiv.innerHTML = `<h2>${message}</h2>`;
}
