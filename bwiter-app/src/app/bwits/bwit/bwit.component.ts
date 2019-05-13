import { Component, OnInit, Input } from '@angular/core';
import { Bwit } from 'src/app/shared/models/bwit';

@Component({
  selector: 'app-bwit',
  templateUrl: './bwit.component.html',
  styleUrls: ['./bwit.component.scss']
})
export class BwitComponent implements OnInit {
  @Input() bwit: Bwit;

  constructor() { }

  ngOnInit() {
  }

  pressLike(e) {
    e.target.style.color = 'pink';
    e.target.parentElement.style.color = 'pink';
  }

  showComments(e) {
    console.log(e.target);
  }
}
