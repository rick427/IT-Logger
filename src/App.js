import React, {useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

function App() {
  useEffect(() => {
    //initialize materialize js
    M.AutoInit();
  });

  return (
    <>
      <SearchBar/>
      <div className="container">
        <Logs/>
        <AddBtn/>
        <AddLogModal/>
      </div>
    </>
  );
}

export default App;
