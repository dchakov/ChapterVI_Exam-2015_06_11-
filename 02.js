function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        tests = parseInt(params[rows + 2]),
        knightMoves = [
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1]
        ],
        i, move;

    var curentRow = 0;
    var curenrCol = 0;
    var nextPositionRow = 0;
    var nextPositionCol = 0;
    var currentPosition = 0;
    var nextPosition = 0;
    var chessFigures = params.slice(2, rows + 2);
    var matrix = [];
    var counter;
    for (var i = 0; i < rows; i += 1) {
        matrix[i] = [];
        counter = chessFigures[i].split('');
        for (var j = 0; j < cols; j += 1) {

            matrix[i][j] = counter[j];
        }
    }

    //console.log(matrix);

    for (i = 0; i < tests; i++) {
        move = params[rows + 3 + i];
        currentPosition = move.split(' ')[0];
        curentRow = rows - parseInt(currentPosition[1]);
        curenrCol = currentPosition.charCodeAt(0) - 97;
        nextPosition = move.split(' ')[1];
        nextPositionRow = rows - parseInt(nextPosition[1]);
        nextPositionCol = nextPosition.charCodeAt(0) - 97;

        if (matrix[curentRow][curenrCol] == '-') {
            console.log('no');
            continue;
        }
        if (matrix[curentRow][curenrCol] == 'K') {
            var arrMoveK = [nextPositionRow - curentRow, nextPositionCol - curenrCol];
            var check = false;
            for (var l = 0; l < knightMoves.length; l++) {
                if (knightMoves[l][0] == arrMoveK[0] && knightMoves[l][1] == arrMoveK[1]) {
                    check = true;
                }
            }
            if (!check) {
                console.log('no');
                continue;
            };
        }
        if (matrix[nextPositionRow][nextPositionCol] != '-') {
            console.log('no');
            continue;
        }
        if (matrix[curentRow][curenrCol] === 'Q') {
            check = false;
            var y;

            if (curentRow == nextPositionRow || curenrCol == nextPositionCol) {

                if (curentRow > nextPositionRow && curenrCol == nextPositionCol) {
                    for (y = curentRow - 1; y >= nextPositionRow; y--) {
                        if (matrix[y][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow < nextPositionRow && curenrCol == nextPositionCol) {
                    for (y = curentRow + 1; y <= nextPositionRow; y++) {
                        if (matrix[y][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow == nextPositionRow && curenrCol > nextPositionCol) {
                    for (y = curenrCol - 1; y >= nextPositionCol; y--) {
                        if (matrix[curentRow][y] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow == nextPositionRow && curenrCol < nextPositionCol) {
                    for (y = curenrCol + 1; y <= nextPositionCol; y++) {
                        if (matrix[curentRow][y] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
            } else if ((curentRow + curenrCol) === (nextPositionRow + nextPositionCol) || (curentRow - nextPositionRow) === (curenrCol - nextPositionCol)) {

                if (curentRow > nextPositionRow && curenrCol < nextPositionCol) {
                    for (y = curentRow - 1; y >= nextPositionRow; y--) {
                        curenrCol += 1;
                        curentRow -= 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow > nextPositionRow && curenrCol > nextPositionCol) {
                    for (y = curentRow - 1; y >= nextPositionRow; y--) {
                        curenrCol -= 1;
                        curentRow -= 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow < nextPositionRow && curenrCol > nextPositionCol) {
                    for (y = curentRow + 1; y <= nextPositionRow; y++) {
                        curenrCol -= 1;
                        curentRow += 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow < nextPositionRow && curenrCol < nextPositionCol) {
                    for (y = curentRow + 1; y <= nextPositionRow; y++) {
                        curenrCol += 1;
                        curentRow += 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
            } else {
                console.log('no');
                continue;
            }
        }
        console.log('yes'); // or console.log('no');
    }
}


var arr01 = [
    '3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 c1',
    'd2 b1',
    'b1 b2',
    'c3 a3',
    'a2 a3',
    'd1 d3'
];

var arr02 = [
    '5',
    '5',
    'Q---Q',
    '-----',
    '-K---',
    '--K--',
    'Q---Q',
    '10',
    'a1 a1',
    'a1 d4',
    'e1 b4',
    'a5 d2',
    'e5 b2',
    'b3 d4',
    'b3 c1',
    'b3 d1',
    'c2 a3',
    'c2 b4'
]

solve(arr01);
console.log('----------');
solve(arr02);
