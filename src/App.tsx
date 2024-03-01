import ApplicationInfo from './components/ApplicationInfo'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        <ApplicationInfo />
      </main>
      <Footer />
    </div>
  )
}

export default App
