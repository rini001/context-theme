import { useContext } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Sidebar } from './components/Sidebar';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [{isDark}]=useContext(ThemeContext)
  return (
    <div className={isDark? "App1": "App"} >
    <Sidebar/>
    <Card/>
    </div>
  );
}

export default App;
