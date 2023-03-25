import styles from './style'
import {
  Billing,
  Bussiness,
  Button,
  Navbar,
  CTA,
  CardDeal,
  Clients,
  Stats,
  FeedbackCard,
  Footer,
  Hero,
  Testimonials,
  GetStarted
} from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* Hero */}
    <div className={`${styles.flexStart} bg-primary `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Bussiness />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default App
