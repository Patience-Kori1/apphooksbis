import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import Count from './components/Count';

function App() {

  const [countOne, setCountOne] = useState({value: 0, btnColor:'success', increment: 25});
  const [countTwo, setCountTwo] = useState({value: 0 , btnColor:'danger', increment: 20});

  const incrementOne = () => {
    countOne.value < 100 && setCountOne({
      ...countOne, 
      value : countOne.value + countOne.increment
    })
  }

  const incrementTwo =() => {
    countTwo.value < 100 && setCountTwo (prevState => {
      return {
        ...prevState,
        value: prevState.value + prevState.increment
      }
    })
  } 


  return (
    <div className="App" style = {{backgroundColor: ' rgb(248, 225, 186)', width: '800px', margin:'5px auto', padding:'10px', marginTop: '50px', borderRadius:'20px'}}>
      
      <Count count={countOne.value} bgColor = {countOne.btnColor}>  </Count>
      <Button btnColor ={countOne.btnColor} increment ={countOne.increment} onClick = {incrementOne}> Count 1 </Button>
      <Count count={countTwo.value} bgColor = {countTwo.btnColor}>  </Count>
      <Button btnColor ={countTwo.btnColor} increment ={countTwo.increment} onClick = {incrementTwo}> Count 2 </Button> 
      
    </div>
  );
}

export default App;
