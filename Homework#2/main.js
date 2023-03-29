let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (myevent) => {
  event.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Este mensaje aparece si no escribes nada en el TEXTAREA...";
    console.log("TEXTAREA vacio");
  } else {
    msg.innerHTML = "Este mensaje aparece si escribes en el TEXTAREA... ";
    console.log("TEXTAREA con texto");
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      <i onClick="duplicatePost(this)" class="fas fa-copy"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (myevent) => {
  myevent.parentElement.parentElement.remove();
  console.log("El usuario presiono la opción de borrar")
};

let editPost = (myevent) => {
  input.value = myevent.parentElement.previousElementSibling.innerHTML;
  myevent.parentElement.parentElement.remove();
  console.log("El usuario presiono la opción de editar")
};


let duplicatePost = (myevent) => {
  let post = myevent.parentElement.parentElement;
  let newPost = post.cloneNode(true);
  posts.insertBefore(newPost, post.nextSibling);
  console.log("El usuario presiono la opción de duplicar")
};


