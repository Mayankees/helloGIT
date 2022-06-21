// Open database
// create ObjectStore
// Make Transcation

let db;

let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success", (e) => {
  console.log("DB success");
  db = openRequest.result;
});
openRequest.addEventListener("error", (e) => {
  console.log("DB error");
});
openRequest.addEventListener("upgradeneeded", (e) => {
  console.log("DB upgraded");
  db = openRequest.result;

  db.createObjectStore("videos", { keyPath: "id" });
  db.createObjectStore("images", { keyPath: "id" });
});
