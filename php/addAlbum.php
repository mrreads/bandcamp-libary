<?php
    include_once('../lib/simple_html_dom.php');

    $link = $_GET['link'];

    if (strpos($link, 'album') == true) 
    {
        $regex = '/(?<!href=["\'])http:\/\//';
        $link = preg_replace('#^http?://#', '', $link);
        $link = preg_replace('#^https?://#', '', $link);
        $link = preg_replace('#^www.#', '', $link);
    
        $html = file_get_html('https://' . $link);
    
        $json = file_get_contents( __DIR__ . './../data.json');
        $data = json_decode($json, true);
        
        $idAlbum = $html->find('comment', -1);
        $idAlbum = preg_replace("/[^0-9]/", '', $idAlbum);
        $artist = explode('.bandcamp.com/album/', $link)[0];
        $album = explode('.bandcamp.com/album/', $link)[1];
    
        $info = [$artist, $album, $idAlbum, "album"];
        array_push($data, $info);
    
        $data = json_encode($data);
        $json = file_put_contents( __DIR__ . './../data.json', $data);
    }
    if (strpos($link, 'track') == true) 
    {
        $regex = '/(?<!href=["\'])http:\/\//';
        $link = preg_replace('#^http?://#', '', $link);
        $link = preg_replace('#^https?://#', '', $link);
        $link = preg_replace('#^www.#', '', $link);
    
        $html = file_get_html('https://' . $link);
    
        $json = file_get_contents( __DIR__ . './../data.json');
        $data = json_decode($json, true);
        
        $idAlbum = $html->find('comment', -1);
        $idAlbum = preg_replace("/[^0-9]/", '', $idAlbum);
        $artist = explode('.bandcamp.com/track/', $link)[0];
        $track = explode('.bandcamp.com/track/', $link)[1];
    
        $info = [$artist, $track, $idAlbum, "track"];
        array_push($data, $info);
    
        $data = json_encode($data);
        $json = file_put_contents( __DIR__ . './../data.json', $data);
    }
    header('Location: ./../index.html');
?>