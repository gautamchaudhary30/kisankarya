import { useState } from 'react'
import { ArrowLeft, BadgeCheck, CheckCircle2, ClipboardCheck, PackagePlus, XCircle } from 'lucide-react'

const farmerProducts = [
  { id: 1, name: 'Mahindra 575 DI', seller: 'Ramesh Patidar', location: 'Rau, Indore', price: '₹7.50 Lakh', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=700&q=85' },
  { id: 2, name: 'Battery Sprayer 16L', seller: 'Suresh Yadav', location: 'Sanwer, Indore', price: '₹2,500', image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=700&q=85' },
  { id: 3, name: 'Mini Power Weeder', seller: 'Mohan Farm', location: 'Depalpur Road', price: '₹28,000', image: 'https://images.unsplash.com/photo-1592919016327-7f7a1c8c1f5f?auto=format&fit=crop&w=700&q=85' },
]

export default function EngineerHome({ onBack, onPost, myListings = [] }) {
  const [inspections, setInspections] = useState(farmerProducts)
  const [inspected, setInspected] = useState({})
  const approve = id => { setInspected(p => ({ ...p, [id]: 'Approved' })); setInspections(p => p.filter(x => x.id !== id)) }
  const reject = id => { setInspected(p => ({ ...p, [id]: 'Rejected' })); setInspections(p => p.filter(x => x.id !== id)) }
  const listed = myListings.length + 12
  const approved = Object.values(inspected).filter(x => x === 'Approved').length + 9
  const rejected = Object.values(inspected).filter(x => x === 'Rejected').length + 2
  const inspectedCount = approved + rejected

  return <main className="engineer-page">
    <header className="engineer-header"><button onClick={onBack}><ArrowLeft size={20}/></button><div><span>ENGINEER MODE</span><b>KisanKarya Engineer</b></div><span className="engineer-avatar">E</span></header>
    <section className="engineer-hero"><div><span className="engineer-kicker">FIELD & MARKETPLACE OPERATIONS</span><h1>Good morning, Engineer 👋</h1><p>Products inspect karein, verify karein aur farmers ke liye marketplace ready rakhein.</p></div><div className="engineer-verified"><BadgeCheck size={18}/><span>Verified Engineer</span></div></section>
    <section className="engineer-stats"><div><PackagePlus/><b>{listed}</b><span>Products listed</span></div><div><ClipboardCheck/><b>{inspectedCount}</b><span>Inspections</span></div><div><CheckCircle2/><b>{approved}</b><span>Approved</span></div><div><XCircle/><b>{rejected}</b><span>Rejected</span></div></section>
    <section className="engineer-actions"><button onClick={onPost}><PackagePlus size={18}/><div><b>My Listing</b><small>Apne products list karein</small></div><span>→</span></button><button onClick={()=>document.getElementById('my-inspection')?.scrollIntoView({behavior:'smooth'})}><ClipboardCheck size={18}/><div><b>My Inspection</b><small>Farmer uploads check karein</small></div><span>{inspections.length} pending</span></button></section>
    <section className="engineer-section"><div className="engineer-section-title"><div><span>YOUR PRODUCTS</span><h2>My Listing</h2></div><button onClick={onPost}>+ List product</button></div>{myListings.length === 0 ? <div className="engineer-empty">📦<b>No products listed yet</b><small>List your first product to see it here.</small></div> : <div className="engineer-list">{myListings.map(item => <article key={item.id} className="engineer-product"><img src={item.image} alt={item.title}/><div><span className={`engineer-status ${String(item.status).toLowerCase().replace(' ','-')}`}>{item.status}</span><b>{item.title}</b><strong>{item.price}</strong><small>{item.category} · {item.location}</small></div></article>)}</div>}</section>
    <section className="engineer-section" id="my-inspection"><div className="engineer-section-title"><div><span>FARMER UPLOADS</span><h2>My Inspection</h2></div><span className="inspection-count">{inspections.length} pending</span></div><p className="inspection-help">Farmer ne jo product upload kiya hai uski details/photos check karke approve ya reject karein. Approve hone ke baad product live hoga.</p>{inspections.length === 0 ? <div className="inspection-done"><CheckCircle2 size={28}/><b>All inspections completed</b><small>New farmer listings yahan automatically aayengi.</small></div> : <div className="inspection-list">{inspections.map(item => <article className="inspection-card" key={item.id}><img src={item.image} alt={item.name}/><div className="inspection-info"><span>NEEDS INSPECTION</span><b>{item.name}</b><strong>{item.price}</strong><small>{item.seller} · {item.location}</small><div className="inspection-buttons"><button className="reject" onClick={()=>reject(item.id)}><XCircle size={15}/> Reject</button><button className="approve" onClick={()=>approve(item.id)}><CheckCircle2 size={15}/> Approve & Live</button></div></div></article>)}</div>}</section>
    <div className="engineer-rule"><BadgeCheck size={17}/><span><b>Approval rule:</b> Engineer inspection ke baad hi farmer product marketplace par live hoga.</span></div>
  </main>
}
