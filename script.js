document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const birthDate = document.getElementById('birthDate').value;
    const occupation = document.getElementById('occupation').value;

    if (firstName && lastName && gender && birthPlace && birthDate && occupation) {
        document.getElementById('message').style.display = 'block';
        setTimeout(function() {
            window.location.href = 'comments.html';
        }, 3000); 
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});

if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const contactName = document.getElementById('contactName').value;
        const contactEmail = document.getElementById('contactEmail').value;
        const contactMessage = document.getElementById('contactMessage').value;

        if (contactName && contactEmail && contactMessage) {
            document.getElementById('contactMessage').style.display = 'block';
            setTimeout(function() {
                document.getElementById('contactMessage').style.display = 'none';
            }, 3000);
        } else {
            alert('Lütfen tüm alanları doldurun.');
        }
    });
}
