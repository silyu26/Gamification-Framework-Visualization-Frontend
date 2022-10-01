import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Overview from './components/overview';
import Intro from './components/introduction';
import Badges from './components/badges';
import Achievement from './components/achievements';
import Quest from './components/quests';
import Leaderboard from './components/leaderboards';
import Navbar from './components/navbar';

function App() {
  const [token, setToken] = useState('silyu:296c4fa5-6674-490c-81a6-de0cf4ec508e')
  const [gameid, setId] = useState('thesis')
  const [url, setUrl] = useState('http://localhost:8080/gamification')

  return(
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Overview token={token}/>} />
          <Route path='/introduction' element={<Intro/>} />
          <Route path='/badges' element={<Badges token={token}/>} />
          <Route path='/achievements' element={<Achievement token={token}/>} />
          <Route path='/quests' element={<Quest/>} />
          <Route path='/leaderboards' element={<Leaderboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App