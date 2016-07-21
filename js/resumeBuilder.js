/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Jeremy Zhang\n");

var awesomeThoughts = "I am Jingtian and I am AWESOME";

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//$("#main").append(funThoughts);

var name = "Jingtian Zhang";
var role = "Web developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
var skills = ["coding","cooking"];
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : name,
    "role" : role,
    "contact" : {
        "telephone" : 404,
        "location" : "Atlanta",
        "email" : "gatech.edu"
    },
    "picture url" : "www.google.com",
    "skills" : skills,
    "welcome message" : "hi there"
};

var work = {
    "jobs" : [
        {
            "position" : "web developer",
            "employer" : "sunny",
            "years" : 1,
            "description" : "First internship in IT company."
        },
        {
            "position" : "Research Assistant",
            "employer" : "University of Washington",
            "years" : 2,
            "description" : "My first paid job."
        },
        {
            "position" : "Graduate Assistant",
            "employer" : "Georgia Institute of Technology",
            "years" : 1,
            "description" : "Student assistant in the exchange program."
        }
    ]
};


$("#main").append(bio.name + "\n\n");
$("#main").append(work.posiition + "\n");
//$("#main").append(education.name);


//JSON
var education = {
    "schools" : [
        {
            "name" : "University of Washington",
            "degree" : "Bachelor's Degree",
            "major" : "Aeronautics and Astronautics",
            "location" : "Seattle",
            "dates" : 2014
        },
        {
            "name" : "Georgia Institute of Technology",
            "degree" : "Master's Degree",
            "major" : "Computational Science and Engineering",
            "location" : "Atlanta",
            "dates" : 2016
        }
    ],

    "online course" : [
        {
            "title" : "javaScript basics",
            "Institute" : "Udacity",
            "dates" : 2016
        },
        {
            "title" : "network for web development",
            "Institute" : "Udacity",
            "dates" : 2016
        }
    ]
};

var project = {
    "school" : [
        {
            "name" : "Hotel Database Development",
            "year" : 2015,
            "title" : "leader",
            "description" : "This is a database class designed for teaching students know about the principals of database and SQL strategies.",
            "class" : "CS4400"
        },
        {
            "name" : "Android Development for Movie Selector",
            "year" : 2016,
            "title" : "leader",
            "description" : "It is a very interesting Android development class for software engineering. I did some web development part for this project.",
            "class" : "CS2340"
        }
    ],
    "work" : [
        {
            "name" : "Web Development",
            "company" : "offercue",
            "date" : 2016
        }
    ]

};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
}

function displayWork(){

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", "Number of years experience " + work.jobs[job].years.toString());
        $(".work-entry:last").append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    //logClicks(x,y);
    //console.log(x,y);
});

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    //console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

projects.display = function(){
    for (proj in project.school) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.school[proj].name);
        var formattedDate = HTMLprojectDates.replace("%data%", project.school[proj].year);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.school[proj].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDate);
        $(".project-entry:last").append(formattedDescription);
    }
}

projects.display();

$("#mapDiv").append(googleMap);