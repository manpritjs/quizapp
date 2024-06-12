import QuizCard from './QuizCard';
import quizData from './QuizApp.json';
import  {useState} from 'react';

function Result({data}){
  return data.map(x => <p key={x.id}>{x.question}
                              --{x.correctAnswerIndex}
                              --{x.selection}</p>)
}

export default function Quiz() {
  const [data, setData] = useState(quizData.quiz.map(x => {
    return {...x, selection: null}
  }));
  const [status, setStatus] = useState(false)

  function handleInputChange(event, segIndex){
    const dataCopy = [...data];
    dataCopy[segIndex].selection = +event.target.value
    setData(dataCopy)
  }

  console.log(data)
  return (
    <div className="quiz-container">
      {data.map((seg, index) => (
        <QuizCard
          key={seg.id}
          seg={seg}
          segIndex={index}
          onChange = {handleInputChange}
          data = {data}
        />
      ))}
      <button type="button" onClick={()=> setStatus(true)}>Click me</button>
      {status && <Result data={data}/>}
    </div> 
  );
}