document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('open-popup');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');
    const calculateButton = document.getElementById('calculate-imc');
    const resultadoDiv = document.getElementById('resultado');

    openButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    calculateButton.addEventListener('click', () => {
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        if (!altura || !peso) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const imc = peso / (altura ** 2);
        let resultado = '';

        if (imc < 18.5) {
            resultado = `Seu IMC é ${imc.toFixed(2)}: Abaixo do peso.`;
        } else if (imc < 24.9) {
            resultado = `Seu IMC é ${imc.toFixed(2)}: Peso normal.`;
        } else if (imc < 29.9) {
            resultado = `Seu IMC é ${imc.toFixed(2)}: Sobrepeso.`;
        } else {
            resultado = `Seu IMC é ${imc.toFixed(2)}: Obesidade.`;
        }

        resultadoDiv.textContent = resultado;
    });
});

document.getElementById('altura').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('peso').focus();
    }
});

document.getElementById('peso').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculate-imc').focus();
    }
});

