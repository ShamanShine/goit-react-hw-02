
export default function Options({ updateFeedback, resetFeedback, clicks, totalFeedback }) {
  return (
    <>
      <button onClick={() => updateFeedback('good')}>Good {clicks.good}</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral {clicks.neutral}</button>
      <button onClick={() => updateFeedback('bad')}>Bad {clicks.bad}</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
}
   
