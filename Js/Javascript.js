window.onload = () => {
  const emoji = document.getElementById('emoji');
  setTimeout(() => {
    emoji.classList.add('abrir'); // Anima o emoji ao carregar a página
  }, 200);
};

document.getElementById('emoji').addEventListener('click', () => {
  const emoji = document.getElementById('emoji');
  const folha = document.getElementById('folha');
  
  // Anima o emoji sumindo
  emoji.classList.remove('abrir');
  emoji.classList.add('fechar');

  setTimeout(() => {
    folha.classList.remove('fechar');
    folha.classList.add('abrir'); // Anima a folha aparecendo
  }, 500); // Aguardar o tempo da animação antes de exibir a folha
});

document.getElementById('fechar').addEventListener('click', () => {
  const emoji = document.getElementById('emoji');
  const folha = document.getElementById('folha');
  
  folha.classList.remove('abrir');
  folha.classList.add('fechar'); // Anima a folha sumindo

  setTimeout(() => {
    emoji.classList.remove('fechar');
    emoji.classList.add('abrir'); // Anima o emoji entrando novamente
  }, 500);
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


  /*slides imagem*/

  let count = 1;
  document.getElementById("radio1").checked =true;

  setInterval(function(){
    neximage();
  },5000)

  function neximage(){
    count++;
    if(count>3){
      count = 1;
    }
    document.getElementById("radio"+count).checked =true;

  }

