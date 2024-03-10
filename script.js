menu = () => {
    let x = document.getElementById("navbarContainer")
    if (x.className === "navbarContainer") {
        x.className = "navbarContainer responsive"
    }
    else {
        x.className = "navbarContainer"
    }
}

let submit = document.getElementById("submitButton")
submit.addEventListener('click',()=>{
    setTimeout(()=>{
        alert("Submitted")
    },2000)
})

let dayNight = document.querySelector(".dayNight");
let main = document.querySelector(".main");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
    main.classList.toggle("night");
})
    
