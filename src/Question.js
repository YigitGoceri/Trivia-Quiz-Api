import React from "react"


export default function Question(props){
      
       
        const buttons= props.answer.map(item=>  {

                  
    const [changeColor,setChangeColor]=React.useState(false)      
            
            return <button className="answer" 
            style={props.check && props.correct==item?{backgroundColor:"green"}:
            (changeColor? {backgroundColor:"#c39955"}:{backgroundColor:"white"})}  
            
            
            onClick={()=>{props.toggle(item); setChangeColor(prev=>!prev)}} dangerouslySetInnerHTML={{__html: item }}/>
        })
        
      
    return (<div className="question--container">
        
        <h2 className="question" dangerouslySetInnerHTML={{__html: props.question}}/>
        
        <div className="question-answers">
            {buttons}
        
        
       
        </div>


    </div>
    )
    
    
}