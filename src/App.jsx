import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Mission from './components/Mission.jsx'
import ProgressTimeline from './components/ProgressTimeline.jsx'
import Services from './components/Services.jsx'
import Giving from './components/Giving.jsx'
import Events from './components/Events.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Mission />
        <ProgressTimeline />
        <Services />
        <Giving />
        <Events />
      </main>
      <Footer />
    </>
  )
}