const sidebar = document.getElementById("sidebar");
function openSidebar(){
    sidebar.style.width = '100%'
}
function closeSidebar(){
    sidebar.style.width = '0'
}
window.addEventListener("click", function (event){
    if(event.target == sidebar){
        sidebar.style.width = '0'
    }
})