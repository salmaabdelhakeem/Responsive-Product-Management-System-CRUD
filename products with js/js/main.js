var product={};
var allProducts;
if(localStorage.getItem("products") == null){
    allProducts=[];
}else{
    //string to objecttt
    allProducts=JSON.parse(localStorage.getItem("products"))
    displayProduct()
}

function addproduct(){


//object

 product={
    ProductName:document.getElementById("PName").value,
    ProductPrice:document.getElementById("PPrice").value,
    productCat:document.getElementById("PCat").value,
    ProductDes:document.getElementById("PDesc").value
}
console.log(product)
//array of objects
allProducts.push(product);

//object to string 3shan l local msh bt2bl ghyr strings
localStorage.setItem("products" ,JSON.stringify(allProducts));
console.log(allProducts)


//clear inputs
clearinputs();
//display products
displayProduct();

}

function clearinputs(){


    document.getElementById("PName").value=" ";
    document.getElementById("PPrice").value=" ";

    document.getElementById("PCat").value=" ";
    document.getElementById("PDesc").value=" ";



   document.getElementById("formsubpro").innerHTML=`
   <input name="productName" id="PName" placeholder="product name" class="form form-control my-2">

   <input name="productPrice" id="PPrice" placeholder="product price" class="form form-control my-2">
   <input name="productCat" id="PCat" placeholder="product Category" class="form form-control my-2">
   <input name="productDes" id="PDesc" placeholder="product Description" class="form form-control my-2">
   <div id="form-sub"><button type="submit" class="btn btn-primary" onclick="addproduct()" >submit</button>  </div> 

   `
}
function displayProduct(){
    var counter=``;
    for( var i=0 ; i<allProducts.length ;i++){

        counter+=`
        <tr >
            <td>${allProducts[i].ProductName}</td>
            <td>${allProducts[i].ProductPrice}</td>
            <td>${allProducts[i].productCat}</td>
            <td>${allProducts[i].ProductDes}</td>  
            <td ><button class="btn btn-outline-info" onclick="retrieveInputs(${i})">upate</button></td>
            <td ><button class="btn btn-outline-danger" onclick="DeleteProduct(${i})">Delete</button></td>

        </tr>
        `
    }

    console.log(counter)
document.getElementById("tbody").innerHTML=counter;
}

function DeleteProduct(index){
    console.log("del")

    allProducts.splice(index ,1)
    displayProduct()
    //local storage

    localStorage.setItem("products" , JSON.stringify(allProducts))

}

function testtt(searchkey){
   console.log(searchkey)
   var counter=``
   
   for (let i = 0; i < allProducts.length; i++) {
    if(allProducts[i].ProductName.toLocaleLowerCase().includes(searchkey.toLocaleLowerCase()))
    {
        counter+=`
        <tr >
        <td>${allProducts[i].ProductName}</td>
        <td>${allProducts[i].ProductPrice}</td>
        <td>${allProducts[i].productCat}</td>
        <td>${allProducts[i].ProductDes}</td>  
        <td ><button class="btn btn-outline-info">upate</button></td>
        <td ><button class="btn btn-outline-danger" onclick="DeleteProduct(${i})">Delete</button></td>

    </tr>
        
        `
    }

    document.getElementById("tbody").innerHTML=counter
   }
}


function retrieveInputs(index){

    console.log(index)

   document.getElementById("PName").value=allProducts[index].ProductName

    document.getElementById("PPrice").value=allProducts[index].ProductPrice
   document.getElementById("PCat").value=allProducts[index].productCat
   document.getElementById("PDesc").value=allProducts[index].ProductDes

   

   document.getElementById("form-sub").innerHTML=`<button class="btn btn-danger" onclick="updateproduct(${index})"> hiiiii</button>`

}

function updateproduct(index){

   //3yza asawy el fl array bl new 
   allProducts[index].ProductName=document.getElementById("PName").value
   allProducts[index].ProductPrice=document.getElementById("PPrice").value
   allProducts[index].productCat=document.getElementById("PCat").value
   allProducts[index].ProductDes=document.getElementById("PDesc").value

clearinputs()
displayProduct()
localStorage.setItem("products" , JSON.stringify(allProducts))
}
