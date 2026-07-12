// --- DATA: 99 CUSTOM CARDS ---
const CARD_DECKS = {
  custom: [
    { word: "Licorne", category: "Créature", desc: "Cheval magique légendaire avec une corne sur le front." },
    { word: "Kangourou", category: "Animal", desc: "L'animal australien qui saute et porte son bébé dans une poche." },
    { word: "Banane", category: "Fruit", desc: "Le fruit jaune incurvé très apprécié des singes." },
    { word: "Pirate", category: "Personnage", desc: "Le bandit des mers à jambe de bois et cache-œil." },
    { word: "Dinosaure", category: "Animal", desc: "Le lézard géant préhistorique disparu il y a des millions d'années." },
    { word: "Robot", category: "Objet", desc: "La machine mécanique intelligente programmée par ordinateur." },
    { word: "Poussin", category: "Animal", desc: "Le bébé poule jaune tout mignon." },
    { word: "Clown", category: "Métier", desc: "L'artiste de cirque comique au nez rouge." },
    { word: "Astronaute", category: "Métier", desc: "Le pilote de fusée qui marche dans l'espace." },
    { word: "Ninja", category: "Personnage", desc: "Le guerrier japonais furtif habillé de noir." },
    { word: "Pizza", category: "Nourriture", desc: "Le plat italien rond à base de pâte, sauce tomate et fromage." },
    { word: "Cactus", category: "Plante", desc: "La plante du désert qui pique si on la touche." },
    { word: "Girafe", category: "Animal", desc: "L'animal terrestre au plus long cou du monde." },
    { word: "Yéti", category: "Créature", desc: "L'abominable homme des neiges légendaire." },
    { word: "Zombie", category: "Créature", desc: "Le mort-vivant qui marche lentement à la recherche de cerveaux." },
    { word: "Marmotte", category: "Animal", desc: "Le petit rongeur des montagnes qui hiberne tout l'hiver." },
    { word: "Chaussette", category: "Objet", desc: "Le vêtement douillet que l'on met au pied avant ses chaussures." },
    { word: "Hamster", category: "Animal", desc: "Le petit rongeur domestique qui adore tourner dans sa roue." },
    { word: "Poulet", category: "Animal", desc: "L'oiseau de la basse-cour qui caquette." },
    { word: "Castor", category: "Animal", desc: "Le rongeur bâtisseur de barrages en bois sur les rivières." },
    { word: "Vampire", category: "Créature", desc: "La créature nocturne aux canines pointues craignant l'ail." },
    { word: "Sorcier", category: "Personnage", desc: "L'homme magicien qui jette des sorts avec sa baguette." },
    { word: "Pingouin", category: "Animal", desc: "L'oiseau marin noir et blanc vivant dans le froid." },
    { word: "Cornichon", category: "Nourriture", desc: "Le petit légume vert au vinaigre qu'on met dans les burgers." },
    { word: "Lama", category: "Animal", desc: "L'animal des Andes au pelage laineux qui crache quand il est en colère." },
    { word: "Crêpe", category: "Nourriture", desc: "La fine galette de pâte cuite à la poêle qu'on mange à la Chandeleur." },
    { word: "Trompette", category: "Objet", desc: "L'instrument de musique en cuivre à trois pistons." },
    { word: "Spaghetti", category: "Nourriture", desc: "Les longues pâtes italiennes en forme de fils." },
    { word: "Paresseux", category: "Animal", desc: "L'animal arboricole très lent qui passe sa vie suspendu aux arbres." },
    { word: "Écureuil", category: "Animal", desc: "Le petit rongeur roux à grande queue adepte des noisettes." },
    { word: "Dragon", category: "Créature", desc: "La créature légendaire ailée cracheuse de feu." },
    { word: "Sirène", category: "Créature", desc: "La créature mythologique mi-femme mi-poisson." },
    { word: "Chimpanzé", category: "Animal", desc: "Le singe très intelligent proche de l'homme." },
    { word: "Avocat", category: "Nourriture / Métier", desc: "Le fruit vert à gros noyau idéal pour le guacamole (ou l'homme de loi)." },
    { word: "Crocodile", category: "Animal", desc: "Le grand reptile aquatique aux mâchoires puissantes." },
    { word: "Fantôme", category: "Créature", desc: "L'esprit invisible drapé de blanc qui fait 'Bouh'." },
    { word: "Hippopotame", category: "Animal", desc: "Le gros mammifère semi-aquatique d'Afrique à large gueule." },
    { word: "Moustique", category: "Animal", desc: "L'insecte volant dont la piqûre démange beaucoup." },
    { word: "Patate", category: "Nourriture", desc: "Le tubercule de terre avec lequel on fait les frites." },
    { word: "Poulpe", category: "Animal", desc: "Le mollusque marin doté de huit bras tentaculaires." },
    { word: "Caméléon", category: "Animal", desc: "Le lézard qui change de couleur pour se camoufler." },
    { word: "Chou-fleur", category: "Nourriture", desc: "Le légume blanc en forme de bouquet dense." },
    { word: "Chevalier", category: "Personnage", desc: "Le guerrier en armure du Moyen Âge." },
    { word: "Baguette", category: "Nourriture / Objet", desc: "Le pain long français traditionnel, ou l'outil magique du sorcier." },
    { word: "Koala", category: "Animal", desc: "Le petit marsupial australien mangeur d'eucalyptus." },
    { word: "Panda", category: "Animal", desc: "Le grand ours noir et blanc de Chine mangeur de bambou." },
    { word: "Magicien", category: "Métier", desc: "L'artiste de scène qui fait sortir des lapins de son chapeau." },
    { word: "Fusée", category: "Objet", desc: "Le véhicule spatial propulsé dans les étoiles." },
    { word: "Momie", category: "Créature", desc: "Le cadavre momifié enveloppé de bandelettes." },
    { word: "Bourdon", category: "Animal", desc: "Le gros insecte poilu au vol bruyant." },
    { word: "Dromadaire", category: "Animal", desc: "Le chameau d'Afrique à une seule bosse." },
    { word: "Tortue", category: "Animal", desc: "Le reptile à carapace très lent." },
    { word: "Sushi", category: "Nourriture", desc: "La bouchée japonaise de riz vinaigré et poisson cru." },
    { word: "Croissant", category: "Nourriture", desc: "La viennoiserie feuilletée française en forme de demi-lune." },
    { word: "Trampoline", category: "Objet", desc: "La toile élastique tendue sur laquelle on rebondit." },
    { word: "Skateboard", category: "Objet", desc: "La planche à roulettes pour faire des figures." },
    { word: "Coccinelle", category: "Animal", desc: "La bête à bon Dieu rouge à points noirs." },
    { word: "Autruche", category: "Animal", desc: "Le plus grand oiseau du monde qui ne vole pas mais court très vite." },
    { word: "Requin", category: "Animal", desc: "Le grand prédateur marin aux dents acérées." },
    { word: "Mouton", category: "Animal", desc: "L'animal herbivore à laine frisée qui bêle." },
    { word: "Glace", category: "Nourriture", desc: "Le dessert glacé sucré servi en cornet ou en pot." },
    { word: "Pigeon", category: "Animal", desc: "L'oiseau des villes de couleur grise." },
    { word: "Renard", category: "Animal", desc: "Le canidé sauvage roux très rusé." },
    { word: "Hérisson", category: "Animal", desc: "Le petit mammifère piquant qui se roule en boule." },
    { word: "Chouette", category: "Animal", desc: "Le rapace nocturne aux grands yeux ronds." },
    { word: "Chèvre", category: "Animal", desc: "L'animal cornu de la montagne qui produit du lait et fait 'mêê'." },
    { word: "Tartine", category: "Nourriture", desc: "La tranche de pain recouverte de beurre ou de confiture." },
    { word: "Ananas", category: "Nourriture", desc: "Le fruit tropical couronné de feuilles piquantes." },
    { word: "Brocoli", category: "Nourriture", desc: "Le petit légume vert en forme d'arbre miniature." },
    { word: "Microphone", category: "Objet", desc: "L'appareil pour amplifier la voix des chanteurs." },
    { word: "Gaufre", category: "Nourriture", desc: "Le gâteau cuit dans un moule à motifs quadrillés." },
    { word: "Escargot", category: "Animal", desc: "Le mollusque à coquille lente qui sort après la pluie." },
    { word: "Gorille", category: "Animal", desc: "Le plus grand et puissant des singes." },
    { word: "Méduse", category: "Animal", desc: "Le mollusque marin gélatineux et urticant." },
    { word: "Papillon", category: "Animal", desc: "L'insecte aux ailes colorées issu d'une chenille." },
    { word: "Carotte", category: "Nourriture", desc: "Le légume racine orange favori des lapins." },
    { word: "Squelette", category: "Objet", desc: "L'ensemble des os du corps humain." },
    { word: "Cowboy", category: "Personnage", desc: "Le gardien de troupeau américain au chapeau et pistolet." },
    { word: "Détective", category: "Métier", desc: "L'enquêteur qui résout les mystères avec une loupe." },
    { word: "Empereur", category: "Personnage", desc: "Le souverain dirigeant un empire." },
    { word: "Monstre", category: "Créature", desc: "La créature effrayante imaginaire." },
    { word: "Fusil à eau", category: "Objet", desc: "Le jouet d'été pour s'arroser." },
    { word: "Trottinette", category: "Objet", desc: "La planche à deux roues avec guidon pour rouler." },
    { word: "Grizzli", category: "Animal", desc: "Le grand ours brun sauvage très imposant." },
    { word: "Perroquet", category: "Animal", desc: "L'oiseau tropical coloré capable d'imiter la parole." },
    { word: "Ballerine", category: "Personnage", desc: "La danseuse classique en tutu sur pointes." },
    { word: "Viking", category: "Personnage", desc: "Le guerrier scandinave légendaire au casque à cornes." },
    { word: "Chef cuisinier", category: "Métier", desc: "Le patron de la cuisine au grand chapeau blanc." },
    { word: "Super-héros", category: "Personnage", desc: "Le personnage doté de super-pouvoirs et d'une cape." },
    { word: "Patineur", category: "Métier", desc: "Le sportif glissant sur la glace avec des lames." },
    { word: "Alien", category: "Créature", desc: "La créature extraterrestre venue de l'espace." },
    { word: "Crabe", category: "Animal", desc: "Le crustacé marin aux pinces puissantes marchant de côté." },
    { word: "Cafetière", category: "Objet", desc: "La machine pour préparer le café le matin." },
    { word: "Oreiller", category: "Objet", desc: "Le coussin moelleux sur lequel on pose sa tête pour dormir." },
    { word: "Aspirateur", category: "Objet", desc: "L'appareil ménager qui avale la poussière." },
    { word: "Pompier", category: "Métier", desc: "Le soldat du feu au camion rouge." },
    { word: "Bûcheron", category: "Métier", desc: "Celui qui abat les arbres dans la forêt." },
    { word: "Fakir", category: "Personnage", desc: "L'ascète d'Inde qui s'allonge sur un lit de clous." },
    { word: "Plongeur", category: "Métier", desc: "Celui qui explore les fonds marins avec des bouteilles d'oxygène." }
  ]
};

