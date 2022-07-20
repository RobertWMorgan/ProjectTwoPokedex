# Pokemon Index

[Link to project](https://robertm-pokedex.netlify.app/)

### Project Brief

Timeframe: 2 days
Team size: pairs

The project was to use any Restful API of our choosing to create a basic web-app using React. This would be done in pairs over 2 days.

The API we chose to use was [PokeApi](pokeapi.co).

#### Technologies Used

#### React

We used React to help build the frontend.

- Getting data from the API
- Storing all data in a state so we could render it when ready
- Displaying JSX onto pages

#### SCSS

Since we used Bootstrap for the general structure of the page, SCSS was only used for the individual componenet styling.

- Changing colours
- Applying hover effects
- background/images

### The Approach:

As we didn't have the most time we decided to keep the main deliverables simple; 2 different pages, 1 for displaying all pokemon and one for viewing each one individually with more detailed information. We thought that the best way to start would be to split the work so each person would be working on one of the different deliverables. 

I mainly worked on the detailed information page and helped out with the overview page when needed.

![Pokemon details view](ProjectTwoPokedex/src/images/readme_images/pokemon_detail.PNG)

This is the detailed pokemon page. All of the information was stored within the API which I sorted through to display on the page. The most challenging part of this was under the picture where it shows the next and previous evolution. The main challenge of this was that the structure of the data was very nested and quite confusing to work with. 

![Wartortle evolution API](images/readme_images/evo_detail.PNG)

This is the evolution details of Wartortle which is retrieved using the request https://pokeapi.co/api/v2/evolution-chain/3/

One issue I kept having was that it would show the incorrect evolution, e.g. Next evolution is Blastoise and previous is Wartortle which was incorrect. 

We solved this by noticing the pattern in the data and used multiple if statements to check what each of the names were and saving them to different states to display the correct one. 

![If statements checking data](images/readme_images/pokemon_evo_state.PNG)


Another issue I kept running into was that there were multiple API requests needed for a single pokemon page. This was due to the data being split into different requests and needing to use the generic get single pokemon request to get the evolution chain API needed. I solved this by using a useEfffect that would only run on page-load then calling the functions in the correct order to get all the necessary data. 

![Use Effect with multiple API requests](images/readme_images/pokemon_useeffect.PNG)

### Project Walkthrough:

![Index Page](images/readme_images/pokemon_index.PNG)

 This is the index page of the project. Here you can select which pokemon you want to view as well as search for any. 

 ![Searching for Pokemon](images/readme_images/pokemon_search.PNG)

 Then you are brought to the details page once clicking on a pokemon.

![Pokemon details view](images/readme_images/pokemon_detail.PNG)

From here you can expand the accordion to see a list of all the moves it can learn. One feature that I wanted to implement but ran out of time would be linking the next and previous evolutions to their page links. This would be a nice added functionality to link the site better.


### Key Learnings

- Learned how to access APIs on the frontend
- Learned how to use Bootstrap
- Learned how to use states and React components

### Wins

- The main win I had was learning how REST APIs work and getting a better understanding of how the internet works. It also gave me basic knowledge of how to structure my own APIs in the future.

- A minor win I had was using bootstrap for the first time and reading through documentation. I hadn’t used bootstrap prior to this and was happy with how much I managed to achieve. 

### Challenges
- The main challenge was digging through the API data. A lot of it was very nested and going through all the information quickly became quite confusing.

### Future Improvements
- An improvement I would like to make in the future would be fixing the moves section for each pokemon. We ended up running out of time towards the end of the project and just put it up without properly styling or adding functionality.
- Another improvement I'd like to make would be making the next and previous evolution arrows clickable and link to the previous or next evolution. 