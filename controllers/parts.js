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
      title: 'Create a PC!',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req,res){
  req.body.owner = req.user.profile._id
  Part.create(req.body)
  .then(part => {
    res.redirect('/parts/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/parts')
  })
}

function newBuild(req,res){
  Part.find({})
  .then(parts => {
    res.render('parts/new', {
      parts,
      title: 'All the PCs',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export{
  index,
  create,
  newBuild as new
}