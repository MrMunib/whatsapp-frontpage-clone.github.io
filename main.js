let ellipsis = document.querySelector(".fa-ellipsis-v");
let dialog = document.querySelector(".dialog");
let k = 0;
let imgHolder = document.querySelector(".imageholder");
let catcher = document.querySelector(".catcher");
let dobtn = document.getElementById("btn");
let video = document.querySelector("video");

ellipsis.addEventListener("click", function () {
  if (k == 0) {
    dialog.style.display = "block";
    k = 1;
  } else {
    dialog.style.display = "none";
    k = 0;
  }
});

function dabba() {

  if (catcher.files[0]) {
    let file = catcher.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
      imgHolder.src = e.target.result;
    };
    reader.readAsDataURL(file);

    if (k == 0) {
        dialog.style.display = "block";
        k = 1;
      } else {
        dialog.style.display = "none";
        k = 0;
      }


  } else {
    alert("Please select a file first.");
  }
}


document.getElementById('accessCamera').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor action

    // Access the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // Get the video element and set its source to the camera stream
            const video = document.getElementById('video');
            video.srcObject = stream;
        })
        .catch(function(error) {
            console.error('Error accessing the camera:', error);
            alert('Could not access the camera. Please check your permissions.');
        });
});

