window.FOF_DATA = {
  imagenes: {
    menu: './assets/img/menu.png',
    paloma: './assets/img/paloma.png',
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
  inicio: { x: 72, y: 52, ancho: 20, alto: 28, palomaEnFondo: false },
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
    variantes: {
      ninguno: './assets/img/loadingpaloma.png', mosca: './assets/img/loadingmosca.png', gato: './assets/img/loadinggato.png', pajaritos: './assets/img/loadingpajaritos.png',
      'mosca-gato': './assets/img/loadingmoscagato.png', 'mosca-pajaritos': './assets/img/loadingmoscapajaritos.png', 'gato-pajaritos': './assets/img/loadinggatopajaritos.png',
      'mosca-gato-pajaritos': './assets/img/loadingmoscagatopajaritos.png'
    }
  },
  escenas: [
    {
      numero: 1,
      titulo: 'Tráfico urbano',
      pregunta: '¿Qué hacés durante el vuelo?',
      imagen: 'escena1',
      hotspot: { a: { x: 15, y: 49 }, b: { x: 49, y: 46 }, c: { x: 83, y: 48 } },
      opciones: [
        { id: 'A', texto: 'Hacer caca sobre el casco de un motociclista.', honor: -2, imagen: '', consecuencia: 'La paloma defeca sobre el casco del motociclista y provoca un accidente.' },
        { id: 'B', texto: 'Aguantarse hasta llegar a un lugar seguro.', honor: 0, imagen: '', consecuencia: 'La paloma sigue volando y no perjudica a nadie.' },
        { id: 'C', texto: 'Apuntar a un auto estacionado.', honor: -1, imagen: '', consecuencia: 'La paloma ensucia el auto y enfurece a su dueño.' }
      ]
    },
    {
      numero: 2,
      titulo: 'Comer mosca',
      pregunta: '¿Qué hacer con la mosca?',
      imagen: 'escena2',
      hotspot: { a: { x: 18, y: 26 }, b: { x: 76, y: 27 }, c: { x: 51, y: 73 } },
      opciones: [
        { id: 'A', texto: 'Comértela para saciar el hambre.', honor: 0, aliado: 'moscaAliada', valorAliado: false, imagen: '', consecuencia: 'La paloma come y la mosca ya no puede acompañarla.' },
        { id: 'B', texto: 'Dejarla vivir y seguir tu camino.', honor: 1, aliado: 'moscaAliada', valorAliado: true, imagen: '', consecuencia: 'La mosca sobrevive y decide acompañar a la paloma.' },
        { id: 'C', texto: 'Perseguirla y arrojarla hacia una telaraña.', honor: -1, aliado: 'moscaAliada', valorAliado: false, imagen: '', consecuencia: 'La mosca queda en peligro por diversión.' }
      ]
    },
    {
      numero: 3,
      titulo: 'Ataque del hombre loco',
      pregunta: '¿Cómo reaccionás?',
      imagen: 'escena3',
      hotspot: { a: { x: 22, y: 36 }, b: { x: 52, y: 76 }, c: { x: 78, y: 35 } },
      opciones: [
        { id: 'A', texto: 'Atacar al hombre para vengarte.', honor: -2, imagen: '', consecuencia: 'La paloma lo ataca y el hombre termina atropellado.' },
        { id: 'B', texto: 'Escapar volando del lugar.', honor: 0, imagen: '', consecuencia: 'La paloma evita que la situación empeore y escapa.' },
        { id: 'C', texto: 'Alejarlo del tránsito sin lastimarlo.', honor: 1, imagen: '', consecuencia: 'La paloma consigue salvarlo sin herirlo.' }
      ]
    },
    {
      numero: 4,
      titulo: 'El gato callejero',
      pregunta: '¿Qué hacés con el gato?',
      imagen: 'escena4',
      hotspot: { a: { x: 33, y: 29 }, b: { x: 77, y: 26 }, c: { x: 52, y: 72 } },
      opciones: [
        { id: 'A', texto: 'Darle alimento al gato.', honor: 1, aliado: 'gatoAliado', valorAliado: true, imagen: '', consecuencia: 'El gato come y se convierte en aliado.' },
        { id: 'B', texto: 'Seguir tu camino e ignorarlo.', honor: 0, aliado: 'gatoAliado', valorAliado: false, imagen: '', consecuencia: 'La paloma sigue sola y el gato no la acompaña.' },
        { id: 'C', texto: 'Robar la comida y huir.', honor: -1, aliado: 'gatoAliado', valorAliado: false, imagen: '', consecuencia: 'La paloma le roba la comida y el gato desconfía.' }
      ]
    },
    {
      numero: 5,
      titulo: 'El nido',
      pregunta: '¿Qué vas a hacer?',
      imagen: 'escena5',
      hotspot: { a: { x: 16, y: 44 }, b: { x: 67, y: 44 }, c: { x: 41, y: 77 } },
      opciones: [
        { id: 'A', texto: 'Expulsar a los pajaritos y quedarse con el nido.', honor: -2, aliado: 'pajaritosAliados', valorAliado: false, imagen: '', consecuencia: 'El nido cae, se destruye y los pajaritos no se vuelven aliados.' },
        { id: 'B', texto: 'Respetar el nido y buscar otro lugar.', honor: 1, aliado: 'pajaritosAliados', valorAliado: false, imagen: '', consecuencia: 'La paloma sigue su viaje sin molestar a la familia.' },
        { id: 'C', texto: 'Ayudar a reforzar el nido.', honor: 2, aliado: 'pajaritosAliados', valorAliado: true, imagen: '', consecuencia: 'Los pajaritos agradecen la ayuda y se vuelven aliados.' }
      ]
    },
    {
      numero: 6,
      titulo: 'La decisión final',
      pregunta: '¿Qué hacer con el pájaro atrapado?',
      imagen: 'escena6',
      hotspot: { a: { x: 25, y: 43 }, b: { x: 79, y: 42 }, c: { x: 48, y: 79 } },
      opciones: [
        { id: 'A', texto: 'Salvar al pájaro.', honor: 2, imagen: '', variantes: {}, consecuencia: 'La paloma se arriesga para salvar al pájaro atrapado.' },
        { id: 'B', texto: 'Abandonar.', honor: -2, imagen: '', variantes: {}, consecuencia: 'La paloma lo abandona y sigue su camino.' },
        { id: 'C', texto: 'Alertar a los trabajadores.', honor: 1, imagen: '', variantes: {}, consecuencia: 'Los trabajadores descubren al pájaro y frenan la tala.' }
      ]
    }
  ],
  finales: {
    final1: { titulo: 'Un hogar para todos', imagen: 'final1', variantes: {} },
    final2: { titulo: 'Una segunda oportunidad', imagen: 'final2', variantes: {} },
    final3: { titulo: 'Un hogar vacío', imagen: 'final3' },
    final4: { titulo: 'El karma de la paloma', imagen: 'final4' }
  }
};
