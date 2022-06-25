import { Part } from "../models/part.js";

// function index(req,res){
//   res.render('parts/new', {
//     title: 'Add a new PC!'
//   })
// }

function index(req,res){
  Part.find({})
  .then(parts => {
    res.render('parts/index', {
      parts,
      title: 'Add a PC!'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export{
  index
}