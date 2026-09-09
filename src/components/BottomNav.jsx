import { Home, MessageCircle, Plus, Search, UserRound } from 'lucide-react'

export default function BottomNav({ onPost, onLogin, onMessages, onMyListings }) {
  return <nav className="bottom-nav">
    <button className="bottom-item active" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><Home/><span>Home</span></button>
    <a className="bottom-item" href="#explore"><Search/><span>Explore</span></a>
    <button className="post-fab" onClick={onPost}><span><Plus/></span><small>Post</small></button>
    <button className="bottom-item" onClick={onMessages}><MessageCircle/><span>Messages</span></button>
    <button className="bottom-item" onClick={onMyListings || onLogin}><UserRound/><span>Profile</span></button>
  </nav>
}
