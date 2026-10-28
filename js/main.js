(() => {
  const data = window.FOF_DATA;
  const app = document.getElementById('app');
  if (!data || !app) return;

  const allyInfo = data.aliados;

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

  const escapeHTML = text => String(text).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const currentScene = () => data.escenas[state.escenaActual - 1];
  const allies = () => Object.entries(allyInfo).filter(([key]) => state[key]);
  const alliesKey = () => allies().map(([, ally]) => ally.id).join('-') || 'ninguno';

  function imageMarkup(src, alt, className = 'art-image') {
    return src ? `<img class="${className}" src="${escapeHTML(src)}" alt="${escapeHTML(alt)}">` : '';
  }

  function variantImage(src, variantes = {}) {
    return variantes[alliesKey()] || src;
  }

  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function resetGame(to = 'menu') {
    resetTimer();
    state = newGame();
    state.fase = to;
    render();
  }

  function finalKey() {
    if (state.decisionFinal !== 'B') return state.honor >= 2 ? 'final1' : 'final2';
    return state.honor >= -1 ? 'final3' : 'final4';
  }

  function titleFlash(texto) {
    return `<div class="flash-title">${escapeHTML(texto)}</div>`;
  }

  function homeButton() {
    return state.fase === 'menu' ? '' : '<button class="home-btn" data-action="home">← Inicio</button>';
  }

  function renderMenu() {
    const start = data.inicio;
    const hasPigeon = data.imagenes.paloma || start.palomaEnFondo;
    return `
      <section class="screen">
        <div class="artboard menu-board ${state.menuFlying ? 'flying' : ''}">
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
          ${state.menuFlying ? animationMarkup('inicio') : ''}
        </div>
      </section>`;
  }

  function animationMarkup(pantalla) {
    const anim = data.animacionPersonaje;
    if (!anim.src || anim.pantalla !== pantalla) return '';
    const src = escapeHTML(anim.src);
    return `
      <div class="animate-slot">
        ${src.match(/\.(mp4|webm|ogg)$/i)
          ? `<video src="${src}" autoplay muted playsinline></video>`
          : `<img src="${src}" alt="Animación de la paloma">`}
      </div>`;
  }

  function renderIntro() {
    return `
      <section class="screen">
        ${homeButton()}
        ${titleFlash('El hogar que se perdió')}
        <div class="artboard intro-board">
          ${imageMarkup(data.imagenes.introduccion, 'Introducción de Feathers of Fate')}
          ${animationMarkup('introduccion')}
          <div class="intro-btn-wrap"><button class="intro-btn" data-action="enter-scene">Comenzar</button></div>
        </div>
      </section>`;
  }

  function choiceButtons(scene) {
    return scene.opciones.map(option => {
      const pos = scene.hotspot[option.id.toLowerCase()];
      return `
        <button class="choice-btn" data-option="${option.id}" style="left:${pos.x}%; top:${pos.y}%">
          <span class="choice-letter">${option.id}</span>${escapeHTML(option.texto)}
        </button>`;
    }).join('');
  }

  function renderScene() {
    const scene = currentScene();
    return `
      <section class="screen">
        ${homeButton()}
        ${titleFlash(scene.titulo)}
        <div class="artboard scene-board">
          ${imageMarkup(data.imagenes[scene.imagen], scene.titulo)}
          <div class="choices">${choiceButtons(scene)}</div>
        </div>
      </section>`;
  }

  function honorToast() {
    const delta = state.ultimaOpcion.honor;
    const total = state.honor;
    const left = ((clamp(total, -10, 9) + 10) / 19) * 100;
    const signClass = delta >= 0 ? 'plus' : 'minus';
    return `
      <div class="toast honor-toast">
        <div class="honor-head">
          <span>HONOR</span>
          <span class="honor-delta ${signClass}">${delta >= 0 ? '+' : ''}${delta} · Total ${total}</span>
        </div>
        <div class="honor-bar" role="meter" aria-label="Honor" aria-valuemin="-10" aria-valuemax="9" aria-valuenow="${total}">
          <span class="honor-mid"></span>
          <span class="honor-pin" style="left:${left}%"></span>
        </div>
        <div class="honor-scale"><span>−10</span><span>0</span><span>+9</span></div>
      </div>`;
  }

  function allyToast() {
    const opt = state.ultimaOpcion;
    if (!opt.aliado || !opt.valorAliado) return '';
    const ally = allyInfo[opt.aliado];
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
    return `
      <section class="screen">
        ${homeButton()}
        <div class="artboard result-board">
          ${imageMarkup(variantImage(option.imagen, option.variantes), `Consecuencia de ${scene.titulo}`)}
          <div class="result-footer">
            <div class="result-panel">
              <p class="result-text">${escapeHTML(resultText())}</p>
              <button class="primary-btn" data-action="continue">${state.escenaActual === 6 ? 'Ver final' : 'Continuar'}</button>
            </div>
            <div class="toasts" role="status">${honorToast()}${allyToast()}</div>
          </div>
        </div>
      </section>`;
  }

  function renderLoading() {
    return `
      <section class="screen">
        ${homeButton()}
        <div class="artboard loading-board">
          ${imageMarkup(variantImage(data.imagenes.loading, data.loading.variantes), 'Paloma volando hacia el siguiente nodo')}
          <div class="loading-note">${escapeHTML(data.loading.texto)}</div>
        </div>
      </section>`;
  }

  function renderFinal() {
    const key = finalKey();
    const ending = data.finales[key];
    return `
      <section class="screen">
        ${homeButton()}
        ${titleFlash(ending.titulo)}
        <div class="artboard final-board">
          ${imageMarkup(variantImage(data.imagenes[ending.imagen], ending.variantes), ending.titulo)}
          <div class="final-actions"><button class="replay-btn" data-action="replay">Volver a jugar</button></div>
        </div>
      </section>`;
  }

  function render() {
    resetTimer();
    if (state.fase === 'menu') app.innerHTML = renderMenu();
    if (state.fase === 'intro') app.innerHTML = renderIntro();
    if (state.fase === 'scene') app.innerHTML = renderScene();
    if (state.fase === 'result') app.innerHTML = renderResult();
    if (state.fase === 'loading') {
      app.innerHTML = renderLoading();
      timer = setTimeout(() => {
        state.fase = 'scene';
        render();
      }, 1800);
    }
    if (state.fase === 'final') app.innerHTML = renderFinal();
  }

  function beginGame() {
    if (state.fase !== 'menu' || state.menuFlying) return;
    state.menuFlying = true;
    render();
    const anim = data.animacionPersonaje;
    timer = setTimeout(() => {
      state.menuFlying = false;
      state.fase = 'intro';
      render();
    }, anim.src && anim.pantalla === 'inicio' ? anim.duracionMs : 750);
  }

  function enterFirstScene() {
    if (state.fase !== 'intro') return;
    state.escenaActual = 1;
    state.fase = 'scene';
    render();
  }

  function chooseOption(optionId) {
    if (state.fase !== 'scene') return;
    const scene = currentScene();
    const option = scene.opciones.find(item => item.id === optionId);
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
      render();
      return;
    }
    state.escenaActual += 1;
    state.fase = 'loading';
    render();
  }

  app.addEventListener('click', event => {
    const option = event.target.closest('[data-option]');
    const action = event.target.closest('[data-action]');

    if (option) {
      chooseOption(option.dataset.option);
      return;
    }
    if (!action) return;

    switch (action.dataset.action) {
      case 'start':
        beginGame();
        break;
      case 'enter-scene':
        enterFirstScene();
        break;
      case 'continue':
        continueFlow();
        break;
      case 'replay':
        resetGame('menu');
        break;
      case 'home':
        resetGame('menu');
        break;
    }
  });

  app.addEventListener('error', event => {
    if (event.target.matches('img, video')) event.target.hidden = true;
  }, true);

  render();
})();
