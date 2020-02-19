import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-req',
  templateUrl: './http-req.component.html',
  styleUrls: ['./http-req.component.css']
})
export class HttpReqComponent implements OnInit {
  public fetchData;
  usersData = [];
  constructor(private httpSer: HttpServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.fetchData = this.httpSer.sendGetReponce().subscribe((data: any[]) => {
    this.fetchData = data;
  });
}

}
