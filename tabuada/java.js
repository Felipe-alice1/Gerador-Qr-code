// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
 
const multiplicationTable = document.querySelector("#multiplication-operations");
 
// Funções
const createTable = (number, multiplicationNumber) => {
    multiplicationTable.innerHTML =" ";
    for (let i = 1; i <= multiplicationNumber; i++) {
        const result = number * i;
        console.log(result); // Este console.log vai funcionar corretamente agora
    }
};
 
// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Corrigido de "preventDefalt" para "preventDefault"
    
    const multiplicationNumber = +numberInput.value; // Corrigido: número a ser multiplicado
    const multiplicatorNumber = +multiplicationInput.value; // Corrigido: número do multiplicador
    
    // Condição ajustada para evitar o retorno antes de chamar a função
    if (!multiplicationNumber || !multiplicatorNumber) {
        console.log("Preencha os dois números para gerar a tabela.");
        return;
    }
 
    console.log(multiplicationNumber, multiplicatorNumber); // Exibe os valores no console
    createTable(multiplicationNumber, multiplicatorNumber); // Chama a função para criar a tabela
});