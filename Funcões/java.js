// // criando uma função
// function minhaFuncao(){
//     console.log("testando");
// }

// minhaFuncao();
// const minhaFuncaoEmVariavel = function (){
//     console.log("função em variavel")
// };

// minhaFuncaoEmVariavel()

// function funçaoComParamentro(txt){
//     console.log(`imprimidno: ${txt}`)

// }

// funçaoComParamentro("imprimindo algo")

// funçaoComParamentro("imprimindo")

// // return

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2){
// return n1 +n2;
// }

// const resultado = soma(a, b)

// console.log(resultado)

// escpo

// let y = 10;

// function testantoEscopo(){

//     let y = 20
//     console.log(`Y dentro da função e: ${y}`);
// }


// console.log(`Y fora da função é:${y}`);

// testantoEscopo();

// //

// let m = 10;

// function escpoAninhado(){
//     let m = 20;

//     if(true){
//         let m = 30;

//         if(true){
//             let m = 40;
//             console.log(m);
//         }
//         console.log(m);
//     } 
//     console.log(m);
// }

// escpoAninhado();
// console.log(m);

// const testeArrow = () =>{

//     console.log("esta e uma arrow");

// }

// testeArrow();

// const parOuImpar = (n) =>{
//     if(n % 2 === 0){
//     console.log("par");
//     return
// }
// console.log("impar");
// }

// parOuImpar(5);
// parOuImpar(10);

// const raizQuadrada = (x) =>{
// return x * x;

//     };

// console.log(raizQuadrada(4));


// const raizQuadrada2 = (x) => x * x;
// console.log(raizQuadrada2 (5));
// // console.log(raizQuadrada2 (10));

// const multplication = function(m, n) {
//     if(n === undefined){
//     return m * 2;
//     } else{
//         return m * n;
//     }
// };
// console.log(multplication (5));
// console.log(multplication(2,4));


// const greeting = (name) =>{
//     if(!name){
//         console.log("usuario não identificado")
//         return
//     }
//     console.log(`ola ${name}`)

// }
// greeting();
// greeting("Felipe");

// const customGreeting = (name, greet =  "ola") =>{
//     return `${greet}, ${name}`;
// };

// console.log(customGreeting("felipe"));
// console.log(customGreeting("felipe", "bom dia"));

// const repeatText = (text, reapet = 2 ) =>{
//     for (let i = 0; i < reapet; i++){
//         console.log(text);
//     }
// };

// repeatText("textando", 5)

// const multplicationClouser = (n) => {
//     return (m) =>{
//         return n * m;
//     };

// };

// const c1 = multplicationClouser(5);
// const c2 = multplicationClouser(10);
// console.log(c1)
// console.log(c2)
// console.log(c1(5))
// console.log(c2(7))

// const untiTen = (n, m) => {
//     if(n < 10){
//         console.log("Menor que 10");
// } else{
//     const x = n - m;
//     console.log(x);
//     untiTen(x, m);

// }
// };
// untiTen(100, 7);

// function factorial(x){
//     if (x === 0){
//         return 1;
//     } else{
//         return x * factorial(x - 1);
//     }
// }

// const num =7;
// const result = factorial(num);
// console.log(`factorial do numero ${num} é ${result}`)

// const arr = ["1","2","3","4","5","6"]
// console.log(arr[2]); 


// const felipe= {
//     name:"felipe",
//     age:34,
//     job:"desempregrado",

// };
// console.log(felipe);

// console.log(felipe.name.length);

// felipe.cor = "preto";
// console.log(felipe)
// delete felipe.age
// console.log(felipe)

// const obj = {
// a: "teste",
// b: true,

// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c:[],
// }

// Object.assign(obj2, obj);
// console.log(obj2);
// console.log(Object.keys(obj2));
// //mutação
// const users =["felipe","joao","fabio","maria"]
//     for (let i = 2; i < users.length; i++){
//         console.log(`lista:${users[i]}`);
// }

// const array = ["a,","b","c"]
// array.push("d");
// console.log(array)/
// array.pop();
// console.log(array);
// array.push("d");
// console.log(array);
// array.pop(1);
// console.log(array);
// const itemRemovido = array.pop()
// // console.log(itemRemovido)

// const myElements =["maça","lima","pera"]

// console.log(myElements.indexOf("maça"));

// const testeSlice = ["a","b","c","d","e"];
// const subArray = testeSlice.slice(2,4);
// console.log(subArray);
// console.log(testeSlice);
// const subArray2 = testeSlice.slice(1, 2 + 4,);
// console.log(subArray2);

// const nums = [1,2,3,4,5];
// nums.forEach((numero) => {
//     console.log(`o numero é ${numero} `)

// });

// const posts = [
// {title: "primeti post", category: "php" },
// {title: "Segundo post", category: "java" },
// {title: "terceiro post", category: "python" },

// ];

// posts.forEach((post) => {
// console.log(`exubindo post:${post.title}, da categoria${post.category}`)

// }

// )

// const brands = ["bmw","vw","fiat"]
// if(brands.includes("kia")){
// console.log("ha carro dessa marca");
// } else {
//  console.log("não há carros dessa marca")

// }

// const reversTest = [1,2,4,5]
//     reversTest.reverse();
// console.log(reversTest)

// const trimTest = "testando \n  ";
//     console.log(trimTest);
//     console.log(trimTest.trim());
//     console.log(trimTest.length)
//     console.log(trimTest.trim().length)


// const testePadStart = "1"
// const newNumber  = testePadStart.padStart(6,"0");
// console.log(testePadStart)
// console.log(newNumber)


// const testPadEnd = newNumber.padEnd(10,"0")
// console.log(testPadEnd)

// const frase ="minha,lista de split"
// const arrayDayFrase = frase.split(",");
// console.log(arrayDayFrase);

// const fraseDenovo = arrayDayFrase.join(" ")
// console.log(fraseDenovo)
// const somaInfinita = (...args) => {
//     let total = 0;
//     for (let i = 0; i < args.length; i++){
// total += args[i];

// }
// return total;
// };
// console.log(somaInfinita(1, 2,));
// const somaInfinita2 = (...args) => {
//     let total =0;
//     for( num of args){
//         total +=num;
//     }
//     return total;
// }
// console.log(somaInfinita2(1,2,3,3,4,6,4,5))

// const useDetails = {
//     firstName: "Felipe",
//     lastName: "Souza",
//     job: "Nda"
// }
// const{firstName,lastName,job} = useDetails
// console.log(firstName,lastName,job)

// const {firstName: primeiroNome} = useDetails
// console.log(primeiroNome)

// const myList = ["carro", "Vasourra","peneira"]
// const[iten1, iten2, iten3] = myList
// console.log(iten2, iten1)
// const = myJson '{}'

const myJson = '{"name": "Felipe", "age": 31, "skills":["php","java","pytohn"]}';
const myObject = JSON.parse(myJson);
console.log(myObject)


































