import * as ts from 'typescript';

const program = ts.createProgram(File, opts);
const checker = program.getTypeChecker();
program.emit();
