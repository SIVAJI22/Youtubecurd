const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://SIVAJI:Sivaji@cluster0.ft22bnk.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(error => console.error(error));


