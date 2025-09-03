const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url) // promise of response
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayPost(data);
    });
};

const displayPost = (posts) => {
  posts.forEach((post) => {
    console.log(post);
  });
};
