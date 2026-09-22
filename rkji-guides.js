const speech=window.speechSynthesis;let activeButton=null;
document.querySelectorAll('.speakButton').forEach(button=>button.addEventListener('click',()=>{
  if(!speech){button.textContent='Read aloud is not supported on this device';return}
  if(activeButton===button&&speech.speaking){speech.cancel();resetButton();return}
  speech.cancel();resetButton();
  const words=button.nextElementSibling.textContent.trim();const utterance=new SpeechSynthesisUtterance(words);utterance.rate=.95;
  activeButton=button;button.classList.add('isSpeaking');button.textContent='■ Stop reading';
  utterance.onend=resetButton;utterance.onerror=resetButton;speech.speak(utterance);
}));
function resetButton(){if(activeButton){activeButton.classList.remove('isSpeaking');activeButton.textContent='🔊 Read this guide aloud';activeButton=null}}
window.addEventListener('pagehide',()=>speech?.cancel());
