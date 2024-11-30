import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo" />
        <h2>Sign In to Twitter</h2>
        <button>
        <img src="./google.png" alt="logo" />
        Sign with Google
        </button>
        <button>
        <img src="./instagram.png" alt="logo" />
        Sign with Instagram
        </button>
        <button>
        <img src="./apple.png" alt="logo" />
        Sign with Apple
        </button>
        <hr />
        <span>Or</span>
        <form >
          <input type="text" placeholder="Phone email or username" />
          <button>Nex</button>
        </form>
      </div>
    </div>
  );
}

export default App;
