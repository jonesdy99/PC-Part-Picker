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

function show(req,res){
  Part.findById(req.params.id)
  .populate('owner')
  .then(part => {
    res.render('parts/show', {
      part,
      title: 'Detailed PC info'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/parts')
  })
}

function edit(req,res){
  Part.findById(req.params.id)
  .then(part => {
    res.render('parts/edit', {
      part,
      title: 'Edit this PC'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/parts')
  })
}

function update(req,res){
  Part.findById(req.params.id)
  .then(part => {
    if (part.owner.equals(req.user.profile._id)) {
      part.updateOne(req.body, {new: true})
      .then(updatedPart => {
        res.redirect(`/parts/${part._id}`)
      })
    } else {
      throw new Error ('Not Authorized to change this PC')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/parts')
  })
}

function deletePc(req,res){
  Part.findById(req.params.id)
  .then(part => {
    if(part.owner.equals(req.user.profile._id)){
      part.delete()
      .then(() => {
        res.redirect('/parts/new')
      })
    } else {
      throw new Error ('Not Authorized to delete this PC')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/parts')
  })
}

function deleteReview(req,res){
  Part.findById(req.params.partId)
  .then(part => {
    const review = part.reviews.id(req.params.reviewId)
    if(review.owner.equals(req.user.profile._id)){
      part.reviews.remove({_id:req.params.reviewId})
      part.save()
      .then(() => {
        res.redirect(`/parts/${part._id}`)
      })
    } else {
      throw new Error ('Not Authorized to delete this Review')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/parts')
  })
}

function createReview(req,res){
  Part.findById(req.params.id)
  .then(part =>{
    req.body.owner=req.user.profile
    part.reviews.push(req.body)
    part.save()
    .then(() => {
      res.redirect(`/parts/${part._id}`)
    })
  })
}




export{
  index,
  create,
  newBuild as new,
  show,
  edit,
  update,
  deletePc as delete,
  createReview,
  deleteReview
}