// --- AUDIO UTILITY (WEB AUDIO API) ---
const SoundEffects = {
  ctx: null,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playTone(freq, duration, type = 'sine', gainVal = 0.1) {
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gainNode.gain.setValueAtTime(gainVal, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  playClick() {
    this.playTone(600, 0.08, 'sine', 0.08);
  },

  playCorrect() {
    this.init();
    if (!this.ctx) return;
    
    const now = this.ctx.currentTime;
    
    // First note
    this.playTone(523.25, 0.12, 'triangle', 0.12); // C5
    // Second note shortly after
    setTimeout(() => {
      this.playTone(659.25, 0.2, 'triangle', 0.12); // E5
    }, 100);
  },

  playPass() {
    this.init();
    if (!this.ctx) return;

    // Sliding frequency down
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.25);

    gainNode.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  },

  playTick() {
    this.playTone(880, 0.05, 'sine', 0.04);
  },

  playBuzzer() {
    this.init();
    if (!this.ctx) return;

    // Harsh saw wave sliding down slightly
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(90, this.ctx.currentTime + 0.6);

    gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.6);
  },

  playVictory() {
    this.init();
    if (!this.ctx) return;

    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 major arpeggio
    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playTone(freq, 0.35, 'triangle', 0.1);
      }, index * 120);
    });
  }
};

