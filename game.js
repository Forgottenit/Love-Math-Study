const input =document.querySelector(".question1");
let qUrl = "https://opentdb.com/api.php?amount=10&category=9&type=multiple"

function getQuestions(){
fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
.then((response) =>  response.json()) 
.then((data)=> (input.innerHTML=data.results[0].question))

}

getQuestions();
// console.log(input);
// .then((returnedData) => {
//     //It's an object so I need to convert it to array.
//     const innerArr = Object.values(returnedData.data);
//     //try to get data to the outside variable
//     outerArr.push(...innerArr);
//     console.log("Log inside fetch");
//     console.log(Array.isArray(outerArr));
//     console.log(outerArr[0]);
//   });
    
    
//     for(i=0;i<data.results.length;i++){
        
//         questions=data.results[i].question;
//         console.log(questions);
//         answers=data.results[i].correct_answer;
//         console.log(answers);
//         incorrect=data.results[i].incorrect_answers;
//         console.log(incorrect);
        
//         document.getElementById("testQue").innerHTML=questions;
//         document.getElementById("choice1").innerHTML=answers;
//         document.getElementById("choice2").innerHTML=incorrect[0];
//         document.getElementById("choice3").innerHTML=incorrect[1];
//         document.getElementById("choice4").innerHTML=incorrect[2];
//         return data;
        
//     }
    


// console.log(questions);
// console.log(input);
// const getData = () => fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple').then(response => response.json()).then(({results}) => results);
//     console.log(getData.results[1].question);
//     function nextQuestion(){
//         data();
//         console.log(data.results[1]);
//         // questions=first.results[5].question;
//         document.getElementById("choice1").innerHTML=answers;
//         document.getElementById("choice2").innerHTML=incorrect[0];
//         document.getElementById("choice3").innerHTML=incorrect[1];
//         document.getElementById("choice4").innerHTML=incorrect[2];

//     }
