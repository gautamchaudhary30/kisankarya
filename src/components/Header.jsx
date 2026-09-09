import { Bell, ChevronDown, MapPin, Menu, Search, UserRound, X } from 'lucide-react'

export default function Header({ menuOpen, setMenuOpen, onLogin }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand-logo" href="#home"><span className="brand-leaf">K</span><span>Kisan<span>Karya</span><small>Kisan ke saathi, har kaam mein</small></span></a>
        <div className="desktop-search"><Search size={19}/><input placeholder="Search tractors, tools, equipment..."/><button>Search</button></div>
        <button className="location"><MapPin size={18}/><span>Indore, MP</span><ChevronDown size={15}/></button>
        <button className="icon-btn notification"><Bell size={19}/><i/></button>
        <button className="login-btn" onClick={onLogin}><UserRound size={16}/> Login</button>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      <div className="mobile-search"><Search size={18}/><input placeholder="Search tractors, tools & equipment..."/></div>
      {menuOpen && <nav className="mobile-nav"><a href="#home">Home</a><a href="#tractors">Tractors</a><a href="#tools">Farm Tools</a><a href="#explore">Explore</a><a href="#engineers">Engineers</a><a href="#profile" onClick={onLogin}>Login</a></nav>}
    </header>
  )
}
