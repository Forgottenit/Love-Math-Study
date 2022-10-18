
fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
.then((res) =>  res.json()) 
.then((data)=> {
    console.log(data.results);
    
    for(i=0;i<data.results.length;i++){
        
        questions=data.results[i].question;
        console.log(questions);
        answers=data.results[i].correct_answer;
        console.log(answers);
        incorrect=data.results[i].incorrect_answers;
        console.log(incorrect);
        
        document.getElementById("testQue").innerHTML=questions;
        document.getElementById("choice1").innerHTML=answers;
        document.getElementById("choice2").innerHTML=incorrect[0];
        document.getElementById("choice3").innerHTML=incorrect[1];
        document.getElementById("choice4").innerHTML=incorrect[2];
    }
    
    });
    
    
