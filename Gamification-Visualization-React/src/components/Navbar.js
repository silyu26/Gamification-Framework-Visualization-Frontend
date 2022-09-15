import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (
      <header>
        <div className="navbar navbar-light" style={{'backgroundColor' : '#224466'}}>
          <div className='links contrainer'>
            <div className='row'>
                <div className='col'>
                  <Link to="/">
                    <h2 style={{'color': 'white'}}>Overview</h2>
                  </Link>
                </div>
                <div className='col'>
                  <Link to="/introduction">
                    <h2 style={{'color': 'white'}}>Introduction</h2>
                  </Link>
                </div>
                <div className='col'>
                  <Link to="/badges">
                    <h2 style={{'color': 'white'}}>Badges</h2>
                  </Link>
                </div>
                <div className='col'>
                  <Link to="/achievements">
                    <h2 style={{'color': 'white'}}>Achievements</h2>
                  </Link>
                </div>
                <div className='col'>
                  <Link to="/quests">
                    <h2 style={{'color': 'white'}}>Quests</h2>
                  </Link>
                </div>
                <div className='col'>
                  <Link to="/leaderboards">
                    <h2 style={{'color': 'white'}}>Leaderboards</h2>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Navbar