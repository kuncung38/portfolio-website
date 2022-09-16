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
    var x = document.getElementById('second-section');
    console.log("clicked")
    x.style.display = 'block';
    window.location.href = "index.html#home";
  }

function meme() {
    var x = document.getElementById('second-section');
    x.style.display = 'block';
    
    var memeSection = document.getElementsByClassName("memeSection");
    var seriousSection = document.getElementsByClassName("seriousSection");
    var meme = document.getElementsByClassName("meme");
    var serious = document.getElementsByClassName("serious");

    Array.from(memeSection).forEach(memeSection => memeSection.style.display = 'block');
    Array.from(seriousSection).forEach(seriousSection => seriousSection.style.display = 'none');
    Array.from(meme).forEach(meme => meme.style.display = 'flex');
    Array.from(serious).forEach(serious => serious.style.display = 'none');
    window.location.href = "index.html#home-meme";
}