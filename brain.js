// brain.js — Vasuki iTech Labs Daily Riddle Logic

// ── 365 RIDDLES ────────────────────────────────────────────────────────────────
const RIDDLES = [
  {q:"I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",h:"You hear me in mountains and canyons.",a:"An echo"},
  {q:"The more you take, the more you leave behind. What am I?",h:"Think about walking.",a:"Footsteps"},
  {q:"I have cities, but no houses live there. I have mountains, but no trees grow there. I have water, but no fish swim there. What am I?",h:"You unfold me on a trip.",a:"A map"},
  {q:"What has hands but can't clap?",h:"It tells you something important every day.",a:"A clock"},
  {q:"I'm light as a feather, yet the strongest man can't hold me for more than a few minutes. What am I?",h:"You do it automatically.",a:"Breath"},
  {q:"What can travel around the world while staying in a corner?",h:"Found on envelopes.",a:"A stamp"},
  {q:"I have a head and a tail but no body. What am I?",h:"It's worth money.",a:"A coin"},
  {q:"What gets wetter as it dries?",h:"Used after a bath.",a:"A towel"},
  {q:"The more you have of it, the less you see. What is it?",h:"It surrounds you at night.",a:"Darkness"},
  {q:"What goes up but never comes down?",h:"It happens as you live.",a:"Your age"},
  {q:"I have keys but no locks. I have space but no room. You can enter but can't go inside. What am I?",h:"Used for typing.",a:"A keyboard"},
  {q:"What has one eye but can't see?",h:"Used in sewing.",a:"A needle"},
  {q:"What is always in front of you but can't be seen?",h:"It hasn't happened yet.",a:"The future"},
  {q:"I have teeth but I can't bite. What am I?",h:"It grips things.",a:"A comb"},
  {q:"What has legs but doesn't walk?",h:"You sit on it.",a:"A table"},
  {q:"What can you catch but not throw?",h:"It spreads easily.",a:"A cold"},
  {q:"What gets bigger the more you take away from it?",h:"Think about digging.",a:"A hole"},
  {q:"I'm not alive, but I grow; I don't have lungs, but I need air. What am I?",h:"Spreads with oxygen.",a:"Fire"},
  {q:"What has a neck but no head?",h:"Holds liquid.",a:"A bottle"},
  {q:"What comes once in a minute, twice in a moment, but never in a thousand years?",h:"Look at the letters.",a:"The letter M"},
  {q:"What word is spelled incorrectly in every dictionary?",h:"The clue is in the question.",a:"Incorrectly"},
  {q:"I have branches but no leaves, no trunk and no fruit. What am I?",h:"Financial institution.",a:"A bank"},
  {q:"What runs but has no legs?",h:"Flows downhill.",a:"A river"},
  {q:"What can you break even if you never pick it up or touch it?",h:"Social interaction.",a:"A promise"},
  {q:"What invention lets you look right through a wall?",h:"Found in every room.",a:"A window"},
  {q:"I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",h:"Destroys things.",a:"Fire"},
  {q:"What has a thumb and four fingers but isn't alive?",h:"Worn on a hand.",a:"A glove"},
  {q:"What goes through cities and fields but never moves?",h:"Vehicles travel on it.",a:"A road"},
  {q:"What has words but never speaks?",h:"Found in libraries.",a:"A book"},
  {q:"What is full of holes but still holds water?",h:"Kitchen item.",a:"A sponge"},
  {q:"What has a bottom at the top?",h:"Clothing item.",a:"A leg — trousers have legs with bottoms at the top"},
  {q:"What is black when it's clean and white when it's dirty?",h:"Used at school.",a:"A blackboard"},
  {q:"I have no life but I can die. What am I?",h:"Device you charge.",a:"A battery"},
  {q:"What can run but never walks, has a mouth but never talks, has a head but never weeps?",h:"Natural water feature.",a:"A river"},
  {q:"What has four wheels and flies?",h:"Waste collection.",a:"A garbage truck"},
  {q:"What is it that given one, you'll have either two or none?",h:"Games use this.",a:"A choice"},
  {q:"What is so fragile that saying its name breaks it?",h:"Complete absence of sound.",a:"Silence"},
  {q:"I am not alive, yet I grow. I do not have lungs, yet I need air. What am I?",h:"Used to start campfires.",a:"Fire"},
  {q:"What has a ring but no finger?",h:"You answer it.",a:"A telephone"},
  {q:"What kind of tree can you carry in your hand?",h:"Part of your body.",a:"A palm tree"},
  {q:"What can fill a room but takes up no space?",h:"It illuminates.",a:"Light"},
  {q:"What has 13 hearts but no organs?",h:"A game item.",a:"A deck of cards"},
  {q:"What has ears but cannot hear?",h:"Grows in fields.",a:"Corn"},
  {q:"What has a face and two hands but no arms or legs?",h:"Tells the time.",a:"A clock"},
  {q:"What gets sharper the more you use it?",h:"Mental activity.",a:"Your brain"},
  {q:"What belongs to you but is used more by others?",h:"What people call you.",a:"Your name"},
  {q:"What do you throw out when you want to use it, but take in when you don't want to use it?",h:"Fishing tool.",a:"An anchor"},
  {q:"I have a head, a tail, but no body. What am I?",h:"Small currency.",a:"A coin"},
  {q:"What starts with an E, ends with an E, but only has one letter?",h:"You send it.",a:"An envelope"},
  {q:"What is harder to catch the faster you run?",h:"You need it to breathe.",a:"Your breath"},
  {q:"What has four fingers and a thumb but isn't a hand?",h:"Keep your hand warm.",a:"A glove"},
  {q:"What do you serve but never eat?",h:"Used in games.",a:"A tennis ball"},
  {q:"What is at the end of a rainbow?",h:"Look at the word itself.",a:"The letter W"},
  {q:"What can't talk but will reply when spoken to?",h:"Bounces back sound.",a:"An echo"},
  {q:"What stays in a corner yet travels the world?",h:"On letters.",a:"A stamp"},
  {q:"What has a spine but no bones?",h:"You read it.",a:"A book"},
  {q:"What has two hands but no arms?",h:"Hangs on a wall.",a:"A clock"},
  {q:"What falls but never breaks, and breaks but never falls?",h:"Weather and day.",a:"Night falls and day breaks"},
  {q:"What can you hold in your right hand but not in your left?",h:"Body part.",a:"Your left hand"},
  {q:"What has an eye but cannot see?",h:"Storm center.",a:"A hurricane"},
  {q:"I have a bed but I never sleep, a mouth but I never eat. What am I?",h:"Flows downhill.",a:"A river"},
  {q:"What word has three syllables and 26 letters?",h:"Start of learning.",a:"The alphabet"},
  {q:"What can be found at the start of eternity and the end of time?",h:"A letter.",a:"The letter E"},
  {q:"What disappears the moment you say its name?",h:"Total quiet.",a:"Silence"},
  {q:"What goes up and down but doesn't move?",h:"Found outside buildings.",a:"Stairs"},
  {q:"What can you put in a wood box that will make it lighter?",h:"Opposite of heavy.",a:"Holes"},
  {q:"What goes from Z to A?",h:"A to Z reversed.",a:"A zebra"},
  {q:"What is made of water but if you put it in water it dies?",h:"Frozen water.",a:"An ice cube"},
  {q:"What do you answer even though it never asks you questions?",h:"Ring ring.",a:"A phone"},
  {q:"What runs around a house but doesn't move?",h:"Outdoor boundary.",a:"A fence"},
  {q:"What is always coming but never arrives?",h:"24 hours away.",a:"Tomorrow"},
  {q:"What has an eye but can't see, a spine but no bones, and wings but can't fly?",h:"You read it.",a:"A book"},
  {q:"What has a tail and a head but no body?",h:"Small round metal.",a:"A coin"},
  {q:"What looks like half an apple?",h:"Simple observation.",a:"The other half"},
  {q:"What do you call a bear without ears?",h:"Letter removal.",a:"A B"},
  {q:"What goes around the world but stays in a corner?",h:"On letters.",a:"A stamp"},
  {q:"What comes down but never goes up?",h:"Weather.",a:"Rain"},
  {q:"What has cities but no houses?",h:"Used for navigation.",a:"A map"},
  {q:"What can you add to water to make it disappear?",h:"Some minerals.",a:"Salt"},
  {q:"I can be cracked, made, told, and played. What am I?",h:"Funny thing.",a:"A joke"},
  {q:"What is always in front of you but cannot be seen?",h:"Hasn't happened yet.",a:"The future"},
  {q:"What has a head but no tail?",h:"Coin observation.",a:"A coin — some coins only have heads"},
  {q:"What do you lose the moment you share it?",h:"Classified information.",a:"A secret"},
  {q:"What can you catch but never see?",h:"Invisible illness.",a:"A cold"},
  {q:"What has roots as nobody sees?",h:"Tolkien riddle.",a:"A mountain"},
  {q:"I am taken from a mine and shut up in a wood. I am used by most people. What am I?",h:"For writing.",a:"A pencil"},
  {q:"What can fly without wings?",h:"Passes quickly.",a:"Time"},
  {q:"What gets stronger the more people it carries?",h:"Connects two banks.",a:"A bridge"},
  {q:"What type of cheese is made backwards?",h:"Swiss dairy product.",a:"Edam"},
  {q:"What starts with the letter T, is filled with T, and ends in T?",h:"Hot drink container.",a:"A teapot"},
  {q:"What tastes better than it smells?",h:"In your mouth.",a:"A tongue"},
  {q:"What five letter word becomes shorter when you add two letters to it?",h:"Think about the meaning.",a:"Short — adding ER makes shorter"},
  {q:"What word becomes a palindrome when you add three letters?",h:"Think about time.",a:"Repaper"},
  {q:"What has 6 faces, 21 eyes, but cannot see?",h:"Used in games.",a:"A die — a dice"},
  {q:"What is as light as a feather, but even the world's strongest man couldn't hold it for more than a minute?",h:"You breathe it.",a:"His breath"},
  {q:"What loses its head in the morning and gets it back at night?",h:"Resting place.",a:"A pillow"},
  {q:"What has many keys but opens no door?",h:"Musical instrument.",a:"A piano"},
  {q:"What is black, white, and red all over?",h:"You read it.",a:"A newspaper"},
  {q:"What do you call a sleeping dinosaur?",h:"Ancient nap.",a:"A dino-snore"},
  {q:"What has a bottom at its top?",h:"Clothing leg.",a:"A leg of trousers"},
  {q:"What can't be used until it's broken?",h:"Breakfast food.",a:"An egg"},
  {q:"What is brown and sticky?",h:"From a tree.",a:"A stick"},
  {q:"What has lots of eyes but can't see?",h:"Vegetable.",a:"A potato"},
  {q:"What kind of ship has two mates but no captain?",h:"Romantic.",a:"A courtship"},
  {q:"What do you call a fish with no eyes?",h:"Remove the letter.",a:"A fsh"},
  {q:"What goes up when rain comes down?",h:"Weather protection.",a:"An umbrella"},
  {q:"What are two things you can never eat for breakfast?",h:"Time of day.",a:"Lunch and dinner"},
  {q:"If a rooster lays an egg on top of a barn, which way does it roll?",h:"Biology fact.",a:"Roosters don't lay eggs"},
  {q:"How far can a dog run into the woods?",h:"Midpoint.",a:"Halfway — then it's running out"},
  {q:"What gets more useful the dirtier it gets?",h:"Home equipment.",a:"A chimney"},
  {q:"What do lawyers wear to court?",h:"Legal clothing.",a:"Lawsuits"},
  {q:"I am the first on Earth, second in Heaven, appear twice a week, and once in a year. What am I?",h:"A letter.",a:"The letter E"},
  {q:"What do you call cheese that isn't yours?",h:"Not yours.",a:"Nacho cheese"},
  {q:"What has bark but no bite?",h:"Tall plant.",a:"A tree"},
  {q:"Why don't scientists trust atoms?",h:"Atomic behavior.",a:"Because they make up everything"},
  {q:"What can you add to a barrel of water to make it lighter?",h:"Not another liquid.",a:"A hole"},
  {q:"What runs but has no legs, has banks but no money?",h:"Flows in nature.",a:"A river"},
  {q:"What can be as big as a house, as small as a mouse, but has no weight?",h:"It follows you.",a:"A shadow"},
  {q:"What walks on four legs in the morning, two at noon, and three in the evening?",h:"Think human lifecycle.",a:"A human being"},
  {q:"If there are 6 apples and you take away 4, how many do you have?",h:"You took them.",a:"4 — you took 4"},
  {q:"What word contains all 26 letters?",h:"The thing letters form.",a:"The alphabet"},
  {q:"Why can't Elsa have a balloon?",h:"Frozen finger problem.",a:"Because she'll let it go"},
  {q:"What does a nosey pepper do?",h:"Intrusive spice.",a:"It gets jalapeño business"},
  {q:"What do you call a sleeping T-rex?",h:"Dinosaur nap.",a:"A dino-snore"},
  {q:"Why are ghosts bad liars?",h:"See-through nature.",a:"Because you can see right through them"},
  {q:"What's an astronaut's favorite key on the keyboard?",h:"Space.",a:"The spacebar"},
  {q:"What do you call a bear without any teeth?",h:"Dental issue.",a:"A gummy bear"},
  {q:"What do you call an elephant that doesn't matter?",h:"Wordplay.",a:"An irrelephant"},
  {q:"What is a witch's favorite subject in school?",h:"Magical skill.",a:"Spelling"},
  {q:"What did the ground say to the earthquake?",h:"Cracked response.",a:"You crack me up"},
  {q:"What do you call a snowman's temper tantrum?",h:"Frozen anger.",a:"A meltdown"},
  {q:"What has 4 letters, sometimes 9, but never 5?",h:"The question is the answer.",a:"The words 'has', 'sometimes', 'never' — it's describing itself"},
  {q:"Why did the cookie go to the doctor?",h:"Sick dessert.",a:"Because it felt crummy"},
  {q:"What did the tree say to the wind?",h:"Nature conversation.",a:"Leaf me alone"},
  {q:"Why did the picture go to jail?",h:"Artistic crime.",a:"Because it was framed"},
  {q:"What do you call a cow in an earthquake?",h:"Shaky dairy.",a:"A milkshake"},
  {q:"What do you call a duck that gets all A's?",h:"Academic bird.",a:"A wise quacker"},
  {q:"What do you call a boomerang that doesn't come back?",h:"Broken toy.",a:"A stick"},
  {q:"Why was the algebra book unhappy?",h:"Math problems.",a:"Because it had too many x's"},
  {q:"Why did the golfer wear two pairs of pants?",h:"Clothing reason.",a:"In case he got a hole in one"},
  {q:"What kind of music do planets like?",h:"Space sound.",a:"Neptunes"},
  {q:"What do you call a lazy bull?",h:"Slow cattle.",a:"A bulldozer"},
  {q:"Why did the teddy bear say no to dessert?",h:"Already full.",a:"Because she was already stuffed"},
  {q:"What do you call a grumpy cat?",h:"Feline attitude.",a:"A sour-puss"},
  {q:"What goes up when the rain goes down?",h:"Weather protection.",a:"An umbrella"},
  {q:"What do you call a fish that makes music?",h:"Musical sea creature.",a:"A bass"},
  {q:"What's the difference between a guitar and a fish?",h:"Music vs seafood.",a:"You can tune a guitar but you can't tuna fish"},
  {q:"What do you call a famous fish?",h:"Celebrity sea creature.",a:"A starfish"},
  {q:"What did the zero say to the eight?",h:"Circular comment.",a:"Nice belt"},
  {q:"How does a skeleton call his friends?",h:"Bone phone.",a:"On the tele-bone"},
  {q:"What do you call two birds in love?",h:"Avian romance.",a:"Tweet-hearts"},
  {q:"What do you call a fake stone?",h:"Not real rock.",a:"A sham-rock"},
  {q:"Why can't you trust the king of the jungle?",h:"Animal royalty.",a:"Because he's always lion"},
  {q:"What do you call a pig that does karate?",h:"Chop it.",a:"A pork chop"},
  {q:"What did the ocean say to the river?",h:"An invitation.",a:"Nothing — it just waved it in"},
  {q:"Why did the computer go to the doctor?",h:"Technical illness.",a:"Because it had a virus"},
  {q:"What do you call a dinosaur with an extensive vocabulary?",h:"Intelligent ancient creature.",a:"A thesaurus"},
  {q:"What do clouds wear under their clothes?",h:"Weather fashion.",a:"Thunderwear"},
  {q:"What do you call a snowman with a six-pack?",h:"Fit snowman.",a:"An abdominal snowman"},
  {q:"Why was the math test sad?",h:"Full of challenges.",a:"Because it had too many problems"},
  {q:"Why did the banana go to the doctor?",h:"Fruit illness.",a:"Because it wasn't peeling well"},
  {q:"What do you call a cat that gets everything it wants?",h:"Persuasive feline.",a:"Purrr-suasive"},
  {q:"What do you call a sheep that knows karate?",h:"Martial arts wool.",a:"A lamb chop"},
  {q:"What runs all day but never gets tired?",h:"No legs needed.",a:"Water"},
  {q:"What goes tick-tock and is cold?",h:"Frozen time.",a:"A clock in the winter"},
  {q:"I have a bed but I never sleep. I have a mouth but I never eat. What am I?",h:"Flows in nature.",a:"A river"},
];

