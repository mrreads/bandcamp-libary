var xhr = new XMLHttpRequest();
xhr.open('GET', './data.json', true);
xhr.send();
xhr.onload = () => 
{
    let data = JSON.parse(xhr.response);
    data = data.music;

    let artist;
    let album;
    let link;
    let albumID;
    data.forEach(element => 
    {
        albumID = element[2];
        link = '<iframe style="border: 0; width: 350px; height: 588px;" src="https://bandcamp.com/EmbeddedPlayer/album='+albumID+'/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/" seamless> </iframe>';
        document.querySelector("#albums").innerHTML += link;
    });
};