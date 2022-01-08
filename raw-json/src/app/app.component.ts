import { Component } from '@angular/core';
import { DataService } from 'src/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raw-json';
  getRawData: any;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.getJsonData();
  }

  getJsonData(){
    this.dataService.getJSONDataFromGithub().subscribe(data => {
      console.log(data);
    })
  }
}
