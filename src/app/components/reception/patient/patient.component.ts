import { Component, OnInit } from '@angular/core';
import { Animation } from '../../../classes/animation';
import { ModalData } from '../../../interfaces/modal-data';

declare var $: any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

	private state: number;  //0 = Nada, 1 = Creando Paciente 2 = Editando Paciente
	private id: number;
	private error: boolean;
	private modalNewPatient: ModalData;


  constructor(private animation: Animation) {
  	this.error = false;
  	this.state = 0;
  }

  ngOnInit(){
    this.animation.deleteEntry('1');
  }

  idType(event){
    let code: number = event.keyCode;
    return code >= 48 && code <= 57;
  }

  searchPatient(){
  	if(this.id){
  		this.error = false;
  		let random = Math.random();
  		if(random < 0.5){
  			this.showModalNewPatient();
  		}else{
  			//creado
  		}
  	}else{
  		this.error = true;
  	}
  }

  showModalNewPatient(){
    this.modalNewPatient = {
      title: 'Paciente no encontrado',
      content: '¿Desea registrar al paciente?',
      options: [
        {
           text: 'NO',
           info: false
        },
        {
          text: 'SI',
           info: true
        }
      ]
    }
  }

  newPatientOption(event){
    this.modalNewPatient = null;
  }
  
}
