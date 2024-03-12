// Modificació del comportament d’un formulari: utilizando el evento submit,
// comprobar si el número introducido en un formulario es par, de no ser 
// así, se deberá interrumpir el envío utilizando el método de evento 
// preventDefault()
window.onload = function() {
    var formulario = document.getElementById('miFormularioEj1');
  
    formulario.addEventListener('submit', function(event) {
       var telefonoInput = document.getElementById('numero').value;
  
       if (telefonoInput % 2 !== 0) { // comprueba si numero par
         alert('El número debe ser par.');
        event.preventDefault(); // Interrumpe envio del formulario
       }
    });
  };

//   Validació d’HTML5 i per a JavaScript: escribe el código de un 
//   formulario que sin etiquetas label, pida datos obligatorios, 
//   email, edad (entre 18 y 67 años) y palabra.
// adicionalmente utilizando el atributo onsubmit del formulario y una función, 
//  interrumpir el envío del formulario si la edad es menor a 35 años, no usar el método de evento preventDefault()

function validarFormulario() {
    const edad = parseInt(document.getElementById('edad').value);
    alert(edad);
    if (edad < 35) {
        alert('Debes ser mayor de 35 años para enviar el formulario.');
        return false;
    }
    return true;
}

//BOTONES DE COOKIES
function displayAllCookies() {
    var allCookies = document.cookie;
    alert("Cookies:\n" + allCookies);
  }
  function createCookie(cookieName) {
    var cookieValue = prompt("Enter the value for " + cookieName + " cookie:");
    if (cookieValue !== null && cookieValue !== "") {
      document.cookie = cookieName + "=" + cookieValue;
      alert(cookieName + " cookie created successfully!");
    }
  }
  function deleteCookie(cookieName) {
    // para borrar el parametro expire se pone a una fecha pasada
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1980 00:00:00 UTC path=/;";
    alert(cookieName + " cookie deleted successfully!");
  }