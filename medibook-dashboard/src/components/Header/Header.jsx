import './Header.css'

export default function Header({ menuOpen, onMenuClick }) {
  return (
    <header className="header">
      <div className="header__left">
        <button
          className="header__menu-btn"
          onClick={onMenuClick}
          aria-expanded={menuOpen}
          aria-controls="sidebar"
          aria-label="მენიუს გახსნა/დახურვა"
        >
          ☰
        </button>
        <p className="header__logo">MediBook</p>
      </div>

      <button className="header__profile" aria-label="პროფილი">
        <span className="header__avatar" aria-hidden="true">ნა</span>
        <span className="header__name">ნათია</span>
      </button>
    </header>
  )
}
