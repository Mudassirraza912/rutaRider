import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'es';

const translations = {
  en: {
    LANGUAGE_SETTINGS: 'Change Language',
    GET_IN: "Get in",
    WELCOME: "WELCOME",
    CREATE_ACCOUNT: "Create Account",
    LOGIN: "Login",
    SIGN_IN: "Sign in",
    EMAIL: "Email",
    PASSWORD: "Password",
    LOGIN_SUCCESSFUL: "Login successful",
    FORGOT_PASSWORD: "Forgot Password?",
    SIGN_UP: "Sign up",
    USER_NAME: "User Name",
    FIRST_NAME: "First Name",
    LAST_NAME: "Last Name",
    PHONE_NUMBER: "Phone Number",
    CONTINUE: "Continue",
    ADD_VEHICLE_DETAIL: "Add Vehicle Detail",
    VIHICLE_NAME: "Vehicle Name",
    VIHICLE_COLOUR: "Vehicle colour",
    LISCENSE_NUMBER: "Liscense Number",
    CAR_NUMBER: "Car Number",
    TOTAL_SEATS_IN_CAR: "Total Seats In car",
    TOTAL_SEATS: "Total seats",
    ENTER_YOUR_EXPERIENCE_IN_YEARS: "Enter Your Experience in years",
    UPLOAD_YOUR_VEHICLE_PAPERS: "Upload your vehicle papers",
    SAVE: "save",
    EMERGENCY_NUMBERS: "Emergency Numbers",
    EMERGENCY_CALL: "Emergency call",
    NATIONAL_POLICE: "National Police",
    EMERGENCY_HELPLINE: "Emergency Helpline",
    FIRE: "Fire",
    AMBULANCE: "Ambulance",
    CALL: "Call",
    VIEW_VEHICLE: "View vehicle",
    RATING: "Rating",
    RATINGS: "Ratings",
    TRIP: "Trip",
    TRIPS: "Trips",
    RUTA_DRIVER: "Ruta driver",
    YOU_HAVE_NOT_COMPLETED_ANY_RIDE: "You have't completed any ride!",
    PROFILE: "profile",
    NOTIFICATION: "Notification",
    YOU_DONT_HAVE_NOTIFICATION: "You don't have notification",
    RIDE_REQUEST: "ride request",
    RIDE_REQUESTS: "ride requests",
    YOU_HAVE_NOT_ANY_REQUEST: "You have't any Request!",
    PAYMENT: "Payment",
    CARD_NUMBER: "Card number",
    ENTER_YOUR_CARD_NAME: "Enter your card name",
    CVV: "CVV",
    HISTORY: "History",
    SCHEDULE_BOOKING: "Schedule Booking",
    YOU_HAVE_NOT_CREATED_ANY_SCHEDULE: "You have't created any Schedule!",
    FROM: "From",
    TO: "To",
    PRICE: "price",
    SEAT: "seat",
    TIMING: "timing",
    YOU_CANT_SELECT_PREVIOUS_TIME: "You can't select previous time",
    DATE: "date",
    GO: "Go",
    ENTER_LOCATION_NAME: "Enter location name",
    LOGOUT: "Logout",
    SCHEDULE_DETAIL: "Schedule detail",
    SCHEDULE_DETAIL_SAVED: "Schedule detail saved",
    TOTAL_SEATS: "Total Seats",
    REMAINING_SEATS: "Remaining Seats",
    DEPARTURE_DATE: "departure date",
    DEPARTURE_TIME: "departure time",
    PRICE_PER_SEAT: "price per seat",
    PENDING: "pending",
    COMPLETED: "Completed",
    DELETE: "delete",
    NO_ANY_USER_BOOKED_YOU: "No any user booked you!",
    HOW_MANY_SEATS_YOU_WANT: "How many seats you want?",
    ENTER_NUMBER_OF_SEATS: "Enter number of seats ",
    BOOK_NOW: "Book now",
    ALERT: "alert",
    YOUR_REQUEST_HAS_BEEN_SENT: "Your request has been sent",
    BOOKING_REQUEST_SENT_FROM_USER_TO_RIDER: "Booking request sent from user to rider",
    BOOKING_REQUEST_RECIEVED: "Booking request recived",
    BOOKING_ACCEPTED_SUCCESSFULLY: "booking accepted successfully",
    BOOKING_REJECTED_SUCCESSFULLY: "booking rejected successfully",
    START_RIDE: "Start ride",
    COMPLETE_RIDE: "Complete ride",
    ENTER_YOUR_REVIEW: "enter your review",
    YOUR_RATING_ADDED_SUCCESSFULLY: "Your rating added successfully!",
    RIDE_COMPLETE: "ride complete",
    RIDE_START_NOW: "ride start now",
    YOUR_RIDE_REMINDER_START: "your ride reminder start",
    USER_HAS_BEEN_UPDATED: "User has been updated",
    USER_HAS_BEEN_REGISTERED: "User has been registered",
    USER_HAS_BEEN_DELETED: "User has been deleted",
    DELETE: "Delete",
    USER: "User",
    NEW: "New",
    FETCHING_THE_POSITION_FAILED_PLEASE_ENABLE_THE_GPS_MANYALY: "Fetching the position failed, please enable the GPS manually!",
    ACTIVE_RIDE: "Active ride",
    RIDE: "Ride",
    TRIPS: "Trips",
    EDIT_PROFILE: "Edit profile",
    UPDATE: "Update",
    SELECT_AVATAR: "Select avatar",
    TAKE_PHOTO: "Take photo",
    CHOOSE_FROM_LIBRARY: "Choose from library",
    CANCEL: "Cancel",
    ALLOW_RUTA_TO_ACCESS_PHOTOS_MEDIA_AND_FILE_ON_YOUR_DEVICE: "Allow Ruta to access photos, media, and files on your device?",
    DENY: "Deny",
    ALLOW: "Allow",
    CHOOSE_AN_ACTION: "Choose an action",
    OK: "OK",
    RATING: "Rating",
    ACTIVE_SCHEDULE: "Active schedule",
    NO_ACTIVE_SCHEDULE: "No active schedule",
    BOOKING_SCHEDULE_NOT_FOUND: "Booking schedule not found",
    BOOKING_REQUEST_ACCEPTED: "Booking request accepted",
    DRIVER_NAME: "Driver name",
    CONTACT: "Contact",
    STATUS: "Status",
    IN_PROCESS: "In process",
    ACCEPTED: "Accepted",
    REJECTED: "Rejected",
    DENIED: "Denied",
    HOURS: "Hours",
    MINUTES: "Minutes",
    SECONDS: "Seconds",
    RIDE_ROUTE: "Ride route",
    YOUR_RIDE_STARTS_NOW: "Your ride starts now",
    RIDE_STARTS_NOW: "Ride starts now",
    YOUR_RIDE_IS_COMPLETED: "Your ride is completed",
    RIDE_IS_COMPLETED: "Ride is completed",
    REVIEW_RATING: "Review rating",
    MAX_30_LETTERS_30_REMAINING: "Max. 30 letters, 30 remaining",
    MAX_30_LETTERS: "Max. 30 letters",
    REMAINING: "remaining",
    SEND_FEEDBACK: "Send feedback",
    GREAT: "Great",
    GOOD: "Good",
    OKAY: "Okay",
    YEARS_OF_EXPERIENCE: "years of experience",
    ACCEPT: "Accept",
    REJECT: "Reject",
    STATUS: "Status",
    STARTED: "Started",
    MIN_REMINDER: "min reminder",
    NUMBER_OF_SEAT: "Number of seat",
    PHONE: "Phone",
    BOOKED_SEATS: "Booked seats",
    PICKUP: "Pickup",
    DESTINATION: "Destination",
    // NEW WORDS
    SIGN_IN_TO_START_YOUR_SESSION: "Sign in to start your session",
    PLEASE_FIX_EMAIL_FORMATE: "Please fix email format",
    CALL_THIS_NUMBER: "Call (this number)",
    A_CALL: "A call",
    PACKAGE_DETAILS: "PACKAGE DETAILS",
    PACKAGE_NAME: "Package Name",
    PACKAGE_VALUE: "Package Value",
    PACKAGE_WEIGHT: "Package Weight",
    RECIPIENT_NAME: "Recipient Name",
    RECIPIENT_NUMBER: "Recipient Number",
    NAME: "Name",
    TYPE: "Type",
    CURRENT_LOCATION: "Current Location",
    AVAILABLE_SEATS: "Available Seats",
    NO_OF_SEATS: "No of seat",
    UPLOAD_RIDER_PICTURE: "Upload rider picture",
    MODEL: "Model",
    REGISTRATION_NUMBER: "Registration Number",
    SWITCH_LANGUAGE: "Switch Language"
  },
  ar: {
    LANGUAGE_SETTINGS: 'تغيير اللغة',
  },
  es: {
    LANGUAGE_SETTINGS: 'Cambiar idioma',
    GET_IN: "Entrar",
    WELCOME: "Bienvenido",
    CREATE_ACCOUNT: "Crear cuenta",
    LOGIN: "Iniciar sesión",
    SIGN_IN: "Iniciar sesión",
    EMAIL: "Correo electrónico",
    PASSWORD: "Contraseña",
    LOGIN_SUCCESSFUL: "Inicio de sesión exitosa",
    FORGOT_PASSWORD: "Olvidaste la contraseña?",
    SIGN_UP: "Registrarse",
    USER_NAME: "Nombre de usuario",
    FIRST_NAME: "Nombre",
    LAST_NAME: "Apellido",
    PHONE_NUMBER: "Teléfono",
    CONTINUE: "Continuer",
    ADD_VEHICLE_DETAIL: "Vehículo",
    VIHICLE_NAME: "Marca",
    VIHICLE_COLOUR: "Color",
    LISCENSE_NUMBER: "Número de licencia",
    CAR_NUMBER: "Número de placa",
    TOTAL_SEATS_IN_CAR: "Total de asientos",
    TOTAL_SEATS: "Total de asientos",
    ENTER_YOUR_EXPERIENCE_IN_YEARS: "Años de experiencia",
    UPLOAD_YOUR_VEHICLE_PAPERS: "Sube la documentación de tu vehículo",
    SAVE: "Guardar",
    EMERGENCY_NUMBERS: "Números de emergencia",
    EMERGENCY_CALL: "Llamada de emergencia",
    NATIONAL_POLICE: "Policía nacional",
    EMERGENCY_HELPLINE: "Emergencias",
    FIRE: "Bomberos",
    AMBULANCE: "Ambulancia",
    CALL: "Llamada",
    VIEW_VEHICLE: "Vehículo",
    RATING: "Calificación",
    RATINGS: "Calificaciones",
    TRIP: "Viaje",
    TRIPS: "Viajes",
    RUTA_DRIVER: "Conductor de Ruta",
    YOU_HAVE_NOT_COMPLETED_ANY_RIDE: "¡Aún no has completado algún viaje! ",
    PROFILE: "Perfil",
    NOTIFICATION: "Notificaciones",
    YOU_DONT_HAVE_NOTIFICATION: "No tiene ninguna notificación",
    RIDE_REQUEST: "Solicitud de viaje",
    RIDE_REQUESTS: "Solicitudes de viaje",
    YOU_HAVE_NOT_ANY_REQUEST: "No hay solicitudes de reservación",
    PAYMENT: "Pago",
    CARD_NUMBER: "Número de tarjeta",
    ENTER_YOUR_CARD_NAME: "Ingrese el nombre que aparece en su tarjeta",
    CVV: "CVV",
    HISTORY: "Historial",
    SCHEDULE_BOOKING: "Reservaciones",
    YOU_HAVE_NOT_CREATED_ANY_SCHEDULE: "¡Ud. no ha hecho ninguna reservación!",
    FROM: "Desde",
    TO: "Hacia",
    PRICE: "Precio",
    SEAT: "Asiento",
    TIMING: "Hora",
    YOU_CANT_SELECT_PREVIOUS_TIME: "No puedes seleccionar un horario anterior",
    DATE: "Fecha",
    GO: "Aceptar",
    ENTER_LOCATION_NAME: "Ingresa la ubicación",
    LOGOUT: "Salir",
    SCHEDULE_DETAIL: "Reservaciones",
    SCHEDULE_DETAIL_SAVED: "Reservación guardada",
    TOTAL_SEATS: "Total de asientos",
    REMAINING_SEATS: "Asientos disponibles",
    DEPARTURE_DATE: "Fecha de partida",
    DEPARTURE_TIME: "Horario de partida",
    PRICE_PER_SEAT: "Precio por asiento",
    PENDING: "Pendiente",
    DELETE: "Borrar",
    COMPLETED: "terminé",
    NO_ANY_USER_BOOKED_YOU: "¡No tienes reservaciones!",
    HOW_MANY_SEATS_YOU_WANT: "¿Cuántos asientos requieres?",
    ENTER_NUMBER_OF_SEATS: "Ingresa el número de asientos",
    BOOK_NOW: "Reserva ahora",
    ALERT: "Aviso",
    YOUR_REQUEST_HAS_BEEN_SENT: "Tu solicitud ha sido enviada",
    BOOKING_REQUEST_SENT_FROM_USER_TO_RIDER: "Solicitud de reservación enviada del pasajero al conductor",
    BOOKING_REQUEST_RECIEVED: "Solicitud de reservación recibida",
    BOOKING_ACCEPTED_SUCCESSFULLY: "Reservación aceptada con éxito",
    BOOKING_REJECTED_SUCCESSFULLY: "Reservación rechazada con éxito",
    START_RIDE: "Iniciar el viaje",
    COMPLETE_RIDE: "Completar el viaje",
    ENTER_YOUR_REVIEW: "Dinos tu opinión",
    YOUR_RATING_ADDED_SUCCESSFULLY: "Tu calificación ha sido agregada con éxito",
    RIDE_COMPLETE: "Viaje completado",
    RIDE_START_NOW: "Tu viaje comienza ahora",
    YOUR_RIDE_REMINDER_START: "Inicio del recordatorio del viaje",
    USER_HAS_BEEN_UPDATED: "El perfil de usuario ha sido actualizado",
    USER_HAS_BEEN_REGISTERED: "El usuario ha sido registrado",
    USER_HAS_BEEN_DELETED: "El usuario ha sido borrado",
    DELETE: "Borrar",
    USER: "Usuario",
    NEW: "Nuevo",
    FETCHING_THE_POSITION_FAILED_PLEASE_ENABLE_THE_GPS_MANYALY: "No se pudo obtener la posición, habilita el GPS manualmente.",
    ACTIVE_RIDE: "Viaje activo",
    RIDE: "pasajero",
    TRIPS: "Viajes",
    EDIT_PROFILE: "Editar perfil",
    UPDATE: "Actualizar",
    SELECT_AVATAR: "Selecciona tu imagen de usuario",
    TAKE_PHOTO: "Tome una foto",
    CHOOSE_FROM_LIBRARY: "Examinar...",
    CANCEL: "Cancelar",
    ALLOW_RUTA_TO_ACCESS_PHOTOS_MEDIA_AND_FILE_ON_YOUR_DEVICE: "¿Permitir a Ruta el acceso a tus fotos, medios y archivos en tu dispositivo?",
    DENY: "Negar",
    ALLOW: "Permitir",
    CHOOSE_AN_ACTION: "Escoge una acción",
    OK: "OK",
    RATING: "Calificación",
    ACTIVE_SCHEDULE: "Reservación activa",
    NO_ACTIVE_SCHEDULE: "No hay viajes disponibles",
    BOOKING_SCHEDULE_NOT_FOUND: "No tienes reservaciones agendadas",
    BOOKING_REQUEST_ACCEPTED: "Solicitud de reservación aceptada",
    DRIVER_NAME: "Nombre del conductor",
    CONTACT: "Contacto",
    STATUS: "Estado",
    IN_PROCESS: "En proceso",
    ACCEPTED: "Aceptado",
    REJECTED: "Rechazado",
    DENIED: "Negado",
    HOURS: "Horas",
    MINUTES: "Minutos",
    SECONDS: "Segundos",
    RIDE_ROUTE: "Ruta de viaje",
    YOUR_RIDE_STARTS_NOW: "Tu viaje empieza ahora",
    RIDE_STARTS_NOW: "El viaje empieza ahora",
    YOUR_RIDE_IS_COMPLETED: "Tu viaje ha terminado",
    RIDE_IS_COMPLETED: "El viaje ha terminado",
    REVIEW_RATING: "Opinión",
    MAX_30_LETTERS_30_REMAINING: "Máximo 30 caracteres. 30 restantes. ",
    MAX_30_LETTERS: "Máximo 30 caracteres",
    REMAINING: "restantes",
    SEND_FEEDBACK: "Enviar opinión",
    GREAT: "Excelente",
    GOOD: "Bueno",
    OKAY: "Aceptable",
    YEARS_OF_EXPERIENCE: "años de experiencia",
    ACCEPT: "Aceptar",
    REJECT: "Rechazar",
    STARTED: "Iniciado",
    MIN_REMINDER: "Recordatorio de 30 minutos",
    NUMBER_OF_SEAT: "Número del asientos",
    PHONE: "Teléfono",
    BOOKED_SEATS: "Asientos reservados",
    PICKUP: "Ubicación de partida",
    DESTINATION: "Ubicación de destino",
    // NEW WORDS
    SIGN_IN_TO_START_YOUR_SESSION: "Ingresa tus credenciales para iniciar sesión",
    PLEASE_FIX_EMAIL_FORMATE: "Por favor corrige el formato de correo",
    CALL_THIS_NUMBER: "Llama a (este número)",
    A_CALL: "Una llamada",
    PACKAGE_DETAILS: "DETALLES DEL PAQUETE",
    PACKAGE_NAME: "Nombre del paquete",
    PACKAGE_VALUE: "Valor del paquete",
    PACKAGE_WEIGHT: "peso del paquete",
    RECIPIENT_NAME: "Nombre de la destinataria",
    RECIPIENT_NUMBER: "Número de destinatario",
    NAME: "Nombre",
    TYPE: "Escribe",
    CURRENT_LOCATION: "Ubicación actual",
    AVAILABLE_SEATS: "Asientos disponibles",
    NO_OF_SEATS: "No de asiento",
    UPLOAD_RIDER_PICTURE: "subir foto de piloto",
    MODEL: "Modelo",
    REGISTRATION_NUMBER: "Número de registro",
    SWITCH_LANGUAGE: "Cambiar de idioma"
  },
};

export default new LocalizedStrings(translations);