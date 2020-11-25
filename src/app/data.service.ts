import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private apiKey = 'qzktH3FzPM3oMErTxqwniufiRvneP57H';
  private limit = '24';
  private giphyUrl = 'https://api.giphy.com/v1/gifs/search';
	
  getGifs(searchTerm) {
  	let giphyUrl = `${this.giphyUrl}?api_key=${this.apiKey}&q=${searchTerm}&limit=${this.limit}`;
  	console.log(giphyUrl);
  	
  	return this.http.get(giphyUrl);
  }
}
