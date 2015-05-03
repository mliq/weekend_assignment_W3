
$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: 'https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks',
        crossDomain: true,
        dataType: 'text',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        }
    });

    /*
    URL: 'https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks'
    Headers: headers: {
        'Authorization' : 'Bearer BQBSWPXdOapkLMqzKjvIYmIItqGtK2tUZhlFmeazjyg3I0rqH7YE_p4rXZgJ8jGNfgBggYy5tue1L',
            'Accept' : 'application/json'
    },*/
});
