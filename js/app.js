let section = document.querySelector("#mainSec .row");
let category = document.querySelectorAll(".category-btn");
let countGame = document.querySelector("#totalGame");
// game class
class Game {
  constructor(id, title, img, platform, genre, publisher, developer, desc) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.platform = platform;
    this.genre = genre;
    this.publisher = publisher;
    this.developer = developer;
    this.desc = desc;
  }
}

async function getGames(currentCategory) {
  console.log("hallo");
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "440b5aee4amsh45fe2c922c690abp155a46jsnfc42d898463d",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${currentCategory}`;
  try {
    let req = await fetch(url, options);
    let response = await req.json();
    display(response);
  } catch (error) {
    console.log(error);
  }
}
// display main content
getGames("shooter")

// display content
function display(response) {
  content = "";

  for (let i = 0; i < response.length; i++) {
    let game = new Game(
      response[i].id,
      response[i].title,
      response[i].thumbnail,
      response[i].platform,
      response[i].genre,
      response[i].publisher,
      response[i].developer,
      response[i].short_description
    );
    content += `<div class="col-md-4">
    <div class="card main-card bg-dark text-white" data-tilt>
    <div class="card-body">
    <div class="img-container mb-4">
    <img
    src="${game.img}"
    width="100%"
    class="rounded-2"
    alt="" />
    </div>
    <div
    class="game-details d-flex justify-content-between px-1 mb-2">
    <p>${game.title}</p>
    <p class="bg-success px-3 py-1 rounded-pill">Free</p>
    </div>
    <div class="game-desc px-2">
    <p>
    ${game.desc}
    </p>
    </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
    <span>${game.genre}</span>
    <span>${game.platform}</span>
    </div>
    </div>
    </div>`;
    countGame.innerHTML = `Total Of Games : ${i + 1}`;

  }
  section.innerHTML = content;
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 5,
    speed: 100,
    glare: true,
    "max-glare": 0.3,
  });
}

category.forEach(function (e) {
  let current = e.innerText.toLowerCase();
  e.addEventListener("click", function () {
    getGames(current.toString());

    category.forEach(function (e) {
      e.classList.remove("bg-white");
      e.classList.remove("text-black");
    });
    e.classList.add("bg-white");
    e.classList.add("text-black");
  });
});
