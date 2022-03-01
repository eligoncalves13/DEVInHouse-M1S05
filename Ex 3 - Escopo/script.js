const output = document.querySelector('#output');
const btnCalculate = document.querySelector('#btn-calculate');

btnCalculate.addEventListener('click', timeTables);

function timeTables(){
    const number = document.querySelector('#number').value;

    if(number != '' && !isNaN(number)) {
        output.innerHTML = `<h2>Tabuada do ${number}<h2>`;

        for(let count = 0; count <= 10; count++) {
            const result = number * count;
            output.innerHTML += `${number} X ${count} = ${result} <br><br>`;
        }
    } else {
        window.alert("Digite um número válido!");
    }
    document.querySelector('#number').value = '';
}