function menuHighlight1(){
    document.getElementById("home").style.color = 'white';
}

function menuHighlight2(){
    document.getElementById("projects").style.color = 'white';
}

function menuHighlight3(){
    document.getElementById("about").style.color = 'white';
}

function changeImg(){
    document.getElementById("pro_pic").src = "images/cap_pic_edit.jpg";
}

function changeImgBack(){
    document.getElementById("pro_pic").src = "images/cap_pic_edit_1.jpg";
}

function showDetails(message) {
    var details = document.getElementById('details');
    details.textContent = message; 
}
