const pattern = "CCC-DDD-EEE-DDD-CCC-DDD-EEE-DDD-CCC-DDD-EEE-DDD";
const shortPattern = "CCC-DDD-EEE-DDD";

//0   1    2    3    4    5    6    7    8    9    10   11
const grid = 
[
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
['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
];

let path = '';

function sweep(grid, horizontal, vertical) {
  if (
    grid[horizontal][vertical] == 'B' &&
    horizontal !== bHorizontalStart &&
    vertical !== bVerticalStart
  ) {
    endSolveMaze(horizontal, vertical, grid);
  } else if (validNextPath(grid, horizontal, vertical)) {
    addValidToPath(grid, horizontal, vertical);

    //mark the visited cell with K
    grid[horizontal][vertical] = 'K';

    sweepSides(horizontal, grid, vertical);
  }
}

function addValidToPath(grid: any, horizontal: any, vertical: any) {
  let auxPath = path.slice();
  let partialPattern = '';
  let stringToSearch = '';
  let auxLastIndex = auxPath.lastIndexOf(pattern);
  if (auxLastIndex >= 0) {
    partialPattern = auxPath.slice(auxLastIndex);
    stringToSearch = partialPattern + grid[horizontal][vertical];
  } else {
    partialPattern = pattern;
  }

  if (
    (auxPath.length == partialPattern.length &&
      stringToSearch.indexOf(partialPattern) >= 0) ||
    (auxPath.length >= pattern.length &&
      auxPath.indexOf(pattern + grid[horizontal][vertical], auxLastIndex) >
        0) ||
    pattern.indexOf(auxPath + grid[horizontal][vertical]) >= 0
  ) {
    path += grid[horizontal][vertical];
    console.log('path', path);

    if (path.length === 3 || (path.length + 1) % 4 == 0) {
      path += '-';
    }
  }
}

function endSolveMaze(horizontal: any, vertical: any, grid: any) {
  console.log('Maze solved at (' + horizontal + ', ' + vertical + ')');
  console.table(grid);
  path = 'B-' + shortPattern + '-' + path;
  path += '-' + grid[horizontal][vertical];
  console.log('path', path);
}

function sweepSides(horizontal: any, grid: any, vertical: any) {
  if (horizontal < grid.length - 1) {
    sweep(grid, horizontal + 1, vertical);
  }
  if (vertical < grid[horizontal].length - 1) {
    sweep(grid, horizontal, vertical + 1);
  }
  if (horizontal > 0) {
    sweep(grid, horizontal - 1, vertical);
  }
  if (vertical > 0) {
    sweep(grid, horizontal, vertical - 1);
  }
}

//valid if it's not an invalid letter for the pattern or visited
function validNextPath(grid, h, v): boolean {
  if (grid[h][v] === 'A' || grid[h][v] === 'K') {
    return false;
  }
  return true;
}

//start coordinates for the initial B (Initial B will be marked as visited with a K)
const bHorizontalStart = 0;
const bVerticalStart = 1;

sweep(grid, bHorizontalStart, bVerticalStart);
