// Import untuk menghantar ke mana-mana
var electron = require('electron');
var { ipcRenderer } = electron;

function updatedComment() {
    var name = document.getElementById('name_input').value;
    var description = document.getElementById('description_input').value;
    var place = document.getElementById('place_input').value;

    var updatedComment = {
        name: name,
        description: description,
        place: place
    }

    const myJSON = JSON.stringify(updatedComment)
    localStorage.setComment("updatedComment", myJSON);
    alert(updatedComment.name); // Testing whether the input from the user can be read
    alert(updatedComment.description);
    alert(updatedComment.place);

    // Menghantar ke mana-mana
    ipcRenderer.send('comment:update', updatedComment); // utk send (return) data
}
