// FEATURE DE DECISÃO SE QUER OU NÃO DOCE


let mostrar = document.querySelector(".querDoce");
let mostrarRadio = document.querySelector("#sim");

function mostrarDoces() {
  if (mostrarRadio.checked) {
    mostrar.style.display = "block";
  } else {
    mostrar.style.display = "none";
  }
}

let decisao = document.querySelectorAll("input[type=radio]");
decisao.forEach(function (radio) {
  radio.addEventListener("change", mostrarDoces);
});


// VALIDAÇÃO DOS DADOS DO CLIENTE

let form = document.querySelector('#form');
let campos = document.querySelectorAll('.require');
let spans = document.querySelectorAll('.span-require');

let tellRegex = /^\d{9}$/;
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    tellValidate();
    emailValidade();
    adressValidate();

})


function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'flex'
}

function removeError(index){
    campos[index].style.border = 'none';
    spans[index].style.display = 'none'
}

function nameValidate(){
    if(campos[0].value.length < 3){
     
        setError(0)
    } else{
        removeError(0)
    };
}
function tellValidate(){
    if(!tellRegex.test(campos[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}
function emailValidade(){
    if(!emailRegex.test(campos[2].value)){
        setError(2);
    }else{
        removeError(2);
    }
}
function adressValidate(){
    if(campos[3].value.length < 3){
     
        setError(3)
    } else{
        removeError(3)
    };
}

