// script.js
function displayCurrentDate() {
    const dateElement = document.querySelector("#current-date");
    const currentDate = new Date();
    dateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;
}

window.addEventListener("load", displayCurrentDate);
// Get the current date

// Define event data (dates with events)

// Define event data (dates with events)
const eventsData = [
    '2023-10-07',
    '2023-10-15',
    '2023-10-25',
    '2023-11-11',
    '2023-11-12',
    '2023-11-15',
    '2023-12-13',
    '2023-12-25',
    '2024-1-8',
    '2024-1-23',

];

// Get the current date
const currentDate = new Date();

// Display the calendar
const calendarBody = document.getElementById('calendar-body');
const currentMonthDisplay = document.getElementById('current-month');

function showCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Clear the calendar
    calendarBody.innerHTML = '';
    
    // Set the current month and year
    currentMonthDisplay.textContent = `${getMonthName(month)} ${year}`;

    // Create rows and cells for each day in the month
    let date = new Date(firstDay);
    while (date <= lastDay) {
        const row = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const cell = document.createElement('td');
            if (date.getMonth() === month) {
                cell.textContent = date.getDate();

                // Check if the date has an event
                if (eventsData.includes(formatDate(date))) {
                    cell.classList.add('event');
                }
            }
            row.appendChild(cell);
            date.setDate(date.getDate() + 1);
        }
        calendarBody.appendChild(row);
    }
}

// Helper function to get the name of the month
function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

// Helper function to format a date as 'YYYY-MM-DD'
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Show the initial calendar
showCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Add event listeners for navigating to the previous and next months
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    showCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    showCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

