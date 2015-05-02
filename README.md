# Weekend Assignment Week 3

1. Research an API
2. Use it
3. Present to group.

# Idea: 
API: [Spotify](https://developer.spotify.com/web-api/)
App: 
1. Show which member of the group contributed which songs to the playlist?
2. How many times they were played.

Playlist URL: https://play.spotify.com/user/1242734119/playlist/0TfhLEsZWwxwmspQ9lQtaZ

OAuth token: BQCpGJ-Dwnlh9N4_qBZzGasnQqNsxpWlzUgTD0Mua8baUqeQmPPH8EH8W-0KUAYbZn18wt5rmrgvR876U3kZIa_VtvZqzFaVVRfB-POAbl3Y0UX37TUmW1t71mtL9LCZBZO3CK3erIUBiP2iKcA

## Get Playlist Info:
API call: "https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks" -H "Accept: application/json" -H "Authorization: Bearer BQCpGJ-Dwnlh9N4_qBZzGasnQqNsxpWlzUgTD0Mua8baUqeQmPPH8EH8W-0KUAYbZn18wt5rmrgvR876U3kZIa_VtvZqzFaVVRfB-POAbl3Y0UX37TUmW1t71mtL9LCZBZO3CK3erIUBiP2iKcA

## 

## Full Assignment
Weekend Challenge, Round 3!

Welcome to the weekend everyone! This weekends work is all about research. As you know, you will be researching an API. There are literally TONS out there (ok, ok, there are a lot, but I suppose they have no actual weight, as code is not a tangible thing. Think about that…. Trippy I know). In any case, there are a lot. Twitter has one, Google has several. There are APIs for weather, games, movies, music, GitHub. All over the place! Please be aware that some cost money. Don’t pick one of those.

Find one that speaks to your personal interests. Or even check out CodeAcademy and check out the bottom of their courses. There is a section specifically on how to use various APIs for popular services. Pay close attention to which language the tutorial is in, as not all are Javascript based. 

Ok, you found an API. Awesome. Your task now is to research a bit and see how ‘it works’. Note that I am not specifically calling out that ‘you need to get it to work’. If you do, awesome. If not, don’t let it destroy your well deserved weekend. Just research and see what kinds of things it would return. User names? Tweets? Repos? What information is the API providing to you the developer?

THEEEEEEEN, what we want you to do is come up with 3-4 ideas of things you could use that API to build. Your imagination is allowed to run a little free here. Just make sure its a bite sized application for something you COULD build is a relatively realistic timeframe (maybe we will ask you to build one later! Hint hint). On Monday, before our lecture, we will have each person come up and discuss their findings.

Go forth and conquer. But maybe more importantly, have a great weekend. Come back recharged.

ALSO: If you are needing some love on the AJAX side, know that CodeSchool covers AJAX in the jQuery : Return Flight course. Check that out if you want some extra grounding.

## 1. Research an API

Codeacademy has courses on a number of APIs, not so many are in Javascript. 

Youtube is.

### API Definition:
An API, or application programming interface, is kind of like a coding contract: it specifies the ways a program can interact with an application.

### RESTful API Definition:
For an API or web service to be RESTful, it must do the following:

1. Separate the client from the server
2. Not hold state between requests (meaning that all the information necessary to respond to a request is available in each individual request; no data, or state, is held by the server from request to request)
3. Use HTTP and HTTP methods (as explained in the next section).

### XHR Definition:
XML HTTP Request. This is how we make an HTTP request

### Basic XHR Request:

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
// Add your code below!
xhr.send();
console.log(xhr.status);  // Get the error code such as '404'
console.log(xhr.statusText);
```

### The Four Verbs
The number of HTTP methods you'll use is quite small—there are just four HTTP "verbs" you'll need to know! They are:

1. `GET`: retrieves information from the specified source (you just saw this one!)
2. `POST`: sends new information to the specified source.
3. `PUT`: updates existing information of the specified source.
4. `DELETE`: removes existing information from the specified source.
So when we sent our GET request to codecademy.com, we retrieved information. When you add to or update your blog, you're sending POST or PUT requests; when you delete a tweet, there goes a DELETE request.

### Anatomy of an HTTP Request
An HTTP request is made up of three parts:

1. The request line, which tells the server what kind of request is being sent (GET, POST, etc.) and what resource it's looking for;
2. The header, which sends the server additional information (such as which client is making the request)
3. The body, which can be empty (as in a GET request) or contain data (if you're POSTing or PUTing information, that information is contained here).

This is what a typical request looks like: Note the POST information in the request line, the header information below it, and the data to be POSTed at the bottom (line 5).

```http
// POST /codecademy/learn-http HTTP/1.1
// Host: www.codecademy.com
// Content-Type: text/html; charset=UTF-8

// Name=Eric&Age=26
```

### Anatomy of an HTTP Response
The HTTP response structure mirrors that of the HTTP request. It contains:

1. A response line, which includes the three-digit HTTP status code;

2. A header, which includes further information about the server and its response;

3. The body, which contains the text of the response.

```http
// HTTP/1.1 200 OK
// Content-Type: text/xml; charset=UTF-8

// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="http://www.codecademy.com/">Accepted</string>
```

### Endpoints
Endpoints are API-defined locations where particular data are stored. 

You'll GET something different depending on the endpoint you use.
For instance, if you're using the API for a video hosting service, there might be endpoints for the most popular videos, the most recent videos, or videos belonging to a certain genre or category.

### OAuth
Some APIs require authentication using a protocol called OAuth. 

### HTTP Status Codes
A successful request to the server results in a response, which is the message the server sends back to you, the client.

The response from the server will contain a three-digit status code. These codes can start with a 1, 2, 3, 4, or 5, and each set of codes means something different. (You can read the full list [here](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)). They work like this:

1xx: You won't see these a lot. The server is saying, "Got it! I'm working on your request."

2xx: These mean "okay!" The server sends these when it's successfully responding to your request. (Remember when you got a "200" back from Codecademy?)

3xx: These mean "I can do what you want, but I have to do something else first." You might see this if a website has changed addresses and you're using the old one; the server might have to reroute the request before it can get you the resource you asked for.

4xx: These mean you probably made a mistake. The most famous is "404," meaning "file not found": you asked for a resource or web page that doesn't exist.

5xx: These mean the server goofed up and can't successfully respond to your request.

### Parsing XML
XML (which stands for E xtensible Markup Language) is very similar to HTML—it uses tags between angle brackets. The difference is that XML allows you to use tags that you make up, rather than tags that the W3C decided on.

asks for an XML document in return:

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
```

For instance, you could create an API that returns information about a pet:

```xml
<pet>
  <name>Jeffrey</name>
  <species>Giraffe</species>
</pet>
```

### Parsing JSON
JSON (which stands for Java Script Object Notation) is an alternative to XML. It gets its name from the fact that its data format resembles JavaScript objects, and it is often more succinct than the equivalent XML (no tags). 

```js
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);
```

Same pet object:

```json
{
  "pets": {
    "name": "Jeffrey",
    "species": "Giraffe"
  }
}
```
## 2. Use it

### Rules / Basics

```js
// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    
    // Add code here to test out showResponse():
    
}
```

Loading the JavaScript client library
We'll start with a exercise that performs some common setup tasks needed to make YouTube Data API calls using the Google APIs JavaScript client library. Don't worry—we'll get to the exciting stuff as soon as that's done!

This boilerplate code sets up a basic HTML document, search.html, and includes two JavaScript files. One is the [Google APIs JavaScript client library](https://github.com/google/google-api-javascript-client), and the other, search.js, is what we'll use for our custom code.

When the client library is loaded, it automatically calls onClientLoad() [line 11] for us. That, in turn, loads in some extra code needed to make YouTube requests [line 12]. Finally, once that's complete, we set an API key [line 19]. When you're writing your own programs that talk to the YouTube API, you'll need to apply for your own key, but for now, we can use an existing key set up for this lesson.

In the course of this lesson, we'll need to display the results of YouTube Data API calls in the browser. showResponse() [line 5] is a simple function that takes a JavaScript value and adds it to a visible element in our HTML page.