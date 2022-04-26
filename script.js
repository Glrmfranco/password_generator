let slider = document.querySelector('#slider');
let btn = document.querySelector('#btn');
let valorSlider = document.querySelector('#valor');
let senha = document.querySelector('#senha');
let containerSenha = document.querySelector('#container-senha');

let charset = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM!@#$';
let novaSenha = '';

valorSlider.innerHTML = slider.value;

slider.oninput = () => (valorSlider.innerHTML = slider.value);

btn.addEventListener('click', () => {
    let pass = '';
    for (let i = 0, n = charset.length; i < slider.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerSenha.classList.remove('esconder');
    senha.innerHTML = pass;
    novaSenha = pass;
});

senha.addEventListener('click', () => {
    alert('Senha copiada com sucesso');
    navigator.clipboard.writeText(novaSenha);
});
