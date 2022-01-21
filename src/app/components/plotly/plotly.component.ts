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
      locations: ['FRA', 'DEU', 'RUS', 'ESP'],
      marker: {
        size: [20, 30, 15, 10],
        color: [10, 20, 40, 50],
        cmin: 0,
        cmax: 50,
        colorscale: 'Greens',
        colorbar: {
            title: 'Some rate',
            ticksuffix: '%',
            showticksuffix: 'last'
        },
        line: {
            color: 'black'
        }
      },
      name: 'europe data'
    }];

    this.layout = {
      'geo': {
        'scope': 'europe',
        'resolution': 50
      }
    };
  }
}
