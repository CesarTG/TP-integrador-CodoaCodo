
let x = document.getElementById("cantidad");
let precio = 200

document.getElementById("estudiante").addEventListener("click", estudiante)
function estudiante () {
    document.getElementById("total").innerHTML = ("$ " + x.value * precio * 0.80)    
}

document.getElementById("trainee").addEventListener("click", trainee)
function trainee () {
    document.getElementById("total").innerHTML = ("$ " + x.value * precio * 0.50)    
}

document.getElementById("junior").addEventListener("click", junior)
function junior () {
    document.getElementById("total").innerHTML = ("$ " + x.value * precio * 0.15)    
}

document.getElementById("reset").addEventListener("click", borrar)
function borrar () {
    document.getElementById("total").innerHTML = ("")
}