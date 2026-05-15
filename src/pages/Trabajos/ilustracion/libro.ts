


export interface Ilustracion {
  id: number;
  nomen: string;
  imago: string;
  imagolay: string;
  galeria: string[];
  quote: string;
  descriptione: string;
}

export const ilustraciones: Ilustracion[] = [
  {
    id: 0,
    nomen: "Ilustración Editorial",
    imago: "Portada.png",
    imagolay: "Cubierta.png",
    galeria: ["Ilustracion_1pg.png", "Contraportada.png", "Guardas.png", "Cubierta.png", "DoblePagina_2.png", "DoblePagina_1.png" ],
    quote: "¿Por qué me evitan? ¿Mi rostro marchito te recuerda el sombrío espectro de la muerte?",
    descriptione:
      "Sección de ilustraciones hechas para el diseño del libro 1984 de George Orwell. Para este trabajo hice gran uso de técnicas analógicas, sobre todo gouache, dejando la parte digital únicamente para retoques, montaje y mockups.",
  },
  {
    id: 1,
    nomen: "Ilustración Digital",
    imago: "Casiqueno.png",
    imagolay: "Casiqueno_lay.png",
    galeria: ["Skull.png", "No se.png", "Bane.png", "Bull.png","Rebecca.png", "Krita.png"],
    quote:
      "Cuando te atrape, te sacar� los ojos y te los meter� en los pantalones para que puedas ver c�mo te pateo, �de acuerdo? �A continuaci�n usar� tu lengua para pintar mi barco!",
    descriptione:
      "Sección de ilustraciones digitales personales hechas en distintos programas de dibujo.",
  },
  {
    id: 2,
    nomen: "Sketches",
    imago: "Sketch.jpeg",
    imagolay: "Sketch_lay.jpeg",
    galeria: ["Sketch2.jpeg", "Sketch3.jpeg", "Sketch4.jpeg", "Sketch5.jpeg", "Sketch6.jpeg", "Sketch7.jpeg"],
    quote:
      "�Recuerdas la ocasi�n cuando se comi� mi pez dorado? Y mentiste y dijiste que nunca tuve un pez dorado. Entonces, �por qu� tom� el cuenco, Bart? �Por qu� tuve el cuenco?",
    descriptione:
      "Sección de dibujos rápidos, bocetos y estudios en mi sketchbook personal.",
  },
 
];



