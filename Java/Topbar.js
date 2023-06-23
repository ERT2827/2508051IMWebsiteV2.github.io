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


const topBarArea = document.querySelector(".nav-Area");

displayTopBar(pageLinks);

function displayTopBar(pageses){
    var displayTopBar = pageses.map(function (pageses){
        return `<li><a href="${pageses.location}">${pageses.text}</a></li>`;
      }).join(" ");

    topBarArea.innerHTML = displayTopBar;
}

//sideBar

const sideBarArea = document.getElementById("sideChick");

displaysideBar(pageLinks);

function displaysideBar(pageses) {
    console.log("Bornana");
    var displaysideBar = pageses.map(function (pageses){
        return `<li><a href="${pageses.location}">${pageses.text}</a></li>`;
      }).join(" ");

      sideBarArea.innerHTML = displaysideBar;
}

//footer (this function is currently unused until I update my 
//footer design)

// const footerArea = document.getElementById("Mort");

// DisplayFooter(pageLinks);

// function DisplayFooter(pageses) {
//     var displaysideBar = pageses.map(function (pageses){
//         return ``;
//       }).join(" ");

//       sideBarArea.innerHTML = displaysideBar;
// }

// Back to top functionality

const toTop = document.querySelector(".to-Top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})