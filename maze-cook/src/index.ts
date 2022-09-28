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

function sweep(horizontal, vertical: number) {
  if (
    grid[horizontal][vertical] == 'B' &&
    horizontal !== bHorizontalStart &&
    vertical !== bVerticalStart
  ) {
    endSolveMaze(horizontal, vertical);
  } else if (validNextPath(horizontal, vertical)) {
    addValidToPath(horizontal, vertical);

    //mark the visited cell with K
    grid[horizontal][vertical] = 'K';

    sweepSides(horizontal, vertical);
  }
}

function addValidToPath(horizontal, vertical: number) {
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

    if (path.length === 3 || (path.length + 1) % 4 == 0) {
      path += '-';
    }
  }
}

function endSolveMaze(horizontal, vertical: number) {
  console.log('Maze solved at (' + horizontal + ', ' + vertical + ')');
  console.table(grid);
  path = 'B-' + shortPattern + '-' + path;
  path += '-' + grid[horizontal][vertical];
  console.log('path', path);
}

function sweepSides(horizontal, vertical: number) {
  if (horizontal < grid.length - 1) {
    sweep(horizontal + 1, vertical);
  }
  if (vertical < grid[horizontal].length - 1) {
    sweep(horizontal, vertical + 1);
  }
  if (horizontal > 0) {
    sweep(horizontal - 1, vertical);
  }
  if (vertical > 0) {
    sweep(horizontal, vertical - 1);
  }
}

//valid if it's not an invalid letter or visited
function validNextPath(h, v: number): boolean {
  if (grid[h][v] === 'A' || grid[h][v] === 'K') {
    return false;
  }
  return true;
}

//start coordinates for the initial B (Initial B will be marked as visited with a K)
const bHorizontalStart: number = 0;
const bVerticalStart: number = 1;

console.log(
  'Maze started at (' + bHorizontalStart + ', ' + bVerticalStart + ')',
);
sweep(bHorizontalStart, bVerticalStart);
