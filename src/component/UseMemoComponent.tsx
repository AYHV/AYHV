import { useState, useMemo } from 'react';
const ExpensiveCalculation = ({ num }: { num: number }) => {
const factorial = (n: number): number => {
if (n <= 1) return 1;
return n * factorial(n - 1);
};
const computedFactorial = useMemo(() => factorial(num), [num]);
return <p>Factorial of {num} is: {computedFactorial}</p>;
};
export default ExpensiveCalculation;