# Assignment 1 - ReactJS app.

Name: Thomas Farrell (20083540)

## Overview.
The app has been expanded from simply being a movie-display app to also being used to display TV shows. It also shows actors related to each aswell through a standardised actorCard. 

### Features. 
+ react-query enabled on all current pages.
+ PersonIcon used on Actor Cards.
+ Film Rel icon now used on Movie Cards.
+ TV icon used on TV Show Cards.
+ Both movies and tv show details page display actor cards, showing the cast of the production.
+ Added Watch Later list to movies in the popular and all time pages.
+ Multiple end points to view popular and all time pages.
+ Added Favourite TV Show list and page with delete capability.
+ UI seems to react to reshaping, but not sure if the end result is as expected.
+ Added search function, now with a functional page!


## Setup requirements.
1. Extract full package from .zip file.
2. Open root folder with VSCode.
3. cd into the movies folder.
4. Run the program with "npm start".

## API endpoints.
- Popular Movies Page - movies/popular
    [^1]: Returns a list of currently popular movies.
- Top Rated Movies Page - movies/top_rated
    [^1]: Returns a list of the highest rated movies of all time.
- DiscoverTVPage - discover/tv
    [^1]: Returns a list of tv shows, chosen by TMDB.
- TV Details Page - tv/${id}
    [^1]: Returns information about a TV series.
- TV Show Images - tv/${id}/images
    [^1]: Returns images taken from a TV series.
- TV Show Credits - tv/${id}/credits
    [^1]: Returns a list of actors and actresses who worked on a TV series.
- Movie Credits - movie/${id}/credits
    [^1]: Returns a list of actors and Actresses who worked on a movie.

 
## Routing.
- /movies/popular - displays currently popular movies.
- /movies/top_rated - displays all time highest rated movies.
- /tv/discover - find tv shows.
- /tv/:id - displays a selected TV Show's details.

## Material UI Icons.
- Replaced CalenderIcon in MovieCard with "Theaters" icon.
- Replaced CalenderIcon in TVCard with "Tv" icon.
- Added "Person" icon to ActorCard.

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

Resources:
- MaterialUI Icons: https://mui.com/material-ui/material-icons/
    - Used for looking up visual components to differentiate similar-looking assets.

- TMDB API documentation: https://developer.themoviedb.org/reference/intro/getting-started
    - Used for looking up API calls for differing data.

- Stack Overflow: https://stackoverflow.com/
    - Generally used for looking up potential solutions to issues while working on the assignment. Didn't really come in handy.

- Postman (App version): https://web.postman.co/
    - Used for understanding data coming in from a TMDB-API call. VERY much came in handy!
