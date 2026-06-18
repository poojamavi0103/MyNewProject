const express = require("express");

require("./database");

const app = express();

app.listen(3000, () => {
    console.log("Server Running");
});
const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Server Port
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// ===============================
// HOSPITAL MANAGEMENT SYSTEM JS
// ===============================

// Dashboard Data
let totalPatients = 250;
let totalDoctors = 45;
let totalAppointments = 120;
let availableBeds = 80;

// ===============================
// BUTTON FUNCTIONS
// ===============================

// Open Dashboard Button
function showDashboard() {
  document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
  });
}

// ===============================
// NAVBAR LINKS
// ===============================

// Home Link
function openHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Dashboard Link
function openDashboard() {
  document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
  });
}

// Doctors Link
function openDoctors() {
  alert("Doctors Page Opened");
}

// Patients Link
function openPatients() {
  alert("Patients Page Opened");
}

// Contact Link
function openContact() {
  alert("Contact Page Opened");
}

// ===============================
// DASHBOARD FUNCTIONS
// ===============================

// Add New Patient
function addPatient() {

  totalPatients++;

  document.getElementById("patientsCount").innerText =
    totalPatients;

  alert("New Patient Added Successfully");
}

// Add Appointment
function addAppointment() {

  totalAppointments++;

  document.getElementById("appointmentsCount").innerText =
    totalAppointments;

  alert("Appointment Added");
}

// Add Doctor
function addDoctor() {

  totalDoctors++;

  document.getElementById("doctorsCount").innerText =
    totalDoctors;

  alert("New Doctor Added");
}

// Book Bed
function bookBed() {

  if (availableBeds > 0) {

    availableBeds--;

    document.getElementById("bedsCount").innerText =
      availableBeds;

    alert("Bed Booked Successfully");

  } else {

    alert("No Beds Available");
  }
}

// ===============================
// SEARCH PATIENT
// ===============================

function searchPatient() {

  let patientName =
    document.getElementById("searchInput").value;

  if (patientName === "") {

    alert("Please Enter Patient Name");

  } else {

    alert("Searching for: " + patientName);
  }
}

// ===============================
// LOGIN SYSTEM
// ===============================

function loginSystem() {

  let username =
    document.getElementById("username").value;

  let password =
    document.getElementById("password").value;

  if (username === "admin" &&
      password === "admin123") {

    alert("Login Successful");

  } else {

    alert("Invalid Username or Password");
  }
}

// ===============================
// LOGOUT SYSTEM
// ===============================

function logoutSystem() {

  alert("Logged Out Successfully");

  window.location.reload();
}

// ===============================
// LIVE DATE & TIME
// ===============================

function updateTime() {

  let now = new Date();

  document.getElementById("time").innerText =
    now.toLocaleString();
}

// Update Time Every Second
setInterval(updateTime, 1000);

// ===============================
// DARK MODE
// ===============================

function darkMode() {

  document.body.classList.toggle("dark-mode");
}

// ===============================
// NOTIFICATION SYSTEM
// ===============================

function showNotification(message) {

  alert(message);
}

// ===============================
// AUTO WELCOME MESSAGE
// ===============================

window.onload = function () {

  showNotification(
    "Welcome to Hospital Management System"
  );

  updateTime();
};