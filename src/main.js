class Robot {
	/**
	 *  Initialize the robot with default settings
	 * Grid size: 5x5
	 * Starting position
	 * direaction symbols
	 * */

	constructor() {
		this.gridSize = 5; 
		this.position = { x: 0, y: 4 }; 
		this.direction = 0; 
		this.directions = ["↑", "→", "↓", "←"]; 
	}

	// Move the robot forward one step in the direction it is currently facing
	moveForward() {
		this.move(1);
	}

	// Rotate the robot to the left (counter-clockwise) and move forward
	moveLeft() {
		this.rotateLeft(); 
	}

	// Rotate the robot to the right (clockwise) and move forward
	moveRight() {
		this.rotateRight(); 
	}

	// Calculate the new position based on the current direction and step size
	move(step) {
		const moves = [
			{ x: 0, y: -1 }, // North
			{ x: 1, y: 0 }, // East
			{ x: 0, y: 1 }, // South
			{ x: -1, y: 0 }, // West
		];
		const move = moves[this.direction]; 
		const newPosition = {
			x: this.position.x + step * move.x, 
			y: this.position.y + step * move.y, 
		};

		// Check if the new position is within the grid boundaries
		if (this.isValidPosition(newPosition)) {
			this.position = newPosition; 
		} else {
			alert("The robot cannot move outside the grid boundaries.");
		}
	}

	// Rotate the robot to the left (counter-clockwise)
	rotateLeft() {
		this.direction = (this.direction + 3) % 4;
		//this.move(1); // Move forward after rotation- uncomment this code if you wish to rotate and move 1 step ahead
	}

	// Rotate the robot to the right (clockwise)
	rotateRight() {
		this.direction = (this.direction + 1) % 4; 
		//this.move(1); // Move forward after rotation - uncomment this code if you wish to rotate and move 1 step ahead
	}

	// Check if the position is within the grid boundaries
	isValidPosition(position) {
		return (
			position.x >= 0 && 
			position.x < this.gridSize && 
			position.y >= 0 && 
			position.y < this.gridSize 
		);
	}

	// Get the current state of the robot, including position and direction symbol
	getRobotState() {
		return {
			position: this.position, 
			directionSymbol: this.directions[this.direction], 
		};
	}
}

const robot = new Robot(); 
const gridContainer = document.querySelector("#app"); 

// Render the grid and robot on the screen
function renderGrid() {
	gridContainer.innerHTML = `
		<div class="grid">
			${Array.from({ length: 25 })
				.map((_, index) => {
					const x = index % 5;
					const y = Math.floor(index / 5);
					const isRobot =
						robot.position.x === x && robot.position.y === y;
					return `
						<div class="cell ${isRobot ? "current-position" : ""}">
							${
								isRobot
									? `<span class="robot">${
											robot.getRobotState()
												.directionSymbol
									  }</span>`
									: ""
							}
						</div>
					`;
				})
				.join("")}
		</div>
		<div class="controls">
			<button class="control-button" onclick="moveForward()">Move Forward</button>
			<div>
				<button class="control-button" onclick="moveLeft()">Turn Left</button>
				<button class="control-button" onclick="moveRight()">Turn Right</button>
			</div>
		</div>
	`;
}

// Functions to handle button clicks and move the robot accordingly
function moveForward() {
	robot.moveForward();
	renderGrid(); // Re-render the grid after moving forward
}

function moveLeft() {
	robot.moveLeft();
	renderGrid(); // Re-render the grid after turning left
}

function moveRight() {
	robot.moveRight();
	renderGrid(); // Re-render the grid after turning right
}

// Add an event listener to handle arrow key presses
document.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "ArrowUp":
			moveForward();
			break;
		case "ArrowLeft":
			moveLeft();
			break;
		case "ArrowRight":
			moveRight();
			break;
	}
});

// Initial render to display the grid and robot
renderGrid();
