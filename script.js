const questions = [
    {
        "ques": "Who is the Prime Minister of India?",
        "a":"Modi Ji",
        "b":"Rahul Gandhi",
        "c":"Yogi Adityanath",
        "d":"Nitish Kumar",
        "ans":"a"
    },
    {
        "ques": "Who is the first prime minister of India?",
        "a":"Modi Ji",
        "b":"Jawaharlal Nehru",
        "c":"Yogi Adityanath",
        "d":"Dr. Manmohan Singh",
        "ans":"b"
    },
    {
        "ques": "Who is the first President of India?",
        "a":"Modi Ji",
        "b":"Rahul Gandhi",
        "c":"Zakir Husain",
        "d":"Dr. Rajendra Prasad",
        "ans":"d"
    }

]

let index =0;
let que = document.getElementById('ques');
let options = document.getElementsByClassName('options');
let btnSubmit = document.getElementById('btn');
let inputCheck = document.getElementsByName('option');
let right=0;
let wrong=0;
let box = document.getElementById('box');
const reset = () =>{
    inputCheck.forEach((input)=> {
        input.checked=false;
    })
}


const loadQuestion = () => {

   if(index == questions.length){
        return endQuiz();
   }
    reset();
    que.innerText=`${index+1}. ${questions[index].ques}`;
     options[0].innerText=questions[index].a;
     options[1].innerText=questions[index].b;
     options[2].innerText=questions[index].c;
     options[3].innerText=questions[index].d;

}

const endQuiz = () => {
    box.innerHTML = `
    <h1>Thanks for playing this quiz </h1>
    <h2>Your score is ${right}/${questions.length}</h2>
    <h3>Your wrong answer is ${wrong}</h3>

    `
}

const getAnswer = () => {
    let ans;
    inputCheck.forEach((input) => {
        
        if(input.checked){
            ans=input.value;
           
        }
    })
    return ans;
}

btnSubmit.addEventListener("click", () => {

    const answer = getAnswer();

    console.log(answer);

    if(answer==questions[index].ans){
        right++;
    }else{
        wrong++;
    }

    index++;
    loadQuestion();
   


});

loadQuestion();

