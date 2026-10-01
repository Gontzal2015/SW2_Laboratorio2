window.onload=inicializar

let index=0
let img
let carrousel

function inicializar(){
    Ej1()
    EJ2y4()
    EJ3()
    EJ5()
}


function Ej1(){
    let imgPrin=document.getElementById("image")
    imgPrin.addEventListener('click',()=>console.log("has pulsado la imagen"))
    let PanelSuperior=document.querySelectorAll(".navbutton")
    PanelSuperior.forEach(element => {
        element.addEventListener('click',()=>window.alert(element.innerText))
    });

}

function EJ2y4(){
    let user= document.getElementById("user")

    user.onfocus= ()=>{
        if(user.value=='tu@email'){
        user.value=''
        }
    }

    user.onblur=()=>{
        if(user.value==''){
            user.value='tu@email'
        }
    }
    //Esto es ya el ejercicio 4

    let pass=document.getElementById("pass")
    let submit=document.getElementById("form")
    submit.onsubmit= (event)=>{
        event.preventDefault();
        window.alert("Se ha pulsado Login")
        if((user.value.includes("@ehu.es"))&&(pass.value.length>3)){
            window.alert(`Binvenido ${user.value}`)
        }
        else{
            window.alert("Error de inicio de sesion")
        }
    }

}

function EJ3(){
    let combo= document.getElementById("combobox")
    
    let newOption= document.createElement("option")
    newOption.class='_self'
    newOption.value="pizzaMala"
    newOption.innerText="Pineapple Pizza"
    combo.appendChild(newOption)

    combo.addEventListener('change',()=>{
        if(combo[combo.selectedIndex].innerText=="Pineapple Pizza"){
            window.alert("Pizza con piña… Non sei il benvenuto in Italia")
        }
        else{
            console.log(combo[combo.selectedIndex].innerText)
        }
    })

}

function EJ5(){
    img= document.getElementById('image')
    carrousel= ['images/fresas.jpg','images/limon.jpg', 'images/mandarinas.jpg','images/manzanas.jpg','images/melon.jpg','images/sesamo.jpg']
    let cambios= setInterval(changeImg,3000)
    img.addEventListener('click',()=>{
        clearInterval(cambios)
    })
}

function changeImg(){
    img.style.backgroundImage=`url(../${carrousel[index]})`
    if(index<5){
        index++
    }
    else{
        index=0
    }
}