document.addEventListener('DOMContentLoaded', function() {
    fetch('posts.json')
              .then(response => response.json())
            .then(posts => {
                
            // Populate Sections
            const sections = ['travel', 'health', 'creative'];
            sections.forEach(sectionId => {
                const sectionElement = document.getElementById(`${sectionId}-posts`);
                posts[sectionId].forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <img src="${post.image}" alt="${post.title}">
                        <p class="post-date">${post.date}</p> 
                        <h3>${post.title}</h3>
                        <p class="post-content">${post.content}</p>
                       <a href="${post.url}" class="read-more">Read More</a>
                    `;
                    sectionElement.appendChild(postElement);
                });
            });
              
    
 })
    .catch(error => console.error('Error loading posts:', error));
});
