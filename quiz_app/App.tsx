import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';



function App() {


  const data = async () => {

    const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    const datajson = await res.json()
    console.log(datajson);


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {


  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={data}>
        start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions.....</p>

      <QuestionCard/>
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );




}



export default App;
