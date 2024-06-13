
import Login from './pages/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Added from './pages/Added'
import Enrolled from './pages/Enrolled'
import SearchedResult from './pages/SearchedResult'
import CardDetails from './pages/CardDetails'
import EnrolledDetails from './pages/EnrolledDetails'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route exact path='/' element = {<SignIn />}></Route>
      <Route exact path='/login' element = {<Login />}></Route>
      <Route exact path='/home' element = {<Home />}></Route>
      <Route exact path='/added' element = {<Added />}></Route>
      <Route exact path='/enrolled' element = {<Enrolled/>}></Route>
      <Route exact path='/searchcourse/:search' element = {<SearchedResult/>}></Route>
      <Route exact path='/coursesdetails/:id' element = {<CardDetails/>}></Route>
      <Route exact path='enrolled/assessment/:id' element = {<EnrolledDetails />}></Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
