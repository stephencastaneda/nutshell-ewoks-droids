import utils from '../../helpers/utils';
import sectorDataComponent from '../../helpers/data/sectorData';
// import sectorData from '../../helpers/data/sectorData';
// import smash from '../../helpers/data/smash';

const showFormToCreateMission = () => {
  const createNewMissionFormDiv = $('#create-new-mission-form-goes-here');
  const openNewMissionFormButton = $('#show-make-new-mission-form-button');

  createNewMissionFormDiv.removeClass('hide');
  openNewMissionFormButton.addClass('hide');

  let domString = '';
  domString += '<h2>Create New Mission Form</h2>';
  domString += '<form>';
  domString += '<div class="d-flex justify-content-center">';
  domString += '<div class="form-group">';
  domString += '<label for="user-entered-mission-name">Mission Name</label>';
  domString += '<input type="text" class="form-control" id="user-entered-mission-name"  placeholder="Pick a Mission Name" aria-describedby="user-entered-mission-name">';
  domString += '</div>';
  // domString += '</div>';

  // console.error(smash.getMissionsEverything());

  domString += '<div class="form-group">';
  domString += '<label for="">Pick a Mission Image</label>';
  domString += '<input type="text" class="form-control" placeholder="Pick a Mission Image" id="">';
  domString += '</div>';
  domString += '</div>';

  domString += '<label for="">Pick a Mission Sector</label>';
  domString += '<select id="mission-sector-drop-down">';
  sectorDataComponent.getSectors()
    .then((sectors) => {
      sectors.forEach((sector) => {
        console.error(sector.name);
        domString += `<option value=${sector.name}>${sector.name}</option>`;
      });
      domString += '</select>';
      domString += '<h6>After your dropdown menu domstring</h6>';
      domString += '</div>';
    })
    .catch((err) => console.error('something went wrong inside your getSectors function inside the sectors dropdown menu', err));

  // domString += '<div class="row">';
  // domString += '<div class="form-group col-4">';
  // domString += '<label for="exampleFormControlSelect2">Select Your Mission Weapons</label>';
  // domString += '<select multiple class="form-control" id="exampleFormControlSelect2">';
  // domString += '<option>1</option>';
  // domString += '<option>2</option>';
  // domString += '<option>3</option>';
  // domString += '<option>4</option>';
  // domString += '<option>5</option>';
  // domString += '</select>';
  // domString += '</div>';

  // domString += '<div class="form-group col-4">';
  // domString += '<label for="exampleFormControlSelect2">Select Your Mission Personnel</label>';
  // domString += '<select multiple class="form-control" id="exampleFormControlSelect2">';
  // domString += '<option>1</option>';
  // domString += '<option>2</option>';
  // domString += '<option>3</option>';
  // domString += '<option>4</option>';
  // domString += '<option>5</option>';
  // domString += '</select>';
  // domString += '</div>';
  // domString += '</div>';

  domString += '<button type="button" class="btn btn-primary" id="submit-new-mission-form-button">Create New Mission</button>';
  domString += '</form>';

  utils.printToDom('create-new-mission-form-goes-here', domString);
};

export default { showFormToCreateMission };