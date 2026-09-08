import { useState } from 'react'
import { Search, Tractor, ChevronDown, ShieldCheck, IndianRupee, GitCompare, Menu, X } from 'lucide-react'

const tractors = [
  { name: 'Mahindra 575 DI XP Plus', power: '47 HP', price: '₹ 6.85 - 7.15 Lakh' },
  { name: 'Swaraj 855 FE', power: '55 HP', price: '₹ 7.90 - 8.30 Lakh' },
  { name: 'John Deere 5105', power: '40 HP', price: '₹ 6.10 - 6.55 Lakh' },
  { name: 'Massey Ferguson 241 DI', power: '42 HP', price: '₹ 6.70 - 7.20 Lakh' },
]

const brands = ['Mahindra', 'Swaraj', 'John Deere', 'Massey Ferguson', 'Sonalika', 'New Holland', 'Farmtrac', 'Eicher']

function App() {
  const [menu, setMenu] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#top"><span className="logo-mark">K</span>Kisan<span>Karya</span></a>
          <nav className={menu ? 'nav-links open' : 'nav-links'}>
            {['New Tractors', 'Used Tractors', 'Brands', 'Compare', 'Implements', 'News'].map((item) => (
              <a href={`#${item.toLowerCase().split(' ')[0]}`} key={item}>{item} <ChevronDown size={14} /></a>
            ))}
          </nav>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="menu">{menu ? <X /> : <Menu />}</button>
          <button className="sell-btn">Sell Your Tractor</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">INDIA'S FARMING MARKETPLACE</p>
              <h1>Find the right tractor<br /><span>for your farm.</span></h1>
              <p className="hero-text">Compare tractors, prices, specifications and offers from trusted brands — all in one place.</p>
              <div className="hero-search">
                <Search size={21} />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tractor, brand or HP..." />
                <button>Search</button>
              </div>
              <div className="quick-links"><span>Popular:</span> Mahindra 575 DI · Swaraj 855 · John Deere 5105</div>
            </div>
            <div className="hero-tractor"><div className="tractor-art"><Tractor size={170} strokeWidth={1.1} /></div></div>
          </div>
        </section>

        <section className="finder container">
          <div className="finder-title"><Tractor /><div><h2>Find your perfect tractor</h2><p>Choose your requirements and get matching tractors</p></div></div>
          <div className="finder-fields">
            {['Select Brand', 'Select HP', 'Select Budget'].map((x) => <button className="select" key={x}>{x}<ChevronDown size={17} /></button>)}
            <button className="find-btn">Find Tractors</button>
          </div>
        </section>

        <section className="trust"><div className="container trust-grid">
          <div><ShieldCheck /><span><b>Verified Listings</b><small>Trusted tractor information</small></span></div>
          <div><IndianRupee /><span><b>Best Price Discovery</b><small>Compare prices easily</small></span></div>
          <div><GitCompare /><span><b>Easy Comparison</b><small>Compare specs side by side</small></span></div>
          <div><Tractor /><span><b>All Major Brands</b><small>1000+ tractor models</small></span></div>
        </div></section>

        <section className="section container" id="new">
          <div className="section-head"><div><p className="eyebrow">POPULAR CHOICES</p><h2>Popular Tractors</h2></div><a href="#all">View All Tractors →</a></div>
          <div className="cards">{tractors.map((t) => <article className="card" key={t.name}><div className="card-image"><Tractor size={110} strokeWidth={1.1} /><span>POPULAR</span></div><div className="card-body"><h3>{t.name}</h3><div className="spec"><b>{t.power}</b><span>Diesel</span><span>2WD</span></div><p>{t.price}</p><button>View Details</button></div></article>)}</div>
        </section>

        <section className="section brands" id="brands"><div className="container"><div className="section-head"><div><p className="eyebrow">TOP MANUFACTURERS</p><h2>Tractor Brands</h2></div><a href="#all-brands">View All Brands →</a></div><div className="brand-grid">{brands.map((b, i) => <div className="brand" key={b}><div className="brand-logo">{b.split(' ').map(w => w[0]).join('').slice(0,2)}</div><b>{b}</b><small>{80 + i * 15}+ Models</small></div>)}</div></div></section>

        <section className="compare container"><div><p className="eyebrow">SMART BUYING</p><h2>Compare tractors before you buy</h2><p>Compare horsepower, mileage, price, features and more to make a confident decision.</p><button>Compare Tractors <GitCompare size={17} /></button></div><div className="compare-art"><Tractor size={145} /><GitCompare size={65} /></div></section>

        <section className="section container" id="used"><div className="section-head"><div><p className="eyebrow">VALUE FOR MONEY</p><h2>Used Tractors</h2></div><a href="#used-all">View All Used Tractors →</a></div><div className="used-grid"><div className="used-card"><div className="used-photo"><Tractor size={120}/></div><div><h3>Used Mahindra 575 DI</h3><p>2021 · 45 HP · Indore, MP</p><b>₹ 4.85 Lakh</b></div></div><div className="used-card"><div className="used-photo"><Tractor size={120}/></div><div><h3>Used Swaraj 744 FE</h3><p>2020 · 48 HP · Bhopal, MP</p><b>₹ 4.25 Lakh</b></div></div></div></section>
      </main>

      <footer><div className="container footer-grid"><div><a className="logo" href="#top"><span className="logo-mark">K</span>Kisan<span>Karya</span></a><p>Your trusted destination for tractors, implements and farming information.</p></div><div><h4>Tractors</h4><a href="#new">New Tractors</a><a href="#used">Used Tractors</a><a href="#brands">Tractor Brands</a></div><div><h4>Explore</h4><a href="#compare">Compare Tractors</a><a href="#implements">Implements</a><a href="#news">News & Updates</a></div><div><h4>Support</h4><a href="#contact">Contact Us</a><a href="#privacy">Privacy Policy</a><a href="#terms">Terms & Conditions</a></div></div><div className="copyright">© 2026 KisanKarya. All rights reserved.</div></footer>
    </div>
  )
}

export default App
