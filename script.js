document.querySelectorAll('.upvote').forEach(button => {
    button.addEventListener('click', () => {
        const voteCount = button.nextElementSibling;
        voteCount.textContent = parseInt(voteCount.textContent) + 1;
    });
});

document.querySelectorAll('.downvote').forEach(button => {
    button.addEventListener('click', () => {
        const voteCount = button.previousElementSibling;
        voteCount.textContent = Math.max(0, parseInt(voteCount.textContent) - 1);
    });
});

document.querySelectorAll('.reply').forEach(button => {
    button.addEventListener('click', () => {
        alert('Reply button clicked');
    });
});

document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', () => {
        alert('Delete button clicked');
    });
});

document.querySelectorAll('.edit').forEach(button => {
    button.addEventListener('click', (event) => {
        const commentContent = event.target.closest('.comment-content');
        const commentText = commentContent.querySelector('.comment-text');

        if (event.target.textContent === 'Edit') {
            const textArea = document.createElement('textarea');
            textArea.className = 'edit-area';
            textArea.value = commentText.textContent;
            commentContent.insertBefore(textArea, commentText);
            commentText.style.display = 'none';
            event.target.textContent = 'Save';
        } else {
            const textArea = commentContent.querySelector('.edit-area');
            commentText.textContent = textArea.value;
            textArea.remove();
            commentText.style.display = 'block';
            event.target.textContent = 'Edit';
        }
    });
});

document.querySelector('.send').addEventListener('click', () => {
    alert('Comment Sent');
});