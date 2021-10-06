import './App.css';
import EntryLists from './components/EntryLists';
import NewEntry from './components/NewEntry';
import LoginBox from './components/LoginBox';

function App() {
   const isAuth = false;
   return (
      <div className="page-container">
         {isAuth ? <NewEntry /> : <LoginBox />}
      <div className="entries_container">
        <EntryLists/>
      </div>
    </div>
  );
}

export default App;
