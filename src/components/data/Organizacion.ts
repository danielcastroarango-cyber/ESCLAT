export type MapZone = {
  id: string
  title: string
  label: string
  eyebrow: string
  copy: string
  details: string[]
  x: number
  y: number
  width: number
  height: number
}

export const mapZones: MapZone[] = [
  {
    id: 'escenario-norte',
    title: 'Escenario norte',
    label: '01',
    eyebrow: 'Musica',
    copy: 'Zona principal para directos de tarde, visuales de gran formato y primeras sesiones del recorrido.',
    details: ['Backline y control tecnico', 'Acceso rapido desde entrada', 'Aforo abierto'],
    x: 505,
    y: 198,
    width: 277,
    height: 233,
  },
  {
    id: 'patio-central',
    title: 'Patio central',
    label: '02',
    eyebrow: 'Encuentro',
    copy: 'Espacio de descanso y reunion entre bloques del festival, pensado para circular sin romper el flujo.',
    details: ['Punto de agua', 'Zona de sombra', 'Conexion con talleres'],
    x: 629,
    y: 431,
    width: 153,
    height: 275,
  },
  {
    id: 'galeria',
    title: 'Galeria inmersiva',
    label: '03',
    eyebrow: 'Arte digital',
    copy: 'Sala para piezas audiovisuales, instalaciones luminicas y pases de menor aforo durante todo el dia.',
    details: ['Recorrido continuo', 'Sonido direccional', 'Entrada controlada'],
    x: 942,
    y: 197,
    width: 188,
    height: 386,
  },
  {
    id: 'mercado',
    title: 'Mercado y barras',
    label: '04',
    eyebrow: 'Servicios',
    copy: 'Zona de comida, bebida y pequenas paradas para reponer energia antes de volver a los escenarios.',
    details: ['Barras principales', 'Food trucks', 'Mesas altas'],
    x: 942,
    y: 711,
    width: 305,
    height: 105,
  },
  {
    id: 'escenario-sur',
    title: 'Escenario sur',
    label: '05',
    eyebrow: 'Noche',
    copy: 'Bloque de sesiones nocturnas con formato club, visuales cerrados y acceso desde el eje inferior.',
    details: ['Cabina DJ', 'Pantalla vertical', 'Salida hacia servicios'],
    x: 943,
    y: 1229,
    width: 147,
    height: 240,
  },
  {
    id: 'talleres',
    title: 'Talleres y charlas',
    label: '06',
    eyebrow: 'Programa',
    copy: 'Aulas para actividades de organizacion, charlas cortas y encuentros con colectivos invitados.',
    details: ['Mesas modulares', 'Proyector', 'Aforo reducido'],
    x: 1134,
    y: 1227,
    width: 118,
    height: 198,
  },
  {
    id: 'acceso-principal',
    title: 'Acceso principal',
    label: '07',
    eyebrow: 'Entrada',
    copy: 'Punto de llegada al recinto, acreditaciones y primera orientacion para moverse por Las Naves.',
    details: ['Control de entradas', 'Pulseras y acreditaciones', 'Informacion general'],
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
]
