import './App.css';
import EntryLists from './components/EntryLists';
import NewEntry from './components/NewEntry';
import LoginBox from './components/LoginBox';

function App() {
  return (
     <div className="page-container">
      <LoginBox />
      <NewEntry />
      <div className="entries_container">
        <EntryLists/>
      </div>
    </div>
  );
}

export default App;
