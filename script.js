// script.js

// Function to get the current date and time in UTC
function getCurrentDateTimeUTC() {
    const now = new Date();
    return now.toISOString().slice(0, 19).replace('T', ' ');
}

// Display the current date and time in UTC
console.log('Current Date and Time (UTC):', getCurrentDateTimeUTC());