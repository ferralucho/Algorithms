#Cook Maze

Repo: https://github.com/ferralucho/Algorithms/tree/master/maze-cook

To run and build, please see scripts section in package.json

Propose grid, connect B points following pattern: CCC-DDD-EEE-DDD

[
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
['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
];

Replacing A for - for better visuals:

[
['-', 'B', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', 'C', '-', 'D', 'D', 'E', '-', 'C', 'C', 'C', 'D', '-'],
['-', 'C', 'C', 'D', '-', 'E', '-', 'D', '-', 'D', '-', '-'],
['-', '-', '-', '-', '-', 'E', 'D', 'D', '-', 'D', 'E', '-'],
['-', 'C', 'C', 'D', 'D', 'D', '-', '-', '-', '-', 'E', '-'],
['-', 'C', '-', '-', '-', '-', '-', 'D', 'D', 'D', 'E', '-'],
['-', 'D', 'D', 'D', 'E', 'E', '-', 'C', '-', '-', '-', '-'],
['-', '-', '-', 'E', '-', 'E', '-', 'C', 'C', 'D', 'D', '-'],
['-', 'D', 'E', 'E', '-', 'D', '-', '-', '-', '-', '-', '-'],
['-', '-', 'D', '-', '-', 'D', '-', 'C', 'D', 'D', '-', '-'],
['-', 'D', 'D', 'D', '-', 'D', 'C', 'C', '-', 'D', 'E', 'B'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
];

Solution for the proposed maze is:

B-CCC-DDD-EEE-DDD-CCC-DDD-EEE-DDD-CCC-DDD-E-B
