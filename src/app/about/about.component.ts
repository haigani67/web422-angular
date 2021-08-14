import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  studentName: string="Hanieh Aigani";
  studentPhoto: string="assets/images/my-img.jpg";
  studentUpdated:Date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
