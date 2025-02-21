const campaigns = [
    {"id": 1, "title": "Eon Crusaders", "image": "/img/eon_crusaders.png", "sessions": [1,3,5] },
    {"id": 2, "title": "Candlekeepers", "image": "/img/main_icon.png", "sessions": [2,4] }
]


function fillCards(){
    const campaignCards = document.getElementById("campaign-cards");

    for (const campaign of campaigns) {
        createCards(campaignCards, campaign);
    }
    /*campaignCards.childNodes.forEach(card => {
        if (card.nodeName === "A") {
            createCards(card);
        }
        
    });*/
    
}

function createCards(cardContainer, cardContent) {
    console.log(cardContent.image);
    const card = document.createElement("a");
    const cardImg = document.createElement("img");
    const cardName = document.createElement("p");
    cardImg.setAttribute("src", cardContent.image);

    const cardContentTitle = cardContent.title.toLowerCase().replace(/\s+/g, '');
    const cardContentPath = "../../html/auth/session/sessionDetail/" + cardContentTitle + ".html";

    card.setAttribute("href", cardContentPath);
    cardName.textContent = cardContent.title;
    card.appendChild(cardImg);
    card.appendChild(cardName);
    cardContainer.appendChild(card);
   /*<a href="../html/session/sessionDetail.html">
                        <img src="../img/main_icon.png">
                        <p>The Wild Forest</p>
                    </a>*/
}

