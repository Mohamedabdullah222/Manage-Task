
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Customer from './components/customer'
import GetStart from './components/GetStart'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <div  className="container mx-auto h-30 md:h-50 " />
      <Hero />
      <About />
      <Customer />
      <GetStart />
      <Footer />
    </div>
  )
}

export default App
