

// Google sheet (This code store the tha data in google sheet )
const scriptURL = 'https://script.google.com/macros/s/AKfycbzSUXndJ4Hfam9A55_P5y9Cjjw9xHXa9HD-ppqld9__ylz1ku3QPYiC2OTmOEtUARdm/exec'
const form = document.forms['submit-to-google-Sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Your response has been submited !"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


// Funtion fro displaying the skill and education 

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// Humburge Menue 

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px";
}



// Funtion for displaying more project


let loadMoreBtn = document.querySelector('.btn');
let currentItem = 2;

loadMoreBtn.onclick = () => {
let boxes = [...document.querySelectorAll('.work')];
for (var i = currentItem; i < currentItem + 2; i++) {
boxes[i].style.display = 'inline-block';
}
currentItem += 2;

if (currentItem >= boxes.length) {
loadMoreBtn.style.display = 'none'
}
}