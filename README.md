# FOTOGRAMAS QUE PERMANECEN 📽️

## Mini sitio Web de recomendaciones cinematográficas generado en conjunto con la IA.

---

## Descripción general:
* ¿Qué voy a recomendar? <br> Películas
* ¿A quién va dirigida la página? <br> Cinéfilos, personas que disfruten viendo películas con tramas interesantes, sustanciosas, de distintos géneros, que aprecien distintos estilos cinematográficos.
* Lo dividiré en géneros de película y cada sección contendrá:
    * Nombre de la película
    * Director
    * Elenco principal
    * Vibes de la película
    * Clasificación
    * Advertencias de contenido
    * Sinopsis
    * Puntuación en Rotten Tomatoes
    * Por qué la recomiendo
    * Dónde ver
    * Detalles técnicos
    * Otras recomendaciones relacionadas
* ¿Qué quiero que suceda cuando el usuario interactúe con mi página? <br> Qué pueda navegar entre los distintos géneros de película, pueda dar click al que desee y se desplieguen todas las opciones de películas recomendadas de ese género, luego que pueda dar click a alguna y encuentre toda la información detallada acerca de la película.

---

## Tecnologías utilizadas:
* HTML
* CSS
* Bootstrap
* JavaScript
* Git
* GitHub
* IA utilizada: Perplexity.ai

---

## Documentación de Prompts:

### PROMPT 1

* ¿Qué necesitaba? <br> Complementar la información que anteriormente escribí para poder empezar a planear la creación de mi página y ver si la IA tenía alguna recomendación extra para agregar.
* Prompt utilizado: <br> Estoy creando una página web sencilla con HTML, CSS y Bootstrap con la temática de recomendación de películas, ésta es la premisa inicial antes de empezar a construir mi código, tienes alguna recomendación extra o algo que pueda complementar a la idea? No me des código ni crees nada, simplemente quiero ideas creativas para yo crear la página por mi misma (Pegué la información escrita en preguntas iniciales).
* ¿Qué respondió la IA? <br> [Respuesta](./respuestasIA/respuestaAI1.pdf)
* ¿Qué parte utilizaré? <br> Elegiré uno de los nombres que me recomendó, como “Fotogramas que permanecen”. También elegiré nombres creativos para cada sección como “Películas para llorar por tu ex”. Igual añadiré algunas secciones que me recomendó como vibes de la película, advertencias de contenido y recomendaciones relacionadas.

### PROMPT 2

* ¿Qué necesitaba? <br> Después de terminar mi HTML y CSS quería ver qué me podía proponer la IA para que mi código se optimizara.
* ¿Qué intenté hacer? <br> Quería más interacción en las tarjetas de mi página y también que me ayudara a centrar los botones principales y los off canvas para que todo resultara más armonioso.
* Prompt utilizado: <br> Estoy creando una página web sencilla con HTML, CSS y Bootstrap con la temática de recomendación de películas, te compartiré los archivos html y css, podrías ayudarme a optimizar mi código para que el diseño en general se vea totalmente profesional?  pon un comentario señalando cada cambio que realizaste y explica cómo funciona.
* ¿Qué respondió la IA? <br> [Respuesta](./respuestasIA/respuestaAI2.pdf)
* ¿Qué parte utilizaré? <br> Revisé la parte del CSS que mejora la responsividad de mi página y lo quiero implementar, también los diseños de sombreado de tarjetas y la paleta de colores, pero aún no me queda del todo claro todo lo que hizo, así que le pediré más detalles para decidir qué utilizar y qué no.

### PROMPT 3

* ¿Qué necesitaba? <br> Especificar la respuesta anterior para poder entender mejor las mejoras sugeridas al CSS.
* ¿Qué intenté hacer? <br> Implementar las mejoras en mi página para que no se viera comprometida la responsividad.
* Prompt utilizado: <br> Con el CSS que me acabas de sugerir, por favor especifica dentro de cada cambio que realizaste, cómo funciona cada una de las líneas de código, detalla todo de forma que cualquier persona sin previo conocimiento respecto a CSS pueda entenderlo. El objetivo es revisar el código sugerido y decidir qué cambios voy a implementar.
* ¿Qué respondió la IA? <br> [Respuesta](./respuestasIA/respuestaAI3.pdf)
* ¿Qué parte utilizaré? <br> Me creó una explicación ampliamente detallada y didáctica respecto a cada línea de código que me puso. Voy a utilizar todos los cambios que me recomendó, ya que al leerlos los entiendo a la perfección y son herramientas totalmente valiosas que quiero tener a la mano para poder utilizarlas en un futuro. Prácticamente me dio un manual avanzado de CSS totalmente entendible para un principiante, con muchísimas funciones.

