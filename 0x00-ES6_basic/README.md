ECMAScript 2015 was the second major revision to JavaScript.

#Task 0


#Task 1:
To avoid overwriting the variables inside the conditional block, you can replace the var keyword with let or const, which are block-scoped and do not have the same hoisting behavior as var. Here's how you could modify the taskBlock function: Check the code for task 1.
In this modified version, task and task2 are declared using let, which means they are block-scoped and only accessible within their respective blocks. This ensures that the values of the variables are not overwritten within the conditional block, and that the modified values are returned correctly by the function.
