

function goPage(num) {
    if (num == 1) {
        document.getElementById("iframe_content").src = "./mainspace.html";
        document.getElementById("sideBarId").classList.add("main");
        document.getElementById("contentPageId").classList.add("main");
    }
    else if (num == 2){
        document.getElementById("iframe_content").src = "./works.html";
        document.getElementById("sideBarId").classList.remove("main");
        document.getElementById("contentPageId").classList.remove("main");
    }
}