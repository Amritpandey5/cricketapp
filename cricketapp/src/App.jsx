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
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
