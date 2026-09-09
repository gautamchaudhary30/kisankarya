import { ArrowLeft, CheckCheck, MoreVertical, Paperclip, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export default function Messages({ seller, item, onBack }) {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, from: 'seller', text: `Namaste! ${item?.name || 'item'} ke baare mein kya janna chahte hain?`, time: '10:42 AM' },
  ])

  const sendMessage = () => {
    const value = text.trim()
    if (!value) return
    setMessages(prev => [...prev, { id: Date.now(), from: 'me', text: value, time: 'Now' }])
    setText('')
  }

  return <main className="messages-page">
    <header className="chat-header">
      <button onClick={onBack} aria-label="Go back"><ArrowLeft size={21}/></button>
      <div className="chat-avatar">{(seller || 'S').slice(0, 1)}</div>
      <div className="chat-person"><b>{seller || 'Seller'}</b><small>Usually replies quickly</small></div>
      <button aria-label="Call seller"><Phone size={18}/></button>
      <button aria-label="More options"><MoreVertical size={19}/></button>
    </header>

    <section className="chat-item-card">
      <img src={item?.image} alt="" />
      <div><small>ABOUT THIS ITEM</small><b>{item?.name}</b><strong>{item?.price}</strong></div>
    </section>

    <div className="chat-date">TODAY</div>
    <section className="chat-body">
      {messages.map(message => <div key={message.id} className={`chat-row ${message.from === 'me' ? 'mine' : ''}`}>
        <div className="chat-bubble"><p>{message.text}</p><span>{message.time} {message.from === 'me' && <CheckCheck size={13}/>}</span></div>
      </div>)}
    </section>

    <div className="chat-quick-replies">
      <button onClick={() => setText('Is this item still available?')}>Is it available?</button>
      <button onClick={() => setText('Can I inspect it before buying?')}>Can I inspect it?</button>
    </div>

    <form className="chat-input-bar" onSubmit={e => { e.preventDefault(); sendMessage() }}>
      <button type="button" aria-label="Attach"><Paperclip size={19}/></button>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." />
      <button className="send-message" type="submit" aria-label="Send"><Send size={18}/></button>
    </form>
  </main>
}