// --- GAME ENGINE STATE ---
const Game = {
  teams: [
    { name: "Équipe Bleue", score: 0, roundScore: 0 },
    { name: "Équipe Rose", score: 0, roundScore: 0 }
  ],
  selectedDecks: ['standard'],
  timerSetting: 40, // default seconds
  
  // Game decks
  gameDeck: [],      // Shuffled subset of 40 cards used for the entire game
  roundDeck: [],     // Cards remaining to guess in the current round
  discardDeck: [],   // Cards already guessed in the current round
  
  // Play state
  currentRound: 1,
  currentTeamIndex: 0,
  currentCardIndex: 0,
  
  // Turn state
  turnCardsGuessed: 0,
  timerInterval: null,
  secondsLeft: 0,
  isTurnActive: false,
  isCardAnimating: false,
  turnHistory: [],   // List of { card, guessed: boolean } played in this turn

  // Setup DOM connections and default values
  init() {
    this.bindEvents();
    this.renderTeamsSetup();
    this.setupPresets();
    this.checkSavedGame();
  },

  setupPresets() {
    const presetBtns = document.querySelectorAll('.preset-btn');
    const timerInput = document.getElementById('input-timer');
    
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        SoundEffects.playClick();
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timerInput.value = btn.dataset.time;
        this.timerSetting = parseInt(btn.dataset.time);
      });
    });

    // Checkbox custom UI behavior
    const deckCheckboxes = document.querySelectorAll('.deck-checkbox input');
    deckCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        SoundEffects.playClick();
        const label = cb.closest('.deck-checkbox');
        if (cb.checked) {
          label.classList.add('active');
        } else {
          label.classList.remove('active');
        }
      });
    });
  },

  renderTeamsSetup() {
    const container = document.getElementById('teams-container');
    container.innerHTML = '';
    this.teams.forEach((team, idx) => {
      const row = document.createElement('div');
      row.className = 'team-input-wrapper';
      row.innerHTML = `
        <span class="team-number-indicator">${idx + 1}</span>
        <input type="text" class="team-name-input" data-index="${idx}" value="${team.name}" placeholder="Nom de l'équipe">
      `;
      
      const input = row.querySelector('.team-name-input');
      input.addEventListener('change', (e) => {
        this.teams[idx].name = e.target.value.trim() || `Équipe ${idx + 1}`;
      });

      container.appendChild(row);
    });
  },

  bindEvents() {
    // Show/hide rules
    document.getElementById('btn-show-rules').addEventListener('click', () => {
      SoundEffects.playClick();
      document.getElementById('rules-modal').classList.add('active');
    });

    document.getElementById('btn-close-rules').addEventListener('click', () => {
      SoundEffects.playClick();
      document.getElementById('rules-modal').classList.remove('active');
    });

    document.getElementById('rules-modal').addEventListener('click', (e) => {
      if (e.target === document.getElementById('rules-modal')) {
        document.getElementById('rules-modal').classList.remove('active');
      }
    });

    // Setup actions
    document.getElementById('btn-add-team').addEventListener('click', () => {
      SoundEffects.playClick();
      if (this.teams.length < 4) {
        const teamColors = ["Bleue", "Rose", "Verte", "Jaune"];
        const nextColor = teamColors[this.teams.length] || "Nouvelle";
        this.teams.push({ name: `Équipe ${nextColor}`, score: 0, roundScore: 0 });
        this.renderTeamsSetup();
      }
    });

    document.getElementById('btn-remove-team').addEventListener('click', () => {
      SoundEffects.playClick();
      if (this.teams.length > 2) {
        this.teams.pop();
        this.renderTeamsSetup();
      }
    });

    document.getElementById('btn-start-game').addEventListener('click', () => {
      this.startGame();
    });

    document.getElementById('btn-resume-saved').addEventListener('click', () => {
      this.resumeSavedGame();
    });

    document.getElementById('btn-delete-saved').addEventListener('click', () => {
      this.deleteSavedGame();
    });

    // Playback Ready -> Start timer
    document.getElementById('btn-ready').addEventListener('click', () => {
      this.startTurn();
    });

    // In-game actions
    document.getElementById('btn-correct').addEventListener('click', () => {
      this.handleGuessCorrect();
    });

    document.getElementById('btn-pass').addEventListener('click', () => {
      this.handlePassCard();
    });

    // Turn verification confirmation
    document.getElementById('btn-confirm-turn').addEventListener('click', () => {
      this.confirmTurn();
    });

    // Post turn/round navigation
    document.getElementById('btn-next-round').addEventListener('click', () => {
      SoundEffects.playClick();
      this.startNextRound();
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
      SoundEffects.playClick();
      this.resetToSetup();
    });
  },

  switchScreen(screenId) {
    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById(screenId);
    target.classList.add('active');
  },

  startGame() {
    SoundEffects.playClick();
    
    // Ensure all team names are gathered directly from inputs
    const inputs = document.querySelectorAll('.team-name-input');
    inputs.forEach((input, idx) => {
      if (this.teams[idx]) {
        this.teams[idx].name = input.value.trim() || `Équipe ${idx + 1}`;
      }
    });

    this.selectedDecks = ['custom'];
    
    // Pool all cards from the custom deck
    let cardPool = [...CARD_DECKS.custom];

    // Shuffle and pick exactly 40 cards
    this.shuffle(cardPool);
    
    // Limit to 40 cards max, or all if pool is smaller
    const deckSize = Math.min(40, cardPool.length);
    this.gameDeck = cardPool.slice(0, deckSize);

    // Initialize scores
    this.teams.forEach(t => {
      t.score = 0;
      t.roundScore = 0;
    });

    this.currentRound = 1;
    this.currentTeamIndex = 0;

    // Launch round 1 intro
    this.prepareRound();
    this.saveGameState();
  },

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },

  prepareRound() {
    // Fill round deck with the 40 cards and shuffle
    this.roundDeck = [...this.gameDeck];
    this.shuffle(this.roundDeck);
    this.discardDeck = [];

    // Reset round scores for teams
    this.teams.forEach(t => t.roundScore = 0);

    this.showRoundIntro();
  },

  showRoundIntro() {
    document.getElementById('intro-round-number').innerText = this.currentRound;
    document.getElementById('intro-cards-left').innerText = this.roundDeck.length;
    
    const titleEl = document.getElementById('intro-round-title');
    const descEl = document.getElementById('intro-round-rules');
    
    if (this.currentRound === 1) {
      titleEl.innerText = "Manche 1 : Description Libre";
      descEl.innerText = "Décrivez les mots en parlant librement. Interdiction de prononcer le mot (ou une partie du mot), de le traduire, ou de l'épeler. Vos coéquipiers peuvent faire autant de propositions qu'ils le souhaitent. Vous pouvez passer des cartes.";
    } else if (this.currentRound === 2) {
      titleEl.innerText = "Manche 2 : Un seul mot";
      descEl.innerText = "Vous ne pouvez prononcer QU'UN SEUL MOT pour faire deviner la carte. Vos coéquipiers n'ont droit qu'à UNE SEULE PROPOSITION de réponse ! S'ils se trompent, vous devez passer à la carte suivante. Mémorisez bien les cartes de la manche 1 !";
    } else {
      titleEl.innerText = "Manche 3 : Mime & Bruitages";
      descEl.innerText = "Interdiction de parler ! Vous devez faire deviner le mot en mimant et en faisant des bruitages. Vos coéquipiers n'ont droit qu'à UNE SEULE PROPOSITION de réponse !";
    }

    document.getElementById('intro-team-name').innerText = this.teams[this.currentTeamIndex].name;
    
    this.switchScreen('screen-round-intro');
  },

  startTurn() {
    SoundEffects.playClick();
    
    this.turnCardsGuessed = 0;
    this.secondsLeft = this.timerSetting;
    this.isTurnActive = true;
    this.turnHistory = [];

    // Update gameplay HUD
    document.getElementById('gameplay-team-name').innerText = this.teams[this.currentTeamIndex].name;
    document.getElementById('gameplay-score-count').innerText = "0";
    document.getElementById('gameplay-cards-left').innerText = this.roundDeck.length;

    // Display first card
    this.currentCardIndex = 0;
    this.displayCard();

    // Start Timer
    const timerContainer = document.querySelector('.timer-container');
    timerContainer.classList.remove('warning');
    
    this.updateTimerCircle();
    
    this.switchScreen('screen-gameplay');
    
    // Interval loop
    this.startTimerInterval();
  },

  startTimerInterval() {
    const timerContainer = document.querySelector('.timer-container');
    this.timerInterval = setInterval(() => {
      this.secondsLeft--;
      
      if (this.secondsLeft <= 5 && this.secondsLeft > 0) {
        timerContainer.classList.add('warning');
        SoundEffects.playTick();
      }

      if (this.secondsLeft <= 0) {
        this.endTurn();
      } else {
        this.updateTimerCircle();
      }
    }, 1000);
  },

  updateTimerCircle() {
    const textEl = document.getElementById('timer-text');
    const circle = document.getElementById('timer-progress');
    
    textEl.innerText = this.secondsLeft;
    
    // Calculate SVG stroke-dashoffset
    const perimeter = 283; // 2 * Math.PI * 45
    const progressFraction = this.secondsLeft / this.timerSetting;
    const offset = perimeter * (1 - progressFraction);
    
    circle.style.strokeDashoffset = offset;
  },

  displayCard() {
    if (this.roundDeck.length === 0) {
      this.endTurn();
      return;
    }

    const card = this.roundDeck[this.currentCardIndex];
    document.getElementById('card-word').innerText = card.word;
    document.getElementById('card-category').innerText = card.category;
    document.getElementById('card-desc').innerText = card.desc || '';

    // Register card in history of this turn if not already present
    if (!this.turnHistory.find(h => h.card.word === card.word)) {
      this.turnHistory.push({ card: card, guessed: false });
    }
  },

  handleGuessCorrect() {
    if (!this.isTurnActive || this.isCardAnimating) return;
    
    SoundEffects.playCorrect();
    this.isCardAnimating = true;

    // Visual card animation
    const cardNode = document.getElementById('game-card');
    cardNode.classList.add('card-correct');

    // Update state in turn history
    const currentCard = this.roundDeck[this.currentCardIndex];
    const hist = this.turnHistory.find(h => h.card.word === currentCard.word);
    if (hist) {
      hist.guessed = true;
    }

    // Local score feedback
    this.turnCardsGuessed++;
    document.getElementById('gameplay-score-count').innerText = this.turnCardsGuessed;

    setTimeout(() => {
      // Remove guessed card temporarily from roundDeck (we will commit it at confirming round summary)
      const card = this.roundDeck.splice(this.currentCardIndex, 1)[0];
      this.discardDeck.push(card);

      document.getElementById('gameplay-cards-left').innerText = this.roundDeck.length;

      // Clean animation classes
      cardNode.classList.remove('card-correct');
      this.isCardAnimating = false;

      if (this.roundDeck.length === 0) {
        this.endTurn();
      } else {
        // Adjust index if we were on the last card
        if (this.currentCardIndex >= this.roundDeck.length) {
          this.currentCardIndex = 0;
        }
        this.displayCard();
      }
    }, 400);
  },

  handlePassCard() {
    if (!this.isTurnActive || this.isCardAnimating) return;

    SoundEffects.playPass();
    this.isCardAnimating = true;

    const cardNode = document.getElementById('game-card');
    cardNode.classList.add('card-pass');

    // Make sure card is marked as NOT guessed in history (though it's default false)
    const currentCard = this.roundDeck[this.currentCardIndex];
    const hist = this.turnHistory.find(h => h.card.word === currentCard.word);
    if (hist) {
      hist.guessed = false;
    }

    setTimeout(() => {
      // Pass simply moves the card to the end of the roundDeck array
      const passedCard = this.roundDeck.splice(this.currentCardIndex, 1)[0];
      this.roundDeck.push(passedCard);

      cardNode.classList.remove('card-pass');
      this.isCardAnimating = false;

      // Ensure index is valid
      if (this.currentCardIndex >= this.roundDeck.length) {
        this.currentCardIndex = 0;
      }
      this.displayCard();
    }, 400);
  },

  endTurn() {
    this.isTurnActive = false;
    clearInterval(this.timerInterval);
    SoundEffects.playBuzzer();

    // Go to turn review screen to check scored cards
    setTimeout(() => {
      this.showTurnSummary();
    }, 1000);
  },

  showTurnSummary() {
    const listContainer = document.getElementById('turn-history-list');
    listContainer.innerHTML = '';

    if (this.turnHistory.length === 0) {
      listContainer.innerHTML = `<p style="text-align: center; padding: 1.5rem; opacity: 0.6; font-weight: 700;">Aucune carte tirée ce tour-ci.</p>`;
      this.switchScreen('screen-turn-summary');
      return;
    }

    this.turnHistory.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = `history-item ${item.guessed ? 'guessed' : ''}`;
      row.innerHTML = `
        <div class="history-word-info">
          <span class="history-word">${item.card.word}</span>
          <span class="history-category">${item.card.category}</span>
        </div>
        <button class="btn-toggle-status ${item.guessed ? 'guessed' : ''}">
          ${item.guessed ? '<i class="fa-solid fa-check"></i> Trouvé' : '<i class="fa-solid fa-xmark"></i> Passé'}
        </button>
      `;

      const toggleBtn = row.querySelector('.btn-toggle-status');
      toggleBtn.addEventListener('click', () => {
        SoundEffects.playClick();
        item.guessed = !item.guessed;
        row.classList.toggle('guessed', item.guessed);
        toggleBtn.classList.toggle('guessed', item.guessed);
        toggleBtn.innerHTML = item.guessed 
          ? '<i class="fa-solid fa-check"></i> Trouvé' 
          : '<i class="fa-solid fa-xmark"></i> Passé';
      });

      listContainer.appendChild(row);
    });

    this.switchScreen('screen-turn-summary');
  },

  confirmTurn() {
    SoundEffects.playClick();

    let turnPoints = 0;
    
    // Process final corrected states
    this.turnHistory.forEach(item => {
      const indexInRound = this.roundDeck.findIndex(c => c.word === item.card.word);
      const indexInDiscard = this.discardDeck.findIndex(c => c.word === item.card.word);
      
      if (item.guessed) {
        turnPoints++;
        // Should be in discard, not in roundDeck
        if (indexInRound !== -1) {
          this.roundDeck.splice(indexInRound, 1);
        }
        if (indexInDiscard === -1) {
          this.discardDeck.push(item.card);
        }
      } else {
        // Should be in roundDeck, not in discard
        if (indexInRound === -1) {
          this.roundDeck.push(item.card);
        }
        if (indexInDiscard !== -1) {
          this.discardDeck.splice(indexInDiscard, 1);
        }
      }
    });

    // Apply scores
    this.teams[this.currentTeamIndex].score += turnPoints;
    this.teams[this.currentTeamIndex].roundScore += turnPoints;

    // Check if the round is finished
    if (this.roundDeck.length === 0) {
      this.endRound();
    } else {
      // Move to next team
      this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;
      this.showRoundIntro();
    }
    this.saveGameState();
  },

  endRound() {
    // Fill Round Summary details
    document.getElementById('summary-round-number').innerText = this.currentRound;
    
    // Sort teams by round score for presentation
    const roundList = document.getElementById('round-scores-list');
    roundList.innerHTML = '';
    this.teams.forEach(team => {
      const row = document.createElement('div');
      row.className = 'score-row';
      row.innerHTML = `
        <span class="score-team-name"><i class="fa-solid fa-users"></i> ${team.name}</span>
        <span class="score-value">+${team.roundScore} pts</span>
      `;
      roundList.appendChild(row);
    });

    // Leaderboard sorted by total score
    const totalList = document.getElementById('total-scores-list');
    totalList.innerHTML = '';
    
    const sortedTeams = [...this.teams].sort((a, b) => b.score - a.score);
    sortedTeams.forEach((team, idx) => {
      const row = document.createElement('div');
      row.className = `score-row ${idx === 0 ? 'leader' : ''}`;
      row.innerHTML = `
        <span class="score-team-name">
          ${idx === 0 ? '👑 ' : ''}${team.name}
        </span>
        <span class="score-value">${team.score} pts</span>
      `;
      totalList.appendChild(row);
    });

    this.switchScreen('screen-round-summary');
  },

  startNextRound() {
    if (this.currentRound < 3) {
      this.currentRound++;
      this.currentTeamIndex = (this.currentRound - 1) % this.teams.length;
      this.prepareRound();
      this.saveGameState();
    } else {
      this.endGame();
    }
  },

  endGame() {
    this.clearGameState();
    SoundEffects.playVictory();
    
    const sorted = [...this.teams].sort((a, b) => b.score - a.score);
    
    // Step 1
    document.getElementById('podium-1-name').innerText = sorted[0].name;
    document.getElementById('podium-1-score').innerText = `${sorted[0].score} pts`;
    
    // Step 2
    if (sorted[1]) {
      document.getElementById('podium-2').style.opacity = '1';
      document.getElementById('podium-2-name').innerText = sorted[1].name;
      document.getElementById('podium-2-score').innerText = `${sorted[1].score} pts`;
    } else {
      document.getElementById('podium-2').style.opacity = '0';
    }

    // Step 3
    if (sorted[2]) {
      document.getElementById('podium-3').style.opacity = '1';
      document.getElementById('podium-3-name').innerText = sorted[2].name;
      document.getElementById('podium-3-score').innerText = `${sorted[2].score} pts`;
    } else {
      document.getElementById('podium-3').style.opacity = '0';
    }

    // Leaderboard list
    const finalLeaderboard = document.getElementById('final-leaderboard-list');
    finalLeaderboard.innerHTML = '';
    sorted.forEach((team, idx) => {
      const row = document.createElement('div');
      row.className = `score-row ${idx === 0 ? 'leader' : ''}`;
      row.innerHTML = `
        <span class="score-team-name"><strong>#${idx + 1}</strong> ${team.name}</span>
        <span class="score-value">${team.score} pts</span>
      `;
      finalLeaderboard.appendChild(row);
    });

    this.switchScreen('screen-game-over');
  },

  resetToSetup() {
    this.clearGameState();
    // Hide resume banner since game was wiped
    document.getElementById('resume-game-banner').classList.add('hidden');

    // Reset structural state
    this.teams.forEach(t => {
      t.score = 0;
      t.roundScore = 0;
    });
    this.currentRound = 1;
    this.currentTeamIndex = 0;
    
    this.switchScreen('screen-setup');
  },

  // --- PERSISTENCE LOGIC ---
  saveGameState() {
    try {
      const state = {
        teams: this.teams,
        selectedDecks: this.selectedDecks,
        timerSetting: this.timerSetting,
        gameDeck: this.gameDeck,
        roundDeck: this.roundDeck,
        discardDeck: this.discardDeck,
        currentRound: this.currentRound,
        currentTeamIndex: this.currentTeamIndex
      };
      localStorage.setItem("timesup_game_state", JSON.stringify(state));
    } catch (e) {
      console.error("Could not save game state to localStorage", e);
    }
  },

  clearGameState() {
    try {
      localStorage.removeItem("timesup_game_state");
    } catch (e) {
      console.error("Could not clear game state from localStorage", e);
    }
  },

  checkSavedGame() {
    try {
      const data = localStorage.getItem("timesup_game_state");
      if (data) {
        const saved = JSON.parse(data);
        if (saved && saved.teams && saved.roundDeck && saved.roundDeck.length > 0) {
          // Show banner
          const banner = document.getElementById('resume-game-banner');
          const infoText = document.getElementById('resume-info');
          
          const teamNames = saved.teams.map(t => t.name).join(" vs ");
          infoText.innerText = `Manche ${saved.currentRound} - ${teamNames}`;
          banner.classList.remove('hidden');
        }
      }
    } catch (e) {
      console.warn("Could not check saved game in localStorage", e);
    }
  },

  resumeSavedGame() {
    try {
      SoundEffects.playClick();
      const data = localStorage.getItem("timesup_game_state");
      if (data) {
        const saved = JSON.parse(data);
        this.teams = saved.teams;
        this.selectedDecks = saved.selectedDecks;
        this.timerSetting = saved.timerSetting;
        this.gameDeck = saved.gameDeck;
        this.roundDeck = saved.roundDeck;
        this.discardDeck = saved.discardDeck;
        this.currentRound = saved.currentRound;
        this.currentTeamIndex = saved.currentTeamIndex;

        // Hide banner
        document.getElementById('resume-game-banner').classList.add('hidden');
        
        // Resume directly to round intro
        this.showRoundIntro();
      }
    } catch (e) {
      console.error("Could not resume saved game", e);
    }
  },

  deleteSavedGame() {
    try {
      SoundEffects.playPass();
      this.clearGameState();
      document.getElementById('resume-game-banner').classList.add('hidden');
    } catch (e) {
      console.error("Could not delete saved game", e);
    }
  }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  Game.init();
});
