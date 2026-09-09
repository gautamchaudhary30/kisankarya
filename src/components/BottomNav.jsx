import { Home, MessageCircle, Plus, Search, UserRound } from 'lucide-react'

export default function BottomNav({ onPost, onLogin }) {
  return <nav className="bottom-nav">
    <a className="bottom-item active" href="#home"><Home/><span>Home</span></a>
    <a className="bottom-item" href="#explore"><Search/><span>Explore</span></a>
    <button className="post-fab" onClick={onPost}><span><Plus/></span><small>Post</small></button>
    <a className="bottom-item" href="#messages"><MessageCircle/><span>Messages</span></a>
    <button className="bottom-item" onClick={onLogin}><UserRound/><span>Profile</span></button>
  </nav>
}
