export interface HospedajeDTO {
    descripcion: string;
    precioPorNoche: number;
    imagen: string;
    tipoHospedajeId: number;
    ciudadId: number;
    serviciosIds: number[];
  }
  
  export interface EditHospedajeDTO {
    descripcion: string;
    precioPorNoche: number;
    imagen: string;
    tipoHospedajeId: number;
    ciudadId: number;
    serviciosIds: number[];
  }