import { useDispatch, useSelector,  } from "react-redux"
import { decrement, increment } from "./redux/actions";

function Counter() {
  let Counter = useSelector((state) => state.Counter.count);
  let dispatch = useDispatch();
  let incrementData = () => {
    dispatch(increment());
  }
  
  return (
    <>
      <button onClick={() => incrementData()}>Increment</button>{Counter}
      <button onClick={() => dispatch(decrement ())}>Decrement</button>
    </>
  )
}

export default Counter;
