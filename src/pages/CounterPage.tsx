import useCounter from "../hooks/use-counter";

interface CounterPageProps {
  initialCounter: number;
}

const CounterPage: React.FC<CounterPageProps> = ({ initialCounter }) => {
  const { count, increment } = useCounter(initialCounter);

  return (
    <div>
      <h1>Count is {count} </h1>
      <button onClick={increment} className="bg-red-300 p-2 rounded-sm">
        Increment
      </button>
    </div>
  );
};

export default CounterPage;
