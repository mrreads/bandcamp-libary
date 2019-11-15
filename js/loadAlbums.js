var xhr = new XMLHttpRequest();
xhr.open('GET', './data.json', true);
xhr.send();
xhr.onload = () => 
{
    let data = JSON.parse(xhr.response);

    let link;
    let artist;
    let album;
    let id;

    data.forEach(element => 
    {
        if (element[3] == 'album')
        {
            id = element[3];
            link = '<iframe style="border: 0; width: 350px; height: 588px;" src="https://bandcamp.com/EmbeddedPlayer/album='+id+'/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/" seamless> </iframe>';
            document.querySelector("#albums").innerHTML += link;
        }
        if (element[3] == 'track')
        {
            id = element[3];
            link = '<iframe style="border: 0; width: 350px; height: 442px;" src="https://bandcamp.com/EmbeddedPlayer/track='+id+'/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless> </iframe>'
            document.querySelector("#albums").innerHTML += link;
        }
    });
};