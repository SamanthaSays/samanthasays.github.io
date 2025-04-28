var modal = document.getElementById("mainModal");
var image = document.getElementById("mainImage");
var modalImage = document.getElementById("mainImageModal");

image.onclick = function(){
    modal.style.display = "block";
    modalImage.src = this.src;
}

var span = document.getElementsByClassName("galleryModalClose")[0];

span.onclick = function(){
    modal.style.display = "none";
}