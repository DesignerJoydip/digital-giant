import { Component } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {

  vehicle: string[] = ['G80E', 'G90', 'G92', 'GV60', 'GV70E'];
  model: string[] = ['MY22', 'MY23'];
  code: string[] = ['W5YBZYZ'];
  option: string[] = ['H172', 'G690'];
  ext: string[] = ['CPR', 'elm', 'emt', 'ft7', 'n5m'];

}
