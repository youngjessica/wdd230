const today = new Date().getDay();
const banner = document.querySelector('.banner');

function DisplayBanner (banner) {
    if (today === 1 || today === 2) {
        banner.style.display = "block";
    }
    
    document.querySelector('.closeButton').addEventListener('click', () => {
        banner.style.display = "none";
    }) 
}

if (banner != null) {
    DisplayBanner(banner);
}