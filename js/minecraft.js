var url = "https://api.minetools.eu/ping/mhfarm.minehut.gg/25565";
 
$.getJSON(url, function(result) {
    //data is the JSON string
if(result.players.max == 0){
    $('#mc-status').html('Offline');
    $('#mc-status2').html('Offline');
    $('#mc-version').html(result.version.name.replace('Velocity ', '').replace('-', ' - '));
    $('#mc-players').html(result.players.online + "/" + result.players.max);
    $('#mc-players2').html(result.players.online + "/" + result.players.max);
}else{
    $('#mc-status').html('Online');
    $('#mc-status2').html('Online');
    $('#mc-version').html(result.version.name.replace('Velocity ', '').replace('-', ' - '));
    $('#mc-players').html(result.players.online + "/" + result.players.max);
    $('#mc-players2').html(result.players.online + "/" + result.players.max);
}
});


document.querySelector(".tooltip").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "block";
});


document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});
