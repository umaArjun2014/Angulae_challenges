import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-http-req',
  templateUrl: './http-req.component.html',
  styleUrls: ['./http-req.component.css']
})
export class HttpReqComponent implements OnInit {
  public fetchData;
  constructor(private httpSer: HttpServiceService) { }

  ngOnInit() {
  }

}
