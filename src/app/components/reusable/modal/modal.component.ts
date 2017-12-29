import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalData } from '../../../interfaces/modal-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

	@Input('data') data: ModalData;
  @Output('optionSelected') optionSelected: EventEmitter<number>;

  constructor() {
    this.optionSelected = new EventEmitter();
  }

  ngOnInit() {
  	let modal = document.getElementById('jmodal');
  	modal.addEventListener('animationend', () => modal.classList.remove('jmodal-in'));
  }

  chosenOption(i: number){
    document.getElementById('jmodal').classList.add('jmodal-out');
    setTimeout(() => this.optionSelected.emit(i), 700);
  }

}
