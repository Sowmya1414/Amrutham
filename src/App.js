import './index.css';
import Nav from './components/Nav.jsx';
import Landing from './components/Landing.jsx';
import Filters from './components/filters.jsx';
import TagSelect from './components/TagSelect.jsx';
import Highlights from './components/Highlights.jsx';
function App() {
  return (
    <div className="App">
     <Nav />
     <Landing />
     <Filters />
     <TagSelect />
     <Highlights />
    </div>
  );
}

export default App;
