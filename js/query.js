
function getUrl() {
    var url = 'https://api.github.com/users/data';
    return url;
}

 $(document).ready(function () {
    $('#search').keyup(function(){
        $('#result').html('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.ajax({
            datatype: 'json',
            url:getUrl(),
            success : function (data) {
            var result = "";
                result +=`
             <p> Name :${data.login}<p>
             <p> Follower: ${data.followers}</p>
             <p> Following: ${data.following}</p>
             <p> Created at: ${data.created_at}</p>
             <p>Updated at: ${data.updated_at}</p>
            `;
            $('#result').append(result);
            }
        });
    })
 });