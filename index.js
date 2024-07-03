let msg = new SpeechSynthesisUtterance();
let voices= SpeechSynthesis.getVoices();
msg.voice=voices[0];
let tags= document.querySelectorAll('p,a,h1,h2,h3,div,span,table,h6,div');
tags.forEach((tag) => {
    msg.text=e.target.innerText;
    tag.computedStyleMap.backgroundColor="yellow";
    SpeechSynthesis.speak(msg);
    let interval=setInterval(() => {
        if(!speechSynthesis.speaking){
            tag.computedStyleMap.removeProperty{'background-color'};
            clearInterval(interval);
        }

        
    }, 100);
});
