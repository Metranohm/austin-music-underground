import { Venue } from '../models/venue.js'

function index(req, res) {
  Venue.find({})
  .then(venues => {
    res.render('venue/index', {
      venues,
      title: "Venue"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
	req.body.tasty = !!req.body.tasty
  Venue.create(req.body)
  .then(venue => {
    res.redirect('/venues')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/venues')
  })
}

export {
  index,
  create
}