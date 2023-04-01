import "./styles.css";
import { useReducer } from "react";

// const initialState = ;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        noOfClick: state.noOfClick + 1
      };
    case "decrement":
      if (state.count - 1 < 0)
        return { ...state, noOfClick: state.noOfClick + 1 };
      // state.count = state.count -1;
      return {
        ...state,
        count: state.count - 1,
        noOfClick: state.noOfClick + 1
      };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, noOfClick: 0 });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <br />
      No of button clicks = {state.noOfClick};
    </>
  );
}
