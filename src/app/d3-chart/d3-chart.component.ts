import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit {
  pie: any;
  options: any;

ngOnInit(): void {
    
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

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

  this.options = {
      plugins: {
          legend: {
              labels: {
                  usePointStyle: true,
                  color: textColor
              }
          }
      }
  };
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