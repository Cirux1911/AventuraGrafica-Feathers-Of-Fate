# 🕊️ Feathers of Fate
### Plumas del Destino

**Feathers of Fate** es un videojuego web de aventura narrativa interactiva basado en decisiones, desarrollado como parte del Proyecto Integrador de Funcionamiento de los Sistemas Digitales y Producción Multimedial.

El jugador controla a una paloma que pierde su hogar debido a la intervención de la municipalidad y debe emprender una aventura por la ciudad para encontrar un nuevo lugar donde vivir.

Durante su recorrido, deberá tomar decisiones que modificarán su **Honor**, sus relaciones con otros animales y el desenlace de la historia.

## 📖 Historia

Todo comienza cuando la municipalidad destruye el árbol donde vivía nuestra protagonista, dejándola sin hogar.

Obligada a abandonar su antiguo nido, la paloma emprende una travesía por la ciudad, enfrentándose a diferentes situaciones que pondrán a prueba su comportamiento.

Durante su viaje podrá ayudar a otros animales, conseguir aliados, evitar conflictos o provocar caos en la ciudad.

El objetivo principal será encontrar un nuevo hogar, pero el destino de la protagonista dependerá de las decisiones que tome el jugador.

## 🎮 Género y temática

- **Género:** Aventura narrativa interactiva con ramificación de decisiones (*Branching Narrative*).
- **Temática:** Moralidad animal, humor absurdo y caos urbano.
- **Plataforma:** Navegador web.
- **Modalidad:** Un jugador.
- **Estructura:** Seis nodos de decisión y cuatro finales principales.

## ⚙️ Mecánicas principales

### Barra de Honor

El juego contará con una variable global numérica llamada `honor`, que representará el comportamiento moral de la paloma.

La protagonista comenzará con **0 puntos de Honor**, y sus decisiones podrán aumentar o disminuir esta puntuación.

| Nivel | Puntuación | Descripción |
|---|---|---|
| Honor bajo | −2 o menos | Comportamiento egoísta, vengativo o perjudicial. |
| Honor medio | Entre −1 y +1 | Comportamiento neutral o combinación de buenas y malas acciones. |
| Honor alto | +2 o más | Comportamiento solidario y respetuoso hacia los demás. |

Las acciones necesarias para sobrevivir no siempre disminuirán el Honor, ya que se diferenciará entre actuar por necesidad y causar daño intencionalmente.

**La decisión final también modificará el Honor acumulado y sus puntos se tendrán en cuenta para determinar el desenlace de la aventura.**

### Consecuencia narrativa: Karma

Dentro de la historia, algunas situaciones podrán desarrollarse de manera diferente según el Honor acumulado.

Por ejemplo, en el tercer nodo, un hombre que cree que la paloma es un robot espía del gobierno le arroja una piedra.

- **Honor bajo (−2 o menos):** La piedra lastima el ojo de la paloma.
- **Honor medio o alto (−1 o más):** La piedra no le provoca esa lesión.

Esta situación representa el karma como una **consecuencia narrativa de las decisiones anteriores**, sin constituir un sistema o variable independiente.

### Sistema de aliados

A lo largo de la aventura, la paloma podrá establecer relaciones con otros animales.

Los aliados se obtendrán mediante decisiones específicas y serán independientes del Honor acumulado.

| Aliado | Cómo conseguirlo | Participación en la escena final |
|---|---|---|
| 🪰 Mosca | Dejarla vivir en el nodo 2. | Distrae a los trabajadores municipales. |
| 🐈 Gato callejero | Alimentarlo en el nodo 4. | Ayuda a romper la red con sus garras. |
| 🐦 Pajaritos | Ayudar a reforzar su nido en el nodo 5. | Colaboran en el rescate del pájaro atrapado. |

Si el jugador consigue a los tres aliados, podrá presenciar una variante especial de la escena final en la que todos colaboran.

Si no consigue aliados, la paloma deberá actuar por su cuenta.

Las relaciones con los animales también podrán modificarse dependiendo de la última decisión del jugador.

## 🌳 Estructura narrativa

La historia estará organizada en **seis nodos de decisión**. Cada nodo presentará una situación y tres opciones.

### Nodo 1: Tráfico urbano

La paloma comienza su recorrido por la ciudad después de perder su hogar.

**Decisiones:**

- **A.** Hacer caca sobre el casco de un motociclista. **Honor −2.**
- **B.** Aguantarse hasta llegar a un lugar seguro. **Honor 0.**
- **C.** Apuntar a un auto estacionado. **Honor −1.**

### Nodo 2: Comer mosca

La paloma encuentra una mosca mientras busca comida.

**Decisiones:**

- **A.** Comerse la mosca para saciar el hambre. **Honor 0.**
- **B.** Dejarla vivir y continuar. **Honor +1.** La mosca se convierte en aliada.
- **C.** Arrojarla hacia una telaraña por diversión. **Honor −1.**

### Nodo 3: Ataque del hombre loco

Un hombre confunde a la paloma con un robot espía del gobierno y le arroja una piedra.

**Decisiones:**

- **A.** Atacar al hombre para vengarse. **Honor −2.**
- **B.** Escapar volando. **Honor 0.**
- **C.** Alejar al hombre del tránsito sin lastimarlo. **Honor +1.**

En esta escena también aparece una consecuencia narrativa relacionada con el karma.

### Nodo 4: El gato callejero

La paloma encuentra un gato hambriento y cansado en un callejón.

**Decisiones:**

- **A.** Darle alimento. **Honor +1.** El gato se convierte en aliado.
- **B.** Ignorarlo y continuar. **Honor 0.**
- **C.** Robar la comida y huir. **Honor −1.**

### Nodo 5: El nido

La paloma encuentra un nido ocupado por una familia de pajaritos.

**Decisiones:**

- **A.** Expulsar a los pajaritos. **Honor −2.**
- **B.** Respetar el nido y buscar otro lugar. **Honor +1.**
- **C.** Ayudar a reforzar el nido. **Honor +2.** Los pajaritos se convierten en aliados.

### Nodo 6: La decisión final

La paloma descubre que la municipalidad está por derribar otro árbol, cerca del cual hay un pequeño pájaro atrapado en una red.

**Decisiones:**

- **A.** Salvar al pájaro directamente. **Honor +2.**
- **B.** Abandonar al pájaro. **Honor −2.**
- **C.** Alertar a los trabajadores municipales. **Honor +1.**

Los aliados conseguidos durante la aventura podrán participar en esta escena.

La decisión elegida y el **Honor total**, incluyendo los puntos de la última decisión, determinarán el desenlace.

## 🏆 Finales posibles

El juego contará con cuatro finales principales.

| Final | Condición |
|---|---|
| **Final 1: Un hogar para todos** | Salvar al pájaro (A o C) y terminar con Honor alto (+2 o más). |
| **Final 2: Una segunda oportunidad** | Salvar al pájaro (A o C) y terminar con Honor medio o bajo (+1 o menos). |
| **Final 3: Un hogar vacío** | Abandonar al pájaro (B) y terminar con Honor medio o alto (−1 o más). |
| **Final 4: El karma de la paloma** | Abandonar al pájaro (B) y terminar con Honor bajo (−2 o menos). |

### Cálculo del desenlace

El Honor final se obtendrá sumando el Honor acumulado durante la aventura y los puntos correspondientes a la última decisión.

**Honor final = Honor acumulado + puntos de la decisión final.**

Por lo tanto, la última decisión podrá cambiar el nivel de Honor de la paloma y modificar el final que obtendrá.

Los aliados conseguidos también influirán en el desarrollo narrativo de cada desenlace, aunque no determinarán por sí solos cuál de los cuatro finales principales se desbloquea.

## 💻 Tecnologías previstas

El videojuego se desarrollará utilizando las siguientes tecnologías web:

- **HTML5:** Estructura y contenido de las pantallas.
- **CSS3:** Diseño visual, estilos, interfaz y animaciones.
- **JavaScript:** Lógica de decisiones, actualización del Honor, navegación, aliados y selección de finales.

## 🧩 Funcionamiento previsto

El juego contará con:

- Pantalla de inicio.
- Introducción narrativa.
- Seis escenas de decisiones.
- Pantallas de consecuencias.
- Barra de Honor.
- Registro de aliados.
- Cuatro finales diferentes.
- Opción para volver al menú una vez el jugador haya terminado el juego.

Cada decisión seguirá la estructura:

**Decisión → Cambio de variables → Consecuencia → Nueva situación.**

## 📁 Estructura prevista del proyecto

La estructura inicial del proyecto podrá organizarse de la siguiente manera:

```text
Feathers-of-Fate/
│
├── index.html
├── README.md
│
├── CSS/
│   └── styles.css
│
├── JS/
│   └── main.js
│
└── ASSETS/
    ├── images/
    ├── audio/
    └── fonts/
```

Esta estructura es una propuesta inicial y podrá modificarse durante el desarrollo.

## 👥 Equipo de desarrollo

**Instituto P-029 "Del Carmen"**

**Curso:** 4° Informática

**Proyecto Integrador:** Funcionamiento de los Sistemas Digitales y Producción Multimedial.

| Integrante | Responsabilidad principal |
|---|---|
| Ciro Griffa | Líder del proyecto |
| Tomás Cardozo | Diseño |
| Ramiro Herrera | Programación |
| Iván Radoeff | Música y sonido |

Todos los integrantes colaborarán en las distintas áreas del proyecto, aunque cada uno tendrá una responsabilidad principal.

## 🚧 Estado del proyecto

**Sprint 2: Preproducción y estructura.**

Actualmente, el equipo ya planificó la estructura narrativa, el diseño visual, las pantallas y las funcionalidades del videojuego.

Durante las próximas etapas se comenzará con el desarrollo de la aplicación web, la implementación de las decisiones y la integración de los recursos gráficos y sonoros.