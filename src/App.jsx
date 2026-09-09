import { useEffect, useState } from 'react'
import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import PostListingModal from './components/PostListingModal'
import Home from './pages/Home'
import ListingDetail from './pages/ListingDetail'
import Messages from './pages/Messages'
import MyListings from './pages/MyListings'
import './detail.css'
import './mobile-features.css'

function LoginPreview({ onClose, onMyListings }) {
  const [role, setRole] = useState(null)
  return <div className="modal-backdrop"><div className="login-choice">
    <button className="modal-close" onClick={onClose}>×</button>
    <span className="login-mark">K</span><span className="post-kicker">WELCOME TO KISANKARYA</span>
    <h2>{role ? `Continue as ${role === 'engineer' ? 'Engineer' : 'User'}` : 'Login to KisanKarya'}</h2>
    <p>{role ? 'Enter your mobile number to continue.' : 'Choose how you want to use the marketplace.'}</p>
    {!role ? <div className="role-options"><button onClick={()=>setRole('user')}><b>👨‍🌾 As a User</b><small>Buy and sell small farm tools</small></button><button onClick={()=>setRole('engineer')}><b>🧰 As an Engineer</b><small>Add tractors & heavy machinery</small></button></div> : <><input className="modal-input" placeholder="10-digit mobile number"/><button className="primary-btn full">Continue with OTP</button><button className="text-btn" onClick={()=>setRole(null)}>← Change role</button></>}
    <button className="my-listings-login-link" onClick={onMyListings}>My Listings →</button>
  </div></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [postOpen, setPostOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [page, setPage] = useState('home')
  const [selectedItem, setSelectedItem] = useState(null)
  const [messageItem, setMessageItem] = useState(null)
  const [myListings, setMyListings] = useState(() => {
    try { return JSON.parse(localStorage.getItem('kk-my-listings') || '[]') } catch { return [] }
  })

  useEffect(() => { localStorage.setItem('kk-my-listings', JSON.stringify(myListings)) }, [myListings])

  const openDetail = item => { setSelectedItem(item); setPage('detail'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const closeDetail = () => { setSelectedItem(null); setPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const openMessages = item => { setMessageItem(item || { name: 'KisanKarya Seller', price: 'Marketplace chat' }); setSelectedItem(null); setPage('messages'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const openMyListings = () => { setLoginOpen(false); setPostOpen(false); setSelectedItem(null); setMessageItem(null); setPage('my-listings'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const addListing = listing => setMyListings(prev => [listing, ...prev])

  if (page === 'messages') return <div className="app-shell"><Messages seller={messageItem?.seller || 'Ramesh Patidar'} item={messageItem} onBack={() => { setMessageItem(null); setPage('home') }} /></div>
  if (page === 'detail') return <div className="app-shell"><ListingDetail item={selectedItem} onBack={closeDetail} onMessage={() => openMessages(selectedItem)} /></div>
  if (page === 'my-listings') return <div className="app-shell"><MyListings listings={myListings} onBack={() => setPage('home')} /></div>

  return <div className="app-shell">
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} onLogin={()=>setLoginOpen(true)} />
    <Home onPost={()=>setPostOpen(true)} onSelect={openDetail} />
    <footer className="site-footer">
      <div className="container footer-main"><div className="footer-about"><a className="brand-logo footer-logo" href="#home"><span className="brand-leaf">K</span><span>Kisan<span>Karya</span><small>Kisan ke saathi, har kaam mein</small></span></a><p>KisanKarya is a farmer-first marketplace for tractors, farm equipment and everyday agricultural tools.</p><div className="socials"><a><Instagram/></a><a><Facebook/></a><a><Youtube/></a></div></div><div><h4>Marketplace</h4><a href="#tractors">Tractors</a><a href="#tools">Farm Tools</a><a href="#explore">Explore Listings</a><a href="#brands">Brands</a></div><div><h4>For Farmers</h4><a href="#sell">Sell an Item</a><a href="#safety">Safe Buying</a><a href="#help">Help Centre</a><a href="#contact">Contact Us</a></div><div><h4>Contact</h4><p className="contact-line"><Phone/> +91 00000 00000</p><p className="contact-line"><Mail/> hello@kisankarya.in</p></div></div>
      <div className="footer-bottom"><div className="container"><span>© 2026 KisanKarya</span><span>Built for Indian farmers · Privacy · Terms</span></div></div>
    </footer>
    <BottomNav onPost={()=>setPostOpen(true)} onLogin={()=>setLoginOpen(true)} onMessages={()=>openMessages()} onMyListings={openMyListings} />
    {postOpen && <PostListingModal onClose={()=>setPostOpen(false)} onSubmit={addListing} onViewListings={openMyListings} />}
    {loginOpen && <LoginPreview onClose={()=>setLoginOpen(false)} onMyListings={openMyListings} />}
    {!postOpen && !loginOpen && <button className="my-listings-floating" onClick={openMyListings}>My Listings</button>}
    {myListings.length > 0 && <div className="my-listings-preview"><div><span>MY LISTINGS</span><b>{myListings.length} item{myListings.length > 1 ? 's' : ''} · {myListings[0].status}</b></div><button onClick={openMyListings}>View →</button></div>}
  </div>
}

export default App
