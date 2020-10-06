var textview = document.getElementById('textview');

// Reconhecimento dos dígitos dos números
function buttonDigit(value) {
    textview.value = textview.value + value;
}

// Limpeza do visor da calculadora
function cleanTextview() {
    textview.value = "";
}

// Execução do cálculo
function resolveCalc() {
    var expression = textview.value;
    if(expression == "") {
        alert("Insira um cálculo válido!");
    } else {
        textview.value = eval(expression);
    }
}

// Função para apagar dígitos
function eraseCalc() {
    var expression = textview.value;
    textview.value = expression.substring(0, expression.length-1);
}