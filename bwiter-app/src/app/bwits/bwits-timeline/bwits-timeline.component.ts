import { Component, OnInit } from '@angular/core';
import { BwitService } from 'src/app/shared/services/bwit.service';
import { Bwit } from 'src/app/shared/services/models/bwit';

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
        .subscribe(res => {
          this.bwits = res;
        });
  }

}
