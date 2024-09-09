turnPagebtn = document.querySelectorAll('.nxtPage');
turnPagebtn.forEach((element, index) => {

    element.onclick = () => {
        const turnPageID = element.getAttribute('data-page');
        const turnPage = document.getElementById(turnPageID);

        if (turnPage.classList.contains('turn')) {
            turnPage.classList.remove('turn');
            setTimeout(() => {
                turnPage.style.zIndex = 20 - index;
            }, 500);
        } else {
            turnPage.classList.add('turn');
            setTimeout(() => {
                turnPage.style.zIndex = 20 + index;
            }, 500);

        }

    }
});


const contactbtn = document.querySelector('.contactbtn');

const pages = document.querySelectorAll('.book-page.page-right');

contactbtn.onclick = () => {
    pages.forEach((page,index)=>{
    setTimeout(() => {
        page.classList.add('turn');

        setTimeout(() => {
            page.style.zIndex = 20+index;
        }, 500);
    },(index+1)*200+100)
})
}

let totalPages  = pages.length;
let pageNumber  = 0;

function reverseIndex(){
    pageNumber-- ;
    if(pageNumber<0){
        pageNumber  = totalPages-1;
    }
}

 const profile = document.querySelector('.profile');

 profile.onclick = ()=>{
    pages.forEach((_,index)=>{
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10+index
            }, 500);
            
        }, (index+1)*200 +100);
    })
 }

 const coverRight  = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

 setTimeout(() => {
    coverRight.classList.add('turn')
 }, 2100);

 setTimeout(() => {
    coverRight.style.zIndex= -1;
 }, 2800);

 setTimeout(() => {
    pageLeft.style.zIndex= 20;
 }, 3200);

 pages.forEach((_,index)=>{
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10+index
        }, 500);
        
    }, (index+1)*200 +2100);
})
