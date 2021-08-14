import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albumData from '../data/SearchResultsAlbums.json';
import artistData from '../data/SearchResultsArtist.json';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discograpphy',
  templateUrl: './artist-discograpphy.component.html',
  styleUrls: ['./artist-discograpphy.component.css'],
})
export class ArtistDiscograpphyComponent implements OnInit {
  albums: any;
  artist: any;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private musicDataManager: MusicDataService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.sub = this.musicDataManager.getArtistById(id).subscribe((data) => {
      console.log('response from API');
      console.log(data);
      this.artist = data;
    });

    this.sub = this.musicDataManager
      .getAlbumsByArtistId(id)
      .subscribe((data) => {
        console.log('response from api ');
        console.log(data.items);
        this.albums = data.items;
      });
    //initialize
    // this.albums = albumData.albums.items;
    // this.artist = artistData;
  }
}
