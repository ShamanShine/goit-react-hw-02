
// import './App.css'
import {useState} from "react";
import Description from './components/Description/Description'
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback'
export default function App() {
  const [clicks, setClicks] = useState ({ 
	good: 0,
	neutral: 0,
	bad: 0
  });
  
  const updateFeedback = feedbackType => {
    setClicks(prevClicks => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  return (
    <>
      <h1>GoIT-react-hw-02</h1>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} clicks={clicks} totalFeedback={totalFeedback}/>           
      <Feedback/>      
    </>
  );
}



