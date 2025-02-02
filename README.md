# JavaScript Block Scoping Issue

This repository demonstrates a common source of confusion in JavaScript related to block scoping using the `let` keyword.  The example shows how declaring a variable within an `if` block creates a new, separate variable that shadows the outer variable with the same name.

## Bug Description

The provided `bug.js` file contains a function that illustrates this issue.  The variable `x` is declared twice; once outside the `if` block and once inside.  The code then shows that the `console.log` statement inside the `if` block refers to the inner `x`, while the `console.log` statement outside it refers to the outer `x`. This can lead to unexpected behavior and difficult-to-debug errors.

## Solution

The `bugSolution.js` file offers a solution by carefully examining variable scopes and potential naming conflicts.  Ensure variables names are unique to avoid accidental shadowing or unintended variable overwrites.