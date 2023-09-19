import './App.css'
import DaisyNavBar from './components/DaistNavBar/DaisyNavBar'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNavBar></DaisyNavBar> */}
      <h1 className='text-5xl text-center bg-rose-500'>Price Options</h1>

      <PriceOptions></PriceOptions>


    </>
  )
}

export default App
