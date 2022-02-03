import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  ColorTypes,
  ObjectInterfaceGenerator,
} from '../../../core/interfaces/common.interface';

export type ButtonTypes = 'rose' | 'blue' | 'gray' | 'white';
export interface IButtonColors {
  background: string;
  text: string;
  borderColor: string;
}

@Component({
  selector: 'pv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() class = '';
  @Output() onClick?: EventEmitter<any> = new EventEmitter();
  @Input() color: ButtonTypes = 'rose';
  @Input() icon = '';
  buttonColors: IButtonColors = {} as IButtonColors;

  bgAndTextColor: ObjectInterfaceGenerator<IButtonColors, ButtonTypes> = {
    rose: {
      background: 'bg-rose',
      text: 'text-white',
      borderColor: '',
    },
    blue: {
      background: 'bg-blue-2',
      text: 'text-white',
      borderColor: '',
    },
    gray: {
      background: 'bg-gray',
      text: 'text-white',
      borderColor: '',
    },
    white: {
      background: 'bg-white',
      text: 'text-black',
      borderColor: '',
    },
  };

  ngOnInit() {
    this.buttonColors = this.bgAndTextColor[this.color];
  }
  constructor() {}
}
