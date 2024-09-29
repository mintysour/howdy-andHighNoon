import { useNavigate } from 'react-router-dom';
import './suspect.css';

import bartender from './assets/img/Bartender.png';
import mayor from './assets/img/Mayor.png';
import sheriff from './assets/img/sherrif.png';
import neighbor from './assets/img/neighbor.png';

const buttonStyle = {
  backgroundColor: '#613624', 
  color: 'white', 
  padding: '10px 20px', 
  border: 'none', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontSize: '32px', 
};

function Suspect() {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="Suspect">
        <div className="Suspect-item-box">
            <div className="TextBox">
                <h1>Who do you want to talk to?</h1>
            </div>
            <div className="Suspect-row">
                <div className="Suspect-item">
                    <img src={bartender} className="Suspect-Img" alt="Bartender" />
                    <button style={buttonStyle} onClick={() => navigate('/bartender')}>Bartender</button>
                </div>

                <div className="Suspect-item">
                    <img src={mayor} className="Suspect-Img" alt="Mayor" />
                    <button style={buttonStyle} onClick={() => navigate('/mayor')}>Mayor</button>
                </div>

                <div className="Suspect-item">
                    <img src={sheriff} className="Suspect-Img" alt="Sheriff" />
                    <button style={buttonStyle} onClick={() => navigate('/sheriff')}>Sheriff</button>
                </div>

                <div className="Suspect-item">
                    <img src={neighbor} className="Suspect-Img" alt="Neighbor" />
                    <button style={buttonStyle} onClick={() => navigate('/neighbor')}>Neighbor</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Suspect;