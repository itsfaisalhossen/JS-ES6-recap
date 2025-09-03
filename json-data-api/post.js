console.log("hello");

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  //1.  get the container
  const postContainerEl = document.getElementById("post-container");
  postContainerEl.innerHTML = "";

  posts.forEach((post) => {
    //2. create html element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
     <div class="post-card">
        <h2> ${post.title}</h2>
        <p>${post.body}</p>
      </div>
      `;
    //3. add li into container
    postContainerEl.appendChild(postCard);
  });
};

loadPost();
