//Import untuk menghantar ke mana-mana
var electron = require('electron')
var {ipcRenderer} = electron;

function addNewItem(){
    var name = document.getElementById('name_input').value;
    var description = document.getElementById('description_input').value;
    var place = document.getElementById('place_input').value;

    var newItem = {
        name:name,
        description:description,
        place:place
    }

    const myJSON= JSON.stringify(newItem)
    localStorage.setItem("itemNew",myJSON)
    alert(newItem.name); //testing whether the input from user can be read
    alert(newItem.description);
    alert(newItem.place);

    //Menghantar ke mana-mana
    ipcRenderer.send('item:add', newItem); //utk send (return) data
}