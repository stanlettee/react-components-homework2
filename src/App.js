import './App.css';
import { Greeting } from './components/Greeting'
import { Message } from './components/Message'
import { Button } from './components/Button'

const name = 'Ivan'
const text = 'Intelligence is the ability to adapt to change'

const clickButton = () => {
  console.log('Well done, you pressed the button')
}

function App() {
  return (
    <div className="App">
      <Greeting name={name}/>
      <Message text={text}/>
      <Button onClick={() => clickButton()}/>
    </div>
  );
}

export default App;
