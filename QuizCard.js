export default function QuizCard({seg, onChange, data, segIndex}) {
  function onInputChange(event, segIndex){
    onChange(event, segIndex)
  }
  return(
    <div className="quiz-card">
    <h3 className="question">{seg.question}</h3>
    <div className="options">
      {seg.options.map((option, index) => (
        <div key={index} className="option">
          <label>
          <input
            type="radio"
            name={"Q"+seg.id}
            value={index}
            checked={data[segIndex].selection === index}
            onChange={(event)=> onInputChange(event, segIndex)}
          />
          {option}
          </label>
        </div>
      ))}
    </div>
  </div>
  );
}