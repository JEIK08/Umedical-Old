import { Component, OnInit } from '@angular/core';
import { Animation } from '../../classes/animation';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

	private option: number;

  constructor(private animation: Animation) {
  	this.option = 0;
  }

  ngOnInit() {
  	this.animation.deleteEntry('reception');
  }

  optionSelected(opt: number){
    if(opt == this.option) return;
    if(this.option == 0){
      this.option = opt;
      return;
    }
    this.animation.addOutput(this.option.toString());
    setTimeout(() => this.option = opt, 700);
  }

}

