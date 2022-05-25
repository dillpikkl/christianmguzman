
window.addEventListener("keydown", function(event) {
    if (event.key == "h"){
        alert("*cue zelda discovery sound*");
    }
});

if (document.cookie == "A4pBl") {
    console.log("allowed")
    
} else {
    console.log("rejected")
    window.location.href = "index.html"
}

var vid = document.getElementById("rickroll");

