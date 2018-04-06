let search = document.getElementById('input_search');

search.addEventListener('focus', () => {
    search.placeholder = "";
}, false);

search.addEventListener('keypress', (e) => {
    if(!e) e = window.event;
    let value = search.value;
    if(e.keyCode == '13'){
        let sub = value.substr(0, 2);
        if(sub[1] === ":"){
            value = value.substr(2, value.length);
            console.log(value);
            console.log(sub);
            if(sub[0] === "y") 
                window.location.href = "https://youtube.com/results?search_query=" + value;
            else if(sub[0] === "f")
                window.location.href = "https://facebook.com/search/str/" + value + "/keywords_search";
            else if(sub[0] === "r")
                window.location.href = "https://reddit.com/search?q=" + value;
            else if(sub[0] === "g")
                window.location.href = "https://github.com/search?q=" + value;
        }else{
            window.location.href = "https://google.com.br/search?q=" + value;
        }
    }
})