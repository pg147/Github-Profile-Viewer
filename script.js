var username = document.getElementById("profile-input");
var apiURL = "https://api.github.com";
var profileHead = document.querySelector('.profile-head');
var profilePic = document.querySelector('.profile-pic');
var profileBio = document.querySelector('.profile-bio');
var profileFollowers = document.querySelector('.profile-followers');
var profileFollowing = document.querySelector('.profile-following');
var profileRepos = document.querySelector('.profile-repos');

async function fetchProfile() {
    if (!username) {
        alert("Please enter an username");
        return;
    }
    await fetch(`${apiURL}/users/${username.value}`).then((response) => {
        if (!response.ok) {
            throw new Error("Error fetching data.");
        }
        return response.json();
    }).then((data) => {
       profileHead.textContent = data.name;
       profileBio.innerHTML = `<img src="${data.avatar_url}" height='300' width='300' alt='user_profile' />`
       profileBio.textContent = `Bio : ${data.bio}`;
       profileFollowers.textContent = `Followers :  ${data.followers}`;
       profileFollowing.textContent = `Following : ${data.following}`;
       profileRepos.textContent = `Repos : ${data.public_repos}`;
    })
}
