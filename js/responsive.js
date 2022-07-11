

const responsiveCards = () => {

    const cardsComments = document.querySelectorAll(".dashboard__cards--comment");
    const cardsReplyes = document.querySelector(".dashboard__cards--repliesContainer");

    const counter = document.querySelector(".dashboard__cards--counter");
    
   
    
    cardsComments.forEach(cardComment => {
        const responsiveDiv = document.createElement("div");
        responsiveDiv.classList.add("dashboard__cards--responsiveDiv");
        console.log(cardComment);
        cardComment.appendChild(responsiveDiv);
    });

}

responsiveCards();