// Data/eventsData.js
module.exports = [
  {
    title: 'Community Cleanup',
    date: '2025-05-15',
    location: 'Central Park',
    image: '/images/cleanup.jpg',
    description: 'Join us for our annual community cleanup day!',
    organizer: 'Green Team Committee',
    capacity: 100,
    registered: 45
  },
  {
    title: '24-Hour Hackathon',
    date: '2025-06-07',
    location: 'Tech Innovation Hub',
    image: '/images/hackathon.jpg',
    description: 'Code, create, and compete in our premier coding marathon!',
    organizer: 'Computer Science Department',
    capacity: 200,
    registered: 187
  },
  {
    title: 'Career Fair 2025',
    date: '2025-07-22',
    location: 'Main Convention Hall',
    image: '/images/career-fair.jpg',
    description: 'Connect with top employers and kickstart your career',
    organizer: 'Career Services',
    capacity: 500,
    registered: 423
  },
  {
    title: 'International Food Festival',
    date: '2025-08-12',
    location: 'Quadrangle Lawn',
    image: '/images/food-festival.jpg',
    description: 'Taste global cuisines prepared by our diverse student body',
    organizer: 'Cultural Affairs Office',
    capacity: 300,
    registered: 298
  },
  {
    title: 'Robotics Workshop',
    date: '2025-09-05',
    location: 'Engineering Building Lab 3',
    image: '/images/robotics.jpg',
    description: 'Hands-on session with cutting-edge robotics technology',
    organizer: 'Engineering Faculty',
    capacity: 30,
    registered: 28
  },
  {
    title: 'Alumni Networking Night',
    date: '2025-10-18',
    location: 'Historic Alumni Hall',
    image: '/images/alumni.jpg',
    description: 'Connect with successful graduates across industries',
    organizer: 'Alumni Association',
    capacity: 150,
    registered: 132
  },
  {
    title: 'Winter Science Symposium',
    date: '2025-11-21',
    location: 'Science Auditorium',
    image: '/images/science.jpg',
    description: 'Showcase of groundbreaking student research projects',
    organizer: 'Faculty of Sciences',
    capacity: 120,
    registered: 89
  },
  {
    title: 'Startup Pitch Competition',
    date: '2025-12-05',
    location: 'Entrepreneurship Center',
    image: '/images/startup.jpg',
    description: 'Student entrepreneurs pitch for seed funding',
    organizer: 'Innovation Incubator',
    capacity: 80,
    registered: 65
  },
  {
    title: 'Charity Fun Run',
    date: '2026-01-15',
    location: 'Campus Perimeter Trail',
    image: '/images/fun-run.jpg',
    description: '5K run supporting local education initiatives',
    organizer: 'Athletics Department',
    capacity: 250,
    registered: 207
  }
].sort((a, b) => new Date(a.date) - new Date(b.date));;

