const mongoose = require('mongoose')
const imageschema= mongoose.Schema(
   { images:String,
},
    {
        collection:"Images",
    }
)
const images= mongoose.model('Images',imageschema);
module.exports=images