
function getUrl() {
  var url = 'https://api.github.com/users/gaearon';
  return url;
}  

function getSuccess(data) {  
  console.log(data);                              
    var result = "";
     result +=`
    <div class="container">
      <div class="profile">
          <img src="${data.avatar_url}">
          <h1>${data.login}</h1><br>
      </div>
      <h4>${data.bio}</h4>
      <div class="col-1">
          <a href="follower.html" data-url="${data.followers}">${data.followers}</a>
          <h3>Followers </h3>
      </div>
      <div class="col-2">
          <a href="following.html" data-url="${data.following}">${data.following}</a>
          <h3>Following</h3>
      </div>
      <div class="col-3">
          <a href="repos.html" data-url="${data.public_repos}">${data.public_repos}</a>
          <h3>Publish Repos</h3>
      </div>
    </div>
  `;
 $('#result').append(result);
}

$(document).ready(function () {
  // $('#search').on('click', function(){
      $('#result').html('');
      var searchField = $('[name="search"]').val();
      $.ajax({
          datatype: 'json',
          url:getUrl(searchField),
          success : getSuccess, 
    });
  // });
});

function getUrlFollower() {
  var url = 'https://api.github.com/users/gaearon/followers';
  return url;
}

function getUrlRepos() {
  var url = 'https://api.github.com/users/gaearon/repos';
  return url;
}

function getUrlFollowing() {
  var url = 'https://api.github.com/users/gaearon/following';
  return url;
}

$(document).ready(function () {
  displayFollower();
  displayRepos();
  displayFollowing ()
});

function displayFollower() {
  $.ajax({
    type: 'GET',
    url: getUrlFollower(),
    success: getFollower,
  });
}

function displayFollowing () {
  $.ajax({
    type: 'GET',
    url: getUrlFollowing(),
    success: getFolloweing,
  });
}

function displayRepos() {
  $.ajax({
    type: 'GET',
    url: getUrlRepos(),
    success: getRepos,
  });
}

function getRepos(data) {
  var result = "";
  data.forEach(element => {
    console.log(element);
    result +=`
    <div class="container-follower">
    <img src="${element.owner.avatar_url}" class="img-follower">
    <h3 class="login">${element.owner.login}</h3>
    </div>
    `;
    $('#publish').append(result);
  });
}

function getFollower(data) {
  var result = "";
  data.forEach(element => {
    result += `
    <div class="container-follower">
    <img src="${element.avatar_url}" class="img-follower">
    <h3 class="login">${element.login}</h3>
    </div>
    `;
    $('#follower').append(result);
  });
}

function getFolloweing() {
  var result = "";
  data.forEach(element => {
    result += `
    <div class="container-follower">
    <img src="${element.avatar_url}" class="img-follower">
    <h3 class="login">${element.login}</h3>
    </div>
    `;
    $('#following').append(result);
  });
}

