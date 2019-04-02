import penda from '../../images/analytics-282739_640.png'
import droplet from '../../images/8313939304_3f23c85f8c_b.jpg'
import finds from '../../images/food-3020282_960_720.jpg'
import brew from '../../images/27000141259_6605496417_b.jpg'

const projectData = {
    projects: [
        {
            title: 'Droplet for Reddit',
            image: droplet,
            description: 'Create your own customizable Reddit feed! Droplet leverages the Reddit API for familiar functionality. Create your own unique feed today!',
            repoLink: 'https://github.com/btmccollum/droplet-web',
            blogLink: 'http://btmccollum.com/droplet_for_reddit',
        },
        {
            title: 'Penda',
            image: penda,
            description: 'Time tracking for collobrative projects, adding another layer of transparency in the process. Can also be utilized for personal projects.',
            repoLink: 'https://github.com/btmccollum/penda-app',
            blogLink: 'http://btmccollum.com/penda_js-ified',
        },
        {
            title: 'Foodie Finds',
            image: finds,
            description: 'A discussion board for foodies. Share, discover, or discuss unique culinary finds specific to your area, or join the discussion in states all over the US.',
            repoLink: 'https://github.com/btmccollum/foodie-finds-sinatra',
            blogLink: 'http://btmccollum.com/foodie_finds',
        },
        {
            title: 'Brewery Search',
            image: brew,
            description: 'A Ruby CLI Gem that allows you to search for breweries in all 50 states directly from your command line!',
            repoLink: 'https://github.com/btmccollum/brewery_search',
            blogLink: 'http://btmccollum.com/brewery_search_cli_-_ruby_gem',
        }
    ]
}

export default projectData;