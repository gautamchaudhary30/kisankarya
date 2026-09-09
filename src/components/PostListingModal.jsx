import { useState } from 'react'
import { Camera, ChevronDown, MapPin, X } from 'lucide-react'

const categories = ['Farm Tools', 'Implements', 'Sprayers', 'Irrigation', 'Seeds & Fertilizers', 'Other']

export default function PostListingModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [category, setCategory] = useState('')

  if (submitted) return <div className="modal-backdrop"><div className="post-modal success-modal"><div className="success-icon">✓</div><h2>Listing ready to post</h2><p>This is a frontend preview. Your listing will be saved to the database when backend integration is added.</p><button className="primary-btn" onClick={onClose}>Done</button></div></div>

  return <div className="modal-backdrop"><div className="post-modal">
    <button className="modal-close" onClick={onClose}><X/></button>
    <div className="modal-heading"><span className="post-kicker">SELL YOUR FARM ITEM</span><h2>Post an item</h2><p>Sell your small farming equipment directly to nearby farmers.</p></div>
    <div className="upload-box"><Camera size={25}/><b>Add photos</b><small>Upload up to 8 clear photos</small><button>Choose Photos</button></div>
    <label>Item title<input placeholder="e.g. Battery Sprayer, Power Weeder"/></label>
    <label>Category<div className="select-wrap"><select value={category} onChange={e=>setCategory(e.target.value)}><option value="">Select category</option>{categories.map(c=><option key={c}>{c}</option>)}</select><ChevronDown/></div></label>
    <div className="two-col"><label>Expected price<input placeholder="₹ Enter price"/></label><label>Condition<div className="select-wrap"><select><option>Used - Good</option><option>Like New</option><option>Used - Fair</option></select><ChevronDown/></div></label></div>
    <label>Location<div className="location-field"><MapPin size={17}/><input placeholder="Your village / city"/></div></label>
    <label>Description<textarea placeholder="Tell buyers about the item's age, condition and details..." rows="3"/></label>
    <button className="primary-btn" onClick={()=>setSubmitted(true)}>Preview Listing</button>
    <p className="modal-note">Free listing · You control your price · Connect with nearby buyers</p>
  </div></div>
}
