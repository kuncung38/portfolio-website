var x = document.getElementById('second-section');
var memeSection = document.getElementsByClassName("memeSection");
var seriousSection = document.getElementsByClassName("seriousSection");
var meme = document.getElementsByClassName("meme");
var serious = document.getElementsByClassName("serious");

window.addEventListener("scroll", function(e) {
    if (window.scrollY > (window.innerHeight-100)) {
        document.getElementById('navbar').style.display = 'flex';
    } else {
      document.getElementById('navbar').style.display = 'none';
    }
})

function toggleMobileMenu(menu)  {
    menu.classList.toggle('open');
}

function show() {
    x.style.display = 'block';

    Array.from(memeSection).forEach(memeSection => memeSection.style.display = 'none');
    Array.from(seriousSection).forEach(seriousSection => seriousSection.style.display = 'block');
    Array.from(meme).forEach(meme => meme.style.display = 'none');
    Array.from(serious).forEach(serious => serious.style.display = 'flex');
    window.location.href = "#home";
  }

function showMeme() {
    x.style.display = 'block';

    Array.from(memeSection).forEach(memeSection => memeSection.style.display = 'block');
    Array.from(seriousSection).forEach(seriousSection => seriousSection.style.display = 'none');
    Array.from(meme).forEach(meme => meme.style.display = 'flex');
    Array.from(serious).forEach(serious => serious.style.display = 'none');
    console.log("no problem till here")
    window.location.href = "#home-meme";
}