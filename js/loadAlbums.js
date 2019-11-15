var xhr = new XMLHttpRequest();
xhr.open('GET', './data.json', true);
xhr.send();
xhr.onload = () => 
{
    let data = JSON.parse(xhr.response);

    let link;
    let id;

    data.forEach(element => 
    {
        console.log(element);
        
        if (element[3] == 'album')
        {
            id = element[2];
            link = '<iframe style="border: 0; width: 400px; height: 400px;" src="https://bandcamp.com/EmbeddedPlayer/album='+id+'/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless> </iframe>';
            document.querySelector("#albums").innerHTML += link;
        }
        if (element[3] == 'track')
        {
            id = element[2];
            link = '<iframe style="border: 0; width: 308px; height: 400px;" src="https://bandcamp.com/EmbeddedPlayer/track='+id+'/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless> </iframe>'
            document.querySelector("#albums").innerHTML += link;
        }
    });
};