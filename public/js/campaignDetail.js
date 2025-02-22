const campaigns = [
    {
        "id": 1,
         "title": "Eon Crusaders", 
         "image": "eon_crusaders.png", 
         "sessions": [0,1], 
         "campaignDescription" : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
         "participants" : [0,1]
    },
    {
        "id": 2,
        "title": "Candlekeepers", 
        "image": "main_icon.png", 
        "sessions": [],
        "campaignDescription" : "ALorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
        "participants" : [0] 
        }
]


const participants = [
    {"name": "Mina", "imgsrc" : "test.jpg"},
    {"name": "Jonathan", "imgsrc" : "test.jpg"}
];

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

var counter;

const campaignTitleContainer = document.getElementById("campaign-name");
const campaignImageContainer = document.getElementById("campaign-image");
const campaignDescriptionContainer = document.getElementById("campaign-description");

const campaignParticipantContainer = document.getElementById("campaign-participants");
const campaignSessionContainer = document.getElementById("campaign-sessions");

function fillDetails(){
    counter = 0;
    const campaignData = campaigns[0];

    campaignTitleContainer.textContent = campaignData.title;
    campaignImageContainer.setAttribute("src", "/img/" + campaignData.image);
    campaignDescriptionContainer.textContent = campaignData.campaignDescription;

    fillSessions();
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
    campaignParticipantContainer.appendChild(participant);
    ++counter ;
}

function fillSessions() {
    for (const session of campaigns[0].sessions) {
        createSessionCard(session);
    }
}

function createSessionCard(sessionNumber) {
    const sessionData = sessions[sessionNumber];
    var campSessionCard = document.createElement("a");
    var campSessionImg = document.createElement("img");
    var campSessionName = document.createElement("p");
    
    campSessionCard.setAttribute("href", "/html/auth/session/sessionDetail.html");
    campSessionImg.setAttribute("src", "/img/" + sessionData.image);
    campSessionName.textContent = sessionData.title;

    campSessionCard.appendChild(campSessionImg);
    campSessionCard.appendChild(campSessionName);
    campaignSessionContainer.appendChild(campSessionCard);
}