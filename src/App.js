import React from "react"
import Question from "./Question"
import "./App.css"

const url_api= "https://opentdb.com/api.php?amount=5&type=multiple"


export default function App(){
    const[startGame,SetStartGame]=React.useState(true)
    const [check,SetCheck]=React.useState(false)
    const[score,SetScore]=React.useState(0)
    const [playagain,SetplayAgain]=React.useState(0)
    const [currentIndex,setCurrentIndex]=React.useState(0)
    const [questions,setQuestions]=React.useState([])
    
  
    
    React.useEffect(()=>{
        
        
        fetch(url_api)
        .then(res=>res.json())
        .then(data=> {
            const questions= data.results.map((question)=> ({
                ...question,
                answers:[question.correct_answer,...question.incorrect_answers].sort(()=>Math.random() - 0.5)
            }))
            setQuestions(questions)
            
          
            
            return ()=>{}
        })
        
      
        
                
    },[playagain])
   
            
           
                 
       function herseyi_resetle(){
           SetplayAgain(prev=>prev+1)
           SetCheck(false)
           setCurrentIndex(0)
           SetScore(0)
           
           console.log("reset")
       }
       
    
    
    
    function toggle(item){
        if(questions[currentIndex].correct_answer==item){
            console.log("Correct")
           setCurrentIndex(prev=>prev+1)
           SetScore(score=>score+1)
           
           
           
           
        }
        
        else{
            
             setCurrentIndex(prev=>prev+1)
        }
     
        
    }
    
    
    
    if(check==true){
        console.log("you score" +score)
    }
    
    

    const questionsElements= questions.map(item=> 
     <Question key={item.question} question={item.question} answer={item.answers} toggle={toggle} Select={item.isSelect} correct={item.correct_answer}  check={check}/>)  
  
  
   
    
    return (startGame? <main className="start-container"><h3 onClick={()=>SetStartGame(prev=>!prev)}className="start-button">Start Game</h3></main> 
    :(questions.length>0 ? 
 
    (<main >
        { questionsElements}
    <div className="button-container">
    {!check && <button className="check-button" onClick={()=>SetCheck(true)}>Check Results</button>}
    {check&& <button className="ok-button"  onClick={herseyi_resetle}>Play Again</button> } {check&&<h2 className="score">Your Score:{score}/{questions.length}</h2>} </div>
    </main>): <div>Loading...</div>))
}