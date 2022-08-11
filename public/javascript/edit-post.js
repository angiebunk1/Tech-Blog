async function editFormHandler(event) {
  event.preventDefault();

  const park_name = document.querySelector('input[name="park-name"]').value.trim();
  const location = document.querySelector('input[name="location"]').value.trim();
  const review = document.querySelector('input[name="review"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
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
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

