const turnPage = document.querySelector('.nxtPage-number');
turnPage.forEach((element,index) => {
    element.onclick = ()=>{
        console.log("clicked",index)
    }
    
});
console.log(turnPage)
turnPage.onclick = ()=>{
    console.log("clicked")
}


// console.log(turnPage);
// turnPage.fo((element,index) => {
//     element.onclick = ()=>{
        // const pageTurnId = turnPage.getAttribute('data-page')
        // console.pageTurnId;
        // const pageTurn = document.getElementById(pageTurnId);
        
        // if(pageTurn.classList.contains('turn')){
        //     pageTurn.classList.remove('turn')
        // } else {
        //     pageTurn.classList.remove('turn');
        // }
//     }
// });


