function login() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
 
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "JSESSIONID=3E7AFACF2B2324B24BE5C8762B3C8C5A");
  
  const raw = JSON.stringify({
    "email": email,
    "password": password
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://localhost:8080/webProjectServer/login", requestOptions)
    .then((response) => response.text())
    .then(token => {
      if (token.includes("Token:")) {
          localStorage.setItem("jwt", token.split("Token: ")[1]);
          alert("Login successful!");
          window.location.href = "home.html";
      } else {
          alert("Invalid email or password.");
      }
  })
    .catch((error) => console.error(error));

}

function register() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "JSESSIONID=3E7AFACF2B2324B24BE5C8762B3C8C5A");

const raw = JSON.stringify({
  "username": name,
  "email": email,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/webProjectServer/register", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    console.log(result)
    if(result == "true"){
        alert("succecfully registered");
    }else{  
        alert("Invalid credentials");
    }
})
  .catch((error) => console.error(error));
} 