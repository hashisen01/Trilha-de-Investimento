const questions = [
    {
        question: "Das opções abaixo, é considerado investimento em Renda Variável:",
        optionA: "Caderneta de poupança",
        optionB: "CDB",
        optionC: "Títulos públicos",
        optionD: "Mercado de ações",
        correctOption: "optionD"
    },

    {
        question: "Quais são as principais características em uma análise de alternativas de investimentos?",
        optionA: "Retorno, Rentabilidade e Risco",
        optionB: "Rentabilidade, Liquidez e Segurança",
        optionC: "Custos, Segurança e Volatilidade",
        optionD: "Rentabilidade, Segurança e Volatilidade",
        correctOption: "optionB"
    },

    {
        question: " Ibovespa é:",
        optionA: "É a bolsa de valores do estado de São Paulo",
        optionB: "Índice que representa todas as ações da Bolsa Brasileira ",
        optionC: "É o antigo nome da bolsa de São Paulo, que hoje se chama B3",
        optionD: "Índice que representa uma carteira teórica com as ações de maior liquidez na Bolsa  ",
        correctOption: "optionD"
    },

    {
        question: "Existem vários tipos de títulos públicos do tesouro, e os principais são:",
        optionA: "NTN-B, LFF e LTF",
        optionB: "Tesouro IPCA, NTN-B e LFT",
        optionC: "Tesouro IPCA, tesouro Selic e tesouro pré",
        optionD: "Tesouro pré, tesouro IPCA e LFT",
        correctOption: "optionC"
    },

    {
        question: "Que tipo de ação abaixo dá direito a voto em assembleias?",
        optionA: "PN - Preferencial",
        optionB: "PN- Anormal",
        optionC: "ON- Preferencial",
        optionD: "ON - Ordinária",
        correctOption: "optionD"
    },

    {
        question: " A distribuição de dividendos é tributada no Brasil?",
        optionA: "Falso",
        optionB: "Verdadeiro",
        optionC: "em parte sim",
        optionD: "todas as alternativas incorretas",
        correctOption: "optionA"
    },

    {
        question: "Entre os itens abaixo, qual reflete melhor a rentabilidade de uma empresa em determinado ano?",
        optionA: "Vendas absolutas",
        optionB: "Crescimento de receita",
        optionC: "Retorno sobre o patrimônio",
        optionD: "Margem bruta",
        correctOption: "optionC"
    },

    {
        question: "Quando a empresa faz um IPO, do inglês initial public offering, ela está:",
        optionA: "Fazendo uma oferta subsequente que pode ser primária e/ou secundária",
        optionB: "Fazendo uma oferta secundária",
        optionC: "Fazendo um IPO com oferta secundária",
        optionD: "Fazendo um IPO com oferta primaria",
        correctOption: "optionA"
    },

    {
        question: "Presidente do CMN (Conselho Monetário Nacional):",
        optionA: "Presidente da República",
        optionB: "Ministro do Planejamento",
        optionC: "Presidente do Bacent",
        optionD: "Ministro da Fazenda",
        correctOption: "optionD"
    },

    {
        question: `"Órgão responsável pela regulamentação e fiscalização dos Fundos de Investimento:`,
        optionA: "Bacen",
        optionB: "CMN",
        optionC: "SUSEP",
        optionD: "CVM",
        correctOption: "optionD"
    },


]


let shuffledQuestions = [] 

function handleQuestions() { 
   
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
           
            correctOption = option.labels[0].id
        }
    })
   
    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

   
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
           
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
           
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
  
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

  
    if (playerScore <= 3) {
        remark = "Notas ruins, continue praticando."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Notas médias, você pode fazer melhor"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excelente, mantenha o bom trabalho."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

  
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}