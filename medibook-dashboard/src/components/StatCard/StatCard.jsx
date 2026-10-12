import './StatCard.css'

export default function StatCard({ icon, label, value, change }) {
  return (
    <article className="stat-card">
      <span className="stat-card__icon" aria-hidden="true">{icon}</span>
      <div className="stat-card__info">
        <p className="stat-card__label">{label}</p>
        <p className="stat-card__value">{value}</p>
        <p className="stat-card__change">{change}</p>
      </div>
    </article>
  )
}
