import React, { useState } from 'react'
import "./style.css"

function App() {
  const [showReservationForm, setShowReservationForm] = useState(true)
  const [showCustomerForm, setShowCustomerForm] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleReservationSubmit = (e) => {
    e.preventDefault()
    if (e.target.checkValidity()) {
      setShowReservationForm(false)
      setShowCustomerForm(true)
    } else {
      alert('Please fill all required fields')
    }
  }

  const handleCustomerSubmit = (e) => {
    e.preventDefault()
    if (e.target.checkValidity()) {
      setShowCustomerForm(false)
      setShowSuccessMessage(true)
    } else {
      alert('Please fill all required fields')
    }
  }

  const handleCloseButtonClick = () => {
    setShowSuccessMessage(false)
    setShowReservationForm(true)
  }

  return (
    <div>
      {showReservationForm && (
        <form id="reservationDetails" onSubmit={handleReservationSubmit}>
          <div class="btn-group" role="group" aria-label="Basic example">
            <input
              type="date"
              id="date"
              name="date"
              class="btn border-1 border-secondary rounded-0 col-2"
              required
            />
            <select id="time" name="time" class="btn border-1 border-secondary rounded-0 col-2" required>
              <option value="16:00">4:00pm</option>
              <option value="16:00">4:30pm</option>
              <option value="17:00">5:00pm</option>
              <option value="17:00">5:30pm</option>
              <option value="18:00">6:00pm</option>
              <option value="18:00">6:30pm</option>
              <option value="19:00">7:00pm</option>
              <option value="19:00">7:30pm</option>
              <option value="20:00">8:00pm</option>
              <option value="20:00">8:30pm</option>
              <option value="21:00">9:00pm</option>
            </select>
            <select id="people" name="people" class="btn border-1 border-secondary rounded-0 col-2" required>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
            </select>
            <button type="submit" value="Find a Table" id="submitReservation" class="btn border-1 border-secondary submit-button rounded-0 col-2">Find a Table</button>
          </div>
        </form>
      )}
      {showCustomerForm && (
        <div id="form-container-customer">
          <h2>Customer Information</h2>
          <form id="customerDetails" onSubmit={handleCustomerSubmit} className="customerDetails">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="btn border-1 border-secondary rounded-0 col-2"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="(---) --- ----"
              className="btn border-1 border-secondary rounded-0 col-2"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              className="btn border-1 border-secondary rounded-0 col-2"
              required
            />
            <input
              type="submit"
              value="Submit"
              id="submitContact"
              className="btn border-1 border-secondary submit-button rounded-0 col-2"
            />
          </form>
        </div>
      )}
      {showSuccessMessage && (
        <div id="successMessage">
          <h2>Reservation Successful!</h2>
          <button id="closeButton" class="btn border-1 border-secondary submit-button rounded-0 col-2" onClick={handleCloseButtonClick}>x</button>
        </div>
      )}
    </div>
  )
}

export default App;
