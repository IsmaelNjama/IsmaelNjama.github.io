//replace with your user:
const GITHUB_URL = "https://api.github.com/users/IsmaelNjama";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const avatarUrl = data.avatar_url;
    const img = document.createElement('img');
    img.src = avatarUrl;
    img.alt = 'Njama Peter Ismael';
    const profileNme = data.name;
    const profileImage = document.getElementById("profile-image").src = avatarUrl;
    const profileName = document.getElementById("profile-name").textContent = profileNme;
     //update the profileImage and profileName with the information retrieved.
    
  });