function main() {
    let shelfs = document.querySelectorAll(".ytd-rich-shelf-renderer");
    shelfs.forEach(element => {
        element.style.display = "none";
    });

    let miniShelfs = document.querySelectorAll("ytd-reel-shelf-renderer");
    miniShelfs.forEach(element => {
        element.style.display = "none";
    });

    console.log("YouTube Shorts are gone! You're welcome.");
}

setTimeout(main, 200);
