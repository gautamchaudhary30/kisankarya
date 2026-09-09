import { ArrowLeft, BadgeCheck, Clock3, MoreHorizontal, XCircle } from 'lucide-react'

const statusMeta = {
  'Not approved': { className: 'not-approved', icon: XCircle, label: 'Not approved' },
  Pending: { className: 'pending', icon: Clock3, label: 'Pending review' },
  Approved: { className: 'approved', icon: BadgeCheck, label: 'Approved' },
  Rejected: { className: 'rejected', icon: XCircle, label: 'Rejected' },
}

export default function MyListings({ listings = [], onBack }) {
  return <main className="my-listings-page">
    <header className="simple-page-header">
      <button onClick={onBack} aria-label="Go back"><ArrowLeft size={21}/></button>
      <div><b>My Listings</b><small>{listings.length} item{listings.length === 1 ? '' : 's'}</small></div>
      <span className="header-spacer" />
    </header>

    <section className="my-listings-intro">
      <span className="post-kicker">YOUR MARKETPLACE</span>
      <h1>My Listings</h1>
      <p>Admin approval ke baad aapka item marketplace par visible hoga.</p>
    </section>

    {listings.length === 0 ? <section className="empty-listings"><div>📦</div><h2>No listings yet</h2><p>Apna farm item post karein. Listing yahan approval status ke saath dikhegi.</p></section> : <section className="my-listings-list">
      {listings.map(item => {
        const meta = statusMeta[item.status] || statusMeta['Not approved']
        const Icon = meta.icon
        return <article className="my-listing-card" key={item.id}>
          <img src={item.image || 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=700&q=85'} alt={item.title}/>
          <div className="my-listing-info">
            <div className="my-listing-top"><span className={`listing-status ${meta.className}`}><Icon size={13}/>{meta.label}</span><button aria-label="More"><MoreHorizontal size={18}/></button></div>
            <h2>{item.title}</h2>
            <strong>{item.price || 'Price not set'}</strong>
            <p>{item.category || 'Farm Equipment'} · {item.location || 'Location not added'}</p>
            <small>Posted just now · Awaiting admin review</small>
          </div>
        </article>
      })}
    </section>}

    <section className="approval-info"><BadgeCheck size={19}/><div><b>How approval works</b><p>1. Aap listing submit karte hain → 2. Admin details check karta hai → 3. Approve hone par listing marketplace mein live hoti hai.</p></div></section>
  </main>
}
