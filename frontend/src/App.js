import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import HomeScreen from './screen/HomeScreen'
function App() {
  return (
    <>
      <Router>
        <main></main>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} exact></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
