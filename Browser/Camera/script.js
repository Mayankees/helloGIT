let video = document.querySelector("video");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let recorderBtnCont = document.querySelector(".record-btn-cont");
console.log(recorderBtnCont);
console.log(captureBtnCont);
let recorderBtn = document.querySelector(".record-btn");
let timer = document.querySelector(".timer");
let counter = 0;
let filterColor = "transparent";
let filterLayer = document.querySelector(".filter-layer");
let allFilters = document.querySelectorAll(".filter");
var uid = new ShortUniqueId();

let recorder;
let constraint = {
  video: true,
  // audio: true,
};
let shouldRecord = false;

navigator.mediaDevices.getUserMedia(constraint).then((stream) => {
  video.srcObject = stream;

  recorder = new MediaRecorder(stream);
  recorder.addEventListener("start", (e) => {
    // memory
    chunks = [];
    console.log("recording start");
  });

  recorder.addEventListener("dataavailable", (e) => {
    chunks.push(e.data);
    console.log("recording pushed in chunks");
  });

  recorder.addEventListener("stop", (e) => {
    // convert video into buffer
    let blob = new Blob(chunks, { type: "video/mp4" });
    console.log("recording stopped");
    console.log(blob);

    // download video on desktop
    // let videoURL = URL.createObjectURL(blob);
    // console.log(videoURL);
    // let a = document.createElement("a");
    // a.href = videoURL;
    // a.download = "video.mp4";
    // a.click();

    // store in database
    if (db) {
      let videoID = uid();
      console.log(videoID);
      let dbTransaction = db.transaction("videos", "readwrite");
      let videoStore = dbTransaction.objectStore("videos");
      let videoEntry = {
        id: `vid-${videoID}`,
        blobData: blob,
      };
      videoStore.add(videoEntry);
    }
  });
});

// clickPhoto
captureBtnCont.addEventListener("click", () => {
  captureBtn.classList.add("scale-capture");
  let canvas = document.createElement("canvas");
  let tool = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  // drawing image on canvas
  tool.drawImage(video, 0, 0, canvas.width, canvas.height);

  // applying filters
  tool.fillStyle = filterColor;
  tool.fillRect(0, 0, canvas.width, canvas.height);

  // download image
  let imageURL = canvas.toDataURL();
  // let a = document.createElement("a");
  // a.href = imageURL;
  // a.download = "";
  // a.click();
  // // let img = document.createElement("img");
  // // img.src = imageURL;
  // // document.body.append(img);
  console.log("Photo clicked");

  // storing image in database
  if (db) {
    let imageID = uid();
    let dbTransaction = db.transaction("images", "readwrite");
    let imageStore = dbTransaction.objectStore("images");
    let imageEntry = {
      id: `img-${imageID}`,
      url: imageURL,
    };
    imageStore.add(imageEntry);
  }

  setTimeout(() => {
    captureBtn.classList.remove("scale-capture");
  }, 1010);
});

recorderBtnCont.addEventListener("click", (e) => {
  shouldRecord = !shouldRecord;
  if (shouldRecord) {
    // record start
    recorder.start();
    recorderBtn.classList.add("scale-recorder");

    // start timer
    startTimer();
  } else {
    // stop record
    recorder.stop();
    recorderBtn.classList.remove("scale-recorder");

    // stop timer
    stopTimer();
  }
});

let timerID;
function startTimer() {
  timer.style.display = "block";
  function displayTimer() {
    let totalSeconds = counter;

    let hours = Number.parseInt(totalSeconds / 3600);
    totalSeconds %= 3600;

    let minutes = Number.parseInt(totalSeconds / 60);
    totalSeconds %= 60;

    let seconds = totalSeconds;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    timer.innerText = `${hours}:${minutes}:${seconds}`;

    counter++;
  }
  timerID = setInterval(displayTimer, 1000);
  counter = 0;
}

function stopTimer() {
  clearInterval(timerID);
  timer.innerText = "00:00:00";
  timer.style.display = "none";
}

// adding filter
allFilters.forEach((filterElem) => {
  filterElem.addEventListener("click", () => {
    console.log(`${filterElem.style}`);
    filterColor =
      getComputedStyle(filterElem).getPropertyValue("background-color");
    filterLayer.style.backgroundColor = filterColor;
  });
});
