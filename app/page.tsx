'use client';
import { useState } from 'react';

const apps = [
  ['✓','Today','A calm daily planner that keeps your three most important things in view.','Productivity','coral'],
  ['◒','Pocket Budget','Know what is safe to spend, without turning your life into a spreadsheet.','Finance','mint'],
  ['↗','Tiny Habit','Build momentum with one small promise, a streak, and a satisfying check-in.','Wellness','sun'],
  ['⌁','Clipnote','Catch links, thoughts, and little discoveries before they disappear.','Notes','blue'],
  ['◉','Focus Bell','A beautifully simple focus timer with room to breathe between sessions.','Focus','lilac'],
  ['☼','Good Day','A sixty-second journal for noticing what made today worth remembering.','Reflection','peach'],
];

export default function Home() {
  const [email,setEmail]=useState(''); const [joined,setJoined]=useState(false);
  return <main>
    <nav className="nav wrap"><a className="brand" href="#top"><span>RK</span> Everyday Apps</a><div className="navLinks"><a href="#apps">Apps</a><a href="#about">About</a><a className="navCta" href="#updates">Get updates</a></div></nav>
    <section className="hero wrap" id="top"><div className="eyebrow"><span className="spark">✦</span> Small tools. Better days.</div><h1>Everyday apps,<br/><em>thoughtfully made.</em></h1><p className="heroCopy">A growing collection of simple, focused tools for the things you do every day—plan, focus, remember, and grow.</p><div className="heroActions"><a className="button primary" href="#apps">Explore the apps <span>↓</span></a><a className="button ghost" href="#about">Our approach</a></div><div className="orbit" aria-hidden="true"><div className="orb orb1">✓</div><div className="orb orb2">◒</div><div className="orb orb3">☼</div><div className="orb orb4">⌁</div><div className="centerOrb">RK</div></div></section>
    <section className="ticker"><div>NO CLUTTER <b>✦</b> NO ACCOUNTS REQUIRED <b>✦</b> PRIVACY FIRST <b>✦</b> MADE FOR REAL LIFE <b>✦</b> NO CLUTTER <b>✦</b></div></section>
    <section className="apps wrap" id="apps"><div className="sectionHead"><div><p className="kicker">The collection</p><h2>A useful little<br/>tool for every day.</h2></div><p>Designed to do one thing well. No endless menus, no learning curve—just open and get going.</p></div><div className="appGrid">{apps.map(([icon,name,description,tag,color],i)=><article className={`appCard ${color}`} key={name}><div className="cardTop"><span className="appIcon">{icon}</span><span className="number">0{i+1}</span></div><div><span className="tag">{tag}</span><h3>{name}</h3><p>{description}</p></div><button aria-label={`Learn more about ${name}`}>Meet the app <span>↗</span></button></article>)}</div></section>
    <section className="about" id="about"><div className="wrap aboutInner"><div className="quoteMark">“</div><blockquote>Technology should feel like a helpful nudge, <em>not another thing to manage.</em></blockquote><div className="aboutCopy"><p>RK Everyday Apps is an independent studio making small, honest software for daily life.</p><p>Every app starts with a familiar frustration and ends when the solution feels obvious.</p></div></div></section>
    <section className="newsletter wrap" id="updates"><div><p className="kicker">Stay in the loop</p><h2>New apps, occasionally.</h2><p>Get a short note when we make something new. No noise, ever.</p></div>{joined?<div className="success">You’re on the list. See you soon ✦</div>:<form onSubmit={e=>{e.preventDefault();if(email)setJoined(true)}}><label className="srOnly" htmlFor="email">Email address</label><input id="email" type="email" required placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}/><button>Keep me posted <span>→</span></button></form>}</section>
    <footer><div className="wrap footerInner"><a className="brand" href="#top"><span>RK</span> Everyday Apps</a><p>Made with care for ordinary days.</p><div><a href="#apps">Apps</a><a href="#about">About</a><a href="mailto:rkeverydayapps@gmail.com">Contact</a></div></div></footer>
  </main>;
}
