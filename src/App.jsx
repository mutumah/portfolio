import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
                
        <Toaster position="top-right" reverseOrder={false} />
      </main>
    </div>
  )
}

export default App
