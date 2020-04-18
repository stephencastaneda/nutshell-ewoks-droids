import firebase from 'firebase/app';
import 'firebase/auth';

import sectorBuilder from '../sectorArea/sectorArea';

const weapontypeDiv = $('#weapontype');

const sectorsNavbarClickEvent = () => {
  $('#sectors-navbar-button').click((e) => {
    e.preventDefault();
    sectorBuilder.buildSectors();
    $('#create-sector-button').removeClass('hide');
    weapontypeDiv.addClass('hide');
  });
};


const navbarClickEvents = () => {
  sectorsNavbarClickEvent();
};


const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { logoutEvent, navbarClickEvents };
