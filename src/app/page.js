import Header from '@/component/header'
import './page.css'
import TextEditor from '@/component/TextEditor';

export default function Home() {
  return (
    <div className='main'>
      <Header/>
      <div className='hero'>
        <div className='herocontent'>
          <h1 className='heading'>The most realistic voice AI platform</h1>
          <p className='para'>AI voice models and products powering millions of developers, creators, and enterprises. From low‑latency conversational agents to the leading AI voice generator for voiceovers and audiobooks.</p>
          <div className='buttoncontainer'>
            <button className='btn1'>SIGN UP</button>
            <button className='btn2'>CONTACT SALES</button>
          </div>
        </div>
      </div>
      <TextEditor/>

    </div>
  );
}
