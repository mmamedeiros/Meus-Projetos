export default[ // Banco de dados com questões

    { // cada chave dessa representa o obj de cada pergunta
        question: "Quanto é 2+2?",
        answers: [ // array das respostas
            {option: "4", correct: true}, // obj pra cada resposta
            {option: "2", correct: false},
            {option: "10", correct: false}
        ],
    },

    { 
        question: "Quanto é 100 - 10?",
        answers: [ 
            {option: "4", correct: false}, 
            {option: "90", correct: true},
            {option: "100", correct: false}
        ],
    },
    
    { 
        question: "Quanto é 100 /2?",
        answers: [ 
            {option: "25", correct: false}, 
            {option: "50", correct: true},
            {option: "500", correct: false}
        ],
    },
    
    { 
        question: "Quanto é -1 + 2?",
        answers: [ 
            {option: "-1", correct: false}, 
            {option: "3", correct: false},
            {option: "1", correct: true}
        ],
    },
]