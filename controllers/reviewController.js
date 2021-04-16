const Review = require('../models/reviewModel');
// const APIFeatures = require('../utils/apiFeatures.js');
// const catchAsync = require('../utils/catchAsync.js');
// const AppError = require('../utils/appError.js');
const factory = require('./handlerFactory');

exports.setTourUserIds = (req, _, next) => {
  // Allow Nested Routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.createReview = factory.createOne(Review);
exports.getReview = factory.getOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
