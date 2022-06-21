console.log("You are in gallery");

setTimeout(() => {
  if (db) {
    // video retrieval
    let videoDBTransaction = db.transaction("videos", "readonly");
    let videoStore = videoDBTransaction.objectStore("videos");
    let videoRequest = videoStore.getAll(); //Event driven
    videoRequest.onsuccess = (e) => {
      let videoResult = videoRequest.result;
      let galleryCont = document.querySelector(".main-cnt");
      videoResult.forEach((videoObj) => {
        let mediaElem = document.createElement("div");
        mediaElem.setAttribute("class", "media-cnt");
        mediaElem.setAttribute("id", videoObj.id);

        let videoURL = URL.createObjectURL(videoObj.blobData);

        mediaElem.innerHTML = `
            <div class="media">
            <video src= "${videoURL}" autoplay loop></video>
            </div>
            <div class="delete-btn-cnt"><h4>Delete</h4></div>
            <div class="download-btn-cnt"><h4>Download</h4></div>
            `;

        galleryCont.appendChild(mediaElem);
        let deleteBtn = mediaElem.querySelector(".delete-btn-cnt");
        deleteBtn.addEventListener("click", deleteListener);
        console.log("Deleting media");

        let downloadBtn = mediaElem.querySelector(".download-btn-cnt");
        downloadBtn.addEventListener("click", downloadListener);
      });
    };

    // image retrieval
    let imageDBTransaction = db.transaction("images", "readonly");
    let imageStore = imageDBTransaction.objectStore("images");
    let imageRequest = imageStore.getAll();
    imageRequest.onsuccess = (e) => {
      let imageResult = imageRequest.result;
      let galleryCont = document.querySelector(".main-cnt");
      imageResult.forEach((imageObj) => {
        let mediaElem = document.createElement("div");
        mediaElem.setAttribute("class", "media-cnt");
        mediaElem.setAttribute("id", imageObj.id);

        let imageURL = imageObj.url;
        mediaElem.innerHTML = `
            <div class="media">
                <img src="${imageURL}" />
            </div>
            <div class="delete-btn-cnt"><h4>Delete</h4></div>
            <div class="download-btn-cnt"><h4>Download</h4></div>
            `;
        galleryCont.appendChild(mediaElem);

        let deleteBtn = mediaElem.querySelector(".delete-btn-cnt");
        deleteBtn.addEventListener("click", deleteListener);

        let downloadBtn = mediaElem.querySelector(".download-btn-cnt");
        downloadBtn.addEventListener("click", downloadListener);
      });
    };
  }
}, 100);

// Remove media from UI and DB
function deleteListener(e) {
  let id = e.target.parentElement.parentElement.getAttribute("id");
  console.log("Deleting media");
  let mediaType = id.slice(0, 3);
  // DB removal
  if (mediaType === "vid") {
    let videoDBTransaction = db.transaction("videos", "readwrite");
    let videoStore = videoDBTransaction.objectStore("videos");
    videoStore.delete(id);
  } else if (mediaType === "img") {
    let imageDBTransaction = db.transaction("images", "readwrite");
    let imageStore = imageDBTransaction.objectStore("images");
    imageStore.delete(id);
  }

  // UI removal
  e.target.parentElement.parentElement.remove();
}

// Download media from UI and DB
function downloadListener(e) {
    console.log("Downloading Media");
  let id = e.target.parentElement.parentElement.getAttribute("id");
  let mediaType = id.slice(0, 3);

  if (mediaType === "vid") {
    let videoDBTransaction = db.transaction("videos", "readonly");
    let videoStore = videoDBTransaction.objectStore("videos");
    let videoRequest = videoStore.get(id);
    videoRequest.onsuccess = () => {
      let videoResult = videoRequest.result;
      let videoURL = URL.createObjectURL(videoResult.blobData);
      let a = document.createElement("a");
      a.href = videoURL;
      a.download = "video.mp4";
      a.click();
    };
  } else if (mediaType === "img") {
    let imageDBTransaction = db.transaction("images", "readonly");
    let imageStore = imageDBTransaction.objectStore("images");
    let imageRequest = imageStore.get(id);
    imageRequest.onsuccess = () => {
      let imageResult = imageRequest.result;
      let imageURL = imageResult.url;
      let a = document.createElement("a");
      a.href = imageURL;
      a.download = "image.jpg";
      a.click();
    };
  }
}
