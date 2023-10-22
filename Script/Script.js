let darkness = 0;
let jumper = 1;
const jumpingerror = "Something went wrong, :( lemme try a fix";

function navgoto(destination){
    let newDestination = "#" + destination;
            location.href = "#";
            location.href = newDestination;
            window.scrollBy(0,-115);
}

function kickjumper(jumperindex){
    jumper = jumperindex;
}

function dmode(){
    if(darkness==0){
        let dmodebtn = document.getElementById('dmode');
        dmodebtn.src = "Images/lmode.png";
        dmodebtn.alt = "light mode";
        dmodebtn.style.backgroundColor = "rgba(0, 0, 0, 0.9)";

        document.body.style.backgroundImage = "url('Images/background_dmode.jpg')";
        document.getElementById('content').style.backgroundColor = "#3f3f3f";
        document.body.style.color = "#ffffff";
        document.getElementById('top').style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        
        darkness=1;
    } else{
        let dmodebtn = document.getElementById('dmode');
        dmodebtn.src = "Images/dmode.png";
        dmodebtn.alt = "dark mode";
        dmodebtn.style.backgroundColor = "rgba(255, 255, 255, 0.9)";

        document.getElementById('top').style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        document.body.style.backgroundImage = "url('Images/background.png')";
        document.getElementById('content').style.backgroundColor = "#f5f5f5";
        document.body.style.color = "";
        
        darkness=0;
    }
}

function qip(){
    alert("I\'m a buff baby that can dance like a man,\nI can shake-ah my fanny, I can shake-ah my can\! \nI\'m a tough tootin' baby, I can punch-ah yo buns! \nPunch-ah yo buns, I can punch-ah yo buns! \nIf you\'re an evil witch, I will punch you for fun!");
}
function jumptest(){
    alert(jumper);
}

function jumpup(){
    switch(jumper){
        case 0:
            alert(jumpingerror);
            jumper=1;
            break;
        case 1:
            window.scrollTo(0.0);
            break;
        case 2:
            location.href = "#";
            location.href = "#myprojects";
            window.scrollBy(0,-115);
            jumper--;
            break;
        case 3:
            location.href = "#";
            location.href = "#myresearch";
            window.scrollBy(0,-115);
            jumper--;
            break;
        case 4:
            location.href = "#";
            location.href = "#play";
            window.scrollBy(0,-115);
            jumper--;
            break;
        case 5:
            location.href = "#";
            location.href = "#mod";
            window.scrollBy(0,-115);
            jumper--;
            break;
        case 6:
            location.href = "#";
            location.href = "#preferances";
            window.scrollBy(0,-115);
            jumper--;
            break;
        default:
            alert(jumpingerror);
            window.scrollTo(0.0);
            jumper=1;
            break;
    }
}

function jumpdown(){
    switch(jumper){
        case 1:
            location.href = "#";
            location.href = "#myresearch";
            window.scrollBy(0,-115);
            jumper++;
            break;
        case 2:
            location.href = "#";
            location.href = "#play";
            window.scrollBy(0,-115);
            jumper++;
            break;
        case 3:
            location.href = "#";
            location.href = "#mod";
            window.scrollBy(0,-115);
            jumper++;
            break;
        case 4:
            location.href = "#";
            location.href = "#preferances";
            window.scrollBy(0,-115);
            jumper++;
            break;
        case 5:
            location.href = "#";
            location.href = "#favouritemovie";
            window.scrollBy(0,-115);
            break;
        default:
            alert(jumpingerror);
            jumper=1;
            break;
    }
}

function openimageviewer(imagetoview){
    let imagewidth = imagetoview.naturalWidth;
    let imageheight = imagetoview.naturalHeight;
    if (imagewidth >= imageheight){
        document.getElementById("activeimage").style.minWidth = "80%";
    }else{
        document.getElementById('activeimage').style.minHeight = "80%";
    }
    let opener = document.getElementById('imageviewer');
    opener.style.display = "block";
    document.getElementById('activeimage').src = imagetoview;
}

function closeviewer(){
    document.getElementById('imageviewer').style.display = "none";
    document.getElementById('activeimage').src = "";
}
