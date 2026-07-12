// --- DATA: 180 CARDS ---
const CARD_DECKS = {
  standard: [
    { word: "Harry Potter", category: "Fictif", desc: "Le sorcier à lunettes de Poudlard." },
    { word: "Marie Curie", category: "Célébrité", desc: "Physicienne nobélisée pour ses travaux sur le radium." },
    { word: "Tour Eiffel", category: "Lieu", desc: "La dame de fer parisienne de 324 mètres." },
    { word: "Coca-Cola", category: "Marque", desc: "Le soda américain rouge et blanc." },
    { word: "Titanic", category: "Film", desc: "Le paquebot qui a coulé en 1912." },
    { word: "Boulanger", category: "Métier", desc: "Celui qui fait cuire le bon pain chaud le matin." },
    { word: "Lion", category: "Animal", desc: "Le félin royal à crinière." },
    { word: "Téléphone", category: "Objet", desc: "L'appareil qui nous sert à scroller toute la journée." },
    { word: "Révolution Française", category: "Événement", desc: "L'événement de 1789 avec la prise de la Bastille." },
    { word: "Game of Thrones", category: "Série", desc: "La série de dragons et de trônes de fer." },
    { word: "Albert Einstein", category: "Célébrité", desc: "Le physicien décoiffé et sa formule E=mc²." },
    { word: "Mickey Mouse", category: "Fictif", desc: "La souris de Disney avec de grandes oreilles noires." },
    { word: "Statue de la Liberté", category: "Lieu", desc: "Le monument vert offert par la France à New York." },
    { word: "Apple", category: "Marque", desc: "La marque à la pomme croquée." },
    { word: "Star Wars", category: "Film", desc: "La guerre des étoiles avec les sabres laser." },
    { word: "Médecin", category: "Métier", desc: "Le professionnel de santé qui vous ausculte." },
    { word: "Dauphin", category: "Animal", desc: "Le mammifère marin très intelligent et joueur." },
    { word: "Parapluie", category: "Objet", desc: "L'objet indispensable quand il pleut des cordes." },
    { word: "Chute du mur de Berlin", category: "Événement", desc: "L'événement historique de 1989 réunifiant l'Allemagne." },
    { word: "Friends", category: "Série", desc: "La série de sitcom avec Rachel, Ross et le Central Perk." },
    { word: "Leonardo da Vinci", category: "Célébrité", desc: "Le génie peintre de La Joconde." },
    { word: "Sherlock Holmes", category: "Fictif", desc: "Le détective de Baker Street au chapeau de chasse." },
    { word: "Mont Everest", category: "Lieu", desc: "Le sommet le plus haut du monde." },
    { word: "Nike", category: "Marque", desc: "La marque de sport à la virgule." },
    { word: "Avatar", category: "Film", desc: "Le film de science-fiction avec les grands êtres bleus." },
    { word: "Pompier", category: "Métier", desc: "Le soldat du feu au camion rouge." },
    { word: "Chien", category: "Animal", desc: "Le meilleur ami de l'homme." },
    { word: "Clé", category: "Objet", desc: "L'objet en métal pour ouvrir les serrures." },
    { word: "Premier pas sur la Lune", category: "Événement", desc: "L'exploit d'Armstrong en 1969." },
    { word: "Stranger Things", category: "Série", desc: "La série nostalgique avec Eleven et le Monde à l'envers." },
    { word: "Michael Jackson", category: "Célébrité", desc: "Le roi de la pop inventeur du Moonwalk." },
    { word: "Batman", category: "Fictif", desc: "Le chevalier noir de Gotham City." },
    { word: "Colisée", category: "Lieu", desc: "L'amphithéâtre géant de Rome." },
    { word: "McDonald's", category: "Marque", desc: "L'enseigne de fast-food aux arches dorées." },
    { word: "Jurassic Park", category: "Film", desc: "Le film avec des dinosaures clonés." },
    { word: "Avocat", category: "Métier", desc: "Le défenseur en robe noire au tribunal." },
    { word: "Chat", category: "Animal", desc: "Le félin de salon qui adore dormir." },
    { word: "Stylo", category: "Objet", desc: "L'outil classique pour écrire sur du papier." },
    { word: "Découverte de l'Amérique", category: "Événement", desc: "Le voyage de Christophe Colomb en 1492." },
    { word: "The Simpsons", category: "Série", desc: "La famille de dessins animés jaune." },
    { word: "Queen Elizabeth II", category: "Célébrité", desc: "La reine britannique au règne de 70 ans." },
    { word: "Iron Man", category: "Fictif", desc: "Le super-héros en armure rouge et or." },
    { word: "Taj Mahal", category: "Lieu", desc: "Le magnifique palais de marbre blanc en Inde." },
    { word: "Google", category: "Marque", desc: "Le moteur de recherche internet le plus utilisé." },
    { word: "Le Roi Lion", category: "Film", desc: "Le dessin animé de Disney avec Simba et Mufasa." },
    { word: "Professeur", category: "Métier", desc: "L'enseignant devant son tableau." },
    { word: "Cheval", category: "Animal", desc: "L'animal des cavaliers et du galop." },
    { word: "Livre", category: "Objet", desc: "L'objet fait de pages de papier imprimées." },
    { word: "Premier vol en avion", category: "Événement", desc: "L'exploit des frères Wright." },
    { word: "La Casa de Papel", category: "Série", desc: "La série de braqueurs aux masques de Dalí." },
    { word: "Steve Jobs", category: "Célébrité", desc: "Le cofondateur d'Apple au col roulé noir." },
    { word: "Spider-Man", category: "Fictif", desc: "Le tisseur de toile de New York." },
    { word: "Grande Muraille de Chine", category: "Lieu", desc: "Le plus long mur défensif du monde." },
    { word: "Nintendo", category: "Marque", desc: "Le géant du jeu vidéo créateur de Mario." },
    { word: "Forrest Gump", category: "Film", desc: "Le film sur un homme simple qui court beaucoup." },
    { word: "Astronaute", category: "Métier", desc: "Le pilote de fusée dans l'espace." },
    { word: "Éléphant", category: "Animal", desc: "Le plus grand mammifère terrestre doté d'une trompe." },
    { word: "Vélo", category: "Objet", desc: "Le véhicule à deux roues sans moteur." },
    { word: "L'invention de l'imprimerie", category: "Événement", desc: "La révolution de Gutenberg en 1450." },
    { word: "Breaking Bad", category: "Série", desc: "La série de chimie et de chapeau noir." }
  ],
  family: [
    { word: "Lego sous le pied (Aïe !)", category: "Concept", desc: "La pire douleur domestique involontaire." },
    { word: "Crise de la quarantaine", category: "Concept", desc: "L'achat soudain d'une moto par un quarantenaire." },
    { word: "Chanteur de karaoké", category: "Personnage", desc: "Celui qui massacre les chansons au micro le samedi soir." },
    { word: "Moustique à 3h du matin", category: "Animal", desc: "L'insecte volant au bourdonnement insupportable." },
    { word: "Selfie raté", category: "Concept", desc: "La photo de groupe floue où on a tous les yeux fermés." },
    { word: "Panne de réveil", category: "Concept", desc: "La cause classique de retard le matin." },
    { word: "Télétravail en pyjama", category: "Activité", desc: "Le confort ultime de travailler depuis chez soi." },
    { word: "Tatouage raté", category: "Objet", desc: "Un dessin permanent sur la peau mais mal fait." },
    { word: "GPS qui se trompe", category: "Objet", desc: "La voix qui dit de tourner à droite dans un champ." },
    { word: "Rire de baleine", category: "Concept", desc: "Un rire très bruyant et pas très discret." },
    { word: "Zombie du matin", category: "Personnage", desc: "L'état d'une personne avant son premier café." },
    { word: "Pizza de la veille", category: "Nourriture", desc: "Le petit-déjeuner froid idéal des lendemains de fête." },
    { word: "Chaussettes dépareillées", category: "Vêtement", desc: "Le mystère de la machine à laver qui en mange une." },
    { word: "Chute dans les escaliers", category: "Action", desc: "Un moment gênant et douloureux." },
    { word: "Coup de soleil", category: "Concept", desc: "La peau rouge qui brûle après la plage." },
    { word: "Monstre sous le lit", category: "Fictif", desc: "La peur classique des enfants la nuit." },
    { word: "Canard en plastique", category: "Objet", desc: "Le jouet jaune incontournable du bain." },
    { word: "Bisou baveux", category: "Action", desc: "L'affection un peu trop humide de votre grand-mère." },
    { word: "Bébé qui pleure", category: "Personnage", desc: "Le bruit strident qui réveille la nuit." },
    { word: "Raclette", category: "Nourriture", desc: "Le repas divin à base de fromage fondu et pommes de terre." },
    { word: "Dentiste", category: "Métier", desc: "Le médecin qui soigne vos dents avec une roulette bruyante." },
    { word: "Café trop chaud", category: "Boisson", desc: "La boisson qui vous brûle la langue le matin." },
    { word: "Clés perdues", category: "Objet", desc: "Le drame quotidien avant de partir au boulot." },
    { word: "Grève des transports", category: "Événement", desc: "La cause nationale de retard des trains en France." },
    { word: "Mime", category: "Métier", desc: "L'artiste silencieux enfermé dans une boîte imaginaire." },
    { word: "Télécommande perdue", category: "Objet", desc: "L'objet caché entre les coussins du canapé." },
    { word: "Batterie de téléphone à 1%", category: "Concept", desc: "Le stress ultime en fin de journée." },
    { word: "Mot de passe oublié", category: "Concept", desc: "L'erreur de connexion répétée trois fois de suite." },
    { word: "Caddie fou au supermarché", category: "Objet", desc: "La roue coincée qui va toujours à gauche." },
    { word: "Éternuement bruyant", category: "Action", desc: "Le bruit digne d'une explosion de salon." },
    { word: "Danse de la joie", category: "Action", desc: "Les petits pas ridicules quand on est super content." },
    { word: "Coiffeur raté", category: "Personnage", desc: "Le moment de solitude en sortant du salon." },
    { word: "Pile de vaisselle", category: "Objet", desc: "Le travail ménager qui s'accumule dans l'évier." },
    { word: "Grasse matinée", category: "Activité", desc: "L'art de dormir jusqu'à midi le dimanche." },
    { word: "Chien mouillé", category: "Animal", desc: "L'odeur caractéristique après une balade sous la pluie." },
    { word: "Chat qui attaque les pieds", category: "Animal", desc: "Le prédateur de salon sous la couette." },
    { word: "Valise trop lourde", category: "Objet", desc: "Le stress de la pesée à l'aéroport." },
    { word: "Course sous la pluie", category: "Activité", desc: "Le sprint improvisé sans parapluie." },
    { word: "Pain au chocolat vs Chocolatine", category: "Débat", desc: "Le grand débat boulanger français." },
    { word: "Ronflement", category: "Action", desc: "Le bruit de moteur nocturne qui empêche de dormir." }
  ],
  friends: [
    { word: "Lendemain de soirée", category: "Concept", desc: "L'état comateux après avoir trop bu la veille." },
    { word: "Retard systématique", category: "Concept", desc: "Le fameux 'j'arrive dans 5 minutes' alors qu'on est encore au lit." },
    { word: "Tinder", category: "Application", desc: "L'application de rencontres où l'on fait glisser à droite ou à gauche." },
    { word: "Netflix and Chill", category: "Expression", desc: "L'invitation moderne à regarder une série à deux." },
    { word: "Brunch du dimanche", category: "Activité", desc: "Le repas tardif mélangeant sucré et salé." },
    { word: "Selfie de groupe", category: "Action", desc: "La photo prise à bout de bras avec tous ses potes." },
    { word: "Kebab de minuit", category: "Nourriture", desc: "La nourriture salvatrice après une longue nuit." },
    { word: "Gossip / Commérages", category: "Activité", desc: "Les derniers potins croustillants partagés à voix basse." },
    { word: "Spoiler de série", category: "Concept", desc: "Le crime de raconter la fin d'un épisode à ses amis." },
    { word: "Wifi qui rame", category: "Concept", desc: "Le chargement infini d'une vidéo qui énerve tout le monde." },
    { word: "Uber Eats", category: "Service", desc: "L'application pour se faire livrer des sushis sans bouger." },
    { word: "Colocataire", category: "Relation", desc: "La personne avec qui on partage son loyer et sa vaisselle sale." },
    { word: "Mode Avion", category: "Concept", desc: "Le réglage pour déconnecter son téléphone du monde." },
    { word: "Procrastination", category: "Concept", desc: "L'art de remettre à demain ce qu'on peut faire le jour même." },
    { word: "Story Instagram", category: "Internet", desc: "La photo éphémère qui disparaît après 24 heures." },
    { word: "Apéro improvisé", category: "Activité", desc: "Les cacahuètes et verres sortis à la dernière minute." },
    { word: "Mojito", category: "Boisson", desc: "Le cocktail cubain à la menthe, rhum et citron vert." },
    { word: "Bière tiède", category: "Boisson", desc: "La déception absolue dans un gobelet en plastique." },
    { word: "Blind test", category: "Activité", desc: "Le jeu où l'on doit deviner le titre d'une chanson en 3 secondes." },
    { word: "FOMO (Peur de rater un truc)", category: "Expression", desc: "L'anxiété de louper une soirée géniale." },
    { word: "Red Flag (Drapeau rouge)", category: "Expression", desc: "Un signal d'alarme sur le comportement de quelqu'un." },
    { word: "Pyjama en pilou-pilou", category: "Vêtement", desc: "Le vêtement doudou ultra-confortable pour l'hiver." },
    { word: "Caféine", category: "Substance", desc: "La molécule magique qui nous maintient éveillés." },
    { word: "Grasse matinée", category: "Activité", desc: "L'activité préférée du week-end." },
    { word: "TikTok", category: "Application", desc: "L'application de vidéos courtes musicales et virales." },
    { word: "Karaoke", category: "Activité", desc: "L'activité où l'on chante faux sur du Céline Dion." },
    { word: "Burger", category: "Nourriture", desc: "Le sandwich classique avec steak, fromage et frites." },
    { word: "Zara", category: "Marque", desc: "La boutique de vêtements incontournable." },
    { word: "Emoji", category: "Internet", desc: "Les petits pictogrammes jaunes dans nos messages." },
    { word: "Yoga", category: "Activité", desc: "La gymnastique douce d'étirement et de respiration." },
    { word: "Pop-corn", category: "Nourriture", desc: "Le maïs soufflé indispensable au cinéma." },
    { word: "Télétravail", category: "Concept", desc: "Le travail effectué depuis sa maison." },
    { word: "Réveil matin", category: "Objet", desc: "L'appareil qui brise nos rêves chaque matin." },
    { word: "Rumeur", category: "Concept", desc: "Une fausse information qui circule rapidement." },
    { word: "Guacamole", category: "Nourriture", desc: "La purée d'avocat mexicaine épicée." },
    { word: "Canapé", category: "Meuble", desc: "Le meuble d'où l'on regarde la télé pendant des heures." },
    { word: "Pizza froide", category: "Nourriture", desc: "Le meilleur petit-déjeuner du lendemain." },
    { word: "Meme internet", category: "Internet", desc: "L'image drôle détournée qui tourne sur les réseaux." },
    { word: "Secret de polichinelle", category: "Expression", desc: "Une confidence que tout le monde connaît déjà." },
    { word: "Ikea", category: "Marque", desc: "Le magasin suédois où l'on se perd à la recherche de meubles." }
  ],
  culture: [
    { word: "Jules César", category: "Histoire", desc: "Le célèbre général romain assassiné au Sénat." },
    { word: "Cléopâtre", category: "Histoire", desc: "La reine d'Égypte au nez célèbre." },
    { word: "La Joconde", category: "Art", desc: "Le portrait énigmatique de Mona Lisa au Louvre." },
    { word: "Albert Einstein", category: "Célébrité", desc: "Le savant fou génie de la physique." },
    { word: "Napoléon Bonaparte", category: "Histoire", desc: "L'empereur français au chapeau bicorne." },
    { word: "Shakespeare", category: "Littérature", desc: "L'auteur anglais de la tragédie de Hamlet." },
    { word: "Mozart", category: "Musique", desc: "L'enfant prodige autrichien de la musique classique." },
    { word: "Newton et sa pomme", category: "Science", desc: "La légende de la découverte de la gravité." },
    { word: "Marie-Antoinette", category: "Histoire", desc: "La reine de France célèbre pour ses gâteaux." },
    { word: "La statue de la Liberté", category: "Lieu", desc: "Le monument new-yorkais au flambeau." },
    { word: "Neil Armstrong", category: "Histoire", desc: "Le premier homme à avoir marché sur la Lune." },
    { word: "Jeanne d'Arc", category: "Histoire", desc: "La pucelle d'Orléans qui a entendu des voix." },
    { word: "Léonard de Vinci", category: "Célébrité", desc: "Le génie de la Renaissance italienne." },
    { word: "L'Atlantide", category: "Lieu Fictif", desc: "L'île mythique engloutie sous les eaux." },
    { word: "Le Sphinx", category: "Lieu", desc: "La statue mi-homme mi-lion gardant les pyramides." },
    { word: "Pyramides d'Égypte", category: "Lieu", desc: "Les tombes monumentales des pharaons." },
    { word: "Frankenstein", category: "Fictif", desc: "Le monstre recousu créé par un docteur." },
    { word: "Sherlock Holmes", category: "Fictif", desc: "Le détective privé consultant de Londres." },
    { word: "Charles de Gaulle", category: "Histoire", desc: "Le général de la France Libre et président." },
    { word: "Vincent van Gogh", category: "Art", desc: "Le peintre hollandais à l'oreille coupée." },
    { word: "Dracula", category: "Fictif", desc: "Le comte vampire transylvanien buveur de sang." },
    { word: "Beethoven", category: "Musique", desc: "Le compositeur allemand devenu sourd." },
    { word: "Le Penseur", category: "Art", desc: "La sculpture de Rodin d'un homme assis pensif." },
    { word: "Picasso", category: "Art", desc: "Le peintre espagnol inventeur du cubisme." },
    { word: "Louis XIV (Le Roi Soleil)", category: "Histoire", desc: "Le roi bâtisseur du château de Versailles." },
    { word: "Robin des Bois", category: "Fictif", desc: "Le brigand qui vole aux riches pour donner aux pauvres." },
    { word: "Christophe Colomb", category: "Histoire", desc: "L'explorateur italien qui a navigué vers les Amériques." },
    { word: "Tarzan", category: "Fictif", desc: "L'homme-singe de la jungle élevé par des gorilles." },
    { word: "King Kong", category: "Fictif", desc: "Le singe géant qui grimpe sur l'Empire State Building." },
    { word: "Le Monstre du Loch Ness", category: "Légende", desc: "La créature légendaire du lac écossais." },
    { word: "Hercule", category: "Mythologie", desc: "Le demi-dieu grec aux douze travaux." },
    { word: "Zeus", category: "Mythologie", desc: "Le roi des dieux de l'Olympe lançant des éclairs." },
    { word: "La Tour de Pise", category: "Lieu", desc: "Le monument italien célèbre pour son inclinaison." },
    { word: "Moby Dick", category: "Livre", desc: "Le cachalot blanc géant du roman d'Melville." },
    { word: "Darwin", category: "Science", desc: "Le scientifique de la théorie de l'évolution." },
    { word: "Vivaldi", category: "Musique", desc: "Le compositeur italien des Quatre Saisons." },
    { word: "Bouddha", category: "Religion", desc: "Le sage indien fondateur du bouddhisme." },
    { word: "Roméo et Juliette", category: "Littérature", desc: "Les amants maudits les plus célèbres de Vérone." },
    { word: "Gandhi", category: "Histoire", desc: "Le guide spirituel indien de la non-violence." },
    { word: "Nelson Mandela", category: "Histoire", desc: "Le leader sud-africain symbole de la lutte anti-apartheid." }
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
  isPaused: false,
  lastToggleTime: 0,
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

    // Pause/Resume actions
    document.getElementById('btn-pause-play').addEventListener('click', () => {
      this.togglePause();
    });
    
    document.getElementById('btn-resume').addEventListener('click', () => {
      this.togglePause();
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

    // Gather selected decks
    const decks = [];
    if (document.getElementById('deck-standard').checked) decks.push('standard');
    if (document.getElementById('deck-family').checked) decks.push('family');
    if (document.getElementById('deck-friends').checked) decks.push('friends');
    if (document.getElementById('deck-culture').checked) decks.push('culture');

    const errorDiv = document.getElementById('deck-validation-error');
    if (decks.length === 0) {
      errorDiv.classList.remove('hidden');
      return;
    }
    errorDiv.classList.add('hidden');

    this.selectedDecks = decks;
    
    // Pool all cards from selected decks
    let cardPool = [];
    decks.forEach(deckKey => {
      cardPool = cardPool.concat(CARD_DECKS[deckKey]);
    });

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
    this.isPaused = false;
    this.turnHistory = [];

    // Setup pause view state
    document.getElementById('gameplay-pause-overlay').classList.add('hidden');
    document.getElementById('game-card').classList.remove('hidden');
    const pausePlayBtn = document.getElementById('btn-pause-play');
    pausePlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    pausePlayBtn.title = "Mettre en pause";
    
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

  togglePause() {
    if (!this.isTurnActive) return;

    // Prevent rapid click bouncing on touch screens (cooldown of 400ms)
    const now = Date.now();
    if (now - this.lastToggleTime < 400) {
      return;
    }
    this.lastToggleTime = now;

    SoundEffects.playClick();
    const pauseOverlay = document.getElementById('gameplay-pause-overlay');
    const gameCard = document.getElementById('game-card');
    const pausePlayBtn = document.getElementById('btn-pause-play');

    if (this.isPaused) {
      // Resume
      this.isPaused = false;
      pauseOverlay.classList.add('hidden');
      gameCard.classList.remove('hidden');
      pausePlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      pausePlayBtn.title = "Mettre en pause";
      
      this.startTimerInterval();
    } else {
      // Pause
      this.isPaused = true;
      pauseOverlay.classList.remove('hidden');
      gameCard.classList.add('hidden');
      pausePlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      pausePlayBtn.title = "Reprendre le jeu";
      
      clearInterval(this.timerInterval);
    }
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
    if (!this.isTurnActive || this.isCardAnimating || this.isPaused) return;
    
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
    if (!this.isTurnActive || this.isCardAnimating || this.isPaused) return;

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
  }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  Game.init();
});
