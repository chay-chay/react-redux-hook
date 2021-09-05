import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index'

function App() {
// returning state inside of out store
// const state = useSelector((state) => state)
const account = useSelector((state) => state.account)
const dispatch = useDispatch();
// console.log(account)

// const AC = bindActionCreators(actionCreators, dispatch)
// destructuring 
const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
// console.log(AC)


  return (
    <div className="App">
    <h1>{account}</h1>
      <button style={{margin: 10}} onClick={() => depositMoney(1000)}>Deposit</button>
      <button style={{margin: 10}} onClick={() => withdrawMoney(1000)}>Dithdraw</button>
    </div>
  );
}

export default App;
