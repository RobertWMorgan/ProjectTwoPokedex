# Pokemon Index

[Link to project](https://robertm-pokedex.netlify.app/)

Pokemon Index is a site I created as part of a 2 person team over 2 days. The aim was to display information using a RESTful API. The API we chose was [PokeApi](pokeapi.co).

### Project Brief

The project was to use any Restful API of our choosing to create a basic web-app using React. This would be done in pairs over 2 days. 

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

### Win/Loss

- This was the first time I had ever used an external API and seeing how different information was structured and accessing them was both challenging and rewarding when working. The API was quite cluttered with the amount of information and had a lot of nested information which made accessing different information really tricky and require a lot of if statements. 

- The accordion on the detailed page wasn't styled very well. Bootstrap components seem to override styling in a lot of cases and I haven't quite figured out how to integrate different components seemlessly.

### Key Learnings

- Learned how to access APIs on the frontend
- Learned how to use Bootstrap
- Learned how to use states and React components

### Challenges
- The main challenge was digging through the API data. A lot of it was very nested and going through all the information quickly became quite confusing.

# Future Improvements
- An improvement I would like to make in the future would be fixing the moves section for each pokemon. We ended up running out of time towards the end of the project and just put it up without properly styling or adding functionality.
- Another improvement I'd like to make would be making the next and previous evolution arrows clickable and link to the previous or next evolution. 