let maincolor = localStorage.getItem("color-option");


if(maincolor !== null){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));
    document.querySelectorAll(".colors-list li").forEach(element =>
        {
            element.classList.remove("active");
            if(element.dataset.color === maincolor)
            {
                element.classList.add("active");
            }
        });

  
    };



document.querySelector(".toggel-settings .fa-gear").onclick = function(){

    this.classList.toggle("fa-spin");
    document.querySelector(".set_box").classList.toggle("open");
};
//-----------------------------------------------------
//switch colors
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {
li.addEventListener("click" , (e) =>{

console.log(e.target.dataset.color);

document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
localStorage.setItem("color-option" , e.target.dataset.color);

e.target.parentElement.querySelectorAll(".avtive").forEach(element =>
    {
        element.classList.remove("active");
    });
    e.target.classList.add("active");
});
});
//-----------------------------------------------------
let page = document.querySelector(".micro_system_page");

let imagesa = ["1.jpg" , "2.jpg" , "3.jpg" ,"4.jpg" ,"5.jpg"];

page.style.backgroundImage = 'url("img/3.jpg")';

setInterval(() => {
    let ran = Math.floor(Math.random() * imagesa.length);
    page.style.backgroundImage = 'url("img/' + imagesa[ran] + '")';
}, 7000);


//----------------------------------------------------

let ourskills = document.querySelector(".skills");

window.onscroll = function () {

    let skillsoffsettop = ourskills.offsetTop;
    let skillsoffsetheight = ourskills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;
    if(windowscrolltop > (skillsoffsettop + skillsoffsetheight - windowheight))
    {
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");

        allskills.forEach(skills => {
            skills.style.width = skills.dataset.progress;
        });
        // allskills.forEach(skills => {
        //     skills.style.width = skills.dataset.prgress;
        // });
    }
    //this.console.log(skillsoffsetheight);


}

//.gallery .images-box

let ourgallery = document.querySelectorAll(".gallery img");
ourgallery.forEach(img => {
img.addEventListener('click' , (e) =>{
let overlay = document.createElement("div");
overlay.className = 'popup-overlay';
document.body.appendChild(overlay);

let popupbox = document.createElement("div");
popupbox.className = 'popup-box';
//document.body.appendChild(popupbox);

if(img.alt !== null){
    let imgh = document.createElement("h3");
    let imgtext = document.createTextNode(img.alt);
    imgh.appendChild(imgtext);
    popupbox.appendChild(imgh);
}

let popupimage = document.createElement("img");
//onsole.log(img.src);
popupimage.src = img.src;

popupbox.appendChild(popupimage);

document.body.appendChild(popupbox);

let closebutton = document.createElement("span");
let closebuttontext = document.createTextNode("X");
closebutton.appendChild(closebuttontext);
closebutton.className='close-button';
popupbox.appendChild(closebutton);


});
});

//close-button
document.addEventListener("click", function(e){
if(e.target.className == 'close-button'){
e.target.parentNode.remove();
document.querySelector(".popup-overlay").remove();
};
});