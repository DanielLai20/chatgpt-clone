import logo from './logo.svg';
import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <aside className= "sidebar">
        <div className= "new-chat-button">
        <span>+</span>
          New Chat 
        </div>
      </aside>
      <section className= "chatbar">
        <div className= "chat-input">
          <textarea className= "chat-input-text">
          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
