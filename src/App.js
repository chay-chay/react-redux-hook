import './App.css';
import { useSelector } from 'react-redux';

function App() {
// returning state inside of out store
// const state = useSelector((state) => state)
const account = useSelector((state) => state.account)

console.log(account)

  return (
    <div className="App">
    <h1>{account}</h1>
      <button style={{margin: 10}}>Deposit</button>
      <button style={{margin: 10}}>Dithdraw</button>
    </div>
  );
}

export default App;
