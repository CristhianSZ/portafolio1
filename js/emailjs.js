// Importa emailjs-com
import emailjs from 'emailjs-com';

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Obtiene los datos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Configura los parámetros de EmailJS
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Envía el correo electrónico
  emailjs.send(
    'service_9eztr9c', // Reemplaza con tu ID de servicio
    'template_p22kfyp', // Reemplaza con el ID de tu plantilla
    templateParams,
    'IupORZ6NYpP7uoPa9' // Reemplaza con tu llave pública
  )
    .then((response) => {
      console.log('Correo electrónico enviado correctamente', response);
      // Muestra un mensaje de éxito al usuario
    })
    .catch((error) => {
      console.error('Error al enviar el correo electrónico:', error);
      // Muestra un mensaje de error al usuario
    });
});