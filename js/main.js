const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cname').value;
    const email = document.getElementById('cemail').value;
    const message = document.getElementById('cetext').value;

    const data = {
        name,
        email,
        message
    };

    fetch('/', {
        method: 'POST',
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        console.log('email sent');
        res.json()
    })
    .then(data => {
        if (data.msg === 'success') {
            alert('Message Sent.');
            form.reset();
        } else if (data.msg === 'fail') {
            alert('Message failed to send.');
        }
    });
});