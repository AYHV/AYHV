"use client"
// components/Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
const Counter = () => {
const count = useSelector((state: any) => state.counter.value);
const dispatch = useDispatch();
return (
    <div>
        <h1>Count: {count}</h1>
        <button className='bg-blue-700 p-2 rounded-md text-white' onClick={() => dispatch(increment())}>
            Increment
        </button>
        <button className='bg-g-700 p-2 rounded-md text-white' onClick={() => dispatch(decrement())}>
            Decrement
        </button>
    </div>
);

};
export default Counter;