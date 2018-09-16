let searchInput = document.getElementById('search-input');
let searchName = document.getElementById('search-name');
let searchTarget = 0;

const handleInit = () => {
    searchName.style.color = siteList[0].color;
    searchName.innerText = siteList[0].name;
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
    searchName.style.color = website.color;
    searchName.innerText = website.name;
    searchInput.style.color = website.color;
}

const handleSubmit = () => {
    window.location.href = siteList[searchTarget].url + searchInput.value + siteList[searchTarget].postUrl;
}

const handleKeyPress = (e) => {
    if(e){
        switch(e.keyCode){
            case 9:
                e.preventDefault();
                handleChangeSearch();
                break;
            case 13:
                handleSubmit();
            default:
                break;
        }
    }
}

window.addEventListener('keydown', handleKeyPress, false);
handleInit();
