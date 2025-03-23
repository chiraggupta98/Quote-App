const mongoose = require('mongoose');

const Quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author:'Samarth Vohra',
        text:'Syntax over Semantics'
    },
    {
        author:'Andrew Tate',
        text:'jai jawan jai kisan'
    },
    {
        author:'Arshad iqbal',
        text:'astaghfirallah'
    },
    {
        author:'stalin',
        text:'chat pe soya the behnoi'
    },
    {
        author:'thomas shelby',
        text:'jiski biwi choti uska bhi bada naam hai'
    }
]

async function seedDB(){
    await Quotes.deleteMany({});
    await Quotes.insertMany(dummyQuotes);
    console.log("DB seeded");
}

module.exports = seedDB;






















