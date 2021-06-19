# DIU_TrabajoFinal-2021
## PARTE II: Caso de estudio. Web YUZIN
(re)diseño de la web para una empresa de divulgación de eventos culturales partiendo de un diseño ya existente: Yuzin.

----- 

# PASO 1. Análisis de diseño actual 

## 1.1 UX Desk Research & Analysis 

#### 1.1.a Análisis Competencia

Después de probar Yuzin se han buscado otras páginas con las mismas funcionalidades o similares y se ha decidido hacer una comparación entre ellas para encontrar puntos débiles y fuertes en cuanto a diseño y funciones clave. 

Ya que Yuzin muestra eventos culturales de Granada, Sevilla y Málaga se va ha realizar la comparación entre webs de divulgación de eventos culturales de estas ciudades:
- Granada: [Granadaescultura](https://granadaescultura.com/)
- Sevilla: [onSevilla](https://onsevilla.com/) 
- Málaga: [GEN Málaga](https://www.genmalaga.com/)

También se va a incluir en la comparación a [Eventbrite](https://www.eventbrite.es/), como una página más genérica en cuanto a tipo de eventos y lugar pero que destaca por su popularidad a día de hoy.


|         | [Yuzin](https://yuzin.com/) | [Granadaescultura](https://granadaescultura.com/) | [onSevilla](https://onsevilla.com/) | [GEN Málaga](https://www.genmalaga.com/) |[Eventbrite](https://www.eventbrite.es/) |
|------|------|------|-------|-------|------|
|Contenido responsive  |  ❌ | ✅ |  ✅ | ✅ |  ✅ |
|Multidiomas| ❌ | ❌ | ❌ | ❌ | ✅ |
|Buscador  | ✅ | ✅  | ❌ | ✅ | ✅ |
|Mapa del sitio web  | ❌ | ✅  | ❌ | ❌| ✅ |
|Formulario de contacto |  ✅ | ✅ | ✅ |  ✅ | ❌ |
|Informaación RRSS | ✅ | ❌ | ✅ | ✅ | ✅ |
|Chat online| ❌ | ❌ | ❌ | ❌ | ❌ |
|Información de los eventos| ✅  | ✅ | ✅  | ✅ | ✅ |
|Mapa de localización del evento| ❌ | ✅ | ❌ | ✅ | ✅ |
|Distribuido por fechas (1)| ❌ | ✅ | ✅ | ✅ | ✅ |
|Filtrar por categoría de eventos| ✅ | ✅ | ✅ | ✅ | ✅ |
|Filtrar por zonas dentro de una ciudad| ❌ | ❌ | ❌ | ✅ | ✅ |
|Crear eventos (promotor cultural) | ✅ | ✅ | ✅ | ✅ | ✅ |
|Compra directa de entradas | ❌ | ❌ | ❌ | ❌ | ✅ |
|Ofrece cuenta premium o de asociado (promotores) | ❌ | ❌ | ❌ | ❌ | ✅ |
|Ofrece cuenta premium o de asociado (asistentes) | ✅ | ❌ | ❌ | ❌ | ❌ |
|Muestra tarifas (2)| ✅ | ❌ | ❌ | ❌ | ✅ |
|Ofrece un formato revista digital | ✅ | ❌ | ❌ | ❌ | ❌ |

*(1) Esta característica se refiere a que se muestran los eventos según fechas por ejemplo: eventos de hoy, de esta semana, de este mes, etc en un mismo apartado y bien definido.*

*(2) En caso de que se ofrezca asociarse o una cuenta premium*

*Conclusión*: Como puntos fuertes Yuzin ofrece las funcionalidades más destacadas de este tipo de webs: Consulta o creación de eventos, formularios de contacto, buscador y filtros y además incluye la posibilidad de asociarse y toda la información relevante a lo mismo y como distinción promociona las actividades en un formato revista digital también. Como puntos débiles no tiene un diseño de contenido responsive y los eventos no están distribuidos por fechas (Semana o mes).

#### 1.1.b Personas

Otro modo de conocer puntos fuertes y débiles de la web es a partir de experiencias de usuario con la misma. Para ello se han creado dos usuarios ficticios, Ángel y Carmen, dos personas sin experiencia en este ámbito y de dos generaciones diferentes, ya que la búsqueda de eventos no es algo propio de ninguna generación en específico se han decidido estos usuarios para tener una vista general de las impresiones a primera vista de cada una de las dos.

<img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Personas/Angel.png" width="100%">

<img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Personas/Carmen.png" width="100%">

#### 1.1.c User Journey Map

<img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Personas/AngelJourney.png" width="100%">

<img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Personas/CarmenJourney.png" width="100%">

#### 1.1.d Usability Review

Se ha realizado un informe de usabilidad con el objetivo de concluir el análisis de uso y experiencia de usuario con la web. Para ello se ha hecho uso de [este documento](https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Usability-review.pdf).

La puntuación obtenida es de 58/100: Moderate.

#### Conclusión:

La web no tiene una página de inicio que permita conocer la intención de Yuzin lo cual crea una primera impresión confusa. La posibilidad de obtener las actividades en la revista digital es una funcionalidad que caracteriza a la web pero que queda oculta por el resto de funcionalidades y servicios. Los eventos no están organizados con ningún criterio específico, no se distingue cuando acaban los eventos de un mes y empiezan los de otro mes, no hay idiomas alternativos y en algunas pantallas hay dos formularios de filtrado diferentes y no queda claro cuál usar. El diseño no es responsive, las imágenes no se adpatan a los contenedores de las mismas, en algunos casos el contraste de colores dificulta un poco la visión y no hay ninguna guía ni instrucciones para seguir la web.

## 1.2 Insights

#### 1.2.a Feedback Capture Grid

A partir del análisis anterior se sintetizan las conclusiones e **insights** a partir de la siguiente malla receptora de información:


<img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/FeedbackCaptureGrid.png" width="100%">

## 1.3 Diseño visual del producto actual

En este apartado se recoge información del diseño actual de la web de Yuzin: logotipo, paleta de colores y tipografía actual.

#### 1.3.a Logotipo

| <img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Dise%C3%B1o%20actual/YUZIN-RGB-V1-positivo-color.png" width="30%"/> | <img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Dise%C3%B1o%20actual/YUZIN-RGB-V4-negativo-color-300x293.png" width="200%"/>| 
|------------------|---------------------|

#### 1.3.b Paleta de colores

| <img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Dise%C3%B1o%20actual/colorscheme.png" width="100%"/> 
|------------------|


#### 1.3.c Tipografía

Su fuente actual es Verdana:

| <img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Dise%C3%B1o%20actual/tipografia.png" width="60%"/> 
|------------------|

## 1.4 Evaluación de Accesibilidad 

Para finalizar con el análisis del diseño actual se realiza una evaluación de accesibilidad con el objetivo de conocer problemas y errores de la página actual para poder definir una conclusión completa y argumentada de la misma y sirva de ayuda en la parte de rediseño.

### HEURISTICA

#### 1.¿Tiene información de accesibilidad?
No posee información de accesibilidad.


#### 2- ¿Tiene errores las pautas de WCAG?

Mediante la herramienta online *WAVE* se obtienen lo siguiente:

<img src="https://github.com/rmr00/DIU_TrabajoFinal-2021/blob/main/Accesibilidad/wave.png" width="20%"/>

- Los 5 errores se deben a:
  - 3 ausencias de texto alternativo,
  - 1 etiqueta ausente.
  - 1 botón vacío.

- Los errores de contraste se deben al uso de un fondo blanco con texto naranja.

#### 3-Legibilidad y comprensión del contenido y layout (omitiendo uso de JS y/o CSS) 
Omitiendo uso de JS y CSS mediante la herramienta *Web Developer Plugin* su visualización es correcta.


#### 4-Comportamiento con ampliación de tamaño de letra
Si se amplía la letra se desestructura la pantalla de inicio.


#### SIMULACION ACCESIBILIDAD

Mediante la herramienta  Web Disability Simulator  se concluye que la web tiene un comportamiento óptimo en el ámbito de accesibilidad, destacando que en caso de  personas que padecen parkinson pueden tener problemas a la hora de seleccionar botones o enlaces por su tamaño. 

## 1.5 Conclusión


Contestando las preguntas de la hipótesis al rediseño que se realizó en 2019/2020:
#### ¿ Consideras que es adecuado? 

Considero que el rediseño era importante realizarlo para actualizar la interfaz y cambiar de un diseño más clásico a uno más actual.

####¿Se ha aplicado bien el rediseño para mejorar la experiencia de usuario ?¿Mejorarías algo?

Tras el estudio realizado en esta parte queda clara que la experiencia de usuario no es del todo positiva debido a las pequeñas inconsistencias de la página mencionadas anteriormente, como es el hecho de no mostrar en la página inicial la intención de la web, cosa que sí hacía la web antigua en la que quedaba claro que se trataba de una agenda cultural. Además está el punto negativo de que el diseño no sea responsive ya que limita mucho la experiencia de usuario.

Mejoraría la distribución lógica de la web, teniendo 2 funcionalidades básicas:
- Agenda cultural: para promocionar eventos o espacios culturales.
- Club cultural: como comunidad cultural para compartir opiniones o conocimientos culturales.

Centraría el diseño en estas dos funcionalidades de manera que en la página inicial se incluya el propósito de la web y estos dos servicios diferenciados, por un lado un apartado de eventos populares y por otro lado opiniones populares.

Además en la sección de eventos mejoraría la organización de los mismos diferenciando bien el orden cronológico entre estos y en el caso de un evento concreto mostraría una galería de fotos y un pequeño mapa con su localización exacta.

En el apartado de club cultural añadiría filtros sobre los distintos temas de los que se discuten y una búsqueda sobre los mismos.

----- 

# PASO 2. Rediseño

## 2.1 Estructura

#### 2.1.a SiteMap

#### 2.1.b Labelling

#### 2.1.c Prototipo Lo-FI Wireframe

## 2.2 Mi UX-Case Study (diseño)

#### 2.2.a Logotipo

#### 2.2.b Paleta de colores

#### 2.2.c Tipografía

#### 2.2.d Mockup
