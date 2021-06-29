export class Site {
	constructor(selector) {
		this.$el = document.querySelector(selector)
	}

	render(model) {
		//чистит форму
		this.$el.innerHTML = ''
		model.forEach(block => {
			// этот метод позволяет вставлять в определенное место HTML (beforeend - см. в документации)
			this.$el.insertAdjacentHTML('beforeend', block.toHTML()) 
		
		})
	}
}