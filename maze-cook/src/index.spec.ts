import { Grid, GridCoordinates, Maze } from './index';

let littleGrid: Grid = {
  cells: [
    ['A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'C', 'A', 'D', 'D', 'E', 'A', 'C', 'C', 'C', 'D', 'A'],
    ['A', 'C', 'A', 'D', 'D', 'E', 'A', 'C', 'C', 'C', 'D', 'A'],
  ],
};

const initialCoordinates: GridCoordinates = {
  horizontal: 0,
  vertical: 1,
};

let emptyGrid: Grid = {
  cells: [[]],
};

describe('Init maze challenge', () => {
  test('Empty grid has empty path', () => {
    const maze = new Maze(emptyGrid, initialCoordinates);
    maze.initMazeChallenge();

    expect(maze.path).toContain('');
  });
});

describe('Init maze challenge', () => {
  test('Path is set correctly', () => {
    const maze = new Maze(littleGrid, initialCoordinates);
    maze.initMazeChallenge();

    expect(maze.path).toContain('CC');
  });
});

describe('Valid next path', () => {
  test('A value next path should be false', () => {
    const maze = new Maze(littleGrid, initialCoordinates);
    const actual = maze.validNextPath(0, 2);
    expect(actual).toEqual(false);
  });

  test('K value next path should be true', () => {
    const maze = new Maze(littleGrid, initialCoordinates);
    const actual = maze.validNextPath(1, 1);
    expect(actual).toEqual(false);
  });

  test('D value next path should be true', () => {
    const maze = new Maze(littleGrid, initialCoordinates);
    const actual = maze.validNextPath(1, 3);
    expect(actual).toEqual(true);
  });

  test('E value next path should be true', () => {
    const maze = new Maze(littleGrid, initialCoordinates);
    const actual = maze.validNextPath(1, 5);
    expect(actual).toEqual(true);
  });
});

describe('Add valid to path', () => {
  test('A value added path should be empty', () => {
    const maze = new Maze(littleGrid, initialCoordinates);
    maze.addValidToPath(0, 2);

    expect(maze.path).toEqual('');
  });
});
