async function newFormHandler(event) {
  event.preventDefault();

  const post_title = document.querySelector('input[id="post_title"]').value;
  const post_content = document.querySelector('textarea[id="post_content"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      post_title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
