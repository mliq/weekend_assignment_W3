# Weekend Assignment Week 3

1. Research an API
2. Use it
3. Present to group.

# Idea: 
API: [Spotify](https://developer.spotify.com/web-api/)
App: 
1. Show which member of the group contributed which songs to the playlist?
  - Format: List of user names, click on them and it expands which songs they added? Eh maybe better something that could be browsed... Could have an expand all button also...  Or show just the profile images... I like that idea.
2. How many times they were played.

## Learnings:
1. document.url, .hash to get auth code, registering an API application.
2. jQuery .when for resolving multiple AJAX requests.


## URLs
Playlist URL: https://play.spotify.com/user/1242734119/playlist/0TfhLEsZWwxwmspQ9lQtaZ

## Get Playlist Info:
API call: "https://api.spotify.com/v1/users/1242734119/playlists/0TfhLEsZWwxwmspQ9lQtaZ/tracks" -H "Accept: application/json" -H "Authorization: Bearer BQCpGJ-Dwnlh9N4_qBZzGasnQqNsxpWlzUgTD0Mua8baUqeQmPPH8EH8W-0KUAYbZn18wt5rmrgvR876U3kZIa_VtvZqzFaVVRfB-POAbl3Y0UX37TUmW1t71mtL9LCZBZO3CK3erIUBiP2iKcA


## Full Assignment
Weekend Challenge, Round 3!

Welcome to the weekend everyone! This weekends work is all about research. As you know, you will be researching an API. There are literally TONS out there (ok, ok, there are a lot, but I suppose they have no actual weight, as code is not a tangible thing. Think about that…. Trippy I know). In any case, there are a lot. Twitter has one, Google has several. There are APIs for weather, games, movies, music, GitHub. All over the place! Please be aware that some cost money. Don’t pick one of those.

Find one that speaks to your personal interests. Or even check out CodeAcademy and check out the bottom of their courses. There is a section specifically on how to use various APIs for popular services. Pay close attention to which language the tutorial is in, as not all are Javascript based. 

Ok, you found an API. Awesome. Your task now is to research a bit and see how ‘it works’. Note that I am not specifically calling out that ‘you need to get it to work’. If you do, awesome. If not, don’t let it destroy your well deserved weekend. Just research and see what kinds of things it would return. User names? Tweets? Repos? What information is the API providing to you the developer?

THEEEEEEEN, what we want you to do is come up with 3-4 ideas of things you could use that API to build. Your imagination is allowed to run a little free here. Just make sure its a bite sized application for something you COULD build is a relatively realistic timeframe (maybe we will ask you to build one later! Hint hint). On Monday, before our lecture, we will have each person come up and discuss their findings.

Go forth and conquer. But maybe more importantly, have a great weekend. Come back recharged.

ALSO: If you are needing some love on the AJAX side, know that CodeSchool covers AJAX in the jQuery : Return Flight course. Check that out if you want some extra grounding.
