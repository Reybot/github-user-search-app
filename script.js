const userInput = document.getElementById("userInput");
const name = document.getElementById("name");
const link = document.getElementById("link");
const bio = document.getElementById("bio");
const joinedDate = document.getElementById("joined-date");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const location2 = document.getElementById("location");
const website = document.getElementById("website");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");
const profileImg = document.getElementById("profile-img");

const getData = async () => {
  const response = await fetch(
    `https://api.github.com/users/${userInput.value}`
  );
  const data = await response.json();
  console.log(data.name);

  const btn = document.getElementById("btn");
  name.innerHTML = data.name;
  link.innerHTML = "@" + data.login;
  bio.innerHTML = data.bio;
  joinedDate.innerHTML = data.created_at;
  repos.innerHTML = data.public_repos;
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;
  location2.innerHTML = data.location;
  website.innerHTML = data.blog;
  twitter.innerHTML = data.twitter_username;
  company.innerHTML = data.company;
  profileImg.src = data.avatar_url;
};
btn.addEventListener("click", () => {
  getData();
});

getData();
