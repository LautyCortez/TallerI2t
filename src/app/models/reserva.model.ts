export interface ReservaDTO {
    idHospedaje: number;
    idUsuario: number;
    fechaCheckIn: Date;
    fechaCheckOut: Date;
    cantNinos: number;
    cantAdultos: number;
    cantBebes: number;
    cantMascotas: number;
    importeTotal: number;
    fechaCreacion?: Date;
    fechaModificacion?: Date;
  }