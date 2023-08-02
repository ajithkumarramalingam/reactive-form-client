import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit {
  pie: any;
  options: any;
  bar: any;
  choice: any;
  line: any;

ngOnInit(): void {  
  this.horizontlBarChart();
  this.pieChart(); 
  this.lineChart();
  
}
pieChart() {
  const documentStyle = getComputedStyle(document.documentElement);
  // const textColor = documentStyle.getPropertyValue('--text-color');
  this.pie = {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [
          {
              data: [540, 325, 702, 300, 100],
              backgroundColor: [
                documentStyle.getPropertyValue('--blue-500'), 
                documentStyle.getPropertyValue('--yellow-500'), 
                documentStyle.getPropertyValue('--green-500'),
                documentStyle.getPropertyValue('--red-500'),
                documentStyle.getPropertyValue('--black-500')
              ],
              hoverBackgroundColor: [
                documentStyle.getPropertyValue('--blue-400'), 
                documentStyle.getPropertyValue('--yellow-400'), 
                documentStyle.getPropertyValue('--green-400'),
                documentStyle.getPropertyValue('--red-500'),
                documentStyle.getPropertyValue('--black-500')
              ]
          }
      ]
  };

  // this.options = {
  //     plugins: {
  //         legend: {
  //             labels: {
  //                 usePointStyle: true,
  //                 color: textColor
  //             }
  //         }
  //     }
  // };
}

horizontlBarChart() {
        const documentStyle = getComputedStyle(document.documentElement);        
        // const textColor = documentStyle.getPropertyValue('--text-color');
        // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
  this.bar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: documentStyle.getPropertyValue('--green-500'),
            // borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: documentStyle.getPropertyValue('--orange-500'),
            // borderColor: documentStyle.getPropertyValue('--pink-500'),
            data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'My Third dataset',
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          // borderColor: documentStyle.getPropertyValue('--red-500'),
          data: [18, 38, 70, 49, 36, 57, 10]
      }
    ]
};

// this.choice = {
//     indexAxis: 'y',
//     maintainAspectRatio: false,
//     aspectRatio: 0.8,
//     plugins: {
//         legend: {
//             labels: {
//                 color: textColor
//             }
//         }
//     },
//     scales: {
//         x: {
//             ticks: {
//                 color: textColorSecondary,
//                 font: {
//                     weight: 500
//                 }
//             },
//             grid: {
//                 color: surfaceBorder,
//                 drawBorder: false
//             }
//         },
//         y: {
//             ticks: {
//                 color: textColorSecondary
//             },
//             grid: {
//                 color: surfaceBorder,
//                 drawBorder: false
//             }
//         }
//     }
// };
}

lineChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        // const textColor = documentStyle.getPropertyValue('--text-color');
        // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.line = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  tension: 0.4
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--pink-500'),
                  tension: 0.4
              }
          ]
      };

      // this.options = {
      //     maintainAspectRatio: false,
      //     aspectRatio: 0.6,
      //     plugins: {
      //         legend: {
      //             labels: {
      //                 color: textColor
      //             }
      //         }
      //     },
      //     scales: {
      //         x: {
      //             ticks: {
      //                 color: textColorSecondary
      //             },
      //             grid: {
      //                 color: surfaceBorder,
      //                 drawBorder: false
      //             }
      //         },
      //         y: {
      //             ticks: {
      //                 color: textColorSecondary
      //             },
      //             grid: {
      //                 color: surfaceBorder,
      //                 drawBorder: false
      //             }
      //         }
      //     }
      // };
}

data: TreeNode[] = [
  {
      expanded: true,
      type: 'person',
      styleClass: 'bg-indigo-500 text-white',
      data: {
          // image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
          name: 'Amy Elsner',
          title: 'CEO'
      },
      children: [
          {
              expanded: true,
              type: 'person',
              styleClass: 'bg-purple-500 text-white',
              data: {
                  // image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                  name: 'Anna Fali',
                  title: 'CMO'
              },
              children: [
                  {
                      label: 'Sales',
                      styleClass: 'bg-purple-500 text-white',
                      style: ' border-radius: 12px'
                  },
                  {
                      label: 'Marketing',
                      styleClass: 'bg-purple-500 text-white',
                      style: ' border-radius: 12px'
                  }
              ]
          },
          {
              expanded: true,
              type: 'person',
              styleClass: 'bg-teal-500 text-white',
              data: {
                  // image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                  name: 'Stephen Shaw',
                  title: 'CTO'
              },
              children: [
                  {
                      label: 'Development',
                      styleClass: 'bg-teal-500 text-white'
                  },
                  {
                      label: 'UI/UX Design',
                      styleClass: 'bg-teal-500 text-white'
                  }
              ]
          },
          {
            expanded: true,
            type: 'person',
            styleClass: 'bg-teal-500 text-white',
            data: {
                // image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                name: 'Prithivi Shaw',
                title: 'CEO'
            },
            children: [
                {
                    label: 'Deveps',
                    styleClass: 'bg-teal-500 text-white'
                },
                {
                    label: 'SMMA',
                    styleClass: 'bg-teal-500 text-white'
                },
                {
                  label: 'Cyber',
                  styleClass: 'bg-teal-500 text-white'
              }
            ]
        }
      ]
  }
];
};