import Vasuki from "https://esm.sh/vasuki-db";

const vdb = new Vasuki();

// ⚠️ Replace with your credentials
await vdb.login("YOUR_EMAIL", "YOUR_PASSWORD");

async function saveChatToVasuki(userMessage, botResponse) {
    try {
        await vdb.insert("Main", "Chats", {
            userMessage,
            botResponse,
            time: new Date().toISOString()
        });
        console.log("Saved to DB");
    } catch (err) {
        console.error("DB Error:", err);
    }
}

const queryInput = document.getElementById("query");
const chatArea = document.getElementById("chatArea");

function render(text){
    return marked.parse(text);
}

async function startConversation(text){

    if(!text.trim()) return;

    const u = document.createElement("div");
    u.className="message user-msg";
    u.innerText=text;
    chatArea.appendChild(u);

    queryInput.value="";

    const b = document.createElement("div");
    b.className="message bot-msg";
    b.innerHTML="Thinking...";
    chatArea.appendChild(b);

    let fullText="";

    try{
        const res = await fetch(`https://adamyakhairwal2011-vasuki-ai.hf.space/research?topic=${encodeURIComponent(text)}`);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        while(true){
            const {done,value}=await reader.read();
            if(done) break;

            fullText += decoder.decode(value);
            b.innerHTML = render(fullText);
        }

        saveChatToVasuki(text, fullText);

    } catch(e){
        b.innerHTML="Error";
    }
}

queryInput.addEventListener("keydown",e=>{
    if(e.key==="Enter") startConversation(queryInput.value);
});
