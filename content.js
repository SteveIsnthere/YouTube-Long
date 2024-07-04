const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    .ytd-rich-shelf-renderer {
      display: none;
    }
    ytd-reel-shelf-renderer {
        display: none;
    }
`;
document.head.appendChild(style);

console.log("YouTube Shorts are gone! You're welcome");