import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Series from './components/Series/Series'

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/series' element = {<Series/>}/>
    {/* <Route path='/contests' element={<Contests/>}/> */}
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
