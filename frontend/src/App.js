import './App.css';
import EntryLists from './components/EntryLists';
import NewEntry from './components/NewEntry';

function App() {
  return (
    <div className="page-container">
      <NewEntry />
      <div className="entries_container">
        <EntryLists/>
      </div>
    </div>
  );
}

export default App;
