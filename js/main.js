document.addEventListener("DOMContentLoaded", summaryCreate)

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