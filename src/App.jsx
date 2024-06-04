import { useState, useEffect } from "react";
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('clicks');
    return savedClicks ? JSON.parse(savedClicks) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('clicks', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = feedbackType => {
    setClicks(prevClicks => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} clicks={clicks} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback clicks={clicks} totalFeedback={totalFeedback} /> : <p>No feedback yet.</p>}
    </>
  );
}
