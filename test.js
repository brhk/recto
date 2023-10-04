function erroBoundry (callback) {
  try {
    callback()
  }
  catch(e) {
    console.log("eeror found ", e)
  }
}

function consoleName () {
  const name = {
    firstName: "B",
    lastName: "n"
  }

  console.log(name)
  console.log(name.firstname.n)
}

erroBoundry(consoleName)