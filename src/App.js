import React from 'react';
import Intro from './components/intro/Intro';
import Quiz from './components/quiz/Quiz';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  const [triviaStatus, setTriviaStatus] = React.useState(false)
  return (
    <div>
      <Navbar setTriviaStatus={setTriviaStatus} status={triviaStatus}/>
      <div className="appWrapper">
        {!triviaStatus ?
          <Intro setTriviaStatus={setTriviaStatus} />
          :
          <Quiz setTriviaStatus={setTriviaStatus} />
        }
      </div>
      <Footer/>

    </div>
  );
}

export default App;
