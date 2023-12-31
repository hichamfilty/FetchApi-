document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText() {
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    });
}

function getUsers() {
  fetch('10users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h1>users</h1>';
      data.forEach((user) => {
        output += `
              <ul>
              <li>Id: ${user.id}</li>
              <li>Name: ${user.name}</li>
              <li>Email: ${user.email}</li>
              </ul>
              `;
      });
      document.getElementById('output').innerHTML = output;
    });
}
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
          let output = ``
          data.forEach(post) {
              console.log(data);
              
          }
      })
}

function addPost (){
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
           'accept': 'application/json, text/plain, */*'
           'content-type': 'application/json' 
        },
        body: JSON.stringify({title:title, body:body})

    })
    .then((res) => res.json())
    .then((data) => console.log(data);
    )
}