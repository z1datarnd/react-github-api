
function getUrl() {
    var url = 'https://api.github.com/users/data';
    return url;
}

 $(document).ready(function () {
    $.ajax({
        datatype: 'json',
        url:getUrl(),
        success : function (data) {
            var result = "";
                result +=`
              <div class="container-1">
                   <div class="col-3"></div>
                       <div class="col-3">
                        <p>${data.login}<p>
                        <p>${data.followers}</p>
                        <p>${data.following}</p>
                        <p>${data.created_at}</p>
                        <p>${data.updated_at}</p>
                       </div>
                   <div class="col-3"></div>
                <div class="col-3"></div>
             </div>
            `;
            $('#user').append(result);
        }
    });
 });