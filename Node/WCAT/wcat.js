// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3  => displays the content of all files in terminal in concatinated form in given order
// 3) node wcat.js -n file1 file 2 file3 OR node wcat.js -n file1 
// Commands 👇
    //node wcat.js f1.txt
    //node wcat.js f1.txt f2.txt f3.txt

    const fs = require("fs");
    // The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
    // let input = process.argv;
    // console.log(input);
    // to remove the 1 and 2 word of command
    let inputArr= process.argv.slice(2);
    console.log(inputArr);
    let filesArr=[];
    let optionsArr = [];

//===============> placed files path in filesArr <=============

    for (let i=0; i<inputArr.length; i++){
        let firstChar=inputArr[i].charAt(0);
        if (firstChar == "-") {
            optionsArr.push(inputArr[i]);
        } else {
            filesArr.push(inputArr[i]);
        }
    }
    console.log("Files to be read are:");
    console.log(filesArr);

// =============>content read and appending starts<=============//

    let content="";
    for (let i = 0; i < filesArr.length; i++) {
        const filesContent = fs.readFileSync(filesArr[i]);
        content= content+filesContent+"\r\n"; // "\r\n" for windows laptop
    }
    console.log("Reading data of files:");
    console.log(content);

    // to create an array of the readed data
    let contentArr = content.split("\r\n");
    console.log("After creating array of files data:");
    console.table(contentArr);

    // to check if options (-s, -n, -b) are present or not
        // let isSpresent = optionsArr.includes("-s");
    let tempArr = [];
    console.log("Replacing extra lines with null in contentArr:");
    if(optionsArr.includes("-s")){
        for (let i = 0; i < contentArr.length; i++) {
            if (contentArr[i]== "" && (contentArr[i-1]== "" || contentArr[i-1] == null)) {
                contentArr[i]=null;
            }
        }
    }
    console.table(contentArr);

    console.log("Pushing data from contentArr to tempArr");
    for (let i = 0; i < contentArr.length; i++) {
        if(contentArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    console.table(tempArr);

    // Replacing contentArr datat with tempArr
    contentArr = tempArr;

    // get the index of options (-n, -b) and compare them to each other and store them in finalOption
    let indexOfN=optionsArr.indexOf("-n");
    let indexOfB=optionsArr.indexOf("-b");
    // if -n or -n is not found '-1' is returned

    let finalOption="";
    // if both options (-n, -b) are present
    if (indexOfN != -1 && indexOfB != -1) {
        if (indexOfN < indexOfB) {
            finalOption = "-n";
        } else {
            finalOption = "-b";
        }
    } 
    // either -n is present or -b is present 
    else {
        if (indexOfN != -1) {
            finalOption = "-n";
        } else if(indexOfB != -1){
            finalOption = "-b";
        }
    }
    console.log(finalOption);

    // calling function for options by evaluating finalOption
    if (finalOption == "-n") {
        modifyContentByN();
    } else {
        modifyContentByB();
    }

    // creating function for option -n:
    function modifyContentByN() {
        for (let i = 0; i < contentArr.length; i++) {
            contentArr[i]=(i+1)+"-> "+contentArr[i];
        }
    }

    function modifyContentByB() {
        let count=1
        for (let i = 0; i < contentArr.length; i++) {
            if (contentArr[i] != "") {
                contentArr[i]=count+"-> "+contentArr[i];
                count++;
            }
        }
    }
        
        
    console.log(contentArr);


