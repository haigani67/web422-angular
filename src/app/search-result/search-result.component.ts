import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  results: any;
  searchQuery: any;

  constructor(
    private route: ActivatedRoute,
    private musicDataSerivce: MusicDataService
  ) {}

  ngOnInit(): void {
    let searchQuery = this.route.snapshot.queryParams['q'];
    if (searchQuery) {
      this.musicDataSerivce.searchArtists(searchQuery).subscribe(
        (data) => {
          this.results = data.artists.items;
          console.log(this.results);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
