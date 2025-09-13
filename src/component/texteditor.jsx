// import React from 'react';
// import './texteditor.css';

// const TextEditor = () => {
//   return (
    
//     <div className='main'>

//       <div className="list">
//         <ul className="ul4">
//           <li className='options'><svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
//             </svg>TEXT TO SPEECH</li>
//           <li className='options'><svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
//             </svg>AGENTS</li>
//           <li className='options'><svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
//             </svg>MUSIC</li>
//           <li className='options'><svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
//             </svg>SPEECH TO TEXT</li>
//           <li className='options'><svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
//             </svg>DUBBING</li>
//           <li className='options'><svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
//             </svg>VOICE CLONNING</li>
//           <li className='options'><svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
//             </svg>ELEVENREADER</li>
//         </ul>
//       </div>

//         <div className="hero2">
          
//           <textarea className="text" id="area"></textarea>

//           <div className="ul2">
//             <li className='o2'><img src="1.png"/><p>Samara | Narrate a story</p></li>
//             <li className='o2'><img src="3.png"/><p>2 speakers | create a dialogue</p></li>
//             <li className='o2'><img src="3.png"/><p>Announcer | </p></li>
//             <li className='o2'><img src="4.png"/><p>Sergent | Play a drill</p></li>
//             <li className='o2'><img src="5.png"/><p>Spuds | Recount an old story</p></li>
//             <li className='o2'><img src="5.png"/><p>Jessica | Provide customer support</p></li>
            

//           </div>

//           <div className="div2"></div>

//           <div className="div3">
//             <div className="item" >language</div>
//             <div className="item2">
//               <button className='sub-item'>play</button>
//               <button className='sub-item'>download</button>
//             </div>
//           </div>

//         </div>
      


//     </div>
//   );
// };

// export default TextEditor;


// import React from 'react';
// import './texteditor.css';

// const TextEditor = () => {
//   return (
//     <div className="editor-container">
//       {/* Options Tabs */}
//       <div className="tabs">
//         <button className="tab">TEXT TO SPEECH</button>
//         <button className="tab">AGENTS</button>
//         <button className="tab">MUSIC</button>
//         <button className="tab">SPEECH TO TEXT</button>
//         <button className="tab">DUBBING</button>
//         <button className="tab">VOICE CLONING</button>
//         <button className="tab">ELEVENREADER</button>
//       </div>

//       {/* Text Area */}
//       <div className="editor-box">
//         <textarea
//           className="editor-textarea"
//           placeholder="Type or paste your story here..."
//         >
// In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. 
// [sarcastically] Not the “burn it all down” kind... [giggles] but he was gentle, wise, with eyes like old stars.
// [whispers] Even the birds fell silent when he passed.
//         </textarea>

//         {/* Voice Presets */}
//         <div className="voice-presets">
//           <div className="preset"><img src="1.png" alt=""/> Samara | Narrate a story</div>
//           <div className="preset"><img src="2.png" alt=""/> 2 speakers | Create a dialogue</div>
//           <div className="preset"><img src="3.png" alt=""/> Announcer | Voiceover a game</div>
//           <div className="preset"><img src="4.png" alt=""/> Sergeant | Play a drill sergeant</div>
//           <div className="preset"><img src="5.png" alt=""/> Spuds | Recount an old story</div>
//           <div className="preset"><img src="6.png" alt=""/> Jessica | Provide customer support</div>
//         </div>

//         {/* Footer Controls */}
//         <div className="editor-footer">
//           <div className="language">
//             <img src="flag.png" alt="flag"/> ENGLISH
//           </div>
//           <div className="controls">
//             <button className="play-btn">▶ PLAY</button>
//             <button className="download-btn">⬇</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextEditor;





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
