//Text, of which there is a lot.

const essayTexts = [
    {
        id: 0,
        title: "Takealot analysis essay",
        date: "2 May 2023",
        subject: "Interactive Media",
        thumbnail: "images/Cena.jpg",
        thumbnailAlt: "A picture of the Takealot homepage",
        previewparagraph: "In this essay I will be examining Takealot.com, first from a purely technical aspect before then moving onto a brief look into the way that online shops psychologically manipulate customers, with a bit of discussion about the ethics of those tactics.",
        text: `<p>In this essay I will be examining Takealot.com, first from a purely technical aspect before then moving onto a brief look into the way that online shops psychologically manipulate customers, with a bit of discussion about the ethics of those tactics.</p><p>
        First off, I want to start by explaining why I chose Takealot.com. The first reason is because they are one of very few digital companies in South Africa that have a decent market share over their field, rather than playing second fiddle to a foreign company. Because while Meta and Google dominate our online lives, Amazon has found it remarkably difficult to expand their ecommerce business here despite offering digital services since 2004, leaving space for a homegrown market to pop up in the interim (Businesstech, 2023). So Takealot is one of a few competitive South African internet businesses, that’s one reason for choosing them. My other is reason is that they are just, in a way, boring. Takealot have been operating in some way or another since 2002, back when they were still Take2 (Techcentral, 2011), and to my knowledge there have never really been any major scandals with them. They just operate, going about their business in a way that is quietly effective and -importantly for this essay- means that I won’t have any prior biases going into writing about them. This allows for a more objective analysis of the site and improved learning from it, since this essay will look at what’s there, rather than what I am looking for to point out.</p><p>
        Now, starting with the technical side of the site and the homepage, it’s decent. The site doesn’t really follow any kind of strict layout, which could possibly make it harder to navigate for someone who’s not entirely familiar with the internet. One major point the website has in its favour is that it is nicely responsive, adapting well to being resized and zoomed in on. This is important on two levels: firstly, it means those with poor vision can easily resize the site to properly see what is on the page. Secondly, it means that the page is usable on mobile. This is arguably a far bigger deal in South Africa, where 91% of users have mobile devices while just 52% have some kind of computer (TheMedia, 2020). Because of this, any website that is not mobile friendly in South Africa is potentially losing out on around half of it’s market share, which is a massive and obvious motivator for responsive web design. The code of the page itself is decent, featuring aspects of semantic markup that would make it easy for web crawlers to categorize the page, and would also likely be enough for accessibility tools to make use of. So, overall, much like the company itself, Takealot.com’s homepage is perfectly serviceable.</p><p>
        Moving onto an individual product page, I’ll be using the page of the Samsung Galaxy A14 as my reference. Immediately, I’ll acknowledge that this is not perfectly representative of the average experience since Samsung would have provided Takealot with the marketing package for this product. The page even has a disclaimer noting this, which is a nice touch since most companies wouldn’t point that out. The ethics of this practice are a little grey, since they provide larger companies with more money for marketing an edge due to the improved shopping experience. This potentially means that a superior product with less marketing could be overlooked by the customer. Ultimately, marketing as a practice is an area of moral grey, which will be moved on from now because Takealot as a company do not do the bulk of marketing for products themselves as a retailer rather than a manufacturer. Going onto the layout of the page, it’s alright. There is more visual information here than on the homepage, mainly thanks to the marketing package provided by Samsung since Takealot themselves usually only provide a boring text box, and all the relevant information is immediately accessible. There are also simple options for purchasing, along with several links to other parts of the site that make it easy to find further information about the service. All of this is par for the course, but also incredibly vital since any obstacle in the way of making a purchase could lead to a potential loss of a customer. The biggest problem I have with this product page is that it really lacks semantic markup, being a mess of <div>s that would make the page a nightmare for anyone relying on accessibility technology to navigate. Doubly so because so much of the information on this page is visual. But overall, much like the home page, this page is perfectly passable without doing too much over the necessary amount.</p><p>
        The reason why this website is so utilitarian is likely due to the risk of it becoming flashy, or even worse, tacky. Online shops operate heavily on trust since they offer a highly complex physical service in exchange for digital transactions of very real wealth. And when it comes to the trust users have in a website, the three most important factors are ease of use, design (including professionalism) and transparency (Tasin, 2017: 47). Going through these in order, the first was clearly the biggest focus for Takealot. The website is easy to navigate, with information being limited to just enough for users to know what they’re looking for without ever feeling overwhelmed. Things just sort of work, and for a site that is as focused on providing a service as Takealot is, I think it is perfectly acceptable.</p><p>
        Moving onto design, this is an area where the site is somewhat lacking. Just compare the page for the A14 on Takealot to Samsung’s own website (Samsung, 2023) and the difference becomes clear. Samsung provide a far more dynamic, interactive page that immerses the user in the experience of owning the phone. Of course, the reason for this greater focus on design is twofold and understandable. Firstly, Samsung has vested interest, since they are the manufacturer of the product rather than a pure retailer like Takealot is, not to mention Takealot simply does not have the resources to provide an outstanding product page for every single item they sell. The second reason is the more important one, and that is the risk involved with trying to push the design. The line between pleasing and tacky is a thin one, and one that online shops cannot risk crossing since losing professionalism would mean losing trust (Tasin, 2017). So, generally, these sites simply reel in their design to minimize the potential risk of seeming unprofessional that they take on, at the cost of some aesthetic quality when compared to less function first sites.</p><p>
        Finally, the last quality that determines trust is transparency. Starting with the good, Takealot are generally clear with information about the service, like order statuses, seller information and the large amount of information about the actual company they provide at the bottom of the page. This is vitally important since nobody is going to trust their personal information and -more importantly- money to a company that is hard to track down information about. However, where I have an issue is in how Takealot displays its pricing. Now it’s not as bad as amazon obscuring their prices behind different retailers and second hand items, making it far harder to find the actual price of an item (although it is worth noting that Takealot have introduced a similar system of showing different suppliers) but it’s still hard to figure out exactly how much an item usually is and if it is on sale in some kind of way because Takealot frequently displays items that are below typical retail price on their service the same way as the do items that are on sale. They also don’t explain the exact details of sales, making it very hard to shop around said sales and pressuring users into making a purchase they otherwise wouldn’t. This is a common tactic of online retailers, obscuring the prices of items, because it is proven beyond all doubt to be effective. During their annual “Double Eleven” sale, Alibaba reports massive profits year after year, with a staggering 84 billion USD of GMV being moved in eleven days during the 2021 sale (Li et al. 2022). That is a value equivalent to around a quarter of South Africa’s national GDP (Trading Economics, 2021), being moved in eleven days, by one company. So it is only natural that other companies follow in the footsteps of that behaviour. But this essay is not about making money, it’s about the ethics of UX, and the banners and prompts, along with the more subtle techniques used by companies to reduce users’ rationality (Li et al. 2022) certainly do not pass the bar of ethical. No, these are psychological tactics used purely to force people into spending money that they wouldn’t have otherwise and may even possibly not have available to spend. This profit first mentality affects lives and can have serious consequences. At the very least, it does seem that users are becoming slightly more aware of these tactics. Tools like SteamDB’s past price comparison tool are also extremely useful for neutralizing these psychological strongarm tactics, but it doesn’t really change the fact that they shouldn’t be utilized at all. At least not in a perfect world.</p><p>
        In conclusion, looking at Takealot was nice. Its utilitarian nature feels so earnest and quaint after the psychological warfare that is opening Amazon or Instagram. I know that the expectation for this essay was probably to find a website that strangles kittens and to tear it apart, but I think that we need to look at “just fine” as much as we need to look at the worst of the worst. These are the websites we’ll likely spend most of our time making after all, and Takealot just so happens to be a good, homegrown example of that. So good on you Takealot. You’re fighting the good fight for South Africa, and that’s a lot more than can be said for most of the products we use.</p><p>
        References:</p><p>
        Pages Used:</p><p>
        Takealot Homepage: https://www.takealot.com/</p><p>
        Samsung Galaxy A14 store page: https://www.takealot.com/samsung-galaxy-a14-64gb-lte-dual-sim-black/PLID92717012</p><p>
        Sources:</p><p>
        Businesstech. 2023. Takealot says it’s ready for Amazon. Online. https://businesstech.co.za/news/internet/680637/takealot-says-its-ready-for-amazon/. 02/5/2023.</p><p>
        Li, T. Li, W. Zhao, Y. 2022. Rationality manipulation during consumer decision-making process: an analysis of Alibaba’s online shopping carnival. Electronic Commerce Research, Vol. 23, pp. 331-364.</p><p>
        Samsung. 2023. Galaxy A14 5G. Online. https://www.samsung.com/africa_en/smartphones/galaxy-a/galaxy-a14-5g-black-64gb-sm-a146pzkdafa/. 02/5/2023.</p><p>
        SteamDB. 2023. Sales. Online. https://steamdb.info/sales/. 02/5/2023.</p><p>
        Tasin, N. B. 2017. Factors Influecing Customer's Trust in Online Shopping Among Executives in a Bank. Malaysian Journal of Social Sciences and Humanities, Vol. 2, No. 3 (November 2017), pp. 46-59.</p><p>
        Techcentral. 2011. Take2 rebrands, shoots for R1bn in sales. Online. https://techcentral.co.za/take2-rebrands-shoots-for-r1bn-in-sales/184072/. 02/5/2023.</p><p>
        The Media Online. 2020. Device penetration rises in South Africa as digital becomes the new normal. Online. https://themediaonline.co.za/2020/11/device-penetration-rises-in-south-africa-as-digital-becomes-the-new-normal/. 02/5/2023.</p><p>
        Trading Economics. 2021. South Africa GDP. Online. https://tradingeconomics.com/south-africa/gdp. 02/5/2023. </p><p>
        `
    }
]


