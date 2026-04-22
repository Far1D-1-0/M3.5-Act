const button = document.getElementById("calcular");
const input = document.getElementById("birthdate");
const seccionEdad = document.getElementById("miSeccion");
const textoEdad = document.getElementById("edad");

function calcularEdad(fechaNacimientoStr) {
  const hoy = new Date();
  const fechaNacimiento = new Date(fechaNacimientoStr);

  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();

  const mesNacimiento = fechaNacimiento.getMonth();
  const diaNacimiento = fechaNacimiento.getDate();

  if (
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && diaActual < diaNacimiento)
  ) {
    edad--;
  }

  return edad;
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  const fecha = input.value;

  if (!fecha) {
    textoEdad.textContent = "Selecciona una fecha";
    seccionEdad.classList.remove("oculto");
    return;
  }

  const anios = calcularEdad(fecha);

  textoEdad.textContent = anios;
  seccionEdad.classList.remove("oculto");
});