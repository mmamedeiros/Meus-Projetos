const question = document.querySelector(".question")
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd")
const textFinish = document.querySelector(".finish span")
const content = document.querySelector(".content")
const contentFinish = document.querySelector(".finish")
const btnRestart = document.querySelector(".finish button")

import questions from "./questions.js" // importando questões

let currentIndex = 0; // armazena o index da questão atual
let questionsCorrect = 0; //armazena a quantidade de acertos

btnRestart.onclick = () =>{
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
     questionsCorrect = 0; 
     loadQuestion();
}

function nextQuestion(e){
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
      } // verifica se você acertou a questãoi  e caso tenha acertado ele atribui um ponto
    

    if(currentIndex < questions.length - 1){ // verifica se há mais questões paara serem feitas
        currentIndex++; 
        loadQuestion();
    }else{ // se não tiver ele roda a funçaõ de finalização
        finish();
    };

};

function finish(){
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion(){ // funçaõ rresponsavel por rodar as questões
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`; // mostra a questão que você está e quantas questões o programa possui
    const item = questions[currentIndex]; // pega a questão o indice atual
    answers.innerHTML = ""; // garante que ansewres fique vazia
    question.innerHTML = item.question; // mostra a questão do item atual

    item.answers.forEach((answer) =>{
        const div = document.createElement("div"); // cria um elemento div no html

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.option} </button>`; // alimenta o elemento criado com as opções de resposta
    
        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion); // faz rodar a função nextQuestion sempre que uma  opção for clicada
    });
}

loadQuestion();