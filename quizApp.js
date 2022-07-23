const quiz = [
    {
        question: "1. What is the loudest animal on Earth?",
        answer: "sperm whale"
    }, 
    {
        question: "2. The unicorn is the national animal of which country?",
        answer: "scotland"
    }, 
    {
        question: "3. What tissues connect the muscles to the bones?",
        answer: "tendons"
    }, 
    {
        question: "4. What is a duel between three people called?",
        answer: "truel"
    }, 
    {
        question: "5. Iceland diverted roads to avoid disturbing communities of what?",
        answer: "elves"
    }, 
    {
        question: "6. Who invented the word 'vomit'?",
        answer: "shakespeare"
    }, 
    {
        question: "7. What can be broken but is never held?",
        answer: "promise"
    },
    {
        question: "8. What does come down but never goes up?",
        answer: "rain"
    },
    {
        question: "9. Which Central American country has a name which translates to English as 'The Saviour'?",
        answer: "el salvador"
    },
    {
        question: "10. What country has the most natural lakes?",
        answer: "canada"
    }]




let insertQuestion = document.getElementById('insert')

for (let i = 0; i < quiz.length; i++) {
    let insertHTML = `
    <div class="card mt-5" id="${i}">
        <div class="card-body">
            <h4 class="card-title">${quiz[i]["question"]}</h4>
            <input type="text" name="${quiz[i]['answer']}" class="form-control-lg" placeholder="Answer here!"
        aria-label="First name">
        </div>
    </div>      
    `

insertQuestion.innerHTML += insertHTML
}



let answerForm = document.getElementById("answer")
answerForm.addEventListener('submit', (event) => {
    
    event.preventDefault()
    let score = 0
    let formData = new FormData(answerForm)
    let answerArr = []
    let correctAnswers = []
for (let i=0; i<quiz.length; i++){    
    answerArr.push(formData.get(quiz[i]['answer']))
    if (answerArr[i] == quiz[i]['answer']) {
        score++
        correctAnswers.push(i)
        document.getElementById(`${i}`).style.background = "#BDE1C1" ;
    } else {
        document.getElementById(`${i}`).style.background = '#F0B5B2';   
    }
}

let insertScore = document.getElementById('insertScore')
        
    let insertScoreHTML = `
    You got a score of ${score} out of 10!
    `
    
    insertScore.innerHTML += insertScoreHTML
}
)