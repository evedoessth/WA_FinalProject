// Making a GET request to the '/products/123' endpoint

  function createNewSession(event) { 
        window.open("sessionDetail.html");
        var formData = new FormData(form);
        console.log(Object.fromEntries(formData));
    fetch('/html/auth/sessionDetail/', {
      method: 'POST',
      body: JSON.stringify({
        id: 1,
        sessionTitle: formData["session-name"],
        sessionImage: formData["session-image"],
        sessionDescription: formData["session-description"],
        sessionCampaign: formData["session-campaign"],
        sessionMeeetingPlace: formData["session-meetingplace"],
        sessionCalendar: formData["session-calendar"]
    }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
      // Handling the response by converting it to JSON
      .then(response => response.json())
      // Handling the data obtained from the response
      .then(data => {
        console.log(data);
      });
    event.preventDefault();
  }

  
  const form = document.getElementById("session-creation-form");
  form.addEventListener("submit", createNewSession);
  