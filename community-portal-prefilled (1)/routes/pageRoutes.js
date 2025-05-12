// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const aboutData = require('../data/aboutData');
const eventsData = require('../data/eventsData');
const contactMessages = [];

router.get('/', (req, res) => {
     res.render('pages/home', { upcomingEvents: eventsData.slice(0, 2) });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { team: aboutData });
});

router.get('/events', (req, res) => {
    res.render('pages/events', { events: eventsData });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  contactMessages.push({ name, email, message });
  res.redirect('pages/thank-you');
});
router.get('/thankyou', (req, res) => {
    res.render('pages/thank-you');
});

module.exports = router;
