document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById('post-list');

    // Fetch data from the JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
});
