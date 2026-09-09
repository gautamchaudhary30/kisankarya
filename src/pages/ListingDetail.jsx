import { ArrowLeft, BadgeCheck, ChevronRight, Heart, MapPin, MessageCircle, Phone, ShieldCheck, Share2 } from 'lucide-react'

export default function ListingDetail({ item, onBack, onMessage }) {
  if (!item) return null
  const isTractor = item.category === 'Tractor' || item.meta?.includes('HP')
  const specs = isTractor
    ? [['Brand', item.name.split(' ')[0]], ['Power', item.meta?.split('·')[0]?.trim() || '45 HP'], ['Model year', item.meta?.split('·')[1]?.trim() || '2025'], ['Condition', item.condition || 'New'], ['Location', item.location]]
    : [['Category', item.category || 'Farm Equipment'], ['Condition', item.condition || 'Used - Good'], ['Seller type', item.sellerType || 'Farmer'], ['Location', item.location], ['Availability', 'Ready for pickup']]

  return <main className="detail-page">
    <div className="detail-topbar">
      <button onClick={onBack} aria-label="Go back"><ArrowLeft size={20}/></button>
      <b>Item details</b>
      <div><button aria-label="Share"><Share2 size={18}/></button><button aria-label="Save"><Heart size={18}/></button></div>
    </div>
    <section className="detail-gallery">
      <img src={item.image} alt={item.name}/>
      <span className="detail-badge">{item.badge || 'Verified listing'}</span>
      <span className="photo-count">1 / 5</span>
    </section>
    <section className="detail-main">
      <div className="detail-location"><MapPin size={14}/>{item.location} <span>·</span> {item.distance ? `${item.distance} km away` : 'Nearby'}</div>
      <h1>{item.name}</h1>
      <div className="detail-price-row"><strong>{item.price}</strong><span>Fair price</span></div>
      {item.meta && <p className="detail-subtitle">{item.meta}</p>}
      <div className="verified-box"><BadgeCheck size={19}/><div><b>Verified listing</b><small>Product details reviewed by KisanKarya</small></div><ChevronRight size={17}/></div>
      <div className="detail-section"><h2>Product details</h2><div className="spec-grid">{specs.map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>)}</div></div>
      <div className="detail-section"><h2>Description</h2><p className="detail-description">{item.description || `Well maintained ${item.name}. Seller has added this listing for farmers looking for reliable equipment near ${item.location}. You can inspect the item before purchase and discuss the final price directly with the seller.`}</p><button className="read-more">Read full description</button></div>
      <div className="detail-section seller-card"><div className="seller-avatar">{(item.seller || 'KK').slice(0,1)}</div><div className="seller-info"><span>SELLER</span><b>{item.seller || 'KisanKarya verified seller'}</b><small>Member since 2026 · Usually responds quickly</small></div><BadgeCheck className="seller-check" size={18}/></div>
      <div className="detail-section location-card"><div className="map-placeholder"><MapPin size={25}/></div><div><span>LOCATION</span><b>{item.location}</b><small>Exact address shared after connecting with seller</small></div></div>
      <div className="safety-note"><ShieldCheck size={20}/><div><b>Buy safely</b><p>Inspect the item, verify documents where applicable, and avoid sending advance payment before meeting the seller.</p></div></div>
    </section>
    <div className="detail-actions"><button className="call-btn"><Phone size={17}/> Call</button><button className="message-btn" onClick={onMessage}><MessageCircle size={17}/> Message seller</button></div>
  </main>
}
