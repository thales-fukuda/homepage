let siteList = [
    {
        name: 'google',
        url: 'https://www.google.com/search?q=',
        color: '#34A853',
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/results?search_query=',
        color: '#FF0000',
    }
]

let body = document.getElementById('body');
let searchInput = document.getElementById('search-input');
let searchTarget = 0;

const handleInit = () => {
    searchInput.style.color = siteList[0].color;
    searchInput.focus();
}

const handleChangeSearch = () => {
    let website;
    if(siteList[searchTarget + 1]){
        searchTarget++;
        website = siteList[searchTarget];
        
    } else{
        searchTarget = 0;
        website = siteList[0];
    }
    console.log(website);   
    searchInput.style.color = website.color;
}

const handleKeyPress = (e) => {
  
    if(e){
        switch(e.keyCode){
            case 9:
                e.preventDefault();
                handleChangeSearch();
                break;
            default:
                break;
        }
    }
}


window.addEventListener('keydown', handleKeyPress, false);
handleInit();
