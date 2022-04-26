let slider = document.querySelector('#slider');
let btn = document.querySelector('#btn');
let valorSlider = document.querySelector('#valor');
let senha = document.querySelector('#senha');
let containerSenha = document.querySelector('#container-senha');
let maiusculas = document.querySelector('#maiusculas');
let minusculas = document.querySelector('#minusculas');
let numeros = document.querySelector('#numeros');
let especiais = document.querySelector('#especiais');

let letrasMaiusculas = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
let letrasMinusculas = 'qwertyuioplkjhgfdsazxcvbnm';
let apenasNumeros = '1234567890';
let apenasEspeciais = '!@#$%^&*()_+-';

let novaSenha = '';

valorSlider.innerHTML = slider.value;

slider.oninput = () => (valorSlider.innerHTML = slider.value);

btn.addEventListener('click', () => {
    let pass = '';
    let tamanhoSenha = slider.value;

    for (let i = 0; i < tamanhoSenha; i++) {
        let senhaFinal = gerarSenha();
        pass += senhaFinal;
    }
    containerSenha.classList.remove('esconder');
    senha.innerHTML = pass;
    novaSenha = pass;
});

function pegaMaiusculas() {
    return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
}

function pegaMinusculas() {
    return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
}

function pegaApenasNumeros() {
    return apenasNumeros[Math.floor(Math.random() * apenasNumeros.length)];
}

function pegaApenasEspeciais() {
    return apenasEspeciais[Math.floor(Math.random() * apenasEspeciais.length)];
}

function gerarSenha() {
    const senha = [];
    if (maiusculas.checked) {
        senha.push(pegaMaiusculas());
    }
    if (minusculas.checked) {
        senha.push(pegaMinusculas());
    }
    if (numeros.checked) {
        senha.push(pegaApenasNumeros());
    }
    if (especiais.checked) {
        senha.push(pegaApenasEspeciais());
    }
    if (senha.length === 0) return '';

    return senha[Math.floor(Math.random() * senha.length)];
}

senha.addEventListener('click', () => {
    alert('Senha copiada com sucesso');
    navigator.clipboard.writeText(novaSenha);
});
