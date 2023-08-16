var saludarButton = document.getElementById('saludarButton');

saludarButton.addEventListener('click', function(event) {
    alert("Hola! Soy el botón");
    event.stopPropagation(); // Detiene la propagación del evento
});
