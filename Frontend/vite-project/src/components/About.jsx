import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/exampleSlice";

export default function About() {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">About Us</h2>
      <p>This page contains information about us.</p>
      <div className="mt-4">
        <h3 className="text-xl">Counter: {value}</h3>
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 mr-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
