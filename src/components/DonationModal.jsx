import { useState } from 'react'
import './DonationModal.css'

export default function DonationModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('')
  const [donationType, setDonationType] = useState('zakat')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // SafePay integration will go here
    console.log('Donation submitted:', { amount, donationType, name, email, phone })
    // Redirect to SafePay payment page
    // window.location.href = 'https://safepay.com/pay?amount=' + amount + '&...'
  }

  return (
    <div className="donation-modal-overlay" onClick={onClose}>
      <div className="donation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="donation-modal__close" onClick={onClose}>
          ×
        </button>
        <h2 className="donation-modal__title">Make a Donation</h2>
        <p className="donation-modal__subtitle">
          Your contribution helps build Hasan Suleman Memorial Hospital
        </p>

        <form onSubmit={handleSubmit} className="donation-modal__form">
          <div className="donation-modal__field">
            <label>Donation Type</label>
            <select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
              <option value="zakat">Zakat</option>
              <option value="sadqa">Sadqa</option>
              <option value="general">General Donation</option>
              <option value="room">Room Sponsorship</option>
            </select>
          </div>

          <div className="donation-modal__field">
            <label>Amount (USD)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="1"
              required
            />
          </div>

          <div className="donation-modal__field">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="donation-modal__field">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="donation-modal__field">
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
            />
          </div>

          <button type="submit" className="btn btn--primary donation-modal__submit">
            Donate Now → SafePay
          </button>
        </form>

        <p className="donation-modal__secure">
          🔒 Secure payment via SafePay. Your information is protected.
        </p>
      </div>
    </div>
  )
}