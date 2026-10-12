import './App.css'
import Layout from './components/Layout/Layout'
import StatCard from './components/StatCard/StatCard'
import DoctorGrid from './components/DoctorGrid/DoctorGrid'

const stats = [
  { id: 1, icon: '📅', label: 'დღევანდელი ვიზიტები', value: '48', change: '+12% გუშინთან შედარებით' },
  { id: 2, icon: '🧑‍🤝‍🧑', label: 'აქტიური პაციენტები', value: '1,284', change: '+5% ამ თვეში' },
  { id: 3, icon: '🩺', label: 'ექიმები', value: '36', change: '3 ახალი ამ თვეში' },
  { id: 4, icon: '💰', label: 'შემოსავალი', value: '₾18,450', change: '+8% ამ თვეში' },
]

const doctors = [
  { id: 1, name: 'ნინო ქავთარაძე', specialty: 'კარდიოლოგი', clinic: 'თბილისის ცენტრალური კლინიკა', rating: 4.9, price: 80 },
  { id: 2, name: 'გიორგი მამულაშვილი', specialty: 'ნევროლოგი', clinic: 'მედიქალ ჰაბი ვაკე', rating: 4.7, price: 70 },
  { id: 3, name: 'ანა ბერიძე', specialty: 'პედიატრი', clinic: 'სიცოცხლის კლინიკა', rating: 4.8, price: 55 },
  { id: 4, name: 'დავით ჯაფარიძე', specialty: 'ორთოპედი', clinic: 'თბილისის ცენტრალური კლინიკა', rating: 4.6, price: 75 },
  { id: 5, name: 'მარიამ ლომიძე', specialty: 'დერმატოლოგი', clinic: 'მედიქალ ჰაბი ვაკე', rating: 4.8, price: 60 },
  { id: 6, name: 'თეონა ხარაიშვილი', specialty: 'გინეკოლოგი', clinic: 'სიცოცხლის კლინიკა', rating: 4.9, price: 85 },
]

export default function App() {
  return (
    <Layout>
      <h1 className="page-title">დაფა</h1>

      <section className="stats-grid" aria-label="სტატისტიკა">
        {stats.map((stat) => (
          <StatCard key={stat.id} icon={stat.icon} label={stat.label} value={stat.value} change={stat.change} />
        ))}
      </section>

      <DoctorGrid doctors={doctors} />
    </Layout>
  )
}
