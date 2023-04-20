//eventos
const paises = [
    "Perú",
    "Colombia",
    "Brazil",
    "Urugay",
    "Venezuela",
    "Francia",
    "Estados Unidos",
    "Vietman"
];
const info = document.querySelector('#info');
const selectPaises = document.querySelector("#paises");
const caja = document.querySelector('.caja');
const mensaje = document.querySelector('#mensaje');

const modoOscuro = document.querySelector('.mode');
const modoActual = document.querySelector('.modoActual')

const registrar = document.querySelector('#registrar')
const nombre = document.querySelector('#nombre');
const formRegister = document.querySelector('#form-register')
const mostrarRegistro = document.querySelector('.mostrarRegistro')
const lista = document.querySelector('#lista')

formRegister.addEventListener("submit",(e) =>{
    e.preventDefault();
})

const usuarios = [];

registrar.addEventListener('click', ()=>{
    usuarios.push(nombre.value)
    localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    console.log(usuarios);
})



mostrarRegistro.addEventListener('click', ()=>{
    let users = JSON.parse(localStorage.getItem('Usuarios'));
    console.log("Usuarios en localStorage " + users);
    lista.innerHTML = "Los regitrados son <br>" + users;

})



paises.forEach((pais) => {
    let opcion = document.createElement('option');
    opcion.value = pais;
    opcion.innerText = pais;
    selectPaises.appendChild(opcion);

})

selectPaises.addEventListener('change', () =>{
    let option = selectPaises.options[selectPaises.selectedIndex].value;
    info.innerHTML = `<h2>El pais selecionado es: ${option}</h2>`;
})

console.log(caja);
caja.addEventListener('mousedown',() =>{
    console.log("hola");
    caja.style.backgroundImage='url("./img/31927567.jpg")'
})

caja.addEventListener('mouseup',() =>{
    console.log("hola");
    mensaje.innerHTML=" Se fue :C Hazle click para que vuelva :p"
    caja.style.backgroundImage=''
})


modoOscuro.addEventListener('change', e => {

    if(e.target.checked){
        localStorage.setItem("Mode", e.target.checked)
        console.log("check")
    }
    else{
        localStorage.setItem("Mode", e.target.checked)
        console.log("NO CHECK")
    }

});

mode = localStorage.getItem('Mode');
if(mode == 'true'){
    document.getElementById("checkbox").checked = true;
}
else{
    document.getElementById("checkbox").checked = false;
}

modoActual.innerHTML = `Modo OSCURO en localStorage: ${mode}</h2>`;

