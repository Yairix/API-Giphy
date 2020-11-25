import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchTerm: string;

  ngOnInit(): void {
  }

  search(form) {
  	location.href = `/results/${form.value.searchTerm}`;
  }

}