const blogTexts = [
    {
        id: 0,
        title: "Week 1",
        text: `<p>I first set up my Github account in grade 10. My computer science teacher was really cool, and worked for Google on AI technology back before everyone was doing it. It was an awesome time, but going back to that account now was surreal because I forgot how dumb I was back in that time. I've changed the childish username and the old profile picture now, but I've never felt more disappointment in myself than when I saw I had a Donald Trump Pepe profile picture. My politics even at the time didn't reflect that image (not that a fifteen year old knows anything about politics), but still it's interesting to see that I didn't yet have the media literacy to understand that I was going around with what is basically one step away from just putting up a swastika as my profile picture. Besides that, I'm also still on a repository with my old classmate Arnold, which was a funny reminder that he exists. I hope he's doing well. Anyways, I've re-set up the Git account to better reflect who I am now and so that I can use it in a slightly more academic setting.</p><p>
        Aside from my Git experience, I also did a lot of the readings last week. As someone with a passion for computer science, I've absolutely loved looking at these readings. I had a morning where I had to wait for a long while with nothing but Ulwazi to keep me entertained, so I've read the Bush, Turing, Englebart and Nelson.</p><p>
        The most fascinating insight I got out of the readings was with Nelson's "Proposal for a Universal Publishing System and Archive". Not so much because of the reading itself, but because of a modern parallel that I think is worth bringing up for discussion. In Nelson's reading, he proposes a vision of an idea that would one day go on to change the world, but because of the restrictions he places on it and the possessive control he wanted placed over the idea, his vision never came to pass. That reminds me of something else in the modern day: Facebook's metaverse. Much like Nelson's Xanadu, Facebook's idea for an immersive VR social space does have the potential to enrich society. A place where people can be anyone, go anywhere and learn anything as if they were practically there does sound great, but Facebook's vision is flawed because they're trying to build it as a system that they solely run and profit from, as opposed to a democratized system in which anyone can carve out a slice that is truly their own. And much like Nelson's system, I believe Facebook's plan is destined for failure, doomed to be replaced by a system that puts power into the hands of the individuals instead of accumulating it under the control of a single dystopian company that controls information on a far greater scale than any other power on earth.</p><p>
        I also think whatever that platform is will launch with the capacity for users to have legs.</p>`,
        preview: "I first set up my Github account in grade 10. My computer science teacher was really cool, and worked for Google on AI technology back before everyone was doing it. It was an awesome time, but going back to that account now was surreal because I forgot how dumb I was back in that time. I've changed the childish username and the old profile picture now, but I've never felt more disappointment in myself than when I saw I had a Donald Trump Pepe profile picture. My politics even at the time didn't reflect that image (not that a fifteen year old knows anything about politics), but still it's interesting to see that I didn't yet have the media literacy to understand that I was going around with what is basically one step away from just putting up a swastika as my profile picture. Besides that, I'm also still on a repository with my old classmate Arnold, which was a funny reminder that he exists. I hope he's doing well. Anyways, I've re-set up the Git account to better reflect who I am now and so that I can use it in a slightly more academic setting.</p><p>",
        color: "greenback"
    },{
        id: 1,
        title: "Week 2",
        text: `<p>My main focus this week was on the website itself, since I did a lot of readings last week. I got started, and built a small prototype using some resources I found online to give me a bit of guidance, but to be honest, it was disorientating.<br><br>

        Because of the protests, I missed the Wednesday class last week, and even though I know that Wednesday is largely theoretical, it still felt like I had missed something important. But I didn't let that slow me down too much in the end, and so I got to work trying to build a basic prototype. That process really had me feeling what someone -Kieran, I think- said about how scary it is to do something with no direction. All the endless possibilities stretched out before me, and I had to decide what to do with them.</p><p>
        
        Ultimately, the web prototype I built was mainly built around the "The Missile Knows Where It Is, Because It Knows Where It Isn't" meme. It's stupid, I know, but I find it a lot easier to work when I latch onto something funny to put at the center of my work. It gives me a guideline, and that's really all I need a lot of the time. Of course, there is a major downside, and that is how I'll have to restart the page mostly from scratch once I eventually start getting it ready for a proper version I can submit. However, I don't think that's the end of the world, and I'm sure that the original page will live on as an easter egg in the site somewhere.</p><p>
        
        Besides getting started with my website, I also took a look at the HTML readings, namely the first two Bruce Lawson readings. They were a little hard to follow since HTML is so new to me (I've only ever dabbled into it lightly once before) but I think that they serve as nice resources, and it will be nice to know they exist so I can go back in future. </p>`,
        preview: "My main focus this week was on the website itself, since I did a lot of readings last week. I got started, and built a small prototype using some resources I found online to give me a bit of guidance, but to be honest, it was disorientating.",
        color: "coralback"
    }

]



