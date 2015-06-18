function solve(params) {
    var result = [];

    // convert to string remove white space join.
    var string = params.join('').replace(/[\b\t\v\f\\\s\n\r]+/g, '');

    var arrStr = [];
    var stringResult = string
        .replace(/[{]+/g, '\n{\n')
        .replace(/[}+]/g, '}\n')
        .replace(/;+/g, ';\n')
        .replace(/:+/g, ': ');


    arrStr = stringResult.split('\n');
    var countBrackets = 0;
    var propObj = {};
    var element = [];
    var i;

    //console.log(arrStr.join('\n'));

    for (i = 1; i < arrStr.length; i++) {

        if (arrStr[i] === '{') {
            countBrackets += 1;
            if (arrStr[i - 1].indexOf('$') > -1) {
                element.push(arrStr[i - 1].replace('$', ''));
            }
             else if (element.length >= 1) {
                element.push(' ' + arrStr[i - 1]);
            }
             else {
                element.push(arrStr[i - 1]);
            }
            continue;
        }
        if (countBrackets) {
            while (arrStr[i].lastIndexOf(';') > -1) {
                if (propObj[element.join('')]) {
                    propObj[element.join('')] += '\n' + '  ' + arrStr[i];
                } else {
                    propObj[element.join('')] = arrStr[i];
                }
                i++;
            }
        }
        if (arrStr[i] === '}') {
            countBrackets -= 1;
            element.pop();
            continue;
        }
        if (!countBrackets) {
            for (var prop in propObj) {
                if (prop.indexOf('$') > -1) {
                    result.push(prop.replace('$', '') + ' {' + '\n' + '  ' + propObj[prop] + '\n' + '}');
                } else {
                    result.push(prop + ' {' + '\n' + '  ' + propObj[prop] + '\n' + '}');
                }
            }
            propObj = {};
        }
    }

    //console.log('-----------------');
    console.log(result.join('\n'));
}

var test31 = [
    '#the-big-b{',
    '  color:       big-yellow;',
    '  size: big;',
    '  .the-little-bs{',
    '    color: yellow;',
    '  }',
    '}',
    '.muppet{',
    '  skin: fluffy;',
    '  $.water-spirit{',
    '    powers:all;',
    ' }',
    '}'
];

var test32 = [
    '#the-big-b{',
    '  color: big-yellow;',
    '  .little-bs {',
    '           color: little-yellow;',
    '      $.male            {',
    '             color: middle-yellow;',
    '}',
    '}',
    '}',
    '           .muppet           {',
    '             skin        :        fluffy;',
    '  $.water-spirit    {',
    '    powers    :     water;',
    '                     }',
    '  $>thread{',
    '     color: depends;',
    '   }',
    '  powers    :      all-muppet-powers;',
    '}'
];
var test33 = [
    '.jedi {',
    'has: lightsaber;',
    '}'
]

var test34 = [
    '#the-big-b{',
    '  color: first0;',
    '  color: first1;',
    '  .little-bs {',
    '    color: second0;',
    '    $.male {',
    '      color: third0;',
    '      color: third1;',
    '      elem00{',
    '        color:005;',
    '      }',
    '      color: third2;',
    '    }',
    '    color: second1;',
    '  }',
    '  color: first2;',
    '  element0{',
    '    color:element0;',
    '    color:element1;',
    '  }',
    '  color: first3;',
    '}'
];

var test35 = [
    '#the-big-b{',
    '  color: first0;',
    '  .little-bs {',
    '    color: second0;',
    '    $.male {',
    '      color: third0;',
    '      color: third1;',
    '      $.elem00{',
    '        color:005;',
    '      }',
    '      color: third2;',
    '    }',
    '    color: second1;',
    '  }',
    '  color: first2;',
    '  $>element0{',
    '    color:element0;',
    '    color:element1;',
    '  }',
    '  color: first3;',
    '}'
];
//solve(test31);
//solve(test32);
//solve(test33);
//solve(test34);
solve(test35);
