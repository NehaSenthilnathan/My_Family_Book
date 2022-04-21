var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "granny.jpeg", "dad.webp", "mom.jpeg", "sis.png"];
var names = ["Family Book", "Grandmother", "Dad", "Mom", "Me and my sister"];

var i = 0;
function update(){

    i++;
    var number_of_family_members_in_array = 4;
    if(i>number_of_family_members_in_array){
        i = 0;
    }
    var updated_image = images[i];
    var updated_names = names[i];

    document.getElementById("family_member_image").src = updated_image
    document.getElementById("family_member_name").innerHTML = updated_names

}