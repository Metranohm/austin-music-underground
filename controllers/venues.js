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
  .populate('reviews.author')
  .then(venue => {
    console.log('venue', venue);
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

function createReview(req, res) {
  req.body.author = req.user.profile
  Venue.findById(req.params.id)
  .then(venue => {
    venue.reviews.push(req.body)
    venue.save()
    .then(() => {
      res.redirect(`/venues/${venue._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  console.log(("!!!!!!!!!!!UPDATE REQUEST!!!!!!!!!"))
}

function deleteReview(req, res) {
  Venue.findById(req.params.venueId)
  .then(venue => {
    venue.reviews.remove({_id:req.params.reviewId})
    venue.save()
    .then(() => {
      res.redirect(`/venues/${venue._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export {
  index,
  newVenue as new,
  create, 
  show,
  deleteVenue as delete,
  edit, 
  update, 
  createReview,
  deleteReview 
}