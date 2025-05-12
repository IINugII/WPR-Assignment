// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

app.locals.formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);

app.post("/contact", (req, res) => {
  const { name } = req.body; // Extract the name from the form submission
  res.render("pages/thankyou", { name }); // Pass the name to the thankyou.ejs template
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render("pages/404"); // Render the custom 404 page
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
