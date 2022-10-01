function createFact(req, res) {
  // find the profile 
  Profile.findById(req.user.studentProfile._id)
  .then(profile => {
    // push the req.body form data into the facts array
    profile.facts.push(req.body)
    profile.save()
    .then(() => {
      res.redirect('/profiles')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}