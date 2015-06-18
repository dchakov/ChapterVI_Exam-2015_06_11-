function solve(params) {
    var s = params[0].split(' ').map(Number),
        result = 0,
        counter = 1;

    if (s.length > 3) {
        for (var i = 1; i < s.length - 1; i++) {
            while (s[i - 1] > s[i]) {
                counter++;
                i++;
            }
            while (s[i] < s[i + 1]) {
                counter++;
                i++;
            }

            if (counter > result) {
                result = counter;
            }
            counter = 1;
        }
    }
    else{
        result = 2;
    }
    console.log(result);
}


var arr01 = ['5 1 7 4 8'];
var arr02 = ['5 1 7 6 3 6 4 2 3 8'];
var arr03 = ['10 1 2 3 4 5 4 3 2 1 10'];


solve(arr01);
solve(arr02);
solve(arr03);


