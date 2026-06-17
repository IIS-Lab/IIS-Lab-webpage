import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { MemberProfilePage } from './pages/MemberProfilePage'
import { ContactPage } from './pages/ContactPage'
import { DLSPage } from './pages/DLSPage'
import { HomePage } from './pages/HomePage'
import { RealityCheckPage } from './pages/RealityCheckPage'
import { JoinPage } from './pages/JoinPage'
import { MembersPage } from './pages/MembersPage'
import { PublicationsPage } from './pages/PublicationsPage'
import { ResearchDetailPage } from './pages/ResearchDetailPage'
import { ResearchPage } from './pages/ResearchPage'
import { OldNewsPage } from './pages/OldNewsPage'
import { WhatsUpPage } from './pages/WhatsUpPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="research/:slug" element={<ResearchDetailPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="member/:slug" element={<MemberProfilePage />} />
          <Route path="dls" element={<DLSPage />} />
          <Route path="news/old" element={<OldNewsPage />} />
          <Route path="whats-up" element={<WhatsUpPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="misc/realitycheck" element={<RealityCheckPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
