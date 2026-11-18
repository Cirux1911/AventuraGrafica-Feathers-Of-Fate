# 🕊️ Feathers of Fate

**Feathers of Fate** es un videojuego web de aventura narrativa interactiva desarrollado para el Proyecto Integrador de Funcionamiento de los Sistemas Digitales y Producción Multimedial. El jugador acompaña a una paloma que pierde su hogar cuando la municipalidad destruye el árbol donde vivía. Sus decisiones modifican el Honor, las alianzas y el final de la historia.

## Historia y estructura

La paloma atraviesa seis nodos de decisión, con tres opciones en cada uno, y puede llegar a cuatro finales principales. En su viaje puede ayudar a otros animales, evitar conflictos o causar problemas en la ciudad.

| Nodo | Situación | Opciones y efecto en Honor |
| --- | --- | --- |
| 1 | Tráfico urbano | A: ensuciar el casco de un motociclista (−2); B: aguantarse (0); C: ensuciar un auto (−1). |
| 2 | Comer mosca | A: comérsela (0); B: dejarla vivir (+1, mosca aliada); C: arrojarla a una telaraña (−1). |
| 3 | Ataque del hombre | A: vengarse (−2); B: escapar (0); C: alejar al hombre del tránsito (+1). |
| 4 | El gato callejero | A: alimentarlo (+1, gato aliado); B: ignorarlo (0); C: robarle la comida (−1). |
| 5 | El nido | A: expulsar a los pajaritos (−2); B: respetar el nido (+1); C: reforzarlo (+2, pajaritos aliados). |
| 6 | La decisión final | A: salvar al pájaro (+2); B: abandonarlo (−2); C: alertar a los trabajadores (+1). |

### Honor y consecuencia del nodo 3

La partida comienza con **0 puntos de Honor**. Cada decisión suma o resta los puntos indicados y la barra muestra el cambio tras elegir. Al entrar al nodo 3, el Honor acumulado determina cuál de las dos animaciones del piedrazo aparece:

- **−2 o menos:** la piedra golpea a la paloma en la cabeza y se registra `piedrazoRecibido`.
- **−1 o más:** la paloma evita la lesión.

El golpe es una consecuencia narrativa de las decisiones anteriores; no es otro sistema de puntos. Las pantallas de carga muestran la apariencia herida si recibió el golpe y la apariencia normal en caso contrario. **Tener Honor alto no cambia su aspecto:** si no recibió la piedra, conserva la imagen normal. La lesión permanece registrada aunque el Honor aumente después.

La decisión final también modifica el Honor **antes** de determinar el desenlace. Las opciones A y C llevan a **Un hogar para todos** con Honor final de +2 o más, o a **Una segunda oportunidad** si es menor. La opción B lleva a **Un hogar vacío** con Honor final de −1 o más, o a **El karma de la paloma** si es menor.

### Aliados y tiempo de decisión

La mosca se obtiene al dejarla vivir en el nodo 2, el gato al alimentarlo en el nodo 4 y los pajaritos al reforzar su nido en el nodo 5. Cada alianza se registra de forma independiente del Honor. En el **nodo 6** hay 10 segundos base para decidir y cada aliado conseguido agrega **5 segundos**: el jugador dispone de 10, 15, 20 o 25 segundos. Si el tiempo se agota, se elige automáticamente la opción B.

Los aliados participan además en la resolución narrativa según la decisión final: pueden colaborar en el rescate o ayudar a alertar a los trabajadores. Si la paloma abandona al pájaro, sus compañeros se quedan para ayudarlo. La cantidad de aliados determina también la variante del video del nodo 6; no cambia por sí sola cuál de los cuatro finales se obtiene.

## Pantallas y recursos

El juego incluye menú de inicio, introducción animada con opción de saltarla, seis escenas con video, pantallas de consecuencias, transiciones de carga y cuatro finales en video. Las pantallas de carga usan **imágenes estáticas** que combinan la apariencia de la paloma tras el nodo 3 y los aliados obtenidos. Se eligió este formato para reducir la cantidad y el peso de las animaciones necesarias.

Los videos de los nodos 1, 2, 4 y 5 duran aproximadamente 15, 20, 30 y 30 segundos, respectivamente. En el nodo 3 las opciones aparecen **después** de la animación y se dispone de 15 segundos. En el nodo 6 la duración depende de los aliados. El contador y los botones permiten tomar decisiones; las consecuencias muestran el cambio de Honor y, cuando corresponde, el aviso del aliado conseguido.

Las imágenes de carga de honor alto fueron creadas, pero el diseño actual emplea las de honor neutral para una paloma sin lesión y las de honor bajo para una paloma que recibió el golpe. En el código, la carga se elige mediante `piedrazoRecibido` y la combinación de aliados.

**Recursos pendientes:** imágenes específicas para las consecuencias de las opciones, menú de inicio definitivo y música de fondo para los nodos y finales. El juego ya permite indicar la imagen de cada consecuencia en la propiedad `imagen` de cada opción de `js/story.js`.

## Tecnologías y archivos

- **HTML5:** estructura inicial y carga de scripts.
- **CSS3:** pantalla completa, interfaz, botones, barra de Honor e indicadores.
- **JavaScript:** navegación, decisiones, temporizadores, Honor, aliados y selección de finales.
- **Adobe Flash:** creación de las animaciones en archivos editables `.fla`. Las escenas exportadas a `.mp4` son las que reproduce el navegador. La animación del piedrazo del nodo 3 se utiliza para mostrar la consecuencia según el Honor acumulado.

```text
Feathers-of-Fate/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── story.js
│   └── main.js
└── assets/
    ├── animaciones/
    └── img/
        └── cargas/
```

Para jugar localmente, abrir `index.html` en un navegador. Las rutas de imágenes y videos se resuelven desde la raíz del proyecto; los nombres y extensiones deben coincidir con los archivos. Los videos deben estar en un formato reproducible por el navegador.

## Equipo y estado del proyecto

**Instituto P-029 Del Carmen — 4.º Informática.** PFS de Funcionamiento de los Sistemas Digitales y Producción Multimedial.

| Integrante | Aporte en esta etapa |
| --- | --- |
| Ciro Griffa | Coordinación, integración de las animaciones de los nodos y cambios de programación para reproducirlas y gestionar las pantallas. |
| Tomás Cardozo | Animaciones de las escenas de los nodos. |
| Ramiro Herrera | Revisión del código e incorporación del icono de la pestaña del navegador. |
| Iván Radoeff | Imágenes estáticas de las pantallas de carga. |

Las responsabilidades se ajustaron durante el desarrollo según las tareas disponibles; el sonido y la música de fondo continúan pendientes. El Sprint 4 presenta recorridos jugables y la consecuencia de la piedra implementada. Antes de la entrega final faltan los recursos señalados y repetir las pruebas completas con ellos integrados.

