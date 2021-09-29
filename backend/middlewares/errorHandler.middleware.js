const errorHandler = (err, req, res, next) => {
  if (err) {
    return res.status('500').json({ message: 'Oops, something went wrong' });
  }
  next();
};

module.exports = errorHandler;
