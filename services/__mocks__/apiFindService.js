const axios = require("axios");
require("dotenv").config();

const apiFindService = async () =>{
    console.log("Mocked APIs");
    return Promise.resolve({
        entries:[{
            "API": "AdoptAPet",
            "Description": "Resource to help get pets adopted",
            "Auth": "apiKey",
            "HTTPS": true,
            "Cors": "yes",
            "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
            "Category": "Animals"
        },
        {
            "API": "Axolotl",
            "Description": "Collection of axolotl pictures and facts",
            "Auth": "",
            "HTTPS": true,
            "Cors": "no",
            "Link": "https://theaxolotlapi.netlify.app/",
            "Category": "Animals"
        },
        {
            "API": "Cat Facts",
            "Description": "Daily cat facts",
            "Auth": "",
            "HTTPS": true,
            "Cors": "no",
            "Link": "https://alexwohlbruck.github.io/cat-facts/",
            "Category": "Animals"
        },
        {
            "API": "Cataas",
            "Description": "Cat as a service (cats pictures and gifs)",
            "Auth": "",
            "HTTPS": true,
            "Cors": "no",
            "Link": "https://cataas.com/",
            "Category": "Animals"
        },
        {
            "API": "Cats",
            "Description": "Pictures of cats from Tumblr",
            "Auth": "apiKey",
            "HTTPS": true,
            "Cors": "no",
            "Link": "https://docs.thecatapi.com/",
            "Category": "Animals"
        },
        {
            "API": "Dog Facts",
            "Description": "Random dog facts",
            "Auth": "",
            "HTTPS": true,
            "Cors": "yes",
            "Link": "https://dukengn.github.io/Dog-facts-API/",
            "Category": "Animals"
        },
        {
            "API": "Dog Facts",
            "Description": "Random facts of Dogs",
            "Auth": "",
            "HTTPS": true,
            "Cors": "yes",
            "Link": "https://kinduff.github.io/dog-api/",
            "Category": "Animals"
        },
        {
            "API": "Dogs",
            "Description": "Based on the Stanford Dogs Dataset",
            "Auth": "",
            "HTTPS": true,
            "Cors": "yes",
            "Link": "https://dog.ceo/dog-api/",
            "Category": "Animals"
        },
        {
            "API": "eBird",
            "Description": "Retrieve recent or notable birding observations within a region",
            "Auth": "apiKey",
            "HTTPS": true,
            "Cors": "no",
            "Link": "https://documenter.getpostman.com/view/664302/S1ENwy59",
            "Category": "Animals"
        },
        {
            "API": "FishWatch",
            "Description": "Information and pictures about individual fish species",
            "Auth": "",
            "HTTPS": true,
            "Cors": "yes",
            "Link": "https://www.fishwatch.gov/developers",
            "Category": "Animals"
        }]
    })
};

const apiFindServiceById = async (id) => {
    console.log("Mocked APIs by ID");
    return Promise.resolve({
        categories: ["Animals",
            "Anime",
            "Anti-Malware",
            "Art & Design",
            "Authentication & Authorization",
            "Blockchain",
            "Books",
            "Business",
            "Calendar",
            "Cloud Storage & File Sharing",
            "Continuous Integration",
            "Cryptocurrency",
            "Currency Exchange",
            "Data Validation",
            "Development",
            "Dictionaries",
            "Documents & Productivity",
            "Email",
            "Entertainment",
            "Environment",
            "Events",
            "Finance",
            "Food & Drink",
            "Games & Comics",
            "Geocoding",
            "Government",
            "Health",
            "Jobs",
            "Machine Learning",
            "Music",
            "News",
            "Open Data",
            "Open Source Projects",
            "Patent",
            "Personality",
            "Phone",
            "Photography",
            "Programming",
            "Science & Math",
            "Security",
            "Shopping",
            "Social",
            "Sports & Fitness",
            "Test Data",
            "Text Analysis",
            "Tracking",
            "Transportation",
            "URL Shorteners",
            "Vehicle",
            "Video",
            "Weather"]
        })
    };

module.exports = { apiFindService, apiFindServiceById }