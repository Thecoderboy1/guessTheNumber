let gamecontent = document.getElementById('content')
const Gamewidow = ()=>{
    let gamewindow = document.getElementById('gameWindow')
    let StartBtn = document.getElementById('playBtn')
    gamecontent.style.visibility = 'hidden'
    StartBtn.addEventListener('click',()=>{
        gamewindow.style.visibility = 'hidden'
        gamecontent.style.visibility = 'visible'
    })
}

Gamewidow()
const ShowModel = (text) => {
    let model = document.getElementById('model')
    let modelButton = document.getElementById('modelBtn')
    let modelmsg = document.getElementById('modleMsg')
    model.style.visibility = 'visible'
    modelmsg.innerText = text
    modelButton.addEventListener('click', () => {
        model.style.visibility = 'hidden'
    })
}
 
 
 

// =================declering the input and answer area here================= 
let user_input = document.querySelector("input")
let AnswerDisplay = document.getElementById('AnswerDisplay')
let hint = document.getElementById('hint')


// =================adding addEventListener for input area================= 
user_input.addEventListener('click', () => {
    AnswerDisplay.innerText = 'Output: '
})

// ================= adding addEventListener for hnt =================
hint.addEventListener('click', () => {
    if (hint.innerText != "Hint: your Number between 1 to 10") {
        hint.innerText = "Hint: your Number between 1 to 10"
    } else {
        hint.innerText = "Hint: "
    }
})
// =================gernate radom number================= 
let RandomNumber = Math.floor(Math.random() * 10)
// AnswerDisplay.innerText = RandomNumber



// =================lifeLine and score is here=================  
let lifeLine = document.getElementById('lifeline')
let score = document.getElementById('score')
let Game_score = 0
score.innerText = "score: " + Game_score
gameLife = 3;
lifeLine.innerText = "Lifeline: " + gameLife



// ============game starts here=================
const startGame = () => {
    User_number = user_input.value
    gameLife = gameLife - 1
    lifeLine.innerText = "Lifeline: " + gameLife
    if (gameLife == 0) {
        ShowModel("Game over!")
        gameLife = 3;
        lifeLine.innerText = "Lifeline: " + gameLife
        user_input.value = ''

    }
    else {
        const Gamestart = () => {

            if (User_number == '') {
                 
                ShowModel("Invalid Number")
            }
            else if (User_number == RandomNumber) {
                ifUserWin()
            }
            else if (User_number < RandomNumber) {
                AnswerDisplay.innerText = "Ye chhota Number hai "
            } else if (User_number > RandomNumber) {
                AnswerDisplay.innerText = "Ye Bda Number hai "
            }

        }

        Gamestart()
    }

}
const ifUserWin = ()=>{
    const winingWords = ["Great!", "Fantastic!","Awesome!"]
    const randomTexts = Math.floor(Math.random()*winingWords.length);

    AnswerDisplay.innerText = "You won"
    ShowModel(`${winingWords[randomTexts]} you win!`)
    Game_score = Game_score + 1
    score.innerText = "score: " + Game_score
    user_input.value = ''
    gameLife = 3;
    lifeLine.innerText = "Lifeline: " + gameLife
    RandomNumber = Math.floor(Math.random() * 10)
    console.log(RandomNumber)
}