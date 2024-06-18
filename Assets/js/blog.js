document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Posted by: ${post.username} on ${new Date(post.date).toLocaleDateString()}</small>
        `;
        postsContainer.appendChild(postElement);
    });
});
