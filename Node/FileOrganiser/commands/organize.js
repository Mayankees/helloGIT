// creating organize commands
const fs = require("fs");
const path = require("path");
let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  images: ["png", "jpg", "jpeg"],
};

function organize(srcPath) {
  // 1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns the current working directory of the Node.js process.
    // console.log(srcPath);   //undefined
    srcPath = process.cwd();
    // console.log("source path is ", srcPath);
  }

  // 2. to create a directory -> oganized files
  // let organizedFiles=srcPath + "/" + "organized_files";
  let organizedFiles = path.join(srcPath, "organized_files");
  // console.log(organizedFiles);
  if (!fs.existsSync(organizedFiles)) {
    fs.mkdirSync(organizedFiles);
  } else {
    console.log("folder already exist");
  }

  //3. scan the entire srcPath(downloads folder in this case)

  //Reads the contents of the directory.-> basically reads the names of files present in directory

  let allFiles = fs.readdirSync(srcPath);
  //   console.log(allFiles);

  //4.traverse over all the files and classify them on the basis of their extension (.pdf , .mp3)
  for (let i = 0; i < allFiles.length; i++) {
    let ext = allFiles[i].split(".")[1];
    // let ext = path.extname(allFiles[i]);
    // console.log(ext);

    let fullPathOfFile = path.join(srcPath, allFiles[i]);
    // console.log(fullPathOfFile);

    // 1. check if it is a file or folder
    //lstatsync gives the information regarding the link provided ,
    let isFile = fs.lstatSync(fullPathOfFile).isFile(); //true-> file hai to  or false-> agar folder h
    // console.log(allFiles[i]+" is "+ isFile);

    if (isFile) {
      // 1.1 get folder from extension
      let folderName = getFolderName(ext);
      //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)

      //source    //filePath    //pasteTo
      copyFilesToDest(srcPath, fullPathOfFile, folderName);
    }
  }
}

function getFolderName(extension) {
  for (const key in types) {
    // console.log(key);
    for (let i = 0; i < types[key].length; i++) {
      if (types[key][i] == extension) {
        return key;
      }
    }
  }
  return "miscellaneous";
}

function copyFilesToDest(srcPath, fullPathOfFile, folderName) {
  //1. folderName ka path banana h
  let destFolderPath = path.join(srcPath, "organized_files", folderName); //....../downloads/organized_files/archives
  // console.log(destFolderPath);
  //   2. check if folder exists, if not create one

  if (!fs.existsSync(destFolderPath)) {
    fs.mkdirSync(destFolderPath);
  }

  //  3. copy files from source to destination folder
  let fileName = path.basename(fullPathOfFile);
  let destFileName = path.join(destFolderPath, fileName);

  // source       // destination
  fs.copyFileSync(fullPathOfFile, destFileName);
}

let srcPath =
  "C:\\Users\\LethalProtector\\Desktop\\Mayank\\WebDev\\Node\\FileOrganiser\\downloads";

organize(srcPath);

module.exports = {
  organize: organize,
};
