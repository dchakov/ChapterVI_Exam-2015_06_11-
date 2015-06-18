var pattern = /[\s,.!\-_";']/g;
var text = 'This   Is-spa spa   spa,   mnogo spa.';
var words = text.split(pattern);

console.log(words);

var result = words.filter(function(word) {
    return !!word;
});

console.log(result);
console.log(result.length);

input = ['2', '3', '4'];
console.log(input);
input = input.map(Number); // convert to numbers
console.log(input);

var directions = ['3 5', '54561', '43328', '52388', ]
    .slice(1).map(function(line) {
        return line.split('').map(Number);
    });
console.log(directions);

[12,123,2,3].sort(function(a, b) {
    return a - b
});
