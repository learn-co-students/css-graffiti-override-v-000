window.onload = function(){
    let wall = document.getElementById("wall")
    let wallChildren = wall.children
    for(var i = 0; i < wallChildren.length; i++){
        wallChildren[i].style.display = 'none'
    }
}