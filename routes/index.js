var express = require('express');
var router = express.Router();
var dummyData = require('../data/dummy')
var address = 'http://59.3.14.15:8011'

router.get('/cityInfo', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", address); // 특정 도메인 허용

  if ( dummyData['cityInfo'] === null ) {
    res.status(500).end()
  } else {
    res.status(200).send(dummyData['cityInfo'])
  }
});

router.get('/banner', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", address); // 특정 도메인 허용

  if ( dummyData['banner'] === null ) {
    res.status(500).end()
  } else {
    res.status(200).send(dummyData['banner'])
  }
});

router.get('/category/:category', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", address); // 특정 도메인 허용

  var pathParams = req.params
  var categoryName = pathParams.category
  var resultData = dummyData.productData.filter(c => c.category === categoryName)
  if ( resultData === null ) {
    res.status(500).end()
  } else {
    res.status(200).send(resultData)
  }
});

router.get('/cityName/:cityName', function(req, res, next) {

  res.header("Access-Control-Allow-Origin", address); // 특정 도메인 허용

  var pathParams = req.params
  var cityName = pathParams.cityName
  var resultData = dummyData.productData.filter(c => c.cityName === cityName)
  if ( resultData === null ) {
    res.status(500).end()
  } else {
    res.status(200).send(resultData)
  }
});

module.exports = router;
