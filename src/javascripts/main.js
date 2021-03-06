import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import '../styles/main.scss';
import myNavbar from './components/myNavbar/myNavbar';
import 'bootstrap';
// import missions from './components/Missions/missions';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  myNavbar.navbarClickEvents();
  // missions.buildMissions();
};

init();
