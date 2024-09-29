document.addEventListener("DOMContentLoaded", init)

function init() {
    summaryCreate()
    if(getData() != ""){
        if(getData()[0] == 0) changeMode(false)
        else changeMode(true)
    }
}

function changeTheme() {
    if(getData()[0] == 1){
        changeMode(false);
    } else {
        changeMode(true);
    };
};

function summaryCreate() {
    let mainElement = document.getElementById("mainContainer").getElementsByTagName("main")[0];
    let sideBarElement = document.getElementById("sideBar");
    let bannerElement = document.getElementById("banner");

    if(banner.getElementsByTagName("h1").length > 0) {
        let article = banner.getElementsByTagName("h1")[0];
        sideBarElement.innerHTML = sideBarElement.innerHTML + '<a class="' + article.tagName + '" href="#' + article.id + '">' + article.innerHTML + "</a><br>";
    };

    for(article of mainElement.childNodes) {
        if (article instanceof HTMLElement == false) continue;
        if (["H1","H2","H3","H4","H5","H6"].includes(article.tagName) == true) {
            if (article.id == "") {article.id = article.innerHTML};
            sideBarElement.innerHTML = sideBarElement.innerHTML + '<a class="' + article.tagName + '" href="#' + article.id + '">' + article.innerHTML + "</a><br>"
        };

        for (childElement of article.childNodes) {
            if (childElement instanceof HTMLElement == false) continue;
            if (["H1","H2","H3","H4","H5","H6"].includes(childElement.tagName) == false) continue;
            if (childElement.id == "") {childElement.id = childElement.innerHTML};
            sideBarElement.innerHTML = sideBarElement.innerHTML + '<a class="' + childElement.tagName + '" href="#' + childElement.id + '">' + childElement.innerHTML + "</a><br>"
        };
    }
    sideBarElement.innerHTML = sideBarElement.innerHTML + "<ul>"
}

/*theme toggle */

function changeMode(dark){
    if(dark){
        var r = document.querySelector(':root');
        r.style.setProperty('--bg-color', 'black');
        r.style.setProperty('--text-color', 'white');
        saveData("1"+getData().slice(1))
    }else{
        var r = document.querySelector(':root');
        r.style.setProperty('--bg-color', 'white');
        r.style.setProperty('--text-color', 'black');
        saveData("0"+getData().slice(1))
    }
}

function getData() {
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf("data=") == 0) {
        return c.substring("data=".length, c.length);
      }
    }
    return "";
  }

function saveData(newdata) {
    document.cookie =  "data = " + newdata + ";" + "expires=Tue, 19 Jan 2038 04:14:07 GMT" + ";path=/;" + " "+ "SameSite=Strict;";
}
