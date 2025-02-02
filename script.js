
        const games = [
            { title: "GorillaFight", release: "[ComingSoon]", image: "gorillafight.png" },
            { title: "StickHero", release: "[ComingSoon]", image: "stickhero.png" },
            { title: "RoadCross", release: "[ComingSoon]", image: "roadcross.png" }
        ];

        const gamesList = document.getElementById("games-list");
        
        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}" width="100%" style="border-radius:10px;">
                <h2>${game.title}</h2>
                <p>Deploy: ${game.release}</p>
            `;
            gameCard.addEventListener("click", () => {
                alert("Game is under development");
            });
            gamesList.appendChild(gameCard);
        });
    