import { Component, OnInit } from '@angular/core';
import data from '../data/NewReleasesAlbums.json';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit {
  releases: any; //there is not class so we use any
  //Create a "releases" property within the class
  sub: any;

  constructor(private musicService: MusicDataService) {}

  //on Initialized
  ngOnInit(): void {
    this.sub = this.musicService.getNewReleases().subscribe(
      (data) => {
        this.releases = data.albums.items;
        console.log('Response from API');
        console.log(data);
      },
      (err) => console.log(err)
    );
    //    this.releases = data.albums.items;

    //this.releases = data.albums.items;
  } //When the component is Initialized set the value of the "releases" property to: data.albums.items
}
