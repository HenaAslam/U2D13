
function getBooks(data){
    let container=document.getElementById('booksGoHere')
        let arrayOfBooks=data.map((singleBook)=>{
            return `<div class="col-6 col-md-3 mb-3">
            <div class="card" >
            <img src="${singleBook.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${singleBook.title}</h5>
              <p>asin:${singleBook.asin}</p>
              <p>Price:${singleBook.price}</p>
              <div class="d-flex justify-center-between align-items-center">
              <button type="button" class="btn btn-outline-dark cart"  >Add </button>
              <button type="button" class="btn btn-outline-dark ml-auto hide">Skip</button>
              </div>
            </div>
            </div>
          </div>`
        }).join("")
        container.innerHTML=arrayOfBooks
        hideTheCard()
        addToCart()
        
        
}





const fetchBooks=async()=>{
    try{
    let res=await fetch('https://striveschool-api.herokuapp.com/books')
    let data=await res.json()
   // console.log(data)
        
    
         getBooks(data)
        
    }
    catch(error){
        let alert=document.getElementsByClassName('alert')[0]
        alert.classList.replace("d-none","d-block")
        setTimeout(() => {
            location.reload()
        }, 3000);

        console.log(error)
    }

}
// function handleOnKeyUp(event){
//     let value= event.target.value
//     arrayofChildren=[]
//     let container=document.getElementById('booksGoHere')
//     arrayofChildren.push(container.childNodes)
//     let NodeList=arrayofChildren[0]
//     NodeList.filter((item)=>{
//         console.log(item.childNodes[1].childNodes[3].childNodes[1].innerText)
//     })
// }
// function filterSearch(){


// }
    
    
window.onload= async ()=>{
await fetchBooks();
//await addToCart();

}




function addToCart(){
    let list=[]
    let btns=document.querySelectorAll('.cart')
    //console.log(btns)
    btns.forEach(btn => {
        btn.addEventListener("click",function(){
            let card=btn.closest('.card')
            let where=document.querySelector('.modal-body')
           //btn.innerHTML=`<i class="bi bi-check-lg"></i>Added`
           //btn.classList.replace("btn-outline-dark","btn-outline-success")
            where.innerHTML+=`<div class="d-flex justify-content-between mb-3">
             <li class="title">${card.childNodes[3].childNodes[1].innerHTML}</li>
            <button type="button" class="btn btn-outline-danger deleteBtn" >Delete</button>
            </div>`
        
          
            list.push(card)
            card.style.position="relative"
            btn.closest('.card').innerHTML+=`<span class="badge badge-danger position-absolute">Added to cart</span>`

        
            deleteFromCart()
        
        })
    });
    console.log(list)
}


function hideTheCard(){
    let btns=document.querySelectorAll('.hide')
    btns.forEach(btn=>{
        btn.addEventListener("click",function(){
            let cardToRemove=btn.closest('.card')
            let parent=cardToRemove.parentNode
           
            parent.remove()
        })
    })
}




 function deleteFromCart(){
    let btns=document.querySelectorAll('.deleteBtn')
    btns.forEach(btn => {
        btn.addEventListener("click", function(){

            let title=btn.previousElementSibling.innerText
            //console.log(title)
            let cardtitles=document.querySelectorAll('.card-title')
            //console.log(cardtitles)
          for(i=0;i<cardtitles.length;i++){
            if(cardtitles[i].innerText===title){
                //console.log(cardtitles[i].innerText)
                let something=cardtitles[i].parentElement.parentElement.childNodes
             
                something[5].remove();
                

               
            }
          }

            btn.closest('div').remove()
         
           })
    });
   

 }

 function emptyCart(){
    let btn=document.getElementById('empty')
    let cartNode=document.getElementsByClassName('modal-body')[0];
    btn.addEventListener("click",function(){
      
     cartNode.remove()
    })
 }
 emptyCart()

//  function counter(){
//     let where=document.querySelector('.count')
//  }