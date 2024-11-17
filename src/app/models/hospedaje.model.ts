export interface HospedajeDTO {
    descripcion: string;
    id: number;
    precioPorNoche: number;
    imagen: string;
    tipoHospedajeId: number;
    ciudadId: number;
    serviciosIds: number[];
  }
  
  export interface EditHospedajeDTO {
    descripcion: string;
    id: number;
    precioPorNoche: number;
    imagen: string;
    tipoHospedajeId: number;
    ciudadId: number;
    serviciosIds: number[];
  }