import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.cash.cash)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }
  return (
    <div className="App">
        <div>{state}</div>
        <button onClick={() => addCash(+prompt())}>Add</button>
        <button onClick={() => getCash(+prompt())}>Get</button>
    </div>
  );
}

export default App;
