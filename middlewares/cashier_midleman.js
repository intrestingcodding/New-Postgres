const AddminCheck = async (req, res, next) => {
  if (req.query.username != "Mubashar") {
    res.send("Get Out ");
    return;
  }
  next();
};

module.exports = AddminCheck;
