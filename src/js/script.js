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
