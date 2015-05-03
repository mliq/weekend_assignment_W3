
/*
https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks
  headers: {
 'Authorization' : 'Bearer BQBSWPXdOapkLMqzKjvIYmIItqGtK2tUZhlFmeazjyg3I0rqH7YE_p4rXZgJ8jGNfgBggYy5tue1L',
 'Accept' : 'application/json'
 },
 Client ID
 e92000c6062c400c9b96d67d7df5e39e
 Client Secret
 019eb23d5d0248e9bc92699f07e80c10

*/

var accessToken,playlistArr,userHref,trackName,trackArtist,trackHref,userName,userImg, userArr, i, personArr = [];
var placeholder = "http://placekitten.com/200/300";

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

// Person constructor function
function Person(href, name,image){
    this.href = href;
    this.songs = [];
    this.name = name;
    this.image = image;
}

function getStuff(obj) {
    // How can I sort into usernames?
    // Hm... I could make each user an Object.
    // First cycle through and collect each unique user.
    // Then add their songs to an array of songs

    // Array of tracks
    playlistArr = obj.tracks.items;
    // Cycle through to collect all unique users.
    // First get all user hrefs, then reduce to unique.
    userArr = [];
    for(i = 0; i<playlistArr.length; i++){
        userArr.push(playlistArr[i].added_by.href);
    }
    userArr = userArr.unique2();

    // Now make all of those objects with href, name, image, and songs array
    // Wait, maybe this would work if i was making a new object? And just pushing.

    for(i = 0; i < userArr.length; i++){
        // Get user's profile from href
        userHref = userArr[i];
        $.ajax({
            url: userHref,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            success: function (response) {
                // Conditional for no name
                if( response.display_name !== null) {
                    userName = response.display_name;
                } else {
                    userName = response.id;
                }
                // Conditional for no image
                if (response.images.length != 0){
                    userImg = response.images[0].url;
                } else {
                    userImg = placeholder;
                }
                personArr.push(new Person(userHref, userName, userImg));
            }
        });
    }

    // Extract key pieces of data
    userHref = playlistArr[0].added_by.href;
    trackName = playlistArr[0].track.name;
    trackArtist = playlistArr[0].track.artists[0].name;
    trackHref = playlistArr[0].track.preview_url;

    // Get user's profile from href
    $.ajax({
        url: userHref,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {
            userName = response.display_name;
            userImg = response.images[0].url;
            console.log(response);
            displayStuff();
        }
    });
}
function displayStuff(){
    // Display
    $('.results').append('Added By: ' + userName + '<img src=' + userImg + '>' + '<br>Song: ' + trackName + '<br>Artist: ' + trackArtist + '<br><a href=' + trackHref + '>Play song</a>');
}

$(document).ready(function(){

    // Redirect for authorization.
    if(window.location.hash == "") {
        location = 'https://accounts.spotify.com/authorize/?client_id=e92000c6062c400c9b96d67d7df5e39e&response_type=token&redirect_uri=' + encodeURI('http://localhost:63342/weekend_assignment_W3/index.html') + '&scope=playlist-read-private';
    } else {
        // Comes back with: http://localhost:63342/weekend_assignment_W3/index.html#access_token=BQD2oCPPaVJGn00r2ydYwfX-hPliSZldYGhA48MstWzw6EDwLzLzbKi3-b286VzPlnglzYTaKkRc5sHQlrvj4i3m87iyiFob9AK15Wcf76Qg9NHqF81cr-kiArcGi3uNCWqUjEhOHC8-tgg3Y4U&token_type=Bearer&expires_in=3600

        var hash = window.location.hash;
        accessToken = hash.slice(14);
        console.log(hash);

        // #access_token=BQCv0tBWjrsOHmzsQAVXUOtwBfmuinP1ewwnoy65eiqI-YnD1syxz_3gF2drDlvgf4gnQBcJtK_44OzgkJFxprypaM7BEbGjJ6-FrH7_3Znfa72j-jHUGHo-ParaFZ3G4hC07nyodMX5w3NeC-4&token_type=Bearer&expires_in=3600
        //
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

/*

    //$.ajax({
    //    url: 'https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks',
    //    headers: {
    //        'Authorization': 'Bearer ' + access_token,
    //        'Access-Control-Allow-Origin': 'http://localhost:63342'
    //    },
    //    success: function(response) {
    //        console.log(response);
    //    },
    //    error: function (xhr, status) {
    //        alert('Error: ' + status);
    //    }
    //});
    //$.ajax({
    //    url: 'https://api.spotify.com/v1/me',
    //    headers: {
    //        'Authorization': 'Bearer ' + access_token
    //    },
    //    success: function(response) {
    //        console.log(response);
    //    },
    //    error: function (xhr, status) {
    //        alert('Error: ' + status);
    //    }
    //});


    //$.ajax ({
    //    type: 'GET',
    //    dataType: 'json',
    //    crossDomain: true,
    //    dataType: 'text',
    //    url: 'https://accounts.spotify.com/authorize/?client_id=e92000c6062c400c9b96d67d7df5e39e&response_type=code&redirect_uri='+encodeURI('http://localhost:63342/weekend_assignment_W3/index.html')+'&scope=playlist-read-private',
    //    complete: function() {
    //    console.log('ajax complete');
    //    },
    //    success: function(data) {
    //    searchCallback(data.results);
    //    }
    //});

//});
/*

var spotifyApi = new SpotifyWebApi();

//spotifyApi.setAccessToken('BQBSWPXdOapkLMqzKjvIYmIItqGtK2tUZhlFmeazjyg3I0rqH7YE_p4rXZgJ8jGNfgBggYy5tue1L');

$(document).ready(function(){

    //spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    //    if (err) console.error(err);
    //    else console.log('Artist albums', data);
    //});

    spotifyApi.getPlaylist('1242734119', '0TfhLEsZWwxwmspQ9lQtaZ', function(err,data){
        if (err) console.error(err);
        else console.log('Artist albums', data);
    });

});
*/