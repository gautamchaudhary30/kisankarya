import { Heart, MapPin } from 'lucide-react'

export default function ListingCard({ item, compact = false, onSelect }) {
  return <article className={compact ? 'listing-card compact' : 'listing-card'} onClick={()=>onSelect?.(item)} role={onSelect ? 'button' : undefined} tabIndex={onSelect ? 0 : undefined} onKeyDown={e=>e.key==='Enter' && onSelect?.(item)}>
    <div className="listing-image"><img src={item.image} alt={item.name}/>{item.badge && <span className="listing-badge">{item.badge}</span>}<button className="heart" onClick={e=>e.stopPropagation()}><Heart size={17}/></button></div>
    <div className="listing-body">
      <h3>{item.name}</h3>
      {item.meta && <p className="listing-meta">{item.meta}</p>}
      <strong>{item.price}</strong>
      <p className="listing-location"><MapPin size={13}/>{item.location}</p>
      <span className="card-view">View details →</span>
    </div>
  </article>
}
