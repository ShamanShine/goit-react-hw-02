export default function Feedback({ clicks, totalFeedback }) {
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <>
      <h2>Feedback Statistics</h2>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </>
  );
}