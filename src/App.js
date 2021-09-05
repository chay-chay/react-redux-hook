import './App.css';
import { useSelector } from 'react-redux';

function App() {
// returning state inside of out store
// const state = useSelector((state) => state)
const account = useSelector((state) => state.account)

console.log(account)

  return (
    <div className="App">
      <button>deposit</button>
      <button>withdraw</button>
    </div>
  );
}

export default App;
