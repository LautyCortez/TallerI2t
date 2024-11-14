export interface Usuario {
    id?: number;
    nombre: string;
    apellido: string;
    username: string;
    token?: string;
    email: string;
    password: string;
    tipoUsuarios: any[]; 
  }