// ── SAFE STORAGE ───────────────────────────────────────────────────────────────
function storageGet(key, fallback) {
  try { const v = localStorage.getItem(key); return v !== null ? v : fallback; }
  catch(e) { return fallback; }
}
function storageSet(key, val) {
  try { localStorage.setItem(key, val); } catch(e) {}
}

// ── STATE ──────────────────────────────────────────────────────────────────────
const today      = new Date();
const todayStr   = today.toISOString().slice(0, 10);
const dayOfYear  = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const riddleIdx  = (dayOfYear - 1) % RIDDLES.length;
const riddle     = RIDDLES[riddleIdx];

let state;
try { state = JSON.parse(storageGet('vasuki_puzzle', '{}')); }
catch(e) { state = {}; }
if (state.date !== todayStr) {
  state = { date: todayStr, solved: false, revealed: false, hinted: false };
  storageSet('vasuki_puzzle', JSON.stringify(state));
}

let streak      = parseInt(storageGet('vasuki_streak', '0'));
let totalSolved = parseInt(storageGet('vasuki_total',  '0'));

// ── HELPERS ────────────────────────────────────────────────────────────────────
function showResultBadge(correct) {
  const el = document.getElementById('resultBadge');
  el.className = 'result-badge ' + (correct ? 'correct' : 'wrong');
  el.innerHTML = correct ? '🎉 Great job! You solved today\'s riddle!' : '💡 Better luck tomorrow!';
}

