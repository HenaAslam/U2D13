const getBooks=async()=>{
    try{
    let res=await fetch('https://striveschool-api.herokuapp.com/books')
    let data=await res.json()
   // console.log(data)
        let container=document.getElementById('booksGoHere')
        let arrayOfBooks=data.map((singleBook)=>{
            return `<div class="col-6 col-md-3 mb-3">
            <div class="card" >
            <img src="${singleBook.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${singleBook.title}</h5>
              <div class="d-flex justify-center-between">
              <button type="button" class="btn btn-outline-dark cart" >Add to cart</button>
              <button type="button" class="btn btn-outline-dark ml-auto">Skip</button>
              </div>
            </div>
            </div>
          </div>`
        }).join("")
        container.innerHTML=arrayOfBooks
        
    }
    catch(error){
        console.log(error)
    }

}
window.onload=()=>{
getBooks()
}



function addToCart(){

        let btns=document.querySelectorAll('.cart')
        console.log(btns)
//console.log(btns)
//btns.forEach((btn) => {
    //console.log(btn)
    //btn.closest('.card').innerHTML+=`<span class="badge badge-danger">Added to cart</span>`
//});
 
   
}


addToCart()
