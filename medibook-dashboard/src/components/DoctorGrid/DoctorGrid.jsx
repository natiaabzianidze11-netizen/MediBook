import { useState } from 'react'
import './DoctorGrid.css'

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
}

export default function DoctorGrid({ doctors }) {
  const [booked, setBooked] = useState([])

  return (
    <section aria-labelledby="catalog-title">
      <h2 id="catalog-title" className="doctor-grid__title">ექიმების კატალოგი</h2>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <article key={doctor.id} className="doctor-card">
            <div className="doctor-card__top">
              <span className="doctor-card__avatar" aria-hidden="true">{getInitials(doctor.name)}</span>
              <div>
                <h3 className="doctor-card__name">{doctor.name}</h3>
                <p className="doctor-card__specialty">{doctor.specialty}</p>
              </div>
            </div>

            <p className="doctor-card__clinic">🏥 {doctor.clinic}</p>

            <div className="doctor-card__bottom">
              <span className="doctor-card__rating">★ {doctor.rating.toFixed(1)}</span>
              <span className="doctor-card__price">₾{doctor.price}</span>
            </div>

            <button
              className={`doctor-card__btn ${booked.includes(doctor.id) ? 'doctor-card__btn--booked' : ''}`}
              onClick={() => setBooked((ids) => (ids.includes(doctor.id) ? ids : [...ids, doctor.id]))}
              disabled={booked.includes(doctor.id)}
            >
              {booked.includes(doctor.id) ? 'დაჯავშნილია ✓' : 'დაჯავშნა'}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
