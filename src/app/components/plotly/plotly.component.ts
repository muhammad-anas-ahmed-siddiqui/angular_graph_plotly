import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {

  data: any = [];
  layout = {};
  constructor() { }

  ngOnInit(): void {
    this.data = [{
      type: 'scattergeo',
      mode: 'markers',
      locations: ['FRA', 'DEU', 'RUS', 'ESP', 'PAK', 'USA', 'CAN', 'IND', 'AUS'],
      marker: {
        size: [45, 65, 105, 55, 35, 105, 75, 10, 15],
        color: [20, 28, 80, 30, 10, 80, 25, 0.5, 2],
        cmin: 0,
        cmax: 50,
        colorscale: 'red',
        colorbar: {
            title: 'Maximum Purchase',
            ticksuffix: '%',
            showticksuffix: 'white'
        },
        line: {
            color: 'gray'
        }
      },
      name: 'MAX CHECKOUTS'
    }];

    this.layout = {
      'geo': {
        'scope': 'world',
        'resolution': 500
      }
    };
  }
}
