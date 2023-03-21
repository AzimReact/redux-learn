import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

    const addCustomer = (name) => {
        const newCustomer = {
            name: name,
            id: Date.now()
        }
        dispatch(addCustomerAction(newCustomer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

return (
    <div className="App">
        <div>{cash}</div>
        <button onClick={() => addCash(+prompt())}>Add</button>
        <button onClick={() => getCash(+prompt())}>Get</button>

        {customers.length > 0 ?
            <div>
                {customers.map((customer, i) =>
                    <div onClick={() => removeCustomer(customer)} key={i} style={{fontSize: '2rem', padding: 10, marginTop: 5, cursor: 'pointer'}}>
                        {customer.name}
                    </div>)}
            </div>
        : <div style={{fontSize: '2rem', marginTop: 20}}>No clients!</div>}
        <button onClick={() => addCustomer(prompt())}>ADD CLIENT</button>
    </div>
  );
}

export default App;
