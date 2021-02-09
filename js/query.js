 function getUrl() {
    var url = 'https://api.github.com/users/data';
    return url;
 }
 $(document).ready(function () {
    $('#search').on('click', function(){
        $('#result').html('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.ajax({
            datatype: 'json',
            url:getUrl(),
            success : function (data) {
            var result = "";
            result +=`
            <div class="container">
            <div class="col-1">
                <p> Name :${data.login}<p>
                <p> Follower: ${data.followers}</p>
                <p> Following: ${data.following}</p>
                <p> Created at: ${data.created_at}</p>
                <p> Updated at: ${data.updated_at}</p>
                <a href="${data.repos_url}">Repos Url</a></div>
            <div class="col-2">
                <p> Public repos ${data.public_repos}</p>
                <a href="${data.repos_url}">Received events</a></div>
            </div>
            </div>
           `;
        $('#result').append(result);
        }
      });
    })
 });
