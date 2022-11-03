document.getElementById("estudiante").addEventListener("click", estudiante)

function estudiante () {
    document.getElementById("total").innerHTML = ("Estudiante")
    console.log(x * precio)
}

document.getElementById("trainee").addEventListener("click", trainee)

function trainee () {
    document.getElementById("total").innerHTML = ("Trainee")
}

document.getElementById("junior").addEventListener("click", junior)

function junior () {
    document.getElementById("total").innerHTML = ("Junior")
}

x = document.getElementById("cantidad").value;
let precio = 200
