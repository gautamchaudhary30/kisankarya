import { useState } from 'react'
import { ArrowRight, ChevronRight, MapPin, Navigation, ShieldCheck, SlidersHorizontal } from 'lucide-react'
import { brands, categories, tools, tractors } from '../data/mockData'
import ListingCard from '../components/ListingCard'

const nearby = [
  { name: 'Battery Sprayer 16L', price: '₹2,500', distance: 2.4, seller: 'Ramesh Patidar', location: 'Rau, Indore', image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=85' },
  { name: 'Mini Power Weeder', price: '₹28,000', distance: 5.8, seller: 'Mohan Farm', location: 'Depalpur Road', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=85' },
  { name: 'Rotary Hand Cultivator', price: '₹1,800', distance: 8.1, seller: 'Suresh Yadav', location: 'Sanwer', image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=900&q=85' },
  { name: 'Diesel Water Pump', price: '₹4,800', distance: 18.7, seller: 'Babulal Farm', location: 'Mhow Road', image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=900&q=85' },
]

export default function Home({ onPost }) {
  const [radius, setRadius] = useState(10)
  const radiusOptions = [5, 10, 25, 50]
  const visibleNearby = nearby.filter(item => item.distance <= radius)

  return <main id="home">
    <section className="hero-mobile"><div className="hero-mobile-photo"/><div className="hero-mobile-shade"/><div className="hero-mobile-content">
      <div className="hero-topline"><span className="mini-location"><MapPin size={14}/> Indore, Madhya Pradesh</span><button><Navigation size={15}/> Change</button></div>
      <span className="hero-kicker">KISANKARYA MARKETPLACE</span>
      <h1>Kheti ke har kaam ka<br/><strong>apna marketplace.</strong></h1>
      <p>Tractor, machine ya chhota farm tool — apne aas-paas kharido aur becho.</p>
      <div className="hero-search-mobile"><span>⌕</span><input placeholder="Search tractor, tools, equipment..."/><button><SlidersHorizontal size={18}/></button></div>
    </div></section>

    <section className="nearby-section"><div className="section-title-row"><div><span className="section-kicker"><Navigation size={13}/> NEAR YOU</span><h2>Aapke aas-paas ke items</h2><p>{visibleNearby.length} listings found within {radius} km of Indore</p></div><button className="filter-circle"><SlidersHorizontal size={17}/></button></div>
      <div className="radius-row"><span className="radius-label">Radius</span>{radiusOptions.map(r=><button className={radius===r?'radius active':'radius'} onClick={()=>setRadius(r)} key={r}>{r} km</button>)}</div>
      <div className="nearby-list">{visibleNearby.map(item=><article className="nearby-card" key={item.name}><div className="nearby-image"><img src={item.image} alt={item.name}/><span><MapPin size={11}/> {item.distance} km</span></div><div className="nearby-info"><div className="item-top"><h3>{item.name}</h3><button aria-label="Save listing">♡</button></div><strong>{item.price}</strong><p>{item.location} · {item.seller}</p><small>Posted today · <b>Nearby</b></small></div></article>)}</div>
      {visibleNearby.length===0 && <div className="empty-nearby">No listings in this radius yet. Try a larger radius.</div>}
      <button className="outline-wide">View all nearby listings <ArrowRight size={15}/></button>
    </section>

    <section className="category-section"><div className="section-title-row"><div><span className="section-kicker">EXPLORE</span><h2>What are you looking for?</h2></div><button className="link-btn">See all</button></div><div className="category-scroll">{categories.map(c=><button className="category-tile" key={c.label}><span>{c.icon}</span><b>{c.label}</b></button>)}</div></section>
    <section className="quick-post-banner"><div><span className="section-kicker light">FARMER SELLING</span><h2>Ghar par pada farm tool<br/>ab paise mein badlo.</h2><p>Photo upload karo, price set karo aur nearby farmers tak pahucho.</p></div><button onClick={onPost}><span>＋</span> Post item</button></section>
    <section className="market-section" id="tractors"><div className="section-title-row"><div><span className="section-kicker verified"><ShieldCheck size={13}/> ENGINEER VERIFIED</span><h2>Tractors & Heavy Machinery</h2><p>Trusted listings from KisanKarya engineers</p></div><button className="link-btn">See all</button></div><div className="listing-grid">{tractors.map(item=><ListingCard item={item} key={item.name}/>)}</div></section>
    <section className="market-section" id="tools"><div className="section-title-row"><div><span className="section-kicker">FARMERS SELL HERE</span><h2>Small Tools & Equipment</h2><p>Directly from farmers near you</p></div><button className="link-btn">See all</button></div><div className="listing-grid">{tools.map(item=><ListingCard item={item} compact key={item.name}/>)}</div></section>
    <section className="brand-section"><div className="section-title-row"><div><span className="section-kicker">TRACTOR BRANDS</span><h2>Find by brand</h2></div><button className="link-btn">See all</button></div><div className="brand-scroll">{brands.map((brand,i)=><div className="brand-pill" key={brand}><span>{brand.split(' ').map(x=>x[0]).join('').slice(0,2)}</span><b>{brand}</b><small>{80+i*15}+ models</small></div>)}</div></section>
    <section className="trust-strip"><ShieldCheck size={23}/><div><b>Safe & transparent marketplace</b><span>Verified machinery · Nearby sellers · Clear prices</span></div><ChevronRight size={18}/></section>
  </main>
}
