 function getUrl(username) {
    var url = 'https://api.github.com/users/' + username;
    return url;
 }

 function getUrlFollower(){
     var url = 'https://api.github.com/users/gaearon/followers';
     return url;
 }
 
 function getUrlRepos(){
    var url = 'https://api.github.com/users/gaearon/repos';
    return url;
}

 $(document).ready(function () {
    $('#search').on('click', function(){
        $('#result').html('');
        var searchField = $('[name="search"]').val();
        $.ajax({
            datatype: 'json',
            url:getUrl(searchField),
            success : function (data) {
            var result = "";
            result +=`
            <div class="container">
                <div class="profile">
                    <img src="${data.avatar_url}">
                    <h1>${data.login}</h1><br>
                </div>
                <h4>${data.bio}</h4>
                <div class="col-1">
                    <a href="${data.followers_url}" >${data.followers}</a>
                    <h3>Followers </h3>
                </div>
                <div class="col-2">
                    <a href="${data.following_url}">${data.following}</a>
                    <h3>Following</h3>
                </div>
                <div class="col-3">
                    <a href="${data.repos_url}"> ${data.public_repos}</a>
                    <h3>Publish Repos</h3>
                </div>
              </div>
            `;
        $('#result').append(result);
        }
      });
      return false
    });
        $.ajax({
            datatype: 'json',
            url:getUrlFollower(),
            success : function(vulue){
                var total = "";
                vulue.forEach(element => {
                    total +=`
                    <img src="${element.avatar_url}">
                    <p>${element.login}</p>
                    `;
                    $('#follower').append(total);
                });
            }
        });

        $.ajax({
            datatype: 'json',
            url:getUrlRepos(),
            success : function(vulue){
                var result = "";
                vulue.owner.forEach(item => {
                    result +=`
                    <img src="${item.avatar_url}">
                    <p>${item.full_name}</p>
                    `;
                    $('#following').append(result);
                });
            }
    });
 });

 
