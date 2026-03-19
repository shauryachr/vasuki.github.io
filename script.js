import Vasuki from "https://esm.sh/vasuki-db";

/* ===== DB SETUP ===== */
const vdb = new Vasuki();
await vdb.login("YOUR_EMAIL", "YOUR_PASSWORD");

async function saveChatToVasuki(userMessage, botResponse) {
    try {
        await vdb.insert("Main", "Chats", {
            userMessage,
            botResponse,
            time: new Date().toISOString()
        });
    } catch (err) {
        console.error("DB Error:", err);
    }
}

/* ===== YOUR ORIGINAL CODE (UNCHANGED) ===== */

const queryInput = document.getElementById('query');
const stopContainer = document.getElementById('stopContainer');
const homeUI = document.getElementById('homeUI');
const chatArea = document.getElementById('chatArea');
const footerDock = document.getElementById('footerDock');
const mainInput = document.getElementById('mainInput');
const modeLabel = document.getElementById('modeLabel');
const modeDropdown = document.getElementById('modeDropdown');
const userNameDisplay = document.getElementById('userName');

let currentMode = 'code';
let abortController = null;

/* ===== CHAT HISTORY (KEEPED) ===== */

const CHAT_HISTORY_KEY = 'vasuki_chat_history';
const MAX_HISTORY_ITEMS = 100;

function saveChatHistory(userMessage, botResponse) {
    const history = JSON.parse(localStorage.getItem(CHAT_HISTORY_KEY) || '[]');
    history.push({ userMessage, botResponse });
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history));
}

/* ===== RENDER FUNCTION SAME ===== */

function renderContent(text) {
let processed = text.replace(/\\\[/g, '$$$$').replace(/\\\]/g, '$$$$');
let htmlContent = marked.parse(processed);
return htmlContent;
}

/* ===== MAIN FUNCTION ===== */

async function startConversation(text) {

if (!text.trim()) return;

const uMsg = document.createElement('div');
uMsg.className = 'message user-msg';
uMsg.textContent = text;
chatArea.appendChild(uMsg);

queryInput.value = '';

const bMsg = document.createElement('div');
bMsg.className = 'message bot-msg';
const contentDiv = document.createElement('div');
contentDiv.innerHTML = '<em>Thinking...</em>';
bMsg.appendChild(contentDiv);
chatArea.appendChild(bMsg);

abortController = new AbortController();

try {

const resp = await fetch(`https://adamyakhairwal2011-vasuki-ai.hf.space/research?topic=${encodeURIComponent(text)}&mode=${currentMode}`);

const reader = resp.body.getReader();
const decoder = new TextDecoder();
let fullText = "";

while (true) {
const {done, value} = await reader.read();
if (done) break;

fullText += decoder.decode(value, {stream: true});
contentDiv.innerHTML = renderContent(fullText);
}

/* ✅ LOCAL + VASUKI SAVE */
saveChatHistory(text, fullText);
saveChatToVasuki(text, fullText);

} catch (e) {
contentDiv.innerHTML = "<p style='color:red'>Error</p>";
}

}

queryInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') startConversation(queryInput.value);
});

window.handleQuickAction = (t) => startConversation(t);
