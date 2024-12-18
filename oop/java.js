// console.log(document.body)

// const listItens = document.getElementsByTagName("li")
// console.log(listItens)

// const title = document.getElementsByTagName("title")
//     console.log(title)
// const products = document.getElementsByClassName("produtc")
// console.log(products);

// // insertbefore
// // const p = document.createElement("p");

// // const header = title.parentElement;

// // header.insertBefore(p, title);
// const navLinks = document.querySelector("nav ul")

// const li = document.createElement("li")

// navLinks.appendChild(li);

// //  reapleceChild

// // const h2 = document.createElement("h2")

// // h2.textContent = "Meu novo titulo"

// // header.reapleChild(h2, title)

// // const myText = document.createTextNode("agora vamos colocar");

// // console.log(myText);

// // const h3 = document.createElement("h3");

// // h3.appendChild(myText);

// // console.log(h3);

// // mainContainer.appendChild(h3)

// // 10 trabalhando com atributos

// const firstlink = navLinks.querySelector("a")

// console.log(firstlink)

// firstlink.setAttribute("href", "https://www.google.com.br/?hl=pt-BR");

// console.log(firstlink.getAttribute("href"))

// const products1 = products[0];

// console.log(products1.getBoundingClientRect());

// for (const li of listItens){

//     li.style.backgroundColor = "red";
// }
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("clicou aqui");
});
// Removendo evento

const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
console.log("Evento removido");
secondBtn.removeEventListener("click", imprimirMensagem);
})

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    
});

// propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("Click", () => {
console.log("Evento 1");
} );

btnInsideContainer.addEventListener("Click", (e) => {
console.log("Evento 2");

});

// removendo evento

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
e.preventDefault();;
console.log("nãio alterou a pagina")

})
// evebti tecla

 document.addEventListener("keyup",(e)=>{
    console.log(`soltou a telcla ${e.key}`)
 })


 document.addEventListener("keydonw",(e)=>{
    console.log(`soltou a telcla ${e.key}`)
 })

 //7 mouse

 const mouse = document.querySelector("#mouse")
 
 mouse.addEventListener("mousedown", () => {
    console.log("presionou o botão")
 });

 mouse.addEventListener("mouseup", () => {
    console.log("presionou")
 })

 window.addEventListener("scroll", (e)=>{
    if(window.pageYOffset > 100){
        console.log("passamos de 100px");
    }
 });

 const input = document.querySelector("#my-input");
  input.addEventListener("focus", (e) => {
    console.log("entrou no input")
  })

  const debounce = (f, delay) =>{
let timeout

return(...arguments) =>{
        if(timeout){

            clearTimeout(timeout)
        }
        timeout = setTimeout(() =>{
            f.apply(arguments);
        
        }, delay);
    }

  }

  window.addEventListener("mousemove", debounce( () =>{
    console.log("executando evento a cada 401ms");
  },400))