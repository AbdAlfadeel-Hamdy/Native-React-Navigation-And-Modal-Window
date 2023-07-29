import { produce } from "immer";
import { useReducer } from "react";

const CHANGE_COUNT = "submit";
const SET_VALUE_TO_ADD = "change";

interface CounterPageProps {
  initialCounter: number;
}

interface State {
  count: number;
  valueToAdd: number;
}
interface Action {
  type: string;
  payload?: number;
}

// ** WITHOUT IMMER **
/*
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state, count: state.count + (action.payload || 0) };
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload || 0 };
    default:
      return state;
  }
};
*/

// ** WITH IMMER **
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case CHANGE_COUNT:
      state.count += action.payload || 0;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload || 0;
      return;
    default:
      return;
  }
};

const CounterPage: React.FC<CounterPageProps> = ({ initialCounter }) => {
  // const [count, setCount] = useState(initialCounter);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCounter,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount((prevState) => prevState + 1);
    // dispatch({ type: "INCREMENT" });
    dispatch({ type: CHANGE_COUNT, payload: 1 });
  };
  const decrement = () => {
    // setCount((prevState) => prevState - 1);
    // dispatch({ type: "DECREMENT" });
    dispatch({ type: CHANGE_COUNT, payload: -1 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setValueToAdd(+e.target.value);
    dispatch({ type: SET_VALUE_TO_ADD, payload: +e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setCount((prevCount) => prevCount + valueToAdd);
    // setValueToAdd(0);
    // dispatch({ type: "ADD" });
    dispatch({ type: CHANGE_COUNT, payload: state.valueToAdd });
    dispatch({ type: SET_VALUE_TO_ADD, payload: 0 });
  };

  return (
    <div>
      <h1>Count is: {state.count} </h1>
      <div className="flex gap-2 mb-4">
        <button onClick={increment} className="bg-red-300 p-2 rounded-sm">
          Increment
        </button>
        <button onClick={decrement} className="bg-red-300 p-2 rounded-sm">
          Decrement
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <h3 className="text-green-600">Add a lot</h3>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="mb-4 border border-red-600 p-1"
        />
        <button className="block bg-slate-500 rounded-md p-1">Add It!</button>
      </form>
    </div>
  );
};

export default CounterPage;
