$(document).ready(function () {
    $(".clickSearch").click(function(){
       alert('Hello');
      });
    
});
function getUrlFollower(username){
    var url = 'https://api.github.com/users/'+ username + '/followers';
    return url;
}
$(document).ready(function(){
    myFollower();
    myRepos();
});

function myFollower(){
    $('#follower').on('click',function(){
        $.ajax({
            datatype:'json',
            url:getUrlFollower(),
            success : getFollower,
        });
    });
}
function myFunction(username) {
    var url = 'https://avatars.githubusercontent.com/u/2144138?v=4'+ username + '/followers';

    return url;``
} 
document.getElementById(demo);

