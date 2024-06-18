document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete all fields');
        return;
    }

    const blogPost = { username, title, content };
    const currentPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    currentPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(currentPosts));

    window.location.href = 'blog.html';
});
