class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){

        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

       this.handleCLICK = this.handleCLICK.bind(this);

    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');

        });

    }

    handleCLICK(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

    }
    addClickEvent (){
        this.mobileMenu.addEventListener("click",  this.handleCLICK);


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

VanillaTilt.init(document.querySelectorAll(".carro"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare": 0.5
});

