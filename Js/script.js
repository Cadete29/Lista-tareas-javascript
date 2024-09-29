function agregarTarea() {

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no sea vacio
    if (nuevaTareaTexto === ""){
        alert("Porfavor, ingrese una nueva tarea");
        return;
    }

    //crear elemetno en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //crear boton eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { nuevaTarea.remove();}

    //Agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento /la tarea a la lista
    document.getElementById("listaTarea").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto de la tarea
    document.getElementById("nuevaTarea").value = "";
}