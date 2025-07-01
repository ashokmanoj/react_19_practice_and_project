import { useState } from 'react'
import './index.css'

const FAQ = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      <div className="content">
        {isActive && <p className="card-info">{answer}</p>}
      </div>
    </section>
  )
}

export default FAQ