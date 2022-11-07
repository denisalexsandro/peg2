const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block'; 
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none'; 
}

function emailValidate(){

    if(!emailRegex.test(campos[0].value))
    {
        setError(0);
    }

    else
    {
        removeError(0)
    }
}

function botao(){

    if(emailRegex.test(campos[0].value))
    {
        alert('Link para redefinição de senha enviado para o email informado')
    }

    else
    {
        alert('Email inválido')
    }
}