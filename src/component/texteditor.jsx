import React from 'react';
import './texteditor.css';

const TextEditor = () => {
  return (
    <div className="editor-wrapper">
      <div className="editor-box">
        <p className="editor-text">
          In the ancient land of <span className="highlight">Eldoria</span>, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named <span className="highlight">Zephyros</span>. 
          <span className="tag">[sarcastically]</span> Not the “burn it all down” kind… <span className="tag">[giggles]</span> but he was gentle, wise, with eyes like old stars. <span className="tag">[whispers]</span> Even the birds fell silent when he passed.
        </p>
      </div>

      <div className="editor-actions">
        <button className="voice-btn">Samara | Narrate a story</button>
        <button className="voice-btn">Spuds | Recount an old story</button>
        <button className="voice-btn">Jessica | Provide customer support</button>
        <button className="voice-btn">Sergeant | Play a drill sergeant</button>
      </div>

      <div className="editor-footer">
        <div className="lang-select">🌐 English</div>
        <div className="play-section">
          <button className="play-btn">▶ PLAY</button>
          <button className="download-btn">⬇</button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
