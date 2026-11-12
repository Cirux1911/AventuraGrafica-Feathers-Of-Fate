(() => {
  const data = window.FOF_DATA;
  const app = document.getElementById('app');
  if (!data || !app) return;

  const allyInfo = data.aliados;
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  const escapeHTML = text => String(text).replace(/[&<>"']/g, char => entities[char]);
  const HONOR_METER = {
    min: -10,
    max: 9,
    badMax: -2,
    goodMin: 2,
    icons: {
      bad: './assets/img/honor-bad.png',
      neutral: './assets/img/honor-neutral.png',
      good: './assets/img/honor-good.png'
    },
    labels: {
      bad: 'Honor bajo',
      neutral: 'Honor neutral',
      good: 'Honor alto'
    }
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const currentScene = () => data.escenas[state.escenaActual - 1];
  const allies = () => Object.entries(allyInfo).filter(([key]) => state[key]);
  const alliesKey = () => allies().map(([, ally]) => ally.id).join('-') || 'ninguno';

  const newGame = () => ({
    honor: 0,
    moscaAliada: false,
    gatoAliado: false,
    pajaritosAliados: false,
    escenaActual: 0,
    decisionFinal: null,
    ultimaOpcion: null,
    fase: 'menu',
    menuFlying: false
  });

  let state = newGame();
  let timer = null;

  let decisionTimer = null;
  const TIEMPOS_NODOS = [20, 25, 15, 30, 30];

function tiempoDecision() {
  if (state.escenaActual === 6) {
    return 10 + allies().length * 5;
  }

  return TIEMPOS_NODOS[state.escenaActual - 1];
}

  // Elementos compartidos por las pantallas.
  function imageMarkup(src, alt, className = 'art-image') {
    return src ? `<img class="${className}" src="${escapeHTML(src)}" alt="${escapeHTML(alt)}">` : '';
  }

  function variantImage(src, variants = {}) {
    return variants[alliesKey()] || src;
  }

  function titleFlash(text) {
    return `<div class="flash-title">${escapeHTML(text)}</div>`;
  }

  function homeButton() {
    return state.fase === 'menu' ? '' : '<button class="home-btn" data-action="home">← Inicio</button>';
  }

  function screen(boardClass, content, title = '') {
    return `
      <section class="screen">
        ${homeButton()}
        ${title ? titleFlash(title) : ''}
        <div class="artboard ${boardClass}">
          ${content}
        </div>
      </section>`;
  }

  function animationMarkup(screenName) {
    const animation = data.animacionPersonaje;
    if (!animation.src || animation.pantalla !== screenName) return '';

    const src = escapeHTML(animation.src);
    return `
      <div class="animate-slot">
        ${/\.(mp4|webm|ogg)$/i.test(src)
        ? `<video src="${src}" autoplay muted playsinline></video>`
        : `<img src="${src}" alt="Animación de la paloma">`}
      </div>`;
  }

  // Pantallas del juego.
  function renderMenu() {
    const start = data.inicio;
    const hasPigeon = data.imagenes.paloma || start.palomaEnFondo;
    return screen(`menu-board ${state.menuFlying ? 'flying' : ''}`, `
      ${imageMarkup(data.imagenes.menu, 'Pantalla de inicio de Feathers of Fate')}
      <div class="title-side">
        <h1 class="game-title">Feathers<br>of Fate</h1>
        <div class="start-hint">${hasPigeon ? 'Tocá la paloma para comenzar' : 'Comenzá tu aventura'}</div>
      </div>
      <button class="pigeon-hotspot ${hasPigeon ? 'pigeon-art' : ''}" data-action="start"
        style="left:${start.x}%;top:${start.y}%;width:${start.ancho}%;height:${start.alto}%"
        aria-label="Comenzar la aventura" ${state.menuFlying ? 'disabled' : ''}>
        ${imageMarkup(data.imagenes.paloma, '', 'menu-pigeon')}
        ${hasPigeon ? '' : '<span class="start-label">Comenzar</span>'}
      </button>
      ${state.menuFlying ? animationMarkup('inicio') : ''}`);
  }


  function renderIntro() {
    return screen('intro-board', `
   <video class="intro-video" autoplay playsinline preload="auto"
      poster="${escapeHTML(data.imagenes.introduccion)}">
      <source src="./assets/animaciones/intro.mp4" type="video/mp4">
    </video>

<button class="skip-intro-btn" data-action="skip-intro">
  Saltar introducción »
</button>

<button class="play-intro-btn" hidden data-action="play-intro">
  ▶ Reproducir introducción
</button>

    <div class="intro-btn-wrap" hidden>
      <button class="intro-btn" data-action="enter-scene">Comenzar</button>
    </div>`,
      'El hogar que se perdió');
  }


  function choiceButtons(scene) {
    return scene.opciones.map(option => {
      const position = scene.hotspot[option.id.toLowerCase()];
      return `
        <button class="choice-btn" data-option="${option.id}" style="left:${position.x}%; top:${position.y}%">
          <span class="choice-letter">${option.id}</span>${escapeHTML(option.texto)}
        </button>`;
    }).join('');
  }

  function renderScene() {
    const scene = currentScene();

    return screen('scene-board', `
    ${imageMarkup(data.imagenes[scene.imagen], scene.titulo)}

    <div class="decision-clock">
      Tiempo: <span id="segundos-restantes">${tiempoDecision()}</span>s
    </div>

    <div class="choices">${choiceButtons(scene)}</div>
  `, scene.titulo);
  }

  function honorIconState(value) {
    if (value <= HONOR_METER.badMax) return 'bad';
    if (value >= HONOR_METER.goodMin) return 'good';
    return 'neutral';
  }

  function honorMeterLeft(value) {
    return ((clamp(value, HONOR_METER.min, HONOR_METER.max) - HONOR_METER.min) /
      (HONOR_METER.max - HONOR_METER.min)) * 100;
  }

  function honorToast() {
    const delta = state.ultimaOpcion.honor;
    const total = state.honor;
    const markerLeft = honorMeterLeft(total);
    const iconState = honorIconState(total);
    const signClass = delta >= 0 ? 'plus' : 'minus';
    const iconSrc = HONOR_METER.icons[iconState];
    const iconLabel = HONOR_METER.labels[iconState];

    return `
      <div class="toast honor-toast">
        <div class="honor-head">
          <span>HONOR</span>
          <span class="honor-delta ${signClass}">${delta >= 0 ? '+' : ''}${delta} · Total ${total}</span>
        </div>
        <div class="honor-bar" role="meter" aria-label="Honor" aria-valuemin="${HONOR_METER.min}" aria-valuemax="${HONOR_METER.max}" aria-valuenow="${total}">
          <span class="honor-mid"></span>
          <span class="honor-marker is-${iconState}" style="left:${markerLeft}%">
            <img class="honor-icon" src="${iconSrc}" alt="${iconLabel}">
          </span>
        </div>
        <div class="honor-scale"><span>Deshonor</span><span>0</span><span>Honor</span></div>
      </div>`;
  }

  function allyToast() {
    const option = state.ultimaOpcion;
    if (!option.aliado || !option.valorAliado) return '';

    const ally = allyInfo[option.aliado];
    return `<div class="toast ally-toast" aria-label="Se suma: ${ally.nombre}">
      ${imageMarkup(ally.logo, '', 'ally-logo')}
      <span><small>Se suma</small>${ally.nombre}</span>
    </div>`;
  }

  function resultText() {
    let text = state.ultimaOpcion.consecuencia;
    if (state.escenaActual !== 6) return text;

    const companions = allies();
    if (!companions.length) return text + ' La paloma está sola, sin aliados.';
    if (state.decisionFinal === 'B') {
      return text + ' Sus compañeros se quedan para ayudar al pájaro y dejan de acompañarla.';
    }

    const action = state.decisionFinal === 'A' ? 'rescate' : 'alerta';
    text += ' ' + companions.map(([, ally]) => ally[action]).join(' ');
    return companions.length === 3 ? text + ' Los tres colaboran juntos.' : text;
  }

  function renderResult() {
    const scene = currentScene();
    const option = state.ultimaOpcion;
    return screen('result-board', `
      ${imageMarkup(variantImage(option.imagen, option.variantes), `Consecuencia de ${scene.titulo}`)}
      <div class="result-footer">
        <div class="result-panel">
          <p class="result-text">${escapeHTML(resultText())}</p>
          <button class="primary-btn" data-action="continue">${state.escenaActual === 6 ? 'Ver final' : 'Continuar'}</button>
        </div>
        <div class="toasts" role="status">${honorToast()}${allyToast()}</div>
      </div>`);
  }


  function renderLoading() {
    const nombreImagen = `${honorIconState(state.honor)}-${alliesKey()}.png`;
    const rutaImagen = `${data.loading.carpeta}/${nombreImagen}`;

    return screen('loading-board', `
    ${imageMarkup(rutaImagen, 'Paloma y aliados viajando hacia el siguiente nodo')}
    <div class="loading-note">${escapeHTML(data.loading.texto)}</div>`);
  }


  function finalKey() {
    if (state.decisionFinal !== 'B') return state.honor >= 2 ? 'final1' : 'final2';
    return state.honor >= -1 ? 'final3' : 'final4';
  }

  function renderFinal() {
    const ending = data.finales[finalKey()];
    return screen('final-board', `
      ${imageMarkup(variantImage(data.imagenes[ending.imagen], ending.variantes), ending.titulo)}
      <div class="final-actions"><button class="replay-btn" data-action="replay">Volver a jugar</button></div>`,
      ending.titulo);
  }

  const screens = {
    menu: renderMenu,
    intro: renderIntro,
    scene: renderScene,
    result: renderResult,
    loading: renderLoading,
    final: renderFinal
  };

  // Navegación y temporizadores.

  function render() {
    clearTimeout(timer);
    clearInterval(decisionTimer);
    timer = null;
    decisionTimer = null;

    app.innerHTML = screens[state.fase]();


    if (state.fase === 'intro') {
      const video = app.querySelector('.intro-video');
      const boton = app.querySelector('.intro-btn-wrap');
      const reproducir = app.querySelector('.play-intro-btn');

      video.addEventListener('ended', () => {
  boton.hidden = false;
  app.querySelector('.skip-intro-btn').hidden = true;
});

      video.addEventListener('error', () => {
        boton.hidden = false;
      });

      video.play().catch(() => {
        reproducir.hidden = false;
      });
    }


    if (state.fase === 'scene') {
      let segundos = tiempoDecision();
      const contador = app.querySelector('#segundos-restantes');

      decisionTimer = setInterval(() => {
        segundos--;
        contador.textContent = segundos;

        if (segundos <= 0) {
          clearInterval(decisionTimer);
          decisionTimer = null;
          chooseOption('B');
        }
      }, 1000);
    }

    if (state.fase === 'loading') {
      timer = setTimeout(() => {
        state.fase = 'scene';
        render();
      }, 3500);
    }
  }


  function resetGame() {
    state = newGame();
    render();
  }

  function beginGame() {
    if (state.fase !== 'menu' || state.menuFlying) return;
    state.menuFlying = true;
    render();

    const animation = data.animacionPersonaje;
    timer = setTimeout(() => {
      state.menuFlying = false;
      state.fase = 'intro';
      render();
    }, animation.src && animation.pantalla === 'inicio' ? animation.duracionMs : 750);
  }

  function enterFirstScene() {
    if (state.fase !== 'intro') return;
    state.escenaActual = 1;
    state.fase = 'scene';
    render();
  }

  function chooseOption(optionId) {
    if (state.fase !== 'scene') return;
    const option = currentScene().opciones.find(item => item.id === optionId);
    if (!option) return;

    state.honor += option.honor;
    if (option.aliado) state[option.aliado] = option.valorAliado;
    if (state.escenaActual === 6) state.decisionFinal = optionId;
    state.ultimaOpcion = option;
    state.fase = 'result';
    render();
  }

  function continueFlow() {
    if (state.fase !== 'result') return;
    if (state.escenaActual === 6) {
      state.fase = 'final';
    } else {
      state.escenaActual += 1;
      state.fase = 'loading';
    }
    render();
  }

  // Un solo listener gestiona los botones de todas las pantallas.
  app.addEventListener('click', event => {
    const option = event.target.closest('[data-option]');
    if (option) {
      chooseOption(option.dataset.option);
      return;
    }

    const action = event.target.closest('[data-action]');
    if (!action) return;

    switch (action.dataset.action) {
      case 'start':
        beginGame();
        break;
      case 'play-intro':
        app.querySelector('.intro-video').play();
        action.hidden = true;
        break;
        case 'skip-intro':
  app.querySelector('.intro-video').pause();
  enterFirstScene();
  break;
      case 'enter-scene':
        enterFirstScene();
        break;
      case 'continue':
        continueFlow();
        break;
      case 'replay':
      case 'home':
        resetGame();
        break;
    }
  });

  app.addEventListener('error', event => {
    if (event.target.matches('img, video')) event.target.hidden = true;
  }, true);

  render();
})();
