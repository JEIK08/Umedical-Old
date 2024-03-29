export class Animation {
	addOutput(id: string){
		let content = document.getElementById(id);
		content.classList.remove('appear');
		content.classList.add('disappear');
	}

	deleteEntry(id: string){
  	let content = document.getElementById(id);
  	content.addEventListener('animationend', () => content.classList.remove('appear'));
  }
}
