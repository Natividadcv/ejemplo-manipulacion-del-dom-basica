

const btnCalcular = document.querySelector('#btnCalcular');
const btnLimpiar  = document.querySelector('#btnLimpiar');
const input1      = document.querySelector('#calculo1');
const input2      = document.querySelector('#calculo2');
const result      = document.querySelector('#result');



//Eventos
btnCalcular.addEventListener("click", () =>{
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);

    const suma = num1 + num2;
    result.innerHTML = `Resultado ${suma}`;

  
});

btnLimpiar.addEventListener('click', () =>{
input1.value = "";
input2.value = "";

 result.innerHTML = "";
});