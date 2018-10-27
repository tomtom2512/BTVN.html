var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=JUSTATEE THANG DIEN&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsObject = JSON.parse(xhttp.responseText);
        var content = '';
        console.log(xhttp.responseText);
        for (var i = 0; i < jsObject.items.length; i++) {

            var videoItem = '<div class="tube-item">' +
                '<iframe width="660" height="355" "https://www.youtube.com/embed/' + jsObject.items[i].id.videpId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
                '<h3>' + jsObject.item[i].snippet.title + '</h3>' + '</div>';
            content += videoItem;
        }

        document.getElementById("demo").innerHTML = content;
    }
};
xhttp.open("GET", YOUTUBE_API, true);
xhttp.send();