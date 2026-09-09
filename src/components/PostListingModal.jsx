import { useState } from 'react'
import { Camera, ChevronDown, MapPin, X } from 'lucide-react'

const categories = ['Farm Tools', 'Implements', 'Sprayers', 'Irrigation', 'Seeds & Fertilizers', 'Other']

export default function PostListingModal({ onClose, onSubmit, onViewListings }) {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [condition, setCondition] = useState('Used - Good')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submitListing = () => {
    if (!title.trim() || !category) return
    onSubmit?.({
      id: Date.now(), title: title.trim(), name: title.trim(), price: price.trim() || 'Price on request', category, condition,
      location: location.trim() || 'Location not added', description: description.trim(), status: 'Not approved',
      image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=900&q=85',
    })
    setSubmitted(true)
  }

  if (submitted) return <div className="modal-backdrop"><div className="post-modal success-modal"><div className="success-icon">✓</div><span className="post-kicker">SUBMITTED FOR REVIEW</span><h2>Listing submitted</h2><p>Aapki listing <b>My Listings</b> mein <b>Not approved</b> status ke saath save ho gayi hai. Admin approval ke baad status update hoga.</p><button className="primary-btn" onClick={onViewListings || onClose}>View My Listings</button></div></div>

  return <div className="modal-backdrop"><div className="post-modal">
    <button className="modal-close" onClick={onClose}><X/></button>
    <div className="modal-heading"><span className="post-kicker">SELL YOUR FARM ITEM</span><h2>Post an item</h2><p>Apna farm equipment nearby farmers ko sell karein.</p></div>
    <div className="upload-box"><Camera size={25}/><b>Add photos</b><small>Upload up to 8 clear photos</small><button type="button">Choose Photos</button></div>
    <label>Item title<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Battery Sprayer, Power Weeder"/></label>
    <label>Category<div className="select-wrap"><select value={category} onChange={e=>setCategory(e.target.value)}><option value="">Select category</option>{categories.map(c=><option key={c}>{c}</option>)}</select><ChevronDown/></div></label>
    <div className="two-col"><label>Expected price<input value={price} onChange={e=>setPrice(e.target.value)} placeholder="₹ Enter price"/></label><label>Condition<div className="select-wrap"><select value={condition} onChange={e=>setCondition(e.target.value)}><option>Used - Good</option><option>Like New</option><option>Used - Fair</option></select><ChevronDown/></div></label></div>
    <label>Location<div className="location-field"><MapPin size={17}/><input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Your village / city"/></div></label>
    <label>Description<textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Tell buyers about the item's age, condition and details..." rows="3"/></label>
    <button className="primary-btn" disabled={!title.trim() || !category} onClick={submitListing}>Submit for Admin Approval</button>
    <p className="modal-note">Free listing · Admin review required · Approved items go live on marketplace</p>
  </div></div>
}
