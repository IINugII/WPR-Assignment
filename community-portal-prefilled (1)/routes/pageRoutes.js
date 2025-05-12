// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const aboutData = require('../data/aboutData');
const eventsData = require('../data/eventsData');
const contactMessages = [];

router.get('/', (req, res) => {
     res.render('home', { upcomingEvents: eventsData.slice(0, 2) });
});

router.get('/about', (req, res) => {
    res.render('about', { team: aboutData });
});

router.get('/events', (req, res) => {
    res.render('events', { events: eventsData });
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  contactMessages.push({ name, email, message });
  res.redirect('/thank-you');
});
router.get('/thankyou', (req, res) => {
    res.render('thank-you');
});

module.exports = router;
