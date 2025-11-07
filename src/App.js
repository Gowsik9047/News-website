import Navbar from "./Components/header";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Welcome to My News Website</h1>
        <p>Here is some content below the navbar...</p>
      </div>
    </div>
  );
}

export default App;
