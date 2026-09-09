import { useState } from 'react'
import { Search, Tractor, ChevronDown, ShieldCheck, IndianRupee, GitCompare, Menu, X, UserRound, Wrench, ArrowRight } from 'lucide-react'

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
  const [loginOpen, setLoginOpen] = useState(false)
  const [role, setRole] = useState(null)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [devOtp, setDevOtp] = useState('')
  const [loginMessage, setLoginMessage] = useState('')
  const [loggedInUser, setLoggedInUser] = useState(null)

  const resetLogin = () => {
    setLoginOpen(false)
    setRole(null)
    setMobile('')
    setOtp('')
    setOtpSent(false)
    setDevOtp('')
    setLoginMessage('')
  }

  const sendOtp = () => {
    setLoginMessage('')
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setLoginMessage('Please enter a valid 10-digit mobile number.')
      return
    }
    const generatedOtp = String(Math.floor(100000 + Math.random() * 900000))
    setOtpSent(true)
    setDevOtp(generatedOtp)
    setLoginMessage(`Demo OTP: ${generatedOtp}`)
  }

  const verifyOtp = () => {
    setLoginMessage('')
    if (otp !== devOtp) {
      setLoginMessage('Invalid OTP. Please enter the demo OTP shown above.')
      return
    }
    const user = { mobile, role }
    setLoggedInUser(user)
    localStorage.setItem('kisankarya_user', JSON.stringify(user))
    setLoginMessage('Login successful!')
    setTimeout(resetLogin, 700)
  }

  return (
    <div className="site">
      <header className="header"><div className="container nav">
        <a className="logo" href="#top"><span className="logo-mark">K</span>Kisan<span>Karya</span></a>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#new" onClick={() => setMenu(false)}>New Tractors</a><a href="#used" onClick={() => setMenu(false)}>Used Tractors</a><a href="#brands" onClick={() => setMenu(false)}>Brands</a><a href="#compare" onClick={() => setMenu(false)}>Compare</a><a href="#implements" onClick={() => setMenu(false)}>Implements</a><a href="#news" onClick={() => setMenu(false)}>News</a>
        </nav>
        <button className="login-btn" onClick={() => { setRole(null); setLoginOpen(true); setLoginMessage('') }}><UserRound size={16}/> {loggedInUser ? loggedInUser.role === 'engineer' ? 'Engineer' : 'Account' : 'Login'}</button>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="menu">{menu ? <X/> : <Menu/>}</button>
      </div></header>

      <main id="top">
        <section className="hero"><div className="hero-bg"/><div className="container hero-content"><div className="hero-copy">
          <p className="eyebrow">INDIA'S FARMING MARKETPLACE</p><h1>Find the right tractor<br/><span>for your farm.</span></h1><p className="hero-text">Compare tractors, prices, specifications and offers from trusted brands — all in one place.</p>
          <div className="hero-search"><Search size={21}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tractor, brand or HP..."/><button>Search</button></div><div className="quick-links"><span>Popular:</span> Mahindra 575 DI · Swaraj 855 · John Deere 5105</div>
        </div><div className="hero-tractor"><div className="tractor-art"><Tractor size={170} strokeWidth={1.1}/></div></div></div></section>

        <section className="finder container"><div className="finder-title"><Tractor/><div><h2>Find your perfect tractor</h2><p>Choose your requirements and get matching tractors</p></div></div><div className="finder-fields">{['Select Brand','Select HP','Select Budget'].map(x=><button className="select" key={x}>{x}<ChevronDown size={17}/></button>)}<button className="find-btn">Find Tractors</button></div></section>
        <section className="trust"><div className="container trust-grid"><div><ShieldCheck/><span><b>Verified Listings</b><small>Trusted information</small></span></div><div><IndianRupee/><span><b>Best Price Discovery</b><small>Compare prices easily</small></span></div><div><GitCompare/><span><b>Easy Comparison</b><small>Compare specs</small></span></div><div><Tractor/><span><b>Major Brands</b><small>1000+ models</small></span></div></div></section>

        <section className="section container" id="new"><div className="section-head"><div><p className="eyebrow">POPULAR CHOICES</p><h2>Popular Tractors</h2></div><a href="#all">View All →</a></div><div className="cards">{tractors.map(t=><article className="card" key={t.name}><div className="card-image"><Tractor size={110} strokeWidth={1.1}/><span>POPULAR</span></div><div className="card-body"><h3>{t.name}</h3><div className="spec"><b>{t.power}</b><span>Diesel</span><span>2WD</span></div><p>{t.price}</p><button>View Details</button></div></article>)}</div></section>
        <section className="section brands" id="brands"><div className="container"><div className="section-head"><div><p className="eyebrow">TOP MANUFACTURERS</p><h2>Tractor Brands</h2></div><a href="#all-brands">View All →</a></div><div className="brand-grid">{brands.map((b,i)=><div className="brand" key={b}><div className="brand-logo">{b.split(' ').map(w=>w[0]).join('').slice(0,2)}</div><b>{b}</b><small>{80+i*15}+ Models</small></div>)}</div></div></section>
        <section className="compare container" id="compare"><div><p className="eyebrow">SMART BUYING</p><h2>Compare tractors before you buy</h2><p>Compare horsepower, mileage, price, features and more to make a confident decision.</p><button>Compare Tractors <GitCompare size={17}/></button></div><div className="compare-art"><Tractor size={145}/><GitCompare size={65}/></div></section>
        <section className="section container" id="used"><div className="section-head"><div><p className="eyebrow">VALUE FOR MONEY</p><h2>Used Tractors</h2></div><a href="#used-all">View All →</a></div><div className="used-grid"><div className="used-card"><div className="used-photo"><Tractor size={120}/></div><div><h3>Used Mahindra 575 DI</h3><p>2021 · 45 HP · Indore, MP</p><b>₹ 4.85 Lakh</b></div></div><div className="used-card"><div className="used-photo"><Tractor size={120}/></div><div><h3>Used Swaraj 744 FE</h3><p>2020 · 48 HP · Bhopal, MP</p><b>₹ 4.25 Lakh</b></div></div></div></section>
        <section className="section container" id="news"><div className="section-head"><div><p className="eyebrow">LATEST</p><h2>News & Updates</h2></div></div></section>
      </main>
      <footer><div className="container footer-grid"><div><a className="logo" href="#top"><span className="logo-mark">K</span>Kisan<span>Karya</span></a><p>Your trusted destination for tractors, implements and farming information.</p></div><div><h4>Tractors</h4><a href="#new">New Tractors</a><a href="#used">Used Tractors</a><a href="#brands">Tractor Brands</a></div><div><h4>Explore</h4><a href="#compare">Compare Tractors</a><a href="#implements">Implements</a><a href="#news">News & Updates</a></div><div><h4>Support</h4><a href="#contact">Contact Us</a><a href="#privacy">Privacy Policy</a></div></div><div className="copyright">© 2026 KisanKarya. All rights reserved.</div></footer>

      {loginOpen && <div className="login-overlay"><div className="login-modal"><button className="close-login" onClick={resetLogin}><X size={20}/></button>{!role ? <><div className="login-icon"><UserRound/></div><p className="eyebrow">WELCOME TO KISANKARYA</p><h2>Login as</h2><p className="login-subtitle">Choose how you want to use KisanKarya.</p><button className="role-card" onClick={()=>{setRole('user');setLoginMessage('')}}><span className="role-icon"><UserRound/></span><span><b>As a User</b><small>Find tractors, compare prices & explore listings</small></span><ArrowRight/></button><button className="role-card" onClick={()=>{setRole('engineer');setLoginMessage('')}}><span className="role-icon"><Wrench/></span><span><b>As an Engineer</b><small>Add and manage tractor listings for customers</small></span><ArrowRight/></button></> : <><button className="back-role" onClick={()=>{setRole(null);setOtpSent(false);setOtp('');setLoginMessage('')}}>← Change role</button><div className="login-icon">{role==='engineer'?<Wrench/>:<UserRound/>}</div><p className="eyebrow">{role==='engineer'?'ENGINEER LOGIN':'USER LOGIN'}</p><h2>{otpSent ? 'Enter OTP' : `Continue as ${role==='engineer'?'Engineer':'User'}`}</h2><p className="login-subtitle">{otpSent ? `OTP sent for +91 ${mobile}` : 'Enter your mobile number to continue.'}</p>{!otpSent ? <><label>Mobile Number</label><input className="mobile-input" type="tel" value={mobile} onChange={e=>setMobile(e.target.value.replace(/\D/g,'').slice(0,10))} placeholder="10-digit mobile number" maxLength="10"/><button className="continue-btn" onClick={sendOtp}>Send OTP <ArrowRight size={17}/></button></> : <><label>6-digit OTP</label><input className="mobile-input" type="tel" inputMode="numeric" value={otp} onChange={e=>setOtp(e.target.value.replace(/\D/g,'').slice(0,6))} placeholder="Enter OTP" maxLength="6"/><button className="continue-btn" onClick={verifyOtp}>Verify & Login <ArrowRight size={17}/></button><button className="back-role" onClick={()=>{setOtpSent(false);setOtp('');setDevOtp('');setLoginMessage('')}}>← Change mobile number</button></>}{loginMessage && <p className="login-message">{loginMessage}</p>}{devOtp && <p className="dev-note">Frontend demo mode: use the OTP shown above. Backend will be connected later.</p>}</>}</div></div>}
    </div>
  )
}
export default App
