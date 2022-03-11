import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  books: number[] = [1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit(): void {
  }

}