### PROMPT 4

* ¿Qué necesitaba? <br> Quería tener toda la información antes mencionada a mi disposición, ya que la encuentro de gran valor para mi aprendizaje y para mi futuro, ya que comience a trabajar, así que quería tener toda la clase detallada con absolutamente toda la información que la IA me proporcionó, pero en mi archivo de CSS.
* ¿Qué intenté hacer? <br> Que la información que me proporcionó la IA anteriormente quedara dentro de un solo archivo CSS para poder utilizarla en un futuro.
* Prompt utilizado: <br> Crea por favor un CSS con todo el código completo, ahora incluyendo como comentario cada línea de información que me acabas de proporcionar con cada línea de código, no omitas nada, quiero guardar absolutamente toda la información que me diste para poder usarla como un glosario de las funciones que puedo utilizar en CSS para el futuro.
* ¿Qué respondió la IA? <br> [Respuesta](./respuestasIA/respuestaAI4.pdf)
* ¿Qué parte utilizaré? <br> Quiero implementar todo, para poder consultarlo en un futuro, ya que es como una clase de CSS personalizada.

### PROMPT 5

* ¿Qué necesitaba? <br> Al revisar el código noté 3 errores principales, intenté arreglarlos y pude solucionar el primero, los otros dos no logré solucionarlos pero sospechaba de dónde podía provenir la falla.
* ¿Qué intenté hacer? <br> Al dar click en el menú hamburguesa el menú no se desplegaba correctamente, se quedaba detrás del body, también noté que los posters de las películas se cortaban, no estaban completos; por último y el más importante, cuando ingresaba al offcanvas de la información individual de la película, se quedaba parpadeando la página y no me respondía. 
* Prompt utilizado: <br> Dame de nuevo el código completo con toda la información que pusiste, no omitas nada, solamente quiero tres cosas diferentes:
    1.	En .navbar quité la línea de código backdrop-filter: blur(10px); ya que hacía que al dar click al botón hamburguesa, el menú desplegable no se visualizara completamente, quité esa línea y se resolvió.
    2.	Quiero que los posters de las películas en los carruseles se vean completos, que no se corten, que se visualicen completamente.
    3.	Cuando abro el offcanvas de la información individual de la película, la página no responde adecuadamente, sospecho que el error tiene qué ver con alguna función de la navbar o tal vez en la configuración de row y col.
* ¿Qué respondió la IA? <br> [Respuesta](./respuestasIA/respuestaAI5.pdf)
* ¿Qué parte utilizaré? <br> Implementé los cambios con los dos primeros errores, ya que los solucionó adecuadamente, sin embargo el error 3 no lo solucionó. Más adelante investigando pude encontrar qué línea del CSS es la que estaba fallando y la corregí.

---

## Código generado vs código propio

* ¿Qué generó la IA? <br> Una explicación extensa y  detallada del CSS para poder optimizar lo que ya tenía.
* ¿Qué modifiqué? <br> Encontré algunos errores que investigué, y pude corregir esas líneas de código que la IA me proporcionó para poder mejorar el funcionamiento y quitar los errores.
* ¿Qué concepto nuevo aprendí gracias a la IA? <br> Fue como un mini curso intensivo donde aprendí muchísimas más funciones, sobre todo en el CSS, para en un futuro poder explorar y manejar mejor mi código. Reforcé muchos conceptos, aprendí muchísimos más nuevos, y me llevo toda una explicación detallada y simple para futuras consultas.
* ¿Hubo algún momento en que la IA generó código que no comprendía? <br> Si, al principio me generó todo el CSS completo sin explicarme tan detalladamente, pero con los refinamientos de prompts pude obtener prácticamente una clase completa de CSS.