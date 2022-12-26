import logo from './img/logo.svg';
import './App.css';
import getFamilyMembers from './seed-database/seed-database';


function App() {
    return (
        <div>
            <div>{getFamilyMembers("+de,}/")}</div>
            <div id="container">

                <div id="content">

                </div>

                <div id="footer">
                    Wedding &copy; Julia & Grzegorz team, wszelkie prawa zastrzeżone.
                </div>

            </div>


            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </div>
    );
}

export default App;
