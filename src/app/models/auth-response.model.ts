export interface AuthResponse {
    token: string; // El token JWT que se recibe al iniciar sesión
    username: string; // Nombre de usuario del usuario autenticado
    email: string; // Correo electrónico del usuario
    nombre: string; // Nombre del usuario
    apellido: string; // Apellido del usuario
    fecha_nacimiento: string; // Fecha de nacimiento del usuario
    fecha_creacion: string; // Fecha de creación de la cuenta
    fecha_modificacion?: string; // Fecha de la última modificación (opcional)
    tipoUsuarios: any[]; // Array de tipos de usuario asociados al usuario
}