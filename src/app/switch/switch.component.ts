import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  person = [
    {
      "name": "Aman",
      "age": 22,
      "State": 'UP'
    },
    {
      "name": "Raju",
      "age": 22,
      "State": 'Haydrabad'
    },
    {
      "name": "Munit",
      "age": 22,
      "State": 'Bihar'
    },
    {
      "name": "Chetan",
      "age": 34,
      "State": 'Bangalore'
    },

  ];

  getColors(code: string) {
    switch (code) {
      case 'UP':
        return 'blue';
        break;

      case 'Bihar':
        return 'orange';
        break;
      default:
        return 'red';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
