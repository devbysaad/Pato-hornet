import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Teams from './components/Teams'
import Coaches from './components/Coaches'
import Gallery from './components/Gallery'
import Training from './components/Training'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Teams />
        <Coaches />
        <Gallery />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
