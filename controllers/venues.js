import { Venue } from '../models/venue.js'

function index(req, res) {
  Venue.find({})
  .then(venues => {
    res.render('venues/index', {
      venues,
      title: "All Venues"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
	console.log(req.body)
  Venue.create(req.body)
  .then(venue => {
    res.redirect('/venues')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function newVenue(req, res) {
  res.render("venues/new", {
    title: "Add Venue"
  })
  .catch(err => {
    console.log(err)
    res.redirect('/venues')
  })
}

function show(req, res) {
  Venue.findById(req.params.id)
  .then(venue => {
    console.log('venue');
    res.render('venues/show', {
      venue,
      title: "show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/venues')
  })
}

function deleteVenue(req, res) {
  Venue.findByIdAndDelete(req.params.id)
  .then(venue => {
    res.redirect("/venues")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function edit(req, res) {
  console.log("!!!UPDATING UPDATING!!!!!")
  Venue.findById(req.params.id)
  .then(venue => {
    res.render("venues/edit", {
      venue, 
      title: "Edit Venue"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  console.log(("!!!!!!!!!!!UPDATE REQUEST!!!!!!!!!"))
}

export {
  index,
  newVenue as new,
  create, 
  show,
  deleteVenue as delete,
  edit, 
  update
}