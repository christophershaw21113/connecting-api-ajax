let currentUsername = "";

function getPlayerName(e) {

    console.log(e.value);
    let currentUsername = e.value;
}


async function retrievePlayerStats() {
    let response = await fetch("https://api.github.com/" + currentUsername);
    let data = await response.json();
    console.log(data);
}