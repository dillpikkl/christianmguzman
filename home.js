//cool secret. will add more soon.
window.addEventListener("keydown", function(event) {
    if (event.key == "h"){
        alert("*cue zelda discovery sound*");
    }
});

//checks for key
if (document.cookie == "A4pBl") {
    console.log("allowed")
    
} else {
    console.log("rejected")
    window.location.href = "index.html"
}



