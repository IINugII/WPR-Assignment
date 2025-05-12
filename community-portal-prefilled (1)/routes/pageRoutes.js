// routes/pageRoutes.js
const express = require('express');
const router = express.Router();
const { addSubmission } = require('../Data/contactSubmissions');
const aboutData = require('../Data/aboutData');
const eventsData = require('../Data/eventsData');

// Utility functions
const getCurrentYear = () => new Date().getFullYear();
const filterUpcomingEvents = (events, count = 5) => {
  const now = new Date();
  return events
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, count);
};

// Common page data setup
const getPageData = (pageTitle, additionalData = {}) => ({
  pageTitle,
  currentYear: getCurrentYear(),
  ...additionalData
});

// Home Route
router.get('/', (req, res) => {
  try {
    const upcomingEvents = filterUpcomingEvents(eventsData);
    
    res.render('pages/home', getPageData('Community Portal Home', {
      upcomingEvents,
      featuredEvent: upcomingEvents[0]
    }));
  } catch (error) {
    console.error('Home route error:', error);
    res.status(500).render('pages/500', getPageData('Server Error'));
  }
});

// Events Route
router.get('/events', (req, res) => {
  try {
    res.render('pages/events', getPageData('Upcoming Events', {
      events: eventsData
    }));
  } catch (error) {
    console.error('Events route error:', error);
    res.status(500).render('pages/500', getPageData('Server Error'));
  }
});

router.post('/events', (req, res) => {
  try {
    const newEvent = {
      title: req.body.title.trim(),
      date: req.body.date,
      description: req.body.description.trim(),
      location: req.body.location.trim(),
      organizer: req.body.organizer.trim(),
      image: '/images/event-default.jpg', // Default image
      capacity: 50, // Default capacity
      registered: 0
    };

    if (!newEvent.title || !newEvent.date || !newEvent.description || !newEvent.location) {
      return res.status(400).redirect('/events?error=Missing+required+fields');
    }
    if (new Date(newEvent.date) < Date.now()) {
      return res.redirect('/events?error=Event+date+must+be+in+future');
    }
    eventsData.push(newEvent);
    res.redirect('/events');
  } catch (error) {
    console.error('Event creation error:', error);
    res.status(500).redirect('/events?error=Server+error');
  }
});

// About Route
router.get('/about', (req, res) => {
  try {
    if (!Array.isArray(aboutData)) {
      throw new Error('Invalid team data format');
    }
    
    res.render('pages/about', getPageData('About Our Team', {
      teamMembers: aboutData
    }));
  } catch (error) {
    console.error('About route error:', error);
    res.status(500).render('pages/500', getPageData('Server Error'));
  }
});

// Contact Routes
router.get('/contact', (req, res) => {
  res.render('pages/contact', getPageData('Contact Us'));
});

router.post('/contact', (req, res) => {
  try {
    const { name, email, message, subscribe } = req.body;
    
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).render('pages/contact', getPageData('Contact Us', {
        error: 'All required fields must be filled out',
        formData: req.body
      }));
    }

    const submission = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      subscribe: !!subscribe,
      timestamp: new Date()
    };

    addSubmission(submission);
    res.redirect(`/thankyou?name=${encodeURIComponent(submission.name)}`);
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).render('pages/500', getPageData('Server Error'));
  }
});

// Thank You Route
router.get('/thankyou', (req, res) => {
  try {
    const name = req.query.name || 'there';
    res.render('pages/thankyou', getPageData('Thank You', { name }));
  } catch (error) {
    console.error('Thank You route error:', error);
    res.status(500).render('pages/500', getPageData('Server Error'));
  }
});

// Catch-all route for undefined paths within pageRoutes
router.use((req, res, next) => {
  res.status(404).render('pages/404', {
    pageTitle: 'Page Not Found',
    currentYear: new Date().getFullYear(),
  });
});

module.exports = router;