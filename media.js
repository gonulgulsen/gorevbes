document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const socialMedia = card.id;
        const followerCount = card.querySelector("span").textContent;
        alert(`You clicked on ${socialMedia} with ${followerCount} followers.`);
      });
    });
  });
  