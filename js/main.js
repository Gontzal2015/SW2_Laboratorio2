window.onload=inicializar

function inicializar(){
    Ej1()
    EJ2y4()
    EJ3()

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

    user.onfocus= ()=>{user.value=''}

    user.onblur=()=>{
        if(user.value==''){
            user.value='tu@email'
        }
    }
    //Esto es ya el ejercicio 4

    let submit=document.getElementById("form")
    submit.onsubmit= (event)=>{
        event.preventDefault();
        window.alert("Se ha pulsado Login")
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

