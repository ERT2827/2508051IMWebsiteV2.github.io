const portfolioIMG = [
    {
        id: 1,
        img: "images/Portfolio/2508051_Finals.jpg",
        desc: `My first character design sheet. I could do a lot better these days, but I still like it. `,
    },{
        id: 2,
        img: "images/Portfolio/VictoryDance.png",
        desc: `The victory screen from my final game for Second year GD. `,
    },
    {
        id: 3,
        img: "images/Portfolio/Fingers.png",
        desc: `I consider this art, in a way. `,
    },{
        id: 4,
        img: "images/Portfolio/Jesser.png",
        desc: `Here's a Jesse Pinkman I drew for the aforementioned breaking good game. `,
    },{
        id: 5,
        img: "images/Portfolio/Kiteman.jpg",
        desc: `Stiltman is better than Kite Man. I'll fight you on it. `,
    },{
        id: 6,
        img: "images/Portfolio/Cave.png",
        desc: `I love microsoft paint. It imposes a set of limitations that really make you push yourself as an artist. `,
    },{
        id: 7,
        img: "images/Portfolio/BenjFight.jpg",
        desc: `A picture I drew of two of my friends fighting. Not based off true events. `,
    },{
        id: 8,
        img: "images/Portfolio/Potionseller2.PNG",
        desc: `The shopkeeper in one of my Game Design games from last year. He's a reocurring character in my games now. `,
    },{
        id: 9,
        img: "images/Portfolio/Korsika.jpg",
        desc: `I was inspired to draw this after playing the excellent HIFI rush. `,
    },{
        id: 10,
        img: "images/Portfolio/MHClub.jpg",
        desc: `A lineup of characters who I used to practice character design. `,
    },{
        id: 11,
        img: "images/Portfolio/AmityNBuri.jpg",
        desc: `A piece of art I did for my current DnD campaign. Honestly I impressed myself with it.`,
    },{
        id: 12,
        img: "images/Portfolio/THe worst thing I've ever done.jpg",
        desc: `This... Don't even ask about this. `,
    },
    {
        id: 13,
        img: "images/Portfolio/NeckGuy.png",
        desc: `Here's something I did just for this portfolio. `,
    },{
        id: 14,
        img: "images/Portfolio/20508051_Bruce_WSOA2023Assignment2.png",
        desc: `Another classic from the first DAP game, this time the ideal screenshot. `,
    },]

const designIMG = [
    {
        id: 1,
        img: "images/Design/Homescreen.jpg",
        desc: `The rough design for the homescreen. `,
    },{
        id: 2,
        img: "images/Design/Portfolio.jpg",
        desc: `The rough design for my portfolio. Notice the lack of gallery, since that came from the design page.`,
    },{
        id: 3,
        img: "images/Design/Blog.jpg",
        desc: `The design for the blog. `,
    },{
        id: 4,
        img: "images/Design/Essays.jpg",
        desc: `While the page is still a place holder, I decided to do my final design now for when I implement it. `,
    },{
        id: 5,
        img: "images/Design/DesignMockup.jpg",
        desc: `The design page's basic layout. This was where I had the idea for image galleries at the bottom of certain pages. `,
    },{
        id: 6,
        img: "images/Design/Music.jpg",
        desc: `I originally wanted to do a music page instead of a profile page. He's the basic idea for how that would have looked. `,
    },{
        id: 7,
        img: "images/Design/Profile.jpg",
        desc: `A more finalized version of the profile page, with more detail and a better idea of how to integrate the music. I did ultimately remove the vanilla spotify integration in place of my own. `,
    },{
        id: 8,
        img: "images/Design/Sitemap.jpg",
        desc: `A sitemap I drew to visualize site navigation and ensure I'm sticking to my 3 click rule. `,
    },{
        id: 9,
        img: "images/Design/1st Y frame.jpeg",
        desc: `The very first pen and paper wire frame I did. The page may be busy enough to qualify for the portfolio secion, but this is where this website was born. `,
    },{
        id: 10,
        img: "images/Design/2nd Y frame.jpeg",
        desc: `A slightly more in depth pen and paper wireframe. Only a few ideas from this made it to the final product, but it was an important part of the planning process regardless. `,
    },
]

//Gallery Functionality

var fullImgBox = document.getElementById("fullIMGBox");
var fullIMG = document.getElementById("fullIMG");

function OpenFull(pic){
    fullImgBox.style.display = "flex";
    fullIMG.src = pic; 
}

function CloseFull(){
    fullImgBox.style.display = "none";
}

//Gallery populator

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

const sectionCenter = document.querySelector(".image-Gallery");

if(filename == "design.html"){
    displayGallery(designIMG);
}else{
    displayGallery(portfolioIMG)
}


function displayGallery(galleryItems){
    var displayGallery = galleryItems.map(function (galleryItem){
      return `<div class="galleryitem">
        <img src="${galleryItem.img}" alt="" onclick="OpenFull(this.src)">
        <div class="desc font italic">${galleryItem.desc}</div></div>`;
    }).join("");
  
    sectionCenter.innerHTML = displayGallery;
  }