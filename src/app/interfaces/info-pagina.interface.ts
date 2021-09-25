export interface infoPagina {
  titutlo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: Equipotrabajo[];
}

export interface Equipotrabajo {
  nombre?: string;
  apellido?: string;
  dpi?: string;
  dependientes?: Dependiente[];
}

export interface Dependiente {
  nombre?: string;
  apellido?: string;
  dpi?: string;
}