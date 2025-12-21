const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled=true;
    btn.innerText="Loading..."
    
    const response = await fetch("https://api.waifu.im/search");
    const data = await response.json();
    btnEl.disabled=false;
    btn.innerText="Get Anime"
    const image = data.images[0]; 
    animeContainerEl.style.display = "block";
    animeImgEl.src = image.url; 
    animeNameEl.innerText = image.artist?.name || "Unknown Artist";

    console.log(image);
  } catch (error) {
    console.error(error);
  }
});
