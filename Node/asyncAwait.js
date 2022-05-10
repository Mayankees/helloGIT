// Promise 

function fP() {
    return new Promise(function (resolve, reject) {
        resolve(2);
    })
}

fP().then(function (data) {
    console.log(data);
})

fP().catch(function (err) {
    console.log(err);
})


// Async function syntax

async function f() {
    return 1;
}

f().then(function (data) {
    console.log(data);
});

// f().then(alert);

// Await 

// The keyword await makes JavaScript wait until that promise settles and returns its result.
async function fAwait() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve("done!")
        }, 4000);
    })

    let result = await promise;
    console.log("OK");
    console.log(result);
}

// The function execution “pauses” at the line 40 and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in 4 second.

// Await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

// fAwait();
console.log("waiting.....");

async function showAvatar() {
  // read our JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();


// try-catch-finally
try {
    console.log("I'm trying");
} catch (error) {
    console.log(error);
} finally{
    console.log("Finally it's my turn");
}

try {
    throw new Error("Error found")
} catch (error) {
    console.log(error);
} finally{
    console.log("I still run");
}