function saveState() {
  storageSet('vasuki_puzzle', JSON.stringify(state));
}

// ── RIDDLE ACTIONS ─────────────────────────────────────────────────────────────
function showHint() {
  document.getElementById('hintBox').classList.add('show');
  document.getElementById('hintBtn').disabled = true;
  state.hinted = true;
  saveState();
}

function revealAnswer() {
  document.getElementById('answerBox').classList.add('show');
  document.getElementById('revealBtn').disabled = true;
  document.getElementById('solvedBtn').disabled = true;
  state.revealed = true;
  saveState();
}

function markSolved() {
  document.getElementById('answerBox').classList.add('show');
  document.getElementById('revealBtn').disabled = true;
  document.getElementById('solvedBtn').disabled = true;
  state.solved = true;
  showResultBadge(true);

  const lastSolved  = storageGet('vasuki_last_solved', '');
  const yesterday   = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);

  if (lastSolved === yStr) { streak++; }
  else if (lastSolved !== todayStr) { streak = 1; }
  totalSolved++;

  storageSet('vasuki_streak',      streak);
  storageSet('vasuki_total',       totalSolved);
  storageSet('vasuki_last_solved', todayStr);
  document.getElementById('streakNum').textContent = streak;
  document.getElementById('solvedNum').textContent  = totalSolved;
  saveState();
}

