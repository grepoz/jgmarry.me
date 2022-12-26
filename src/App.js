import logo from './img/logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";

function App() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBdipdxNg8bs_Z9mOuGWZJD-ZFghkD_K1o",
        authDomain: "wedding-41b3e.firebaseapp.com",
        projectId: "wedding-41b3e",
        storageBucket: "wedding-41b3e.appspot.com",
        messagingSenderId: "209320284654",
        appId: "1:209320284654:web:9e7a2a3de26b7ed1517eff"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return (
        <div>
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
