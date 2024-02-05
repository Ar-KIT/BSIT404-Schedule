document.addEventListener("DOMContentLoaded", function() {

    //DAY SELECTOR
    let select = document.querySelector(".dropdown-listOfSections .select");
    let menu = document.getElementById("menu");
    let caret = document.querySelector(".caret");
    let selected = document.querySelector(".dropdown-listOfSections .selected");
    let daysOfWeek = ["Entire Week", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get current date and day of the week
    let currentDate = new Date();
    let currentDay = daysOfWeek[currentDate.getDay()];

    // Set initial selected day
    selected.innerText = currentDay;

    // Toggle dropdown visibility
    select.addEventListener("click", function() {
        menu.classList.toggle("menu-open");
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
    });

    // Handle item selection
    menu.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            selected.innerText = e.target.innerText;
            menu.classList.remove("menu-open");
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
        }
    });

    updateTable();
});

// UPDATE SCHEDULE
function updateTable() {
    var selectedDay = document.querySelector('.selected').textContent;
    var tbody = document.getElementById('scheduleBody');
    tbody.innerHTML = ''; // Clear previous rows
    
    if (selectedDay === 'Entire Week') {
        // If "Entire Week" is selected, display schedules for all days
        Object.values(mySched).forEach(function(daySchedules) {
            daySchedules.forEach(function(schedule) {
                addRow(schedule);
            });
        });
    } else {
        // Check if there are no schedules for the selected day
        var schedules = mySched[selectedDay];
        if (!schedules || schedules.length === 0) {
            addRow({subject: "WALANG KLASE" });
        } else {
            // Otherwise, display schedules for the selected day
            schedules.forEach(function(schedule) {
                addRow(schedule);
            });
        }
    }
}

// Function to add a row to the table
function addRow(schedule) {
    var tbody = document.getElementById('scheduleBody');
    var row = tbody.insertRow();
    
    // Insert cells with data
    var subjectCell = row.insertCell(0);
    subjectCell.textContent = schedule.subject;
    
    var dayCell = row.insertCell(1);
    dayCell.textContent = schedule.day;
    
    var timeCell = row.insertCell(2);
    timeCell.textContent = schedule.time;
    
    var roomCell = row.insertCell(3);
    roomCell.textContent = schedule.room;
    
    var instructorCell = row.insertCell(4);
    instructorCell.textContent = schedule.instructor;
}

// SELECTED ITEM
let dropdownItems = document.querySelectorAll('.menu li');
dropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.selected').textContent = item.textContent;
        updateTable();
    });
});

// SCHEDULE
let mySched = {
    Monday: [
        {
            subject: "Information Management",
            day: "M",
            time: "1:00PM - 3:00PM",
            room: "RM606",
            instructor: "Sir Lord"
        },
        {
            subject: "Integrative Programming",
            day: "M",
            time: "3:30PM - 5:30PM",
            room: "Rm508",
            instructor: "Sir Joel"
        },
        {
            subject: "PE/PATHFIT 4",
            day: "M",
            time: "5:30PM - 7:30PM",
            room: "PE Hall",
            instructor: "Ma'am Ray"
        }
    ],
    Tuesday: [
        {
            subject: "System Integration and Architecture",
            day: "T",
            time: "1:30PM - 3:30PM",
            room: "RM616",
            instructor: "Sir Joel"
        },
        {
            subject: "Integrative Programming",
            day: "T",
            time: "4:00PM - 7:00PM",
            room: "COMLAB603",
            instructor: "Sir Joel"
        }
    ],
    Wednesday: [
        {
            subject: "System Integration and Architecture",
            day: "W",
            time: "1:30PM - 4:00PM",
            room: "COMLAB602",
            instructor: "Sir Joel"
        },
        {
            subject: "Technopreneurship",
            day: "W",
            time: "4:00PM - 7:00PM",
            room: "RM805",
            instructor: "N/A"
        }
    ],
    Thursday: [

    ],
    Friday:[
        {
            subject: "Quantitative Methods",
            day: "F",
            time: "12:00PM - 3:00PM",
            room: "RM803",
            instructor: "Ma'am Cath"
        },
        {
            subject: "Integrative Programming",
            day: "F",
            time: "4:00PM - 7:00PM",
            room: "COMLAB604",
            instructor: "Sir Joel"
        }
    ],
    Saturday: [
        {
            subject: "Philippine Popular Culture",
            day: "S",
            time: "10:00AM - 1:00PM",
            room: "RM504",
            instructor: "Sir Ronel"
        },
        {
            subject: "Network Technology 1",
            day: "S",
            time: "1:30PM - 3:30PM",
            room: "Rm506",
            instructor: "Asnairah"
        },
        {
            subject: "Network Technology 1",
            day: "S",
            time: "4:00PM - 7:00PM",
            room: "COMLAB602",
            instructor: "Asnairah"
        }
    ]
}