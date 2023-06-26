
const GITHUB_URL = "https://api.github.com/users/IsmaelNjama";

async function getUserProfile() {
  const response = await fetch(GITHUB_URL);
  const data = await response.json();

  const image = data.avatar_url;
  const imageDiv = document.getElementById('profileImage');
  imageDiv.src = data.avatar_url;
  imageDiv.alt = 'Njama Peter Ismael';

  const profileNameDiv = data.name;
  const profileNameHolder = document.getElementById('profileName');
  profileNameHolder.innerHTML = profileNameDiv;

  
}

getUserProfile();