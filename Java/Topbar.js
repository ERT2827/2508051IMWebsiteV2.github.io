const pageLinks = [{
    id: 1,
    location: "index.html",
    text: "Home"
},{
    id: 2,
    location: "portfolio.html",
    text: "Portfolio"
},{
    id: 3,
    location: "blogs.html",
    text: "Blog"   
},{
    id: 4,
    location: "essays.html",
    text: "Essays"   
},{
    id: 5,
    location: "design.html",
    text: "Design"   
},{
    id: 6,
    location: "profile.html",
    text: "Profile"   
}]


const topBarArea = document.querySelector(".nav-area");

displayTopBar(pageLinks);

function displayTopBar(pageses){
    let displayTopBar = pageses.map(function (pageses){
        return `<li><a href="${pageses.location}">${pageses.text}</a></li>`;
      }).join(" ");

    topBarArea.innerHTML = displayTopBar;
}

//sidebar

const sideBarArea = document.getElementById("sideChick");

displaySideBar(pageLinks);

function displaySideBar(pageses) {
    let displaySideBar = pageses.map(function (pageses){
        return `<li><a href="${pageses.location}">${pageses.text}</a></li>`;
      }).join(" ");

      sideBarArea.innerHTML = displaySideBar;
}

// Back to top functionality

const toTop = document.querySelector(".to-Top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})