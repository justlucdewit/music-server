const login = async () => {
    const username = document.getElementById('username').value;
    const result = (await axios.post('/login', { name: username })).data;
    document.location.href = '/music.html?uid=' + result.id;
}

const urlParams = new URLSearchParams(window.location.search);
window.userid = urlParams.get('uid')