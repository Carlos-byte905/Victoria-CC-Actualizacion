document.getElementById("cita-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let fecha = document.getElementById("fecha").value;

    if (nombre === "" || email === "" || telefono === "" || fecha === "") {
        document.getElementById("mensaje").textContent = "Por favor, completa todos los campos.";
        document.getElementById("mensaje").style.color = "red";
        return;
    }

    document.getElementById("mensaje").textContent = "¡Cita agendada con éxito!";
    document.getElementById("mensaje").style.color = "green";

    // Limpiar el formulario
    document.getElementById("cita-form").reset();
});
