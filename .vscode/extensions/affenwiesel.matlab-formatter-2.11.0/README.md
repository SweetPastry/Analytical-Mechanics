# matlab-formatter README

Indent and format MATLAB code.
Also usable as standalone without VScode.

![IMAGE](https://github.com/affenwiesel/matlab-formatter-vscode/raw/HEAD/images/example.gif)

## Requirements
- python 3.6

## Extension Settings
* `matlab-formatter.indentwidth`: Number of spaces used for indentation.
* `matlab-formatter.separateBlocks`: Control whether newlines should be added before and after blocks such as for, if, while and so on.
* `matlab-formatter.indentMode`: Chose smart indentation mode: indent all functions, indent only nested functions, or don't indent inside any function.
* `matlab-formatter.addSpaces`: Chose which operators should be wrapped with spaces: all operators, all but power (`^`, `.^`) or don't wrap any operators.
* `matlab-formatter.matrixIndent`: Chose how matrices should be indented. Either keep all rows aligned or use only one level of indentation.

## Additional Options
* The formatter can be switched off for selected lines by adding the comment `formatter ignore N`. For the next `N` lines, only the indentation will be fixed. Other than that, they will not be altered.
