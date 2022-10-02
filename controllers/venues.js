import { Venue } from '../models/venue.js'

function index(req, res) {
  Venue.find({})
  .then(venues => {
    res.render('venues/index', {
      venues,
      title: "Venues"
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
    res.redirect('/new')
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
}

export {
  index,
  newVenue as new,
  create
}