let profileClicked = false;

function ddMenu(){
    let ddcont = document.getElementById('dropdown-content');
    let ddcont2 = document.getElementById('dropdown-content2');

    if(profileClicked === false){
        ddcont.style.display = 'block'
        ddcont2.style.display = 'block'
        profileClicked = true
    }else{
        ddcont.style.display = 'none'
        ddcont2.style.display = 'none'
        profileClicked = false
    }
}

/* This is Used from the Main Files / Where you have a Profile top Right */