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
    window.location.href = "#home-meme";
}

document.querySelectorAll('.home-name-text').forEach(function(el) {
    new Typed(el, {
        strings: ['Ricko Wijaya,', 'an aspiring developer!' ],
        loop : true,
        typeSpeed : 50,
        backSpeed : 40,
        startDelay : 100,
        backDelay : 1000,
    })
})

var secondLoop = new Typed('.second-typing', {
    strings: ['metatro,', 'mercato', 'pentatoni', 'fucthishi','mechatronic engineering^1000'],
    loop : true,
    typeSpeed : 30,
    backSpeed : 20,
    startDelay : 100,
    backDelay : 0,
    preStringTyped: (arrayPos, self) => {
        if (arrayPos === 3) {
            self.typeSpeed = 10;
            self.backSpeed = 10;
        }
        else {
            self.typeSpeed = 30;
            self.backSpeed = 20;
        }
    }
})