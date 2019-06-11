import penda from '../../images/analytics-282739_640.png'
import droplet from '../../images/8313939304_3f23c85f8c_b.jpg'
import finds from '../../images/food-3020282_960_720.jpg'
import brew from '../../images/27000141259_6605496417_b.jpg'
import ohdoc from '../../images/100doc.jpg'

// only displaying the 4 most relevant projects for card display
const projectData = {
    projects: [
        {
            title: 'OHDOC Manager',
            image: ohdoc,
            description: 'Submit your daily #100DaysOfCode GitHub/Twitter submissions in record time with one tool.',
            languages: ['Ruby/Rails', 'React/Redux'],
            icons: ['devicon-ruby-plain', 'devicon-rails-plain', 'devicon-react-original-wordmark'],
            repoLink: 'https://github.com/btmccollum/ohdoc-challenge-manager',
            herokuLink: '',
            blogLink: '',
            demoLink: ''
        },
        {
            title: 'Droplet for Reddit',
            image: droplet,
            description: 'Create your own customizable Reddit feed! Droplet leverages the Reddit API for familiar functionality. Create your own unique feed today!',
            languages: ['Ruby/Rails', 'React/Redux'],
            icons: ['devicon-ruby-plain', 'devicon-rails-plain', 'devicon-react-original-wordmark'],
            repoLink: 'https://github.com/btmccollum/droplet-web',
            herokuLink: 'https://droplet-app.herokuapp.com/',
            blogLink: 'https://medium.com/@btmccollum/personal-project-droplet-for-reddit-2728470dc418',
            demoLink: ''
        },
        {
            title: 'Penda',
            image: penda,
            description: 'Time tracking for collobrative projects, adding another layer of transparency in the process. Can also be utilized for personal projects.',
            languages: ['Ruby/Rails', 'JavaScript', 'jQuery'],
            icons: ['devicon-ruby-plain', 'devicon-rails-plain', 'devicon-javascript-plain', 'devicon-jquery-plain'],
            repoLink: 'https://github.com/btmccollum/penda-app',
            blogLink: 'https://medium.com/@btmccollum/personal-project-penda-js-ified-f51514dde938',
            demoLink: ''
        },
        // {
        //     title: 'Foodie Finds',
        //     image: finds,
        //     description: 'A discussion board for foodies. Share, discover, or discuss unique culinary finds specific to your area, or join the discussion in states all over the US.',
        //     languages: ['Ruby', 'Sinatra'],
        //     icons: ['devicon-ruby-plain'],
        //     repoLink: 'https://github.com/btmccollum/foodie-finds-sinatra',
        //     blogLink: 'https://medium.com/@btmccollum/foodie-finds-b5fbbc61e5be',
        //     demoLink: ''
        // },
        {
            title: 'Brewery Search',
            image: brew,
            description: 'A Ruby CLI Gem that allows you to search for breweries in all 50 states directly from your command line!',
            languages: ['Ruby'],
            icons: ['devicon-ruby-plain'],
            repoLink: 'https://github.com/btmccollum/brewery_search',
            blogLink: 'https://medium.com/@btmccollum/creating-a-ruby-cli-gem-b0f73c84f9b3',
            demoLink: ''
        },
    ]
}

export default projectData;