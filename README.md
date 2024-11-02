# Water Jug Challenge

This application solves the classic Water Jug Riddle

## Algorithmic Approach

The solution uses a Breadth-First Search (BFS) algorithm to find the shortest sequence of steps to reach the target amount. The algorithm explores all possible states (combinations of water in both jugs) until it finds a solution or exhausts all possibilities.

Key points of the algorithm:
1. It uses a queue to store states to be explored.
2. Each state consists of the current amount in each jug and the steps taken to reach that state.
3. It avoids revisiting states using a Set to store visited states.
4. The algorithm considers all possible actions: filling a jug, emptying a jug, and transferring water between jugs.

## Test Cases for Validation

1. Input: Jug X = 4, Jug Y = 3, Target = 2
   Expected Output: Solution found (e.g., "Fill Jug Y", "Transfer from Jug Y to Jug X", "Empty Jug X", "Transfer from Jug Y to Jug X")

2. Input: Jug X = 5, Jug Y = 3, Target = 4
   Expected Output: Solution found (e.g., "Fill Jug X", "Transfer from Jug X to Jug Y", "Empty Jug Y", "Transfer from Jug X to Jug Y", "Fill Jug X", "Transfer from Jug X to Jug Y")

3. Input: Jug X = 3, Jug Y = 5, Target = 4
   Expected Output: Solution found (e.g., "Fill Jug Y", "Transfer from Jug Y to Jug X", "Empty Jug X", "Transfer from Jug Y to Jug X", "Fill Jug Y", "Transfer from Jug Y to Jug X")

4. Input: Jug X = 2, Jug Y = 6, Target = 5
   Expected Output: "No Solution"

## Instructions to Run the Program

1. Clone the repository:

2. Navigate to the project directory:

cd water-jug-challenge

3. Open the `index.html` file in a web browser.
4. Enter the capacities of Jug X and Jug Y, and the target amount.
5. Click the "Solve" button to see the solution or "No Solution" message.

## Technologies Used

- HTML5
- CSS3
- JavaScript 