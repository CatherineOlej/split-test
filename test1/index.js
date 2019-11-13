
Survey
.StylesManager
.applyTheme("default");

var json = {
title: "Software developer survey.",
pages: [
    {
        title: "What operating system do you use?",
        questions: [
            {
                type: "checkbox",
                name: "opSystem",
                title: "OS",
                hasOther: true,
                isRequired: true,
                choices: ["Windows", "Linux", "Macintosh OSX"]
            }
        ]
    }, {
        title: "What language(s) are you currently using?",
        questions: [
            {
                type: "checkbox",
                name: "langs",
                title: "Please select from the list",
                colCount: 4,
                isRequired: true,
                choices: [
                    "Javascript",
                    "Java",
                    "Python",
                    "CSS",
                    "PHP",
                    "Ruby",
                    "C++",
                    "C",
                    "Shell",
                    "C#",
                    "Objective-C",
                    "R",
                    "VimL",
                    "Go",
                    "Perl",
                    "CoffeeScript",
                    "TeX",
                    "Swift",
                    "Scala",
                    "Emacs Lisp",
                    "Haskell",
                    "Lua",
                    "Clojure",
                    "Matlab",
                    "Arduino",
                    "Makefile",
                    "Groovy",
                    "Puppet",
                    "Rust",
                    "PowerShell"
                ]
            }
        ]
    },
    {
        title: "How long have you been programming for?",
        questions: [
            {
                type: "checkbox",
                name: "years",
                title: "Please select from the list",
                isRequired: true,
                choices: [
                    "Less than 6 months",
                    "1 year to less than 3 years",
                    "3 years to less than 5 years",
                    "5 years or more"
                ]
            }
        ]
    },
    {
        title: "Are you a student?",
        questions: [
            {
                type: "checkbox",
                name: "student",
                title: "Please select from the list",
                isRequired: true,
                hasOther: true,
                choices: [ "Yes", "No"]
            }
        ]
    },
    {
        title: "How much time do you spend on a computer each day?",
        questions: [
            {
                type: "checkbox",
                name: "time",
                title: "Please select from the list",
                isRequired: true,
                hasOther: true,
                choices: [
                    "Less than 3 hours",
                    "3 hours to less than 6 hours",
                    "All day"
                ]
            }
        ]
    },
    {
        title: "How often do you take breaks from the computer",
        questions: [
            {
                type: "checkbox",
                name: "breaks",
                title: "Please select from the list",
                isRequired: true,
                hasOther: true,
                choices: [
                    "Often",
                    "Every 2 hours",
                    "I don't. I just work until I'm done my assignment"
                ]
            }
        ]
    },
    {
        title: "What do you like to do outside of work?",
        questions: [
            {
                type: "text",
                name: "Answer",
                title: "Please put your answer in the space provided:"
            }
        ]
    },
    {
        title: "What programming software do you work with?",
        questions: [
            {
                type: "checkbox",
                name: "software",
                title: "Please select from the list",
                isRequired: true,
                hasOther: true,
                choices: [
                    "Visual Studio",
                    "Visual Studio Code",
                    "Notpad++",
                    "Android Studio"
                ]
            }
        ]
    },
    {
        title: "What time do you typically wake up in the morning?",
        questions: [
            {
                type: "checkbox",
                name: "wakeup",
                title: "Please select from the list",
                isRequired: true,
                hasOther: true,
                choices: [
                    "6 AM",
                    "7 AM",
                    "Sometime before 10 AM",
                    "When I feel like it"
                ]
            }
        ]
    }, {
        title: "Please enter your name and e-mail",
        questions: [
            {
                type: "text",
                name: "name",
                title: "Name:"
            }, {
                type: "text",
                name: "email",
                title: "Your e-mail"
            }
        ]
    }
]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "indexthanks.html";
    });

survey.showProgressBar = 'bottom';

$("#surveyElement").Survey({model: survey});


