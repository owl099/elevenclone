"use client"; 

import React, { useState, useEffect } from 'react';
import './texteditor.css';

const TextEditor = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedFlag, setSelectedFlag] = useState('/us.svg');
    const [menuOpen, setMenuOpen] = useState(false);
    const [audioUrl, setAudioUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Manage a single Audio object in state
    const [audio, setAudio] = useState(null);

    // Create and clean up the Audio instance when the component mounts/unmounts
    useEffect(() => {
        const newAudio = new Audio();
        setAudio(newAudio);

        return () => {
            newAudio.pause();
            newAudio.src = '';
        };
    }, []);

    const handleLanguageSelect = async (language,flag) => {
        setIsLoading(true);
        setSelectedLanguage(language);
        setSelectedFlag(flag); // ✅ update flag
        setAudioUrl('');
        setMenuOpen(false); // ✅ close dropdown
        // Stop any currently playing audio before fetching the new one
        if (audio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        }

        try {
            const response = await fetch(`https://elevenclonebackend.vercel.app/api/audio?lang=${language.toLowerCase()}`);
            if (!response.ok) {
                throw new Error('Failed to fetch audio URL');
            }
            const data = await response.json();
            setAudioUrl(data.url);
        } catch (error) {
            console.error('Error fetching audio:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePlayAudio = () => {
        if (!audio || !audioUrl) return;

        // If the audio is already playing, stop it and reset
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        } else {
            // Otherwise, set the source and play the audio
            audio.src = audioUrl;
            audio.play();
            setIsPlaying(true);
            audio.onended = () => setIsPlaying(false);
        }
    };



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
          defaultValue="In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros.
[sarcastically] Not the “burn it all down” kind... [giggles] but he was gentle, wise, with eyes like old stars.
[whispers] Even the birds fell silent when he passed."

          placeholder="Type or paste your text here..."
        >

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

        <div className="editor-footer">
  {/* Language Dropdown Button */}
<div className="language-dropdown">
  <button className="lang-btn" onClick={() =>  {   console.log("Button clicked!");
setMenuOpen((prev) => !prev)} }
    >
    <img src={selectedFlag} alt="flag" className="flag-icon" />
    <span className="lang-text">{selectedLanguage.toUpperCase()}</span>
    <svg
      className="dropdown-arrow"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {/* Dropdown menu */}
  {menuOpen && (
  <div className="lang-menu">
    <div className="lang-option" onClick={() => handleLanguageSelect("English", "/us.svg")}>
      <img src="/us.svg" alt="us flag" className="flag-icon" /> English
    </div>
    <div className="lang-option" onClick={() => handleLanguageSelect("Arabic", "/ae.svg")}>
      <img src="/ae.svg" alt="ue flag" className="flag-icon" /> Arabic
    </div>
  </div>
  )}
 </div>

            

    <div className="controls">
        <button 
            className="play-btn"
            onClick={handlePlayAudio}
            disabled={isLoading || !audioUrl}
        >
            {isLoading ? 'Loading...' : (isPlaying ? 'Pause' : '▶ Play')}
        </button>
        <button className="download-btn">⬇</button>
    </div>
  </div>
</div>
  <div className="last">
    <p >Powered by Eleven v3 (alpha)</p>
    </div>
  </div>
      <div className="promo-banner">
     <span className="promo-text">EXPERIENCE THE FULL AUDIO AI PLATFORM</span>
     <button className="promo-btn">SIGN UP</button>
  </div>
</div>
  );
};

export default TextEditor;
