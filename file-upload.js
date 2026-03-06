const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const status = document.getElementById("status");

fileInput.addEventListener("change", () => {

const file = fileInput.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

preview.innerHTML = `<img src="${e.target.result}" />`;

}

reader.readAsDataURL(file);

}

});

function uploadFile(){

const file = fileInput.files[0];

if(!file){
status.innerText = "Please select a file!";
return;
}

status.innerText = "Uploading...";

setTimeout(()=>{

status.innerText = "Upload Successful!";

},2000);

}
