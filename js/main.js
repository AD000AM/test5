// var nameInput= document.getElementById('productName')
// var priceInput= document.getElementById('productPrice')
// var categoryInput= document.getElementById('productCategory')
// var saleInput= document.getElementById('productSale')
// var descInput= document.getElementById('productDescription')
// var productlist=[];
// if (localStorage.getItem('productlist') !=null){
//     productlist= JSON.parse(localStorage.getItem('productdata'))
//     displaydata()
// }

// function addProduct(){
//     var product={
//         name: nameInput.value,
//         price: priceInput.value,
//         category: categoryInput.value,
//         desc: descInput.value,
//         sale: saleInput.checked
        

//     }
//     productlist.push(product)
//     localStorage.setItem('productData', JSON.stringify(productlist))
//     displaydata()
// }

// function displaydata(){
//     var temp= ''
//         for (var i=0; i< productlist.length; i++){
//         temp+= `<tr>
//         <td>`+i+`</td>
//         <td>`+productlist[i].name+`</td>
//         <td>`+productlist[i].price+`</td>x  
//         <td>`+productlist[i].category+`</td>
//         <td>`+productlist[i].sale+`</td>
//         <td>`+productlist[i].desc+`</td>
//         <td> <button class="btn btn-warning"> Update</button> </td>
//         <td> <button  onclick="deleteproduct(`+i+`)" class="btn btn-danger"> Delete</button> </td>
//     </tr>`
// }




// document.getElementById('myData').innerHTML=temp
// }

// function deleteproduct(index){
//         productlist.splice(index,1)
//         localStorage.setItem('productData', JSON.stringify(productlist))
//         displaydata()
// }

var nameInput = document.getElementById('productName')
var descInput = document.getElementById('productDescription')
var searchinput = document.getElementById('searchInput')
var productlist = []
if (localStorage.getItem('productlist') !=null){
    productlist = JSON.parse(localStorage.getItem('productlist'))
}

console.log(productlist);

function addProduct() {
    var product ={
        name:nameInput.value,
        desc:descInput.value,
        search:searchinput.value

    }

    productlist.push(product)
    localStorage.setItem('productlist',  JSON.stringify(productlist))
    showData()
}

function showData(){
    var result = ""
    for(i = 0; i <productlist.length ;i++){
        result+=`<tr>
        <td>`+i+`</td>
        <td>`+productlist[i].name+`</td>
        <td> <button onclick="visitWebsite()" type="button" class="btn  btn-outline-success "><i class="fas fa-eye"></i> visit</button> </td>
        <td> <button  onclick="deleteproduct(`+i+`)"   class="btn btn-danger"><i class="fas fa-trash-alt"></i> Delete</button> </td>
    </tr>`
    }

    document.getElementById("myData").innerHTML= result
    
}

function deleteproduct(x){
    productlist.splice(x,1)
    showData()
    localStorage.setItem('productlist',  JSON.stringify(productlist))


}


function searching(){
    var result = ""
    var searchval = searchinput.value.toLowerCase()
    console.log(searchval);
    for (var i=0; i< productlist.length; i++){
        if (productlist[i].name.toLowerCase().includes(searchval) == true){
            result+=`<tr>
            <td>`+i+`</td>
            <td>`+productlist[i].name+`</td>
            <td> <button onclick="visitWebsite()" type="button" class="btn  btn-outline-success "><i class="fas fa-eye"> visit</button> </td>
            <td> <button  onclick="deleteproduct(`+i+`)"   class="btn btn-danger"> <i class="fas fa-trash-alt"></i> Delete</button> </td>
        </tr>`
        }
            
    }
    document.getElementById("myData").innerHTML= result
}
function visitWebsite(){
    var url=document.getElementById("productDescription").value;
    window.location.href= url

}
