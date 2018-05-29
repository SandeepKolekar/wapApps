import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-jqwidgets-chart',
  templateUrl: './line-jqwidgets-chart.component.html',
  styleUrls: ['./line-jqwidgets-chart.component.css']
})
export class LineJqwidgetsChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // source =
  // {
  //     datatype: 'tab',
  //     datafields: [
  //         { name: 'Year' },
  //         { name: 'HPI' },
  //         { name: 'BuildCost' },
  //         { name: 'Population' },
  //         { name: 'Rate' }
  //     ],
  //     url: 'homeprices.txt'
  // };

  // dataAdapter = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });


  dataAdapter = [
    {
      "Year": 1950,
      "HPI": 105.8948393,
      "BuildCost": 59.9171862,
      "Population": 151.684,
      "Rate": 0.0232
    },
    {
      "Year": 1951,
      "HPI": 103.8986687,
      "BuildCost": 59.2786986,
      "Population": 154.287,
      "Rate": 0.0257
    },
    {
      "Year": 1952,
      "HPI": 103.9743275,
      "BuildCost": 58.94343772,
      "Population": 156.954,
      "Rate": 0.0268
    },
    {
      "Year": 1953,
      "HPI": 113.8451588,
      "BuildCost": 60.8392201,
      "Population": 159.565,
      "Rate": 0.0283
    },
    {
      "Year": 1954,
      "HPI": 115.6204181,
      "BuildCost": 62.25447619,
      "Population": 162.391,
      "Rate": 0.0248
    },
    {
      "Year": 1955,
      "HPI": 115.5419272,
      "BuildCost": 65.95528267,
      "Population": 165.275,
      "Rate": 0.0261
    },
    {
      "Year": 1956,
      "HPI": 113.7942463,
      "BuildCost": 68.79148786,
      "Population": 168.221,
      "Rate": 0.029
    },
    {
      "Year": 1957,
      "HPI": 113.6664365,
      "BuildCost": 69.24632104,
      "Population": 171.274,
      "Rate": 0.0346
    },
    {
      "Year": 1958,
      "HPI": 111.7970971,
      "BuildCost": 68.9257142,
      "Population": 174.141,
      "Rate": 0.0309
    },
    {
      "Year": 1959,
      "HPI": 110.4583238,
      "BuildCost": 70.95296772,
      "Population": 177.13,
      "Rate": 0.0402
    },
    {
      "Year": 1960,
      "HPI": 109.6495745,
      "BuildCost": 71.63614258,
      "Population": 180.76,
      "Rate": 0.0472
    },
    {
      "Year": 1961,
      "HPI": 109.5092421,
      "BuildCost": 71.568197,
      "Population": 183.742,
      "Rate": 0.0384
    },
    {
      "Year": 1962,
      "HPI": 108.7289429,
      "BuildCost": 72.59299982,
      "Population": 186.59,
      "Rate": 0.0408
    },
    {
      "Year": 1963,
      "HPI": 109.1195568,
      "BuildCost": 73.36701774,
      "Population": 189.3,
      "Rate": 0.0383
    },
    {
      "Year": 1964,
      "HPI": 109.8522455,
      "BuildCost": 74.36711732,
      "Population": 191.927,
      "Rate": 0.0417
    },
    {
      "Year": 1965,
      "HPI": 109.2636597,
      "BuildCost": 75.45724616,
      "Population": 194.347,
      "Rate": 0.0419
    },
    {
      "Year": 1966,
      "HPI": 106.6787192,
      "BuildCost": 76.74926786,
      "Population": 196.599,
      "Rate": 0.0461
    },
    {
      "Year": 1967,
      "HPI": 106.3897611,
      "BuildCost": 77.15051023,
      "Population": 198.752,
      "Rate": 0.0458
    },
    {
      "Year": 1968,
      "HPI": 105.2152935,
      "BuildCost": 79.39056457,
      "Population": 200.745,
      "Rate": 0.0553
    },
    {
      "Year": 1969,
      "HPI": 106.9530731,
      "BuildCost": 83.32303834,
      "Population": 202.736,
      "Rate": 0.0604
    },
    {
      "Year": 1970,
      "HPI": 109.5578145,
      "BuildCost": 83.04289525,
      "Population": 205.089,
      "Rate": 0.0779
    },
    {
      "Year": 1971,
      "HPI": 110.1900229,
      "BuildCost": 89.43618588,
      "Population": 207.692,
      "Rate": 0.0624
    },
    {
      "Year": 1972,
      "HPI": 110.089853,
      "BuildCost": 95.74309566,
      "Population": 209.924,
      "Rate": 0.0595
    },
    {
      "Year": 1973,
      "HPI": 105.0761478,
      "BuildCost": 100.3045578,
      "Population": 211.939,
      "Rate": 0.0646
    },
    {
      "Year": 1974,
      "HPI": 102.5051836,
      "BuildCost": 97.09327155,
      "Population": 213.898,
      "Rate": 0.0699
    },
    {
      "Year": 1975,
      "HPI": 103.454991,
      "BuildCost": 94.12250092,
      "Population": 215.981,
      "Rate": 0.075
    },
    {
      "Year": 1976,
      "HPI": 105.5752263,
      "BuildCost": 96.23389798,
      "Population": 218.086,
      "Rate": 0.0774
    },
    {
      "Year": 1977,
      "HPI": 113.3258904,
      "BuildCost": 99.16550373,
      "Population": 220.289,
      "Rate": 0.0721
    },
    {
      "Year": 1978,
      "HPI": 118.3947307,
      "BuildCost": 100.56884,
      "Population": 222.629,
      "Rate": 0.0796
    },
    {
      "Year": 1979,
      "HPI": 118.8156738,
      "BuildCost": 100,
      "Population": 225.106,
      "Rate": 0.091
    },
    {
      "Year": 1980,
      "HPI": 112.3677501,
      "BuildCost": 93.67720901,
      "Population": 227.726,
      "Rate": 0.108
    },
    {
      "Year": 1981,
      "HPI": 106.8724657,
      "BuildCost": 90.5038767,
      "Population": 230.008,
      "Rate": 0.1257
    },
    {
      "Year": 1982,
      "HPI": 103.3129562,
      "BuildCost": 88.95277083,
      "Population": 232.218,
      "Rate": 0.1459
    },
    {
      "Year": 1983,
      "HPI": 104.5574104,
      "BuildCost": 91.52830102,
      "Population": 234.333,
      "Rate": 0.1046
    },
    {
      "Year": 1984,
      "HPI": 105.4357808,
      "BuildCost": 89.06159549,
      "Population": 236.394,
      "Rate": 0.1167
    },
    {
      "Year": 1985,
      "HPI": 108.2776822,
      "BuildCost": 86.30725178,
      "Population": 238.506,
      "Rate": 0.1138
    },
    {
      "Year": 1986,
      "HPI": 114.6429508,
      "BuildCost": 85.06563926,
      "Population": 240.683,
      "Rate": 0.0919
    },
    {
      "Year": 1987,
      "HPI": 119.4622422,
      "BuildCost": 85.80011747,
      "Population": 242.843,
      "Rate": 0.0708
    },
    {
      "Year": 1988,
      "HPI": 123.3192026,
      "BuildCost": 84.31285438,
      "Population": 245.061,
      "Rate": 0.0867
    },
    {
      "Year": 1989,
      "HPI": 124.8941458,
      "BuildCost": 81.66945023,
      "Population": 247.387,
      "Rate": 0.0909
    },
    {
      "Year": 1990,
      "HPI": 116.2873698,
      "BuildCost": 79.63498843,
      "Population": 250.181,
      "Rate": 0.0821
    },
    {
      "Year": 1991,
      "HPI": 113.0775228,
      "BuildCost": 76.74207454,
      "Population": 253.53,
      "Rate": 0.0809
    },
    {
      "Year": 1992,
      "HPI": 109.7008693,
      "BuildCost": 77.05381963,
      "Population": 256.922,
      "Rate": 0.0703
    },
    {
      "Year": 1993,
      "HPI": 108.4357895,
      "BuildCost": 78.88788054,
      "Population": 260.282,
      "Rate": 0.066
    },
    {
      "Year": 1994,
      "HPI": 108.4360571,
      "BuildCost": 79.89887109,
      "Population": 263.455,
      "Rate": 0.0575
    },
    {
      "Year": 1995,
      "HPI": 107.6666232,
      "BuildCost": 77.7443098,
      "Population": 266.588,
      "Rate": 0.0778
    },
    {
      "Year": 1996,
      "HPI": 106.7336444,
      "BuildCost": 77.89285948,
      "Population": 269.714,
      "Rate": 0.0565
    },
    {
      "Year": 1997,
      "HPI": 109.216361,
      "BuildCost": 79.39146429,
      "Population": 272.958,
      "Rate": 0.0658
    },
    {
      "Year": 1998,
      "HPI": 115.2452499,
      "BuildCost": 78.79060549,
      "Population": 276.154,
      "Rate": 0.0554
    },
    {
      "Year": 1999,
      "HPI": 121.6232347,
      "BuildCost": 78.98128131,
      "Population": 279.328,
      "Rate": 0.0472
    },
    {
      "Year": 2000,
      "HPI": 129.0640838,
      "BuildCost": 78.72200105,
      "Population": 282.158336,
      "Rate": 0.0666
    },
    {
      "Year": 2001,
      "HPI": 136.1331884,
      "BuildCost": 76.6401607,
      "Population": 284.915024,
      "Rate": 0.0516
    },
    {
      "Year": 2002,
      "HPI": 147.6076356,
      "BuildCost": 76.8135395,
      "Population": 287.501476,
      "Rate": 0.0504
    },
    {
      "Year": 2003,
      "HPI": 160.0795509,
      "BuildCost": 76.31543516,
      "Population": 289.985771,
      "Rate": 0.0405
    },
    {
      "Year": 2004,
      "HPI": 177.7766491,
      "BuildCost": 80.77302579,
      "Population": 292.805643,
      "Rate": 0.0415
    },
    {
      "Year": 2005,
      "HPI": 195.3510726,
      "BuildCost": 82.79484772,
      "Population": 295.583436,
      "Rate": 0.0422
    },
    {
      "Year": 2006,
      "HPI": 192.2875379,
      "BuildCost": 82.72701137,
      "Population": 298.44242,
      "Rate": 0.0442
    },
    {
      "Year": 2007,
      "HPI": 170.090729,
      "BuildCost": 83.19660676,
      "Population": 301.279593,
      "Rate": 0.0476
    },
    {
      "Year": 2008,
      "HPI": 133.9747086,
      "BuildCost": 83.4461592,
      "Population": 304.228257,
      "Rate": 0.0374
    },
    {
      "Year": 2009,
      "HPI": 130.9370732,
      "BuildCost": 84.80835495,
      "Population": 307.212123,
      "Rate": 0.0252
    },
    {
      "Year": 2010,
      "HPI": 124.585809,
      "BuildCost": 84.18072431,
      "Population": 310.232863,
      "Rate": 0.0373
    },
    {
      "Year": 2011,
      "HPI": 120.083801,
      "BuildCost": 84.18072431,
      "Population": 312.8936,
      "Rate": 0.0339
    },
    {
      "Year": 2012,
      "HPI": 123.9370732,
      "BuildCost": 84.80835495,
      "Population": 307.212123,
      "Rate": 0.0252
    },
    {
      "Year": 2013,
      "HPI": 131.585809,
      "BuildCost": 84.18072431,
      "Population": 310.232863,
      "Rate": 0.0373
    },
    {
      "Year": 2014,
      "HPI": 134.083801,
      "BuildCost": 84.18072431,
      "Population": 312.8936,
      "Rate": 0.0339
    }
  ]




  padding: any = { left: 15, top: 5, right: 20, bottom: 5 };

  titlePadding: any = { left: 10, top: 0, right: 0, bottom: 10 };

  xAxis: any =
  {
      dataField: 'Year',
      minValue: 1950,
      maxValue: 2010,
      unitInterval: 5,
      valuesOnTicks: true
  };

  seriesGroups: any[] =
  [
      {
          alignEndPointsWithIntervals: false,
          type: 'splinearea',
          valueAxis:
          {
              visible: true,
              unitInterval: 20,
              title: { text: 'Index Value' },
              labels: {
                  horizontalAlignment: 'right',
                  formatSettings: { decimalPlaces: 0 }
              }
          },
          series: [
              { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7 },
              { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.9 }
          ]
      },
      {
          type: 'spline',
          alignEndPointsWithIntervals: false,
          valueAxis:
          {
              title: { text: 'Interest Rate' },
              position: 'right',
              unitInterval: 0.01,
              maxValue: 0.2,
              labels: { formatSettings: { decimalPlaces: 2 } },
              tickMarks: {
                  visible: true,
                  interval: 0.005,
              },
              gridLines: {
                  visible: false,
                  interval: 0.01
              }
          },
          series: [
              { dataField: 'Rate', displayText: 'Interest Rate', opacity: 1.0, lineWidth: 4, dashStyle: '4,4' }
          ]
      }
  ];

}
