const dialogRef = document.getElementById("dialogBox");
const imgGallerie = document.getElementById("imgSelector");
const imgBox = document.getElementById("ImgBox");
const closeBtn = document.getElementById("close-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const counter = document.getElementById("counter");
const filname = document.getElementById("filname");

let myImgs =[
    "Bild_1.jpg",
    "Bild_2.jpg",
    "Bild_3.jpg",
    "Bild_4.jpg",
    "Bild_5.jpg",
    "Bild_6.jpg",
    "Bild_7.jpg",
    "Bild_8.jpg",
];

let currentIndex = 0;

function updateDialogImage(){
    const currentFile = myImgs[currentIndex];
    imgBox.innerHTML = getNotesHtml(myImgs[currentIndex]);
    if (counter){
        counter.textContent = `${currentIndex + 1} / ${myImgs.length}`;
    }
    if (filname) {
        filname.textContent = currentFile;
    }
}

function openDialog(imgName) {
    dialogRef.showModal();

    imgBox.innerHTML = getNotesHtml(imgName);
}

function getNotesHtml(myImgs){
    return`<div class= "dialogGallery">
                        <img class="dialogGallery" src="../assets/img/gallerie/${myImgs}" alt="${myImgs}">
                 </div>`;
}

function openDialog(imgName){
    let idx = myImgs.indexOf(imgName);
    if(idx === -1)
        idx = myImgs.findIndex((n) => n.toLowerCase() === imgName.toLowerCase());
    if(idx !== -1) currentIndex = idx;
    dialogRef.showModal();
    updateDialogImage();

    document.addEventListener("keydown", arrowControl);
}

function closeDialog(){
    dialogRef.close();
}

dialogRef.addEventListener("click", function (event){
    if (event.target === dialogRef){
        dialogRef.close();
    }
});

function updateDialogImage(){
    const currentFile = myImgs[currentIndex];
    imgBox.innerHTML = getNotesHtml(myImgs[currentIndex]);
    if(counter){
        counter.textContent = `${currentIndex + 1} / ${myImgs.length}`;
    }
    if (filname){
        filname.textContent = currentFile;
    }
}

function prev(){
    currentIndex = (currentIndex -1 + myImgs.length) % myImgs.length;
    updateDialogImage();
}

function next(){
    currentIndex = (currentIndex + 1 ) % myImgs.length;
    updateDialogImage();
}

function closeDialog(){
    document.removeEventListener("keydown", arrowControl);
    dialogRef.close();
}

function arrowControl(e){
    if(e.key === "ArrowRight"){
        next();
    }
    if(e.key === "ArrowLeft"){
        prev();
    }
}