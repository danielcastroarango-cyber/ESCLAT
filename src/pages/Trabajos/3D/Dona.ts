export interface Imagen {

  nomen: string;
  imago: string;
  descriptione: string;
}

export const Dona: Imagen[] = [
  {
   
    nomen: "Forma Dona",
    imago: "FormaDona.png",
    descriptione: 
    "En primer lugar, se creó un objeto tipo torus al que se incrementaron las subdivisiones con el fin de aplicar el modificador Subdivision Surface y lograr una superficie lisa. Para conferirle un aspecto más natural, se procedió a deformar sus vértices, desplazándolos de manera conjunta hacia el exterior, generando así una forma orgánica y menos uniforme.",
  },
  {

    nomen: "Glaseado y chispas",
    imago: "Galseado.png",
    descriptione:
      "Para crear el glaseado, se duplicó el torus y se cortó por la mitad. A continuación, se aplicó el modificador Solidify para otorgarle mayor volumen. En Edit Mode, se modificaron los bordes desplazándolos hacia abajo; estas formas representarán posteriormente las gotas que se deslizan por el glaseado. Para obtener un acabado suave y uniforme, se aplicó nuevamente el modificador Subdivision Surface, al igual que en el torus original. En cuanto a las chispas, se modelaron en un contenedor independiente al que se le aplicó el modificador Array. Posteriormente, se agruparon con el glaseado, permitiendo que se adherieran a su superficie. A partir de este punto, es posible ajustar libremente las propiedades de distribución de las chispas para obtener el resultado visual deseado.",
  },
  {

    nomen: "Pocillo",
    imago: "Pocillo.png",
    descriptione:
      "Para complementar la dona, se diseñó una taza. Para su creación, es útil contar con una imagen de referencia que sirva de guía. Sin embargo, el procedimiento más habitual consiste en partir de un cilindro, el cual se modifica progresivamente hasta alcanzar la forma deseada. Una vez definida la geometría final, se aplica el modificador Subdivision Surface para obtener una superficie lisa y uniforme.",
  },
  {
    nomen: "Forma del café",
    imago: "Cafe.png",
    descriptione: "Para crear la superficie del café, se añadió un círculo al que se le generó una cara. Con el fin de lograr un aspecto más natural y orgánico, se insertaron subdivisiones adicionales y se desplazaron ligeramente hacia abajo, creando pequeñas irregularidades que aportan realismo a la forma.",
  },
   {
    nomen: "Platos",
    imago: "Platos.png",
    descriptione: "De manera opcional, se pueden añadir platos a la escena. Para ello, se crean nuevos círculos a los que se les insertan caras y se modifican progresivamente hasta obtener la forma deseada. Para conferirles volumen y grosor, es recomendable aplicar el modificador Solidify, asegurando así que los platos tengan un aspecto más realista y consistente dentro de la composición.",
  },
   {
    nomen: "Materiales",
    imago: "Materiales.png",
    descriptione: "Para aplicar color y textura a los objetos, se trabaja desde la pestaña Shading. Para asignar color, basta con seleccionar el objeto, acceder a sus propiedades de Materiales y definir el tipo de material y el color deseado. En cuanto a las texturas, el proceso es más complejo: se puede descargar una textura desde internet y cargarla en Blender para incorporarla al objeto. Posteriormente, se utiliza la pestaña de UV Editing para posicionar y ajustar la textura sobre la superficie. Además, si se desea modificar su apariencia o comportamiento, es posible hacerlo mediante el uso de nodos en la pestaña Shading, lo que permite un control más avanzado sobre el resultado final.",
  },
   {
    nomen: "Luces",
    imago: "Luces.png",
    descriptione: "Una vez asignados los materiales y texturas, se puede comenzar a montar la escena para el renderizado. El primer paso consiste en colocar las luces, las cuales serán fundamentales para crear la atmósfera y el ambiente deseados. A partir de este momento, el proceso se vuelve más creativo y flexible, permitiendo ajustes y decisiones que reflejen el estilo y la visión personal de quien realiza la composición.",
  },
   {
    nomen: "Preparación render",
    imago: "PreparacionR.png",
    descriptione: "Con la iluminación y la composición de la escena ya configuradas, se selecciona el motor de renderizado más adecuado según las capacidades del equipo o las necesidades del proyecto. A partir de este punto, se ajusta el ángulo de la cámara para encuadrar correctamente la escena y, finalmente, se procede a realizar el render.",
  },
   {
    nomen: "Render",
    imago: "Render.png",
    descriptione: "Una vez que la escena y la cámara estén configuradas según nuestras preferencias, se puede iniciar el render presionando F12 y esperar a que el proceso finalice. Durante esta etapa, es posible ajustar y modificar los distintos elementos de la escena y su composición, lo que permite generar múltiples renders y experimentar con diferentes resultados visuales hasta alcanzar la versión deseada.",
  },
 
];