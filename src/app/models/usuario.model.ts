export interface Usuario {
    telefono: any;
    id?: number;
    nombre: string;
    apellido: string;
    username: string;
    fecha_nacimiento: Date;
    token?: string;
    email: string;
    password: string;
    tipoUsuarios: any[]; 
  }