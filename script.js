// SECTION: Helpers
const qs = (sel) => document.querySelector(sel);

// SECTION: Reveal logic
const revealScreen = qs('#reveal-screen');
const revealButton = qs('#reveal-button');
const mainContent = qs('#main-content');

if (revealButton && revealScreen && mainContent) {
  revealButton.addEventListener('click', () => {
    revealScreen.style.opacity = '0';
    revealScreen.style.pointerEvents = 'none';
    revealScreen.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    revealScreen.style.transform = 'scale(1.03) translateY(-8px)';

    setTimeout(() => {
      revealScreen.style.display = 'none';
      mainContent.setAttribute('aria-hidden', 'false');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 520);
  });
}

// SECTION: Smooth scroll buttons
const scrollToGameBtn = qs('#scroll-to-game');
const scrollToTimelineBtn = qs('#scroll-to-timeline');

if (scrollToGameBtn) {
  scrollToGameBtn.addEventListener('click', () => {
    const target = qs('#sec-game');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (scrollToTimelineBtn) {
  scrollToTimelineBtn.addEventListener('click', () => {
    const target = qs('#sec-timeline');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// SECTION: Mini-game logic - find the correct heart
const gameGrid = qs('#game-grid');
const tentativasSpan = qs('#tentativas');
const gameMessage = qs('#game-message');
const resetButton = qs('#reset-game');

let tentativas = 0;
let correctIndex = null;
let gameLocked = false;

function initGame() {
  if (!gameGrid) return;

  gameGrid.innerHTML = '';
  tentativas = 0;
  gameLocked = false;
  correctIndex = Math.floor(Math.random() * 8); // 8 hearts
  tentativasSpan.textContent = tentativas.toString();
  gameMessage.textContent = 'Clique em um coração para tentar a sorte.';

  const totalHearts = 8;
  for (let i = 0; i < totalHearts; i++) {
    const btn = document.createElement('button');
    const index = i; // evita capturar a variável do loop diretamente

    btn.className = 'game-heart';
    btn.type = 'button';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Coração número ' + (index + 1));
    btn.textContent = '❤';

    btn.addEventListener('click', createHeartHandler(index, btn));

    gameGrid.appendChild(btn);
  }
}

// Cria um handler independente por botão, evitando funções anônimas no loop
function createHeartHandler(index, btn) {
  return function () {
    handleGuess(index, btn);
  };
}

function handleGuess(index, btn) {
  if (gameLocked) return;

  tentativas += 1;
  tentativasSpan.textContent = tentativas.toString();
  btn.setAttribute('aria-pressed', 'true');

  if (index === correctIndex) {
    btn.classList.add('correct');
    gameLocked = true;
    gameMessage.textContent =
      'ACERTOU! Entre todos os corações do mundo, você sempre escolhe o meu. 💖';

    // pequeno efeito de "pulso" nas cartas ao ganhar
    gameGrid.classList.add('game-win');
    setTimeout(() => gameGrid.classList.remove('game-win'), 700);
  } else {
    btn.classList.add('wrong');
    gameMessage.textContent =
      'Quase! Mas mesmo quando você erra, continua sendo meu acerto favorito.';
  }
}

if (resetButton) {
  resetButton.addEventListener('click', () => {
    initGame();
  });
}

// Inicializa o jogo ao carregar a página
initGame();
