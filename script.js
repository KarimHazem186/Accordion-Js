var heading = document.getElementsByClassName('accordion');
// console.log(heading[0]);

var i;
for (i = 0; i < heading.length; i++){
    heading[i].addEventListener('click',function(){
        this.classList.toggle('active'); // classList to add class | Toggle do add or remove class
        var desc = this.nextElementSibling; // this returned on heading

        // console.log(desc);
        // console.log(desc.scrollHeight); // get height of description and padding
       /* if (desc.style.display == "block"){
            desc.style.display = "none";
        } else {
            desc.style.display = "block";
        }*/
        /**************ORRRRRRRRRR******************/
        if(desc.style.maxHeight){
            desc.style.maxHeight = null;
        } else {
            desc.style.maxHeight = desc.scrollHeight + "px";
        }

    });
}