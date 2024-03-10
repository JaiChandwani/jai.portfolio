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
