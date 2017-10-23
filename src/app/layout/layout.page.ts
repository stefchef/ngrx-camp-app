import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.css']
})
export class LayoutPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
