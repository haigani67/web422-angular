import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit, OnDestroy {
  favourites: Array<any> = [];
  sub: any;
  constructor(private musicDataService: MusicDataService) {}

  ngOnInit(): void {
    this.sub = this.musicDataService.getFavourites().subscribe((data) => {
      this.favourites = data.tracks;
      console.log(this.favourites);
      console.log(data);
    });
  }

  removetrack(trackId: any) {
    console.log('i am fired');
    this.sub = this.musicDataService
      .removeFromFavourites(trackId)
      .subscribe((data) => (this.favourites = data.tracks));
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
