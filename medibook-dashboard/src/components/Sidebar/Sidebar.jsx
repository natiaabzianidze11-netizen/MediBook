import { useState } from 'react'
import './Sidebar.css'

const menuItems = [
  { id: 'dashboard', icon: '🏠', label: 'მთავარი' },
  { id: 'doctors', icon: '🩺', label: 'ექიმები' },
  { id: 'appointments', icon: '📅', label: 'ვიზიტები' },
  { id: 'patients', icon: '🧑‍🤝‍🧑', label: 'პაციენტები' },
  { id: 'clinics', icon: '🏥', label: 'კლინიკები' },
  { id: 'settings', icon: '⚙️', label: 'პარამეტრები' },
]

export default function Sidebar({ isOpen, onNavigate }) {
  const [active, setActive] = useState('dashboard')

  return (
    <aside id="sidebar" className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <nav aria-label="გვერდითა მენიუ">
        <p className="sidebar__title">მენიუ</p>
        <ul className="sidebar__list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar__item ${active === item.id ? 'sidebar__item--active' : ''}`}
                onClick={() => {
                  setActive(item.id)
                  onNavigate?.()
                }}
                aria-current={active === item.id ? 'page' : undefined}
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
