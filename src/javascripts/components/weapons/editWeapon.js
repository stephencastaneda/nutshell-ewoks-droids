import utils from '../../helpers/utils';
import weaponsData from '../../helpers/data/weaponsData';

const showForm = (weaponId) => {
  weaponsData.getSingleWeapon(weaponId)
    .then((resp) => {
      const weapons = resp.data;
      console.log('single weapon', weapons);
      let domString = '';
      domString += '<h2 class="text-center">Edit Weapon </h2>';
      domString += `<form class="col-10 offset-1 edit-weapon-form-tag" id=${weaponId}`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-weapon-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-name" placeholder="Enter Name" value=${weapons.name}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-weapon-description">Description</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-description" placeholder="Enter Description" value=${weapons.description}>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-weapon-imageUrl">Add Image</label>';
      domString += `<input type="text" class="form-control" id="edit-weapon-imageUrl" placeholder="ImageUrl" value=${weapons.imageUrl}>`;
      domString += '</div>';
      domString += '<button type="submit" class="btn btn-dark" id="form-edit-weapon-creator">Modify Weapon</button>'; // data-weapontype=${weapontypeId}
      domString += '</form>';
      utils.printToDom('edit-weapon', domString);
    })
    .catch((err) => console.error('get single weapon broke', err));
};
export default { showForm };