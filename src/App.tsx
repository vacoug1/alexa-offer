import { Hero } from './components/Hero'
import { Transformation } from './components/Transformation'
import { ProductThesis } from './components/ProductThesis'
import { ChooseTheBet } from './components/ChooseTheBet'
import { Charter } from './components/Charter'
import { OperatingSystem } from './components/OperatingSystem'
import { SocialProof } from './components/SocialProof'
import { Offer } from './components/Offer'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Transformation />
      <ProductThesis />
      <ChooseTheBet />
      <Charter />
      <OperatingSystem />
      <SocialProof />
      <Offer />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
