var images = ["https://cdn2.vectorstock.com/i/1000x1000/70/61/dark-skinned-mother-and-baby-vector-23827061.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzJQLeK7xZie8IHctClCmGIaWNewz3e6YAQ&usqp=CAU", 
 "https://img.freepik.com/free-vector/portrait-father-son-hugging-celebrate-father-day_10045-625.jpg?w=2000", 
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9yXSLY_ihPrmcT1MmlMIBYx7Hi2GzB-oWg&usqp=CAU"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
