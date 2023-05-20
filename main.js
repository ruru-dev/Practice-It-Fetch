let arrayOfPosts;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()

}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// This function is going to make a fetch request to the API to create a post.
const createPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Sailor Saturn',
    body: 'Messiah of Silence',
    userId: 1578,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}


// This function is going to make a fetch request to the API to update a post.
const updatePost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Sailor Moon',
      body: 'Warrior of Love and Justice',
      userId: 777,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// This function logs the results in your browser's console
const consolePosts = () => {
  getPosts().then(() => {
    console.log(arrayOfPosts)
  }
  )
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/