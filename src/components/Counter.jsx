import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const Counter = () => {
  const counters = useSelector((state) => state.counter); // Get all counters from Redux
  const dispatch = useDispatch();

  // Select the first counter by default
  const selectedCounter = counters[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Display the current count */}
      <h1 className="text-4xl font-bold mb-4">
        Counter {selectedCounter?.id}: {selectedCounter?.value}
      </h1>
      
      <div className="flex space-x-4">
        {/* Decrement Button */}
        <button
          onClick={() => dispatch(decrement(selectedCounter.id))}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
        
        {/* Reset Button */}
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset All
        </button>

        {/* Increment Button */}
        <button
          onClick={() => dispatch(increment(selectedCounter.id))}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;