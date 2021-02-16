
 function getUrlApi(username) {
    var url = 'https://api.github.com/users/'+ username +'/followers';
    return url;
    }
    $(document).ready(function () {
    $('#flw').on('click', function(){
    $(this).data("id")
    $('#follower').html('');
    $.ajax({
        datatype: 'json',
        url:getUrlApi(),
        success : function(data) {
            var total = "";
            data.forEach(element => {
                console.log(element);
                total +=`
                <img src="${element.avatar_url}" class="avatar">
                <p class="follower-name">${element.login}</p>
                `;
                $('#follower').append(total);
            });
        }
    });
  });
});
 
