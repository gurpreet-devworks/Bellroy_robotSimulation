# Robot Simulation

This is a simple JavaScript application that simulates controlling a robot on a 5x5 grid. The robot can move forward in the direction it is facing, and it can rotate to face different cardinal directions (North, East, South, West).

## Features

- **Movement**: The robot can move forward on the grid.
- **Rotation**: The robot can rotate left or right to change its facing direction.
- **Grid**: The robot is confined to a 5x5 grid, preventing it from moving outside the boundaries.

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Setup

1. Clone this repository or download the files.
2. Go to your project folder and run `npm install` in your preferred command line.
3. Run `npm start` to start the server 


### File Structure

- **index.html**: The main HTML file that loads the application.
- **main.js**: The JavaScript file containing the logic for the robot simulation.
- **styles.css**: The CSS file for styling the grid and controls.

### How to Use

- The robot starts at the bottom-left corner of the grid (position 0,4) facing North.
- Use the buttons to control the robot:
  - `Move Forward`: Moves the robot one step in the direction it is facing.
  - `Turn Left`: Rotates the robot 90 degrees counterclockwise.
  - `Turn Right`: Rotates the robot 90 degrees clockwise.

### Example

Here's an example of how the robot moves:

1. The robot starts at position (0, 4) facing North (`↑`).
2. Click `Move Forward`: The robot moves to position (0, 3).
3. Click `Turn Right`: The robot now faces East (`→`).
4. Click `Move Forward`: The robot moves to position (1, 3).

### Customization

- **Grid Size**: You can change the grid size by modifying the `gridSize` variable in the `Robot` class.
- **Initial Position**: The robot's starting position can be changed by updating the `position` object in the `Robot` constructor.

### Tools, Libraries, & Frameworks used
* Javascript
* CSS
* no framework or libraries. 
---

**Happy Coding!** ❤️ 
