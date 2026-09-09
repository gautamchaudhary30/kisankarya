import { ArrowRight, Handshake, ShieldCheck, Tractor, Wrench } from 'lucide-react'
import { brands, categories, tools, tractors } from '../data/mockData'
import ListingCard from '../components/ListingCard'

export default function Home({ onPost }) {
  return <main id="home">
    <section className="hero-market">
      <div className="hero-photo"/>
      <div className="hero-overlay"/>
      <div className="hero-inner">
        <div className="hero-copy"><span className="hero-script">Desh ki shakti, Kisan</span><p className="eyebrow light">KISANKARYA MARKETPLACE</p><h1>Kisano ke liye<br/><span>Kisano ka Platform</span></h1><p>Tractor se lekar chhote upkaran tak — kharidna aur bechna ab aasaan.</p><div className="hero-actions"><button className="primary-btn" onClick={onPost}>Sell Your Item <ArrowRight size={17}/></button><a href="#tractors" className="ghost-btn">Explore Tractors</a></div></div>
        <div className="hero-side"><div><b>Buy</b><small>Trusted farm equipment</small></div><div><b>Sell</b><small>List your own tools</small></div><div><b>Connect</b><small>Nearby farmers & experts</small></div></div>
      </div>
    </section>

    <section className="category-strip container"><div className="category-scroll">{categories.map(c=><a className="category-tile" key={c.label} href={c.label==='Tractors'?'#tractors':'#tools'}><span>{c.icon}</span><b>{c.label}</b></a>)}</div></section>

    <section className="promo-grid container">
      <div className="promo-card tractor-promo"><div><span className="eyebrow">FOR BIG MACHINERY</span><h2>Powerful Tractors<br/>for a Better Tomorrow</h2><p>Trusted brands, verified details and better price discovery.</p><a href="#tractors">View Tractors <ArrowRight size={15}/></a></div></div>
      <div className="promo-card tools-promo"><div><span className="eyebrow">FOR EVERY FARMER</span><h2>Small Tools.<br/>Big Support.</h2><p>Sell unused farm tools and reach nearby farmers.</p><button onClick={onPost}>Post Your Item</button></div></div>
    </section>

    <section className="section container" id="tractors"><div className="section-head"><div><span className="eyebrow">ENGINEER VERIFIED</span><h2>Featured Tractors</h2></div><a href="#all">View All <ArrowRight size={14}/></a></div><div className="listing-grid tractor-grid">{tractors.map(item=><ListingCard item={item} key={item.name}/>)}</div></section>

    <section className="section container" id="tools"><div className="section-head"><div><span className="eyebrow">FARMERS SELL HERE</span><h2>Popular Tools & Equipment</h2></div><a href="#all-tools">View All <ArrowRight size={14}/></a></div><div className="listing-grid tool-grid">{tools.map(item=><ListingCard item={item} compact key={item.name}/>)}</div></section>

    <section className="brand-section"><div className="container"><div className="section-head"><div><span className="eyebrow">TRUSTED BRANDS</span><h2>Top Tractor Brands</h2></div><a href="#brands">View All <ArrowRight size={14}/></a></div><div className="brand-row">{brands.map((brand,i)=><div className="brand-pill" key={brand}><span>{brand.split(' ').map(x=>x[0]).join('').slice(0,2)}</span><b>{brand}</b><small>{80+i*15}+ Models</small></div>)}</div></div></section>

    <section className="community container"><div className="community-card sell-community"><div><span className="eyebrow light">FARMERS FIRST</span><h2>Sell your farm tools<br/>in just a few clicks</h2><p>Click · Upload · Sell</p><button onClick={onPost}>Start Selling <ArrowRight size={15}/></button></div></div><div className="community-card trust-community"><Handshake/><h3>Trusted Community</h3><p>Farmers & Engineers</p><div className="trust-points"><span><ShieldCheck/>Safe Deals</span><span><MapPinIcon/>Nearby Buyers</span><span><Wrench/>Real People</span></div></div><div className="community-card engineer-community"><div><span className="eyebrow">FOR ENGINEERS</span><h2>Post Tractors &<br/>Heavy Equipment</h2><p>List premium machinery and reach serious buyers.</p><a href="#engineers">Join as Engineer <ArrowRight size={15}/></a></div></div></section>
  </main>
}
function MapPinIcon(){ return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></svg> }
