import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit { 

  constructor(private route: ActivatedRoute, private dataServ: DataService) { }

  searchTerm: string;
  gifs: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];

      this.dataServ.getGifs(this.searchTerm).subscribe(gifs => {
        console.log(gifs);
        this.gifs = gifs;
      });
    });
  }

  back() {
  	location.href = '/';
  }
}
