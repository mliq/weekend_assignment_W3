
var accessToken,playlistArr,userHref,trackName,trackArtist,trackHref,userName,userImg, userArr, i, personArr, j, trackArr, userId;
var placeholder = "http://placekitten.com/g/200/300";
var currentGame = 0;

Array.prototype.unique2 = function()
{ // Source: http://jszen.com/best-way-to-get-unique-values-of-an-array-in-javascript.7.html
    var n = {},r=[];
    for(var i = 0; i < this.length; i++)
    {
        if (!n[this[i]])
        {
            n[this[i]] = true;
            r.push(this[i]);
        }
    }
    return r;
};

function getStuff(obj) {
    // Array of tracks
    playlistArr = obj.tracks.items;
    userArr = [], personArr = {};

    for(i = 0; i < playlistArr.length; i++) {
        userId = playlistArr[i].added_by.id;
        if(typeof personArr[userId] == 'object') {
            // add to songs
            personArr[userId].songs.push(playlistArr[i]);
        }
        else{
            // Create person with that id and add song.
            personArr[userId] = { id : userId, songs : []};
            // Do ajax stuff later? or now? it won't affect this stuff...
            getUserInfo(personArr[userId]);
        }
    }
    for(name in personArr){
        displayStuff(personArr[name]);
    }
}

function getUserInfo(person){

    $.ajax({
        url: 'https://api.spotify.com/v1/users/'+person.id,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {

            // Conditional for no name
            if( response.display_name !== null) {
                personArr[person.id].userName = response.display_name;
            } else {
                personArr[person.id].userName = response.id;
            }
            // Conditional for no image
            if (response.images.length != 0){
                personArr[person.id].userImg = response.images[0].url;
            } else {
                personArr[person.id].userImg = placeholder;
            }

        }
    });

}

function displayStuff(user){
    console.log(user);

    // Wait for user data to be retrieved, checking every 100ms.
    function checkIfFinished(){
        console.log(typeof user['userName']);
        return(typeof user['userName']== 'string');
    }
    var checkInterval = setInterval(function(){
        if(checkIfFinished()){
            clearInterval(checkInterval);
            var songRows = "";
            // Process Songs.
            for(i = 0; i < user.songs.length; i++){
                trackName = user.songs[i].track.name;
                trackArtist = user.songs[i].track.artists[0].name;
                trackHref = user.songs[i].track.preview_url;

                songRows += "<div class='row col-xs-9'><span class='trackName col-xs-3'>" + trackName +
                    "</span><span class = 'Artist col-xs-3'>" + trackArtist +
                    "</span><a class='playTrack col-xs-3' href=" + trackHref + ">Preview Track</a></div>";
            }

            // Do the displaying:
            var htmlString = '';

            htmlString = '<div class="row col-xs-12"><div class="col-xs-3">' + user['userName'] + '<br><img src="' + user['userImg'] + '"></div>'+ '<span class="col-xs-3">Track </span><span class="col-xs-3">Artist</span><span class="col-xs-3">Preview</span>' + songRows + '</div>';
            //$('.results').slideDown(2000);
            $('.results').append(htmlString);

        }
    }, 100);
}


$(document).ready(function(){

    // Redirect for authorization.
    if(window.location.hash == "") {
        location = 'https://accounts.spotify.com/authorize/?client_id=e92000c6062c400c9b96d67d7df5e39e&response_type=token&redirect_uri=' + encodeURI('http://localhost:63342/weekend_assignment_W3/index.html') + '&scope=playlist-read-private';
    } else {

        var hash = window.location.hash;
        accessToken = hash.slice(14);
        console.log(hash);

        $.ajax({
            url: 'https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            success: function (response) {
                console.log(response);
                getStuff(response);
            }
        });
    }
});
