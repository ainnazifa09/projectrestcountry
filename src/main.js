var electron = require('electron');
var {ipcRenderer} =electron;

ipcRenderer.on("item:add", function(e,item){  //untuk terima guna 
    //ipcRenderer.on (address yg mengatakan dia terima)
    var newItem = document.createElement('li');
    newItem.innerHTML = `${item.name} - ${item.description} -${item.place}`
    document.getElementById("list").appendChild(newItem);
})

ipcRenderer.on("item:clear", function(){
    document.getElementById("list").innerHTML = "";
})