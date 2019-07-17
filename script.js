console.log("hello");

function openTab(evt, tabname) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i <tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tabs");
    console.log(tabs);
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    const tabBlock = document.getElementById(`${tabname}`)
    console.log(tabBlock);
    tabBlock.style.display ="block";
    evt.currentTarget.className +=" active";
}