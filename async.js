async function showAvatar(name) {

  try {
    // read github user
    let githubUser = await axios.get(`https://api.github.com/users/${name}`);

    // show the avatar
    document.getElementById('useravatar').src = githubUser.data.avatar_url;
    document.getElementById('username').innerHTML = githubUser.data.name;

    return githubUser;
  } catch (error) {
    console.log(`This is my error: ${error}`)
  }
}

showAvatar('khimarra');

async function showStargazers() {

  try {
        // read github user
  let githubUsers = await axios.get(`https://api.github.com/repos/axios/axios/stargazers`);
  console.log(githubUsers.data)


  githubUsers.data.forEach((person) => {
    let img = document.createElement('img');
    img.src = person.avatar_url;
    
    document.body.append(img);
  });

  return githubUsers;
    
  } catch (error) {
    console.log(`Stargazers error: ${error}`)
  }
}

showStargazers();


// const nums = [1, 2, 3, 4,5]
  
// nums.forEach((item) => {
//   console.log(item)
// })
