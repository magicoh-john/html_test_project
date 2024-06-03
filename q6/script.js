    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 동작을 막습니다.

    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;

    if (!id) {
        alert('id  를 입력하세요..');
    return;
            }
    if (!password) {
        alert('Password  를 입력하세요..');
    return;
            }
    if (!name) {
        alert('Name  를 입력하세요..');
    return;
            }
    if (!email) {
        alert('Email  를 입력하세요..');
    return;
            }
    if (!contact) {
        alert('Contact  를 입력하세요..');
    return;
            }
    if (!dob) {
        alert('Date of Birth  를 입력하세요..');
    return;
            }

    alert('Form submitted successfully!');
        });