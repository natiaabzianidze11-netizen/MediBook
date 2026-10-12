import { useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import './Layout.css'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="layout">
      <Header menuOpen={sidebarOpen} onMenuClick={() => setSidebarOpen((open) => !open)} />
      <Sidebar isOpen={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  )
}
