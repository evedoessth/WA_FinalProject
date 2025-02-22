
const campaigns = [
    {
        "id": 1,
         "title": "Eon Crusaders", 
         "image": "eon_crusaders.png", 
         "sessions": [0], 
         "campaignDescription" : "ALorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
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



function fillCards(){
    const campaignCards = document.getElementById("campaign-cards");
    const pastsessionCards = document.getElementById("past-session-cards");
    const nextsessionCards = document.getElementById("next-session-cards");
    const campaignPath = "campaign/campaignDetail.html";
    const sessionPath = "session/sessionDetail.html";

    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    for (const campaign of campaigns) {
        createCards(campaignCards, campaign, campaignPath);
    }

    for (const session of sessions) {
        if(session.sessionCalendar < utc) {
            createCards(pastsessionCards, session, sessionPath);
        }
        else {
            createCards(nextsessionCards, session, sessionPath);
        }
    }
    
}


function createCards(cardContainer, cardContent, path) {
    const card = document.createElement("a");
    const cardImg = document.createElement("img");
    const cardName = document.createElement("p");
    cardImg.setAttribute("src", "/img/" + cardContent.image);

    const cardContentTitle = cardContent.title.toLowerCase().replace(/\s+/g, '');
    //const cardContentPath = "../../html/auth/session/sessionDetail/" + cardContentTitle + ".html";
    const cardContentPath = "../../html/auth/" + path;

    card.setAttribute("href", cardContentPath);
    cardName.textContent = cardContent.title;
    card.appendChild(cardImg);
    card.appendChild(cardName);
    cardContainer.appendChild(card);
}

function createSessionCard(sessionNumber) {
    const sessionData = session[sessionNumber];
    var campSessionCard = document.createElement("a");
    var campSessionImg = document.createElement("img");
    var campSessionName = document.createElement("p");
    
    campSessionCard.setAttribute("href", "/html/auth/session/sessionDetail.html");
    campSessionImg.setAttribute("src", "/img/" + sessionData.sessionImage);
    campSessionName.textContent = sessionData.sessionTitle;

    campSessionCard.appendChild(campSessionImg);
    campSessionCard.appendChild(campSessionName);
    campaignSessionContainer.appendChild(campSessionCard);
}