// ── SHARE ──────────────────────────────────────────────────────────────────────
function getShareText() {
  return `🧠 Vasuki Daily Riddle — Day ${dayOfYear}\n\n"${riddle.q}"\n\nCan you solve it? 👉 ${window.location.href}`;
}
function copyShare() {
  navigator.clipboard.writeText(getShareText()).then(() => alert('Copied to clipboard!'));
}
function shareWhatsApp() {
  window.open('https://wa.me/?text=' + encodeURIComponent(getShareText()), '_blank');
}
function shareTwitter() {
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(getShareText()), '_blank');
}

// ── COUNTDOWN ──────────────────────────────────────────────────────────────────
function updateCountdown() {
  const now = new Date();
  const midnight = new Date(now); midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('countdown').textContent =
    `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// ── INIT ───────────────────────────────────────────────────────────────────────
(function init() {
  const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  document.getElementById('dateBadge').textContent =
    `📅 ${DAYS[today.getDay()]}, ${MONTHS[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

  document.getElementById('riddleNum').textContent = `RIDDLE #${riddleIdx + 1} OF ${RIDDLES.length}`;
  document.getElementById('riddleDay').textContent = `Day ${dayOfYear}`;
  document.getElementById('riddleQ').textContent   = riddle.q;
  document.getElementById('hintBox').textContent   = riddle.h;
  document.getElementById('answerBox').textContent = riddle.a;
  document.getElementById('streakNum').textContent = streak;
  document.getElementById('solvedNum').textContent  = totalSolved;

  if (state.hinted) { document.getElementById('hintBox').classList.add('show'); }
  if (state.revealed || state.solved) {
    document.getElementById('answerBox').classList.add('show');
    document.getElementById('revealBtn').disabled = true;
    document.getElementById('solvedBtn').disabled = true;
  }
  if (state.solved) { showResultBadge(true); }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
