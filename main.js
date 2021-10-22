const LinksSocialMedia = {
  github: 'eusouwarleybruno',
  instagram: 'eusouwarleybruno',
  youtube: 'Warley Bruno',
  twitter: '_WarleyBruno',
  facebook: 'warley.bruno.9655/'
}

function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const Social = li.getAttribute('class')
    li.children[0].href = `https://${Social}.com/${LinksSocialMedia[Social]}`
  }
}

ChangeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    UserName.textContent = data.name
    UserBio.textContent = data.bio
    UserLink.href = data.html_url
    UserPhoto.src = data.avatar_url
    UserLogin.textContent = data.login
  })
  
}
getGitHubProfileInfos()
