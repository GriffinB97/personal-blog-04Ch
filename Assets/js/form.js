document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username.trim() || !title.trim() || !content.trim()) {
        alert('All fields are required. Please ensure no field is left blank.');
        return;
    }

    const blogPost = { username, title, content, date: new Date().toISOString() };
    const currentPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    currentPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(currentPosts));

    window.location.href = 'blog.html';
});
