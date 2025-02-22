const sessions = [
    {
        "id" : 0,
        "title": "TestTitle", 
        "image": "test.jpg", 
        "sessionDescription": "test test 123", 
        "sessionCampaign": "Eon Crusaders",
        "sessionMeeetingPlace": "test place", 
        "sessionCalendar": "2000/01/01"
    },
    {
        "id" : 1,
        "title": "Warning of the Dark", 
        "image": "eon_crusaders.png", 
        "sessionDescription": "Dont go in there seriously", 
        "sessionCampaign": "Eon Crusaders",
        "sessionMeeetingPlace": "test place", 
        "sessionCalendar": "2026/01/01"
    }
];

const participants = [
    {"name": "Mina", "imgsrc" : "test.jpg"},
    {"name": "Jonathan", "imgsrc" : "test.jpg"}
]
var counter;

const sessionTitleContainer = document.getElementById("session-name");
const sessionImageContainer = document.getElementById("session-image");
const sessionDescriptionContainer = document.getElementById("session-description");
const sessionMeeetingPlaceContainer = document.getElementById("session-meetingplace");
const sessionCalendarContainer = document.getElementById("session-date");

const sessionParticipantContainer = document.getElementById("session-participants");

function fillDetails(){
    counter = 0;
    const sessionData = sessions[0];

    sessionTitleContainer.textContent = sessionData.title;
    sessionImageContainer.setAttribute("src", "/img/" + sessionData.image);
    sessionDescriptionContainer.textContent = sessionData.sessionDescription;
    sessionMeeetingPlaceContainer.textContent = sessionData.sessionMeeetingPlace;
    sessionCalendarContainer.textContent = sessionData.sessionCalendar;
}



function addParticipant() {
    var currentCount = counter % participants.length;
    var participant = document.createElement("div");
    var participantImg = document.createElement("img");
    var participantName = document.createElement("span");

    participant.setAttribute("class", "participant");
    participantImg.setAttribute("src", "/img/" + participants[currentCount].imgsrc);
    participantImg.setAttribute("class", "small-image");
    participantName.textContent = participants[currentCount].name;

    participant.appendChild(participantImg);
    participant.appendChild(participantName);
    sessionParticipantContainer.appendChild(participant);
    ++counter ;
}
