window.FOF_DATA = {
  imagenes: {
    menu: './assets/img/menuArbol.png',
    paloma: './assets/img/menuPigeon1.png',
    palomaHover: './assets/img/menuPigeon2.png',
    palomaVuelo: './assets/img/menuVolando.webp',
    efectoMenu: './assets/img/efectoMenu.png',
    introduccion: './assets/img/intro.png',
    loading: './assets/img/loadingpaloma.png',
    escena1: './assets/img/escena1.png',
    escena2: './assets/img/escena2.png',
    escena3: './assets/img/escena3.png',
    escena4: './assets/img/escena4.png',
    escena5: './assets/img/escena5.png',
    escena6: './assets/img/escena6.png',
    final1: './assets/img/final1.png',
    final2: './assets/img/final2.png',
    final3: './assets/img/final3.png',
    final4: './assets/img/final4.png'
  },
  // Copiar los PNG de consecuencias en esta carpeta; los nombres se indican en cada opción.
  consecuencias: { carpeta: './assets/img/consecuencias' },
  inicio: { x: 35, y: 25, ancho: 18, alto: 34, palomaEnFondo: false },
  aliados: {
    moscaAliada: {
      id: 'mosca', nombre: 'Mosca', logo: './assets/img/aliadamosca.png',
      rescate: 'La mosca distrae a los trabajadores.',
      alerta: 'La mosca vuela alrededor de los trabajadores para llamar su atención.'
    },
    gatoAliado: {
      id: 'gato', nombre: 'Gato', logo: './assets/img/aliadogato.png',
      rescate: 'El gato rompe la red con sus garras.',
      alerta: 'El gato maúlla junto al árbol.'
    },
    pajaritosAliados: {
      id: 'pajaritos', nombre: 'Pajaritos', logo: './assets/img/aliadopajaritos.png',
      rescate: 'Los pajaritos ayudan a poner a salvo al animal.',
      alerta: 'Los pajaritos vuelan alrededor del árbol para señalar el peligro.'
    }
  },
  animacionPersonaje: {
    pantalla: 'introduccion',
    src: '',
    duracionMs: 3000,
  },
  loading: {
  texto: 'Volando hacia el próximo nodo...',
  carpeta: './assets/img/cargas'
},
  escenas: [
    {
      numero: 1,
      tiempo: 20,
      titulo: 'Tráfico urbano',
      pregunta: '¿Qué hacés durante el vuelo?',
      imagen: 'escena1',
      contexto: 'Después de eso, la paloma se encuentra volando por la ciudad buscando un nuevo hogar y siente ganas de hacer sus necesidades.',
      hotspot: { a: { x: 15, y: 49 }, b: { x: 49, y: 46 }, c: { x: 83, y: 48 } },
      opciones: [
        { id: 'A', texto: 'Hacer caca sobre el casco de un motociclista.', honor: -2, imagen: 'Nodo 1-moto_Mesa de trabajo 1.png', consecuencia: 'La paloma defeca sobre el casco del motociclista y provoca un accidente.' },
        { id: 'B', texto: 'Aguantarse hasta llegar a un lugar seguro.', honor: 0, imagen: 'Nodo 1 arbol_Mesa de trabajo 1.png', consecuencia: 'La paloma sigue volando y no perjudica a nadie.' },
        { id: 'C', texto: 'Apuntar a un auto estacionado.', honor: -1, imagen: 'Nodo 1- auto_Mesa de trabajo 1.png', consecuencia: 'La paloma ensucia el auto y enfurece a su dueño.' }
      ]
    },
    {
      numero: 2,
      tiempo: 25,
      titulo: 'Comer mosca',
      pregunta: '¿Qué hacer con la mosca?',
      imagen: 'escena2',
      contexto: 'Después de seguir su camino, la paloma encuentra un tacho de basura. Allí aparece una mosca que empieza a molestarla.',
      hotspot: { a: { x: 18, y: 26 }, b: { x: 76, y: 27 }, c: { x: 51, y: 73 } },
      opciones: [
        { id: 'A', texto: 'Comértela para saciar el hambre.', honor: 0, aliado: 'moscaAliada', valorAliado: false, imagen: 'Nodo 2 comerse la mosca_Mesa de trabajo 1.png', consecuencia: 'La paloma come y la mosca ya no puede acompañarla.' },
        { id: 'B', texto: 'Dejarla vivir y seguir tu camino.', honor: 1, aliado: 'moscaAliada', valorAliado: true, imagen: 'Nodo 2 ignorar e irse_Mesa de trabajo 1.png', consecuencia: 'La mosca sobrevive y decide acompañar a la paloma.' },
        { id: 'C', texto: 'Perseguirla y arrojarla hacia una telaraña.', honor: -1, aliado: 'moscaAliada', valorAliado: false, imagen: 'Nodo 2 llevarala hacia una telaraña_Mesa de trabajo 1.png', consecuencia: 'La mosca queda en peligro por diversión.' }
      ]
    },
    {
      numero: 3,
      tiempo: 15,
      titulo: 'Ataque del hombre loco',
      pregunta: '¿Cómo reaccionás?',
      imagen: 'escena3',
      contexto: 'La paloma aterriza en unos cables de la calle. Un hombre la observa y reacciona de forma extraña...',
      hotspot: { a: { x: 22, y: 36 }, b: { x: 52, y: 76 }, c: { x: 78, y: 35 } },
      opciones: [
        { id: 'A', texto: 'Atacar al hombre para vengarte.', honor: -2, imagen: 'Nodo 3 atacar_Mesa de trabajo 1.png', imagenHerida: 'Nodo 3 atacar lastimado_Mesa de trabajo 1.png', consecuencia: 'La paloma lo ataca y el hombre termina atropellado.' },
        { id: 'B', texto: 'Escapar volando del lugar.', honor: 0, imagen: 'Nodo 3 ignorar e irse_Mesa de trabajo 1.png', imagenHerida: 'Nodo 3 ignorar e irse lastimado_Mesa de trabajo 1.png', consecuencia: 'La paloma evita que la situación empeore y escapa.' },
        { id: 'C', texto: 'Hacerle caca en la cabeza.', honor: -1, imagen: 'Nodo 3 Hacer caca_Mesa de trabajo 1.png', consecuencia: 'La paloma le hace caca en la cabeza al hombre como venganza.' }
      ]
    },
    {
      numero: 4,
      tiempo: 30,
      titulo: 'El gato callejero',
      pregunta: '¿Qué hacés con el gato?',
      imagen: 'escena4',
      contexto: 'Más adelante, la paloma encuentra un gato hambriento cerca de un tacho. También ve comida cerca suyo.',
      hotspot: { a: { x: 33, y: 29 }, b: { x: 77, y: 26 }, c: { x: 52, y: 72 } },
      opciones: [
        { id: 'A', texto: 'Darle alimento al gato.', honor: 1, aliado: 'gatoAliado', valorAliado: true, imagen: 'Nodo 4 acercar la comida_Mesa de trabajo 1.png', consecuencia: 'El gato come y se convierte en aliado.' },
        { id: 'B', texto: 'Seguir tu camino e ignorarlo.', honor: 0, aliado: 'gatoAliado', valorAliado: false, imagen: 'Nodo 4 ignorar_Mesa de trabajo 1.png', consecuencia: 'La paloma sigue sola y el gato no la acompaña.' },
        { id: 'C', texto: 'Robar la comida y huir.', honor: -1, aliado: 'gatoAliado', valorAliado: false, imagen: 'Nodo 4 comerse su comida_Mesa de trabajo 1.png', consecuencia: 'La paloma le roba la comida y el gato desconfía.' }
      ]
    },
    {
      numero: 5,
      tiempo: 30,
      titulo: 'El nido',
      pregunta: '¿Qué vas a hacer?',
      imagen: 'escena5',
      contexto: 'La paloma sigue camino, y encuentra un árbol con un nido donde pensó que podría quedarse. Pero lo que había en el nido le sorprendió.',
      hotspot: { a: { x: 16, y: 44 }, b: { x: 67, y: 44 }, c: { x: 41, y: 77 } },
      opciones: [
        { id: 'A', texto: 'Expulsar a los pajaritos y quedarse con el nido.', honor: -2, aliado: 'pajaritosAliados', valorAliado: false, imagen: 'Nodo 5- hechar pajaros del nido_Mesa de trabajo 1.png', consecuencia: 'El nido cae, se destruye y los pajaritos no se vuelven aliados.' },
        { id: 'B', texto: 'Respetar el nido y buscar otro lugar.', honor: 1, aliado: 'pajaritosAliados', valorAliado: false, imagen: 'Nodo 5- dejar nido en paz_Mesa de trabajo 1.png', consecuencia: 'La paloma sigue su viaje sin molestar a la familia.' },
        { id: 'C', texto: 'Ayudar a reforzar el nido.', honor: 2, aliado: 'pajaritosAliados', valorAliado: true, imagen: 'Nodo 5- ayudar al nido_Mesa de trabajo 1.png', consecuencia: 'Los pajaritos agradecen la ayuda y se vuelven aliados.' }
      ]
    },
    {
      numero: 6,
      tiempo: 15,
      titulo: 'La decisión final',
      pregunta: '¿Qué hacer con el pájaro atrapado?',
      imagen: 'escena6',
      contexto: 'Al final del recorrido, la paloma descubre una situación de peligro. Otro pájaro está atrapado mientras unos trabajadores se acercan al árbol.',
      hotspot: { a: { x: 25, y: 43 }, b: { x: 79, y: 42 }, c: { x: 48, y: 79 } },
      opciones: [
        { id: 'A', texto: 'Salvar al pájaro.', honor: 2, consecuencia: 'La paloma se arriesga para salvar al pájaro atrapado.',
        // normal = archivo alto; herida = archivo bajo, según el piedrazo del nodo 3.
        variantes: {
          'ninguno': { normal: 'Nodo 6_Mesa de trabajo 1. Ayudar solo Alto.png', herida: 'Nodo 6_Mesa de trabajo 1. Ayudar solo bajo.png' },
          'mosca': { normal: 'Nodo 6. Ayudar m alto.png', herida: 'Nodo 6. Ayudar m bajo.png' },
          'gato': { normal: 'Nodo 6. Ayudar g alto.png', herida: 'Nodo 6. Ayudar g bajo.png' },
          'pajaritos': { normal: 'Nodo 6_Mesa de trabajo 1. Ayudar p alto.png', herida: 'Nodo 6_Mesa de trabajo 1. Ayudar p bajo.png' },
          'mosca-gato': { normal: 'Nodo 6_Mesa de trabajo 1. Ayudar m y g alto.png', herida: 'Nodo 6_Mesa de trabajo 1. Ayudar m y g bajo.png' },
          'mosca-pajaritos': { normal: 'Nodo 6_Mesa de trabajo 1. Ayudar p y m alto.png', herida: 'Nodo 6_Mesa de trabajo 1. Ayudar p y m bajo.png' },
          'gato-pajaritos': { normal: 'Nodo 6_Mesa de trabajo 1. Ayudar p y g alto.png', herida: 'Nodo 6_Mesa de trabajo 1. Ayudar p y g najo.png' },
          'mosca-gato-pajaritos': { normal: 'Nodo 6. Ayudar todos alto.png', herida: 'Nodo 6. Ayudar todos bajo.png' }
        }
        },
        { id: 'B', texto: 'Abandonar.', honor: -2, consecuencia: 'La paloma lo abandona y sigue su camino.',
        // normal = archivo alto; herida = archivo bajo, según el piedrazo del nodo 3.
        variantes: {
          'ninguno': { normal: 'Nodo 6 Huir solo alto_Mesa de trabajo 1.png', herida: 'Nodo 6 Huir solo bajo_Mesa de trabajo 1.png' },
          'mosca': { normal: 'Nodo 6 Huir m alto_Mesa de trabajo 1.png', herida: 'Nodo 6 Huir m bajo_Mesa de trabajo 1.png' },
          'gato': { normal: 'Nodo 6 Huir g alto_Mesa de trabajo 1.png', herida: 'Nodo 6 Huir g bajo_Mesa de trabajo 1.png' },
          'pajaritos': { normal: 'Nodo 6 Huir p alto_Mesa de trabajo 1.png', herida: 'Nodo 6 Huir p bajo_Mesa de trabajo 1.png' },
          'mosca-gato': { normal: 'Nodo 6 Huir m y g alto_Mesa de trabajo 1.png', herida: 'Nodo 6 Huir m y g bajo_Mesa de trabajo 1.png' },
          'mosca-pajaritos': { normal: 'Nodo 6 Huir p y m alto_Mesa de trabajo 1.png', herida: 'Nodo 6 Huir p y m bajo_Mesa de trabajo 1.png' },
          'gato-pajaritos': { normal: 'Nodo 6 Huir p y g alto_Mesa de trabajo 1.png', herida: 'Nodo 6 Huir p y g bajo_Mesa de trabajo 1.png' },
          'mosca-gato-pajaritos': { normal: 'Nodo 6 Huir todos alto.png', herida: 'Nodo 6 Huir todos bajo.png' }
        }
        },
        { id: 'C', texto: 'Alertar a los trabajadores.', honor: 1, consecuencia: 'Los trabajadores descubren al pájaro y frenan la tala.',
        // normal = archivo alto; herida = archivo bajo, según el piedrazo del nodo 3.
        variantes: {
          'ninguno': { normal: 'Nodo 6  Alertar solo alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar solo bajo_Mesa de trabajo 1.png' },
          'mosca': { normal: 'Nodo 6  Alertar m alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar m bajo_Mesa de trabajo 1.png' },
          'gato': { normal: 'Nodo 6  Alertar g alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar g bajo_Mesa de trabajo 1.png' },
          'pajaritos': { normal: 'Nodo 6  Alertar p alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar p bajo_Mesa de trabajo 1.png' },
          'mosca-gato': { normal: 'Nodo 6  Alertar m y g alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar m y g bajo_Mesa de trabajo 1.png' },
          'mosca-pajaritos': { normal: 'Nodo 6  Alertar p y m alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar p y m bajo_Mesa de trabajo 1.png' },
          'gato-pajaritos': { normal: 'Nodo 6  Alertar p y g alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar p y g bajo_Mesa de trabajo 1.png' },
          'mosca-gato-pajaritos': { normal: 'Nodo 6  Alertar todos alto_Mesa de trabajo 1.png', herida: 'Nodo 6  Alertar todos bajo_Mesa de trabajo 1.png' }
        }
        }
      ]
    }
  ],
  finales: {
    final1: { titulo: 'Un hogar para todos', imagen: 'final1' },
    final2: { titulo: 'Una segunda oportunidad', imagen: 'final2' },
    final3: { titulo: 'Un hogar vacío', imagen: 'final3' },
    final4: { titulo: 'El karma de la paloma', imagen: 'final4' }
  }
};
