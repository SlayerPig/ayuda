function mostrarRutinas() {
    alert("¡Bienvenido a la sección de Rutinas! Elige tu objetivo:");
    let objetivo = prompt("¿Quieres: \n1. Bajar de peso \n2. Subir de peso \n3. Ganar músculo \n4. Perder grasa sin bajar de peso?");
    
    if (objetivo == 1) {
        alert("Rutina para bajar de peso: Cardio, HIIT, y ejercicios de resistencia.");
    } else if (objetivo == 2) {
        alert("Rutina para subir de peso: Entrenamiento con pesas, más calorías.");
    } else if (objetivo == 3) {
        alert("Rutina para ganar músculo: Pesas, entrenamiento de fuerza, y proteína.");
    } else if (objetivo == 4) {
        alert("Rutina para perder grasa sin bajar de peso: Cardio moderado, pesas, control de dieta.");
    } else {
        alert("Por favor, elige una opción válida.");
    }
}
