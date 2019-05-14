import { Component, OnInit } from '@angular/core';
import { BwitService } from 'src/app/shared/services/bwit-services/bwit.service';
import { Bwit } from 'src/app/shared/models/bwit';

@Component({
  selector: 'app-bwits-timeline',
  templateUrl: './bwits-timeline.component.html',
  styleUrls: ['./bwits-timeline.component.scss']
})
export class BwitsTimelineComponent implements OnInit {
  bwits: Bwit[];

  constructor(private bwitService: BwitService) { }

  ngOnInit() {
    this.bwitService.getBwits()
        .then(res => {
          this.bwits = res;
          console.log(this.bwits);
        });
  }

}
