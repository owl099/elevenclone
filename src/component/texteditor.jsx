
import React from 'react';
import './texteditor.css';

const TextEditor = () => {
  return (
    <div className="editor-container">
      {/* Tabs */}
      <div className="tabs">
        <button className="tab">
          <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
            TEXT TO SPEECH</button>
        <button className="tab">
          <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
            AGENTS</button>
        <button className="tab">
          <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
            MUSIC</button>
        <button className="tab">
          <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
            SPEECH TO TEXT</button>
        <button className="tab">
          <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
            DUBBING</button>
        <button className="tab">
          <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
            VOICE CLONING</button>
        <button className="tab">
          <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
            ELEVENREADER</button>
      </div>

      {/* Main Editor Box */}
      <div className="color">

      <div className="editor-box">
        <textarea 
          className="editor-textarea"
          placeholder="Type or paste your text here..."
        >
In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros.
[sarcastically] Not the “burn it all down” kind... [giggles] but he was gentle, wise, with eyes like old stars.
[whispers] Even the birds fell silent when he passed.
        </textarea>

        {/* Voice Presets */}
        <div className="voice-presets">
          <div className="preset"><img src="1.png" alt=""/> Samara | Narrate a story</div>
          <div className="preset"><img src="3.png" alt=""/> 2 speakers | Create a dialogue</div>
          <div className="preset"><img src="3.png" alt=""/> Announcer | Voiceover a game</div>
          <div className="preset"><img src="4.png" alt=""/> Sergeant | Play a drill sergeant</div>
          <div className="preset"><img src="5.png" alt=""/> Spuds | Recount an old story</div>
          <div className="preset"><img src="5.png" alt=""/> Jessica | Provide customer support</div>
        </div>

        {/* Footer Controls */}
        <div className="editor-footer">
          <div className="language">
            <img src="flag.png" alt="flag"/> English
          </div>
          <div className="controls">
            <button className="play-btn">▶ Play</button>
            <button className="download-btn">⬇</button>
          </div>
        </div>
      </div>
        <div className="last">
        <p >Powered by Eleven v3 (alpha)</p>
        </div>
      </div>
      <div class="promo-banner">
  <span class="promo-text">EXPERIENCE THE FULL AUDIO AI PLATFORM</span>
  <button class="promo-btn">SIGN UP</button>
</div>
    </div>
  );
};

export default TextEditor;

<svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
