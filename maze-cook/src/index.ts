const pattern = 'CCC-DDD-EEE-DDD-CCC-DDD-EEE-DDD-CCC-DDD-EEE-DDD';
const shortPattern = 'CCC-DDD-EEE-DDD';

export interface GridCoordinates {
  horizontal: number;
  vertical: number;
}

export interface Grid {
  cells: string[][];
}

//0   1    2    3    4    5    6    7    8    9    10   11
let grid: Grid = {
  cells: [
    ['A', 'T', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
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

let path = '';

export function sweep(coordinates: GridCoordinates) {
  const { horizontal, vertical } = coordinates;

  if (
    grid.cells[horizontal][vertical] == 'B' &&
    horizontal !== initialCoordinates.horizontal &&
    vertical !== initialCoordinates.vertical
  ) {
    //found the end b and solved the maze
    endSolveMaze(horizontal, vertical);
  } else if (validNextPath(horizontal, vertical)) {
    addValidToPath(horizontal, vertical);

    //mark the visited cell with K
    grid.cells[horizontal][vertical] = 'K';

    sweepSides(horizontal, vertical);
  }
}

export function addValidToPath(horizontal, vertical: number): void {
  let auxPath = path.slice();
  let partialPattern = '';
  let stringToSearch = '';
  let auxLastIndex = auxPath.lastIndexOf(pattern);
  if (auxLastIndex >= 0) {
    partialPattern = auxPath.slice(auxLastIndex);
    stringToSearch = partialPattern + grid.cells[horizontal][vertical];
  } else {
    partialPattern = pattern;
  }

  if (
    (auxPath.length == partialPattern.length &&
      stringToSearch.indexOf(partialPattern) >= 0) ||
    (auxPath.length >= pattern.length &&
      auxPath.indexOf(pattern + grid.cells[horizontal][vertical], auxLastIndex) >
        0) ||
    pattern.indexOf(auxPath + grid.cells[horizontal][vertical]) >= 0
  ) {
    path += grid.cells[horizontal][vertical];

    if (path.length === 3 || (path.length + 1) % 4 == 0) {
      path += '-';
    }
  }
}

function endSolveMaze(horizontal, vertical: number): void {
  console.log('Maze solved at (' + horizontal + ', ' + vertical + ')');
  console.table(grid.cells);
  path = 'B-' + shortPattern + '-' + path;
  path += '-' + grid.cells[horizontal][vertical];
  console.log('path', path);
}

function sweepSides(horizontal, vertical: number): void {
  if (horizontal < grid.cells.length - 1) {
    sweep({ horizontal: horizontal + 1, vertical });
  }
  if (vertical < grid.cells[horizontal].length - 1) {
    sweep({ horizontal, vertical: vertical + 1 });
  }
  if (horizontal > 0) {
    sweep({ horizontal: horizontal - 1, vertical });
  }
  if (vertical > 0) {
    sweep({ horizontal, vertical: vertical - 1 });
  }
}

//valid if it's not an invalid letter or visited
function validNextPath(h, v: number): boolean {
  if (grid.cells[h][v] === 'A' || grid.cells[h][v] === 'K') {
    return false;
  }
  return true;
}

//start coordinates for the initial B (Initial B will be marked as visited with a K)
const initialCoordinates: GridCoordinates = {
  horizontal: 0,
  vertical: 1,
};

export function initMazeChallenge(): void {
  console.log(
    'Maze started at (' +
      initialCoordinates.horizontal +
      ', ' +
      initialCoordinates.vertical +
      ')',
  );
  sweep(initialCoordinates);
}

initMazeChallenge();