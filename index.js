const btnGenerate = document.querySelector("#btnGenerate");
const jokeContainer = document.querySelector("#joke-content");


btnGenerate.addEventListener('click', async () => {

  try {
    const res = await fetch("https://icanhazdadjoke.com/slack");
    const data = await res.json();
    const joke = data["attachments"][0].text;
    jokeContainer.style.opacity = 1;
    jokeContainer.textContent = joke;
  }catch(err) {
    alert(err);
  }

})
