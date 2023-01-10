import './App.css';
import Category from './components/Category/Category';
import DetailRent from './components/Detail/DetailRent';
import Header from './components/Header';

function App() {
  // const [text, setText] = useState('Michael');
  // const [showHomepage, setShowHomepage] = useState(false);

  return (
    <div>
      {/* <p>{text}</p>
      {showHomepage && <p>Welcome to my home page</p>}
      <button onClick={() => setShowHomepage(true)}>Change Me</button> */}

      {/* <Header /> */}
      {/* <Category/> */}
      <DetailRent/>
    </div>
  );
}

export default App;
