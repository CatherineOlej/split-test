
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Software developer survey.",
    pages: [{
        questions: [
            {
                type: "checkbox",
                name: "opSystem",
                title: "What operating system do you use?",
                hasOther: true,
                isRequired: true,
                choices: ["Windows", "Linux", "Macintosh OSX"]
            },
            {
                type: "checkbox",
                name: "langs",
                title: "What language(s) are you currently using?",
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
            },
            {
                type: "checkbox",
                name: "years",
                title: "How long have you been programming for?",
                isRequired: true,
                choices: [
                    "Less than 6 months",
                    "1 year to less than 3 years",
                    "3 years to less than 5 years",
                    "5 years or more"
                ]
            },
            {
                type: "checkbox",
                name: "student",
                title: "Are you a student?",
                isRequired: true,
                hasOther: true,
                choices: [ "Yes", "No"]
            },
            {
                type: "checkbox",
                name: "time",
                title: "How much time do you spend on a computer each day?",
                isRequired: true,
                hasOther: true,
                choices: [
                    "Less than 3 hours",
                    "3 hours to less than 6 hours",
                    "All day"
                ]
            },
            {
                type: "checkbox",
                name: "breaks",
                title: "How often do you take breaks from the computer",
                isRequired: true,
                hasOther: true,
                choices: [
                    "Often",
                    "Every 2 hours",
                    "I don't. I just work until I'm done my assignment"
                ]
            },
            {
                type: "text",
                name: "Answer",
                title: "What do you like to do outside of work?"
            },
            {
                type: "checkbox",
                name: "software",
                title: "What programming software do you work with?",
                isRequired: true,
                hasOther: true,
                choices: [
                    "Visual Studio",
                    "Visual Studio Code",
                    "Notpad++",
                    "Android Studio"
                ]
            },
            {
                type: "checkbox",
                name: "wakeup",
                title: "What time do you typically wake up in the morning?",
                isRequired: true,
                hasOther: true,
                choices: [
                    "6 AM",
                    "7 AM",
                    "Sometime before 10 AM",
                    "When I feel like it"
                ]
            },
            {
                type: "text",
                name: "name",
                title: "Name:",
                type: "text",
                name: "email",
                title: "Your e-mail"
            }
        ]
    }],
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });