function mostrarDatos(){
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("clave").value;

    datos = 'Usuario: ' + '<br>' + usuario + '<br>' + "Contrasenia: " + '<br>' + password;

    document.getElementById("resultado").innerHTML = datos;
    var mensaje = document.getElementById("resultado").innerHTML;
}

const input = document.getElementById("noConceptos");
const btn = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

//Cargar las tareas al iniciar la seleccion
document.addEventListener("DOMContentLoaded",cargarTareas);

// Falata agregar una nueva tarea usanod el evento
btn.addEventListener("click",agregarTareas);

function agregarTareas(){
    const tarea = input.value.trim();
    if(tarea == "")
        return alert("Esta vacia!");
    const tareas = obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
    input.value = "";
}

function obtenerTareas(){
    return JSON.parse(localStorage.getItem("tareas")) || [];
}

function mostrarTareas(){
    const tareas = obtenerTareas();
    lista.innerHTML = "";
    tareas.forEach((tarea, index) =>{
        const li = document.createElement("li");
        li.textContent = tarea;
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.addEventListener("click", () => eliminarTarea(index));
        li.appendChild(btnBorrar);
        lista.appendChild(li);
    });
}

// eliminar tarea por índice
function eliminarTarea(index){
    const tareas = obtenerTareas();
    if(index < 0 || index >= tareas.length) return
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
}

function cargarTareas(){
    mostrarTareas();
}