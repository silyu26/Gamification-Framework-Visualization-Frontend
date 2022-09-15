import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './components/overview';
import Intro from './components/introduction';
import Badges from './components/badges';
import Achievement from './components/achievements';
import Quest from './components/quests';
import Leaderboard from './components/leaderboards';
import Navbar from './components/Navbar';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Overview/>} />
          <Route path='/introduction' element={<Intro/>} />
          <Route path='/badges' element={<Badges/>} />
          <Route path='/achievements' element={<Achievement/>} />
          <Route path='/quests' element={<Quest/>} />
          <Route path='/leaderboards' element={<Leaderboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App