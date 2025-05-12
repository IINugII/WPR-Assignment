let submissions = [];

module.exports = {
  addSubmission: (data) => {
    const newSubmission = {
      ...data,
      id: submissions.length + 1
    };
    submissions.push(newSubmission);
    return newSubmission;
  },
  getSubmissions: () => [...submissions],
  clearSubmissions: () => submissions = []
};