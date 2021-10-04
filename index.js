var btnPlusMain=document.querySelector("#btnPlusMain");
var btnCross=document.querySelector("#btn-cross");
var btnAddNewList=document.querySelector("#btn-add-new-list"); var newListHeading="Null";
var btnAddNewItem=document.querySelector("#btn-add-new-item"); var newCardItem="Null";

// var deleteCard=document.querySelector("#deleteCard");
// console.log(deleteCard);
var cards;


btnPlusMain.addEventListener("click", (e)=>{
    
    document.querySelector("#main-page").style.filter= "blur(5px)";
    document.querySelector("#pop-up-add-list").style.visibility="visible";
    console.log(e.target.parentElement.parentElement.parentElement);
    // e.target.parentElement.parentElement.parentElement.remove();
});


btnCross.addEventListener("click", ()=>{
    document.querySelector("#main-page").style.filter= "blur(0px)";
    document.querySelector("#pop-up-add-list").style.visibility="hidden";
    document.querySelector("#pop-up-add-item").style.visibility="hidden";
});

// deleteCard.addEventListener("onclick",(e)=>{
//     console.log(e.target.parentElement.parentElement.parentElement);
// },false)
// var delCard=document.querySelector("#deleteCard");
//     delCard.onclick=deleteCard();
 

function deleteCard(e){
    
    e.parentElement.parentElement.parentElement.removeChild(e.parentElement.parentElement);

}
var cardObject=null;
function addItem(e){
    console.log("add item");
    cardObject=e.parentElement.parentElement;
    console.log(cardObject);
    document.querySelector("#main-page").style.filter= "blur(5px)";
    document.querySelector("#pop-up-add-item").style.visibility="visible";
}

btnAddNewItem.addEventListener("click",()=>{
    // console.log("added")
    newCardItem=document.querySelector("#text2").value;
    // var newPar=document.createElement("p");
    var newPar=document.querySelector("#itemPrototype").cloneNode(true);
    console.log(newPar);
    newPar.querySelector("p").textContent=newCardItem;
    newPar.removeAttribute("id");
    newPar.style.display="flex";
    cardObject.querySelector(".dynamicContenet").appendChild(newPar);
    document.querySelector("#main-page").style.filter= "blur(0px)";
    document.querySelector("#pop-up-add-item").style.visibility="hidden";
})

function minus(e){
    console.log("deleted");
    var delContntParnt=e.parentElement;
    // console.log(delContntParnt);
    console.log(delContntParnt.querySelector("p").textContent);
    var txtdeleted=delContntParnt.querySelector("p").textContent;
    delContntParnt.removeChild(delContntParnt.querySelector("p"));
    var crtpara=document.createElement("p");
    
    var crtcont=document.createElement("del");
    var txtnodecon=document.createTextNode(txtdeleted);
    crtcont.appendChild(txtnodecon);
    console.log(crtcont);
    crtpara.appendChild(crtcont);
    delContntParnt.insertBefore(crtpara,e);
    delContntParnt.querySelector("p").style.color="red";
    delContntParnt.querySelector("button").style.display="none";
    delContntParnt.querySelector("p").style.margin="auto";

}

btnAddNewList.addEventListener("click", ()=>{
    newListHeading=document.querySelector("#text").value;
    document.querySelector("#main-page").style.filter= "blur(0px)";
    document.querySelector("#pop-up-add-list").style.visibility="hidden";
    document.querySelector(".when-empty").style.display="none";


    var newCard=document.querySelector("#cardprototype").cloneNode(true);
    var txtNode=document.createTextNode(newListHeading);
    newCard.querySelector("#headingContent").appendChild(txtNode);
    newCard.style.display="block";
    newCard.removeAttribute("id");
    document.querySelector(".cards-container").appendChild(newCard);


    
    // var element=document.createElement("div");
    // var ele1=document.createElement("p");
    // var txtNode=document.createTextNode(newItemHeading);
    // ele1.appendChild(txtNode);
    // var ele2=document.createElement("hr");

    // var elediv=document.createElement("div");
    // elediv.className="down-btns"

    // var elebtn1=document.createElement("button");
    // elebtn1.id="btnDelete";
    // var ele3=document.createElement("i");
    // ele3.className="fas fa-trash";
    // elebtn1.appendChild(ele3);

    // var elebtn2=document.createElement("button");
    // elebtn2.id="btnAddCard";
    // var ele4=document.createElement("i");
    // ele4.className="fas fa-plus-circle";
    // elebtn2.appendChild(ele4);

    // elediv.appendChild(elebtn1);
    // elediv.appendChild(elebtn2);
    // element.appendChild(ele1);
    // element.appendChild(ele2);
    // element.appendChild(elediv);
    
    // element.className="card";
    // document.querySelector(".cards-container").appendChild(element);
    // cards=document.querySelector(".card#down-btns#btnDelete");


    // var copy="<div class=card ><div class=content><p >"+newItemHeading+"</p><hr><br></div><div class=down-btns><i class=fas fa-trash></i><i class=fas fa-plus-circle></i></div></div>";
    // document.querySelector(".cards-container").innerHTML=copy;
    // // document.querySelector(".cards-container.card").className="fas fa-trash";
    // document.querySelector(".cards-container").appendChild(copy);
    
    
})
// cards.addEventListener("click",(e)=>{
//     e.target.parentElement.parentElement.parentElement.remove();
// })


//MOBILE VERSION CHALUUU






