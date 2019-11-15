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
            link = '<iframe style="border: 0; width: 300px; height: 300px;" src="https://bandcamp.com/EmbeddedPlayer/album='+id+'/size=large/bgcol=333333/linkcol=e32c14/minimal=true/transparent=true/" seamless> </iframe>';
            document.querySelector("#albums").innerHTML += link;
        }
        if (element[3] == 'track')
        {
            id = element[2];
            link = '<iframe style="border: 0; width: 300px; height: 300px;" src="https://bandcamp.com/EmbeddedPlayer/track='+id+'/size=large/bgcol=333333/linkcol=e32c14/minimal=true/transparent=true/" seamless> </iframe>'
            document.querySelector("#albums").innerHTML += link;
        }
    });
};