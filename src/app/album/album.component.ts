import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  album: any;
  sub: any;
  id: any;

  constructor(
    private music: MusicDataService,
    private _route: ActivatedRoute,
    private _matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this.sub = this.music.getAlbumById(this.id).subscribe((data) => {
      console.log('response from API');
      console.log(data);
      this.album = data;
    });
  }

  addToFavourites(trackid: any) {
    this.sub = this.music.addToFavourites(trackid).subscribe(
      (apiResponse) => {
        if (apiResponse) {
          this._matSnackBar.open('Adding to Favourites...', 'Done', {
            duration: 1500,
          });
        }
      },
      (err) => {
        this._matSnackBar.open('Unable to add song to Favourites', 'Failed', {
          duration: 1500,
        });
      }
    );
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
