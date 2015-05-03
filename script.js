
$(document).ready(function(){


    $.getJSON('https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks', )

    $.ajax({
        type: 'GET',
        url: 'https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks',
        headers: {
            'Authorization' : 'Bearer BQBSWPXdOapkLMqzKjvIYmIItqGtK2tUZhlFmeazjyg3I0rqH7YE_p4rXZgJ8jGNfgBggYy5tue1L',
            'Accept' : 'application/json'
        },
        //beforeSend: function(xhr) {
        //    xhr.setRequestHeader('Authorization', 'Bearer BQBSWPXdOapkLMqzKjvIYmIItqGtK2tUZhlFmeazjyg3I0rqH7YE_p4rXZgJ8jGNfgBggYy5tue1L');
        //},
        //processData: false,
        crossDomain: true,
        dataType: 'json',
        //accepts: 'application/json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, status, error) {
            alert('Error: ' + status + " " + error);

        }
    });

    $.get('https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks'),
});
