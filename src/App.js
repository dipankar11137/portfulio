
import './App.css';
import AboutMe from './Component/AboutMe/AboutMe';
import ContactMe from './Component/ContactMe/ContactMe';
import Header from './Component/Header/Header';
import MyService from './Component/MyService/MyService';
import MySkill from './Component/MySkill/MySkill';

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <AboutMe></AboutMe>
      <MyService></MyService>
      <MySkill></MySkill>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