const textArea = document.getElementById("texts");

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

if(filename == "essays.html"){
    CreateTextEssay(essayTexts);
}else{
    CreateTextBlog(blogTexts);
}

    //Opening and closing functions

    var fullTextBox = document.getElementById("fullTextBox");
    var fullText = document.getElementById("fullText");

    function OpenFull(ID){
        fullTextBox.style.display = "flex";
        if(filename == "essays.html"){
            fullText.innerHTML = essayTexts.at(ID).text;
        }else{
            fullText.innerHTML = blogTexts.at(ID).text;
        }
        
    }

    function CloseFull(){
        fullTextBox.style.display = "none";
    }

    //Essay creation script

function CreateTextEssay(essayItems){
    var CreateTextEssay = essayItems.map(function (essayItem){
      return `<div class="essay-container">

      <div class="essay-box">
          <div class="essay-img">
              <img src="${essayItem.thumbnail}" alt="${essayItem.thumbnailAlt}">
          </div>
      </div>
      <div class="essay-text">
          <span>${essayItem.date}/ ${essayItem.subject}</span>
          <a href="#" class = "essay-title">${essayItem.title}</a>
          <p>${essayItem.previewparagraph} </p>
          <h3 onclick="OpenFull(${essayItem.id})">Read More </h3>
      </div>

  </div>`;
    }).join("");
  
    textArea.innerHTML = CreateTextEssay;
  }

  function CreateTextBlog(blogItems){
    var CreateTextBlog = blogItems.map(function (blogItem){
      return `<div class="grid-item ${blogItem.color}">
      <h2 class="post-heading">${blogItem.title}</h2>
      <div class="post-text">
          <p>${blogItem.preview}</p>
          <h3 onclick="OpenFull(0)">Read More</h3>
      </div>
    </div>`;
    }).join("");
  
    textArea.innerHTML = CreateTextBlog;
  }




