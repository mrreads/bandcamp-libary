let canseled;

var xhr = new XMLHttpRequest();
xhr.open('GET', './data.json', true);
xhr.send();
xhr.onload = () => 
{
    let data = JSON.parse(xhr.response);

    let id;
    let iframe;

    data.forEach(element => 
    {
        if (element[3] == 'album')
        {
            id = element[2];
            iframe = document.createElement('iframe');
            iframe.style = 'border: 0; height: 300px; width: 300px';
            iframe.src = 'https://bandcamp.com/EmbeddedPlayer/album='+id+'/size=large/bgcol=333333/linkcol=e32c14/minimal=true/transparent=true/';
            document.querySelector("#albums").appendChild(iframe);
        }
        if (element[3] == 'track')
        {
            id = element[2];
            iframe = document.createElement('iframe');
            iframe.style = 'border: 0; height: 300px; width: 300px';
            iframe.src = 'https://bandcamp.com/EmbeddedPlayer/track='+id+'/size=large/bgcol=333333/linkcol=e32c14/minimal=true/transparent=true/';
            document.querySelector("#albums").appendChild(iframe);
        }
    });
};

let allAlbums;
window.onresize = () =>
{
    allAlbums = document.querySelectorAll('iframe');
    allAlbums.forEach(element =>
    {
        element.style.height = element.offsetWidth + 'px';
    });
};