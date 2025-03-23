const router = require('express').Router();
const Quotes = require('../models/Quote');


router.get('/allquotes', async (req, res) => {
    try {
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    } catch (err) {
        res.status(400).json({ msg: 'Something Went Wrong' });
    }
});

router.get('/quotes/:id', async (req, res) => { 
        let { id } = req.params;
        const quote = await Quotes.findById(id);
        res.status(200).json(quote);
});

// Add a new quote 
router.post('/addquotes', async (req, res) => {
        let { text, author } = req.body;
        await Quotes.create({ text, author });
        res.status(201).json({ msg: "New quote created successfully" });
});

module.exports = router;

























// const router = require('express').Router();
// const Quotes = require('../models/Quote');


// router.get('/allquotes',async (req,res)=>{
//     try{
//         let allQuotes = await Quotes.find({});    
//         res.status(200).json(allQuotes);
//     }
//     catch(err){
//         res.status(400).json({msg:'Something Went Wrong'})    
//     }
// })

// router.get('/quotes/:id',(req,res)=>{
//     let {id} = req.params;    
//     const quote = Quotes.findById(id);
//     res.status(200).json(quote);
// })



// router.post('/addquotes',async (req,res)=>{
//     let {text,author} = req.body;    
//     await Quotes.create({text,author});
//     res.status(201).json({msg:"new quote created successfully"})
// })



// module.exports = router;







