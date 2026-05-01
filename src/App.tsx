import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { MissionPage } from './pages/MissionPage'
import { PricingPage } from './pages/PricingPage'
import { RecruitPage } from './pages/RecruitPage'
import { ServicesPage } from './pages/ServicesPage'
import { WorksPage } from './pages/WorksPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
