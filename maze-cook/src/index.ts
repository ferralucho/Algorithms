const pattern = 'CCC-DDD-EEE-DDD-CCC-DDD-EEE-DDD-CCC-DDD-EEE-DDD';
const shortPattern = 'CCC-DDD-EEE-DDD';

export interface GridCoordinates {
  horizontal: number;
  vertical: number;
}

export interface Grid {
  cells: string[][];
}

export class Maze {
  //0   1    2    3    4    5    6    7    8    9    10   11

  constructor(private grid: Grid) {}

  path = '';

  sweep(coordinates: GridCoordinates) {
    const { horizontal, vertical } = coordinates;

    if (
      this.grid.cells[horizontal][vertical] == 'B' &&
      horizontal !== this.initialCoordinates.horizontal &&
      vertical !== this.initialCoordinates.vertical
    ) {
      //found the end b and solved the maze
      this.endSolveMaze(horizontal, vertical);
    } else if (this.validNextPath(horizontal, vertical)) {
      this.addValidToPath(horizontal, vertical);

      //mark the visited cell with K
      this.grid.cells[horizontal][vertical] = 'K';

      this.sweepSides(horizontal, vertical);
    }
  }

  addValidToPath(horizontal, vertical: number): void {
    let auxPath = this.path.slice();
    let partialPattern = '';
    let stringToSearch = '';
    let auxLastIndex = auxPath.lastIndexOf(pattern);
    if (auxLastIndex >= 0) {
      partialPattern = auxPath.slice(auxLastIndex);
      stringToSearch = partialPattern + this.grid.cells[horizontal][vertical];
    } else {
      partialPattern = pattern;
    }

    if (
      (auxPath.length == partialPattern.length &&
        stringToSearch.indexOf(partialPattern) >= 0) ||
      (auxPath.length >= pattern.length &&
        auxPath.indexOf(
          pattern + this.grid.cells[horizontal][vertical],
          auxLastIndex,
        ) > 0) ||
      pattern.indexOf(auxPath + this.grid.cells[horizontal][vertical]) >= 0
    ) {
      this.path += this.grid.cells[horizontal][vertical];

      if (this.path.length === 3 || (this.path.length + 1) % 4 == 0) {
        this.path += '-';
      }
    }
  }

  endSolveMaze(horizontal, vertical: number): void {
    console.log('Maze solved at (' + horizontal + ', ' + vertical + ')');
    console.table(this.grid.cells);
    this.path = 'B-' + shortPattern + '-' + this.path;
    this.path += '-' + this.grid.cells[horizontal][vertical];
    console.log('path', this.path);
  }

  sweepSides(horizontal, vertical: number): void {
    if (horizontal < this.grid.cells.length - 1) {
      this.sweep({ horizontal: horizontal + 1, vertical });
    }
    if (vertical < this.grid.cells[horizontal].length - 1) {
      this.sweep({ horizontal, vertical: vertical + 1 });
    }
    if (horizontal > 0) {
      this.sweep({ horizontal: horizontal - 1, vertical });
    }
    if (vertical > 0) {
      this.sweep({ horizontal, vertical: vertical - 1 });
    }
  }

  //valid if it's not an invalid letter or visited
  validNextPath(h, v: number): boolean {
    if (this.grid.cells[h][v] === 'A' || this.grid.cells[h][v] === 'K') {
      return false;
    }
    return true;
  }

  //start coordinates for the initial B (Initial B will be marked as visited with a K)
  initialCoordinates: GridCoordinates = {
    horizontal: 0,
    vertical: 1,
  };

  initMazeChallenge(): void {
    console.log(
      'Maze started at (' +
        this.initialCoordinates.horizontal +
        ', ' +
        this.initialCoordinates.vertical +
        ')',
    );
    this.sweep(this.initialCoordinates);
  }
}

let grid: Grid = {
  cells: [
    ['A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'C', 'A', 'D', 'D', 'E', 'A', 'C', 'C', 'C', 'D', 'A'],
    ['A', 'C', 'C', 'D', 'A', 'E', 'A', 'D', 'A', 'D', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'E', 'D', 'D', 'A', 'D', 'E', 'A'],
    ['A', 'C', 'C', 'D', 'D', 'D', 'A', 'A', 'A', 'A', 'E', 'A'],
    ['A', 'C', 'A', 'A', 'E', 'A', 'A', 'D', 'D', 'D', 'E', 'A'],
    ['A', 'D', 'D', 'D', 'E', 'E', 'A', 'C', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'E', 'A', 'E', 'A', 'C', 'C', 'D', 'D', 'A'],
    ['A', 'D', 'E', 'E', 'A', 'D', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'C', 'D', 'D', 'A', 'A'],
    ['A', 'D', 'D', 'D', 'A', 'D', 'C', 'C', 'A', 'D', 'E', 'B'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
  ],
};

let maze = new Maze(grid);
maze.initMazeChallenge();
