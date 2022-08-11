async function newFormHandler(event) {
  event.preventDefault();

  const park_name = document.querySelector('input[id="park-name"]').value;
  const location = document.querySelector('input[id="location"]').value;
  const review = document.querySelector('textarea[id="review"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      park_name,
      location,
      review
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
