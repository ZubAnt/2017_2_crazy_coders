export default class Theme {
	constructor() {
		this.defaultThema = true;
	}

	changeTheme() {
		let stylesDeault = this.createStylesheet([bodyStylesWhite]);
		let stylesYellow = this.createStylesheet([bodyStylesYellow]);

		let stylesheet = !this.defaultThema ? stylesDeault : stylesYellow;

		this.appendStylesheet(stylesheet);

		this.defaultThema = !this.defaultThema;
	}



	createStylesheet(styles){
		return styles.reduce((stylesheet, current) => {
			const properties = Object.entries(current.styles)
				.map(prop => prop[0] + ':' + prop[1] + ';');
			stylesheet += `${current.selector} {${properties}}\n`;
			return stylesheet;
		},'');
	}

	appendStylesheet(stylesheet){
		let styleTag = document.getElementById('theme-styles');
		styleTag.innerHTML = stylesheet;
	}
}

const bodyStylesYellow = {
	selector: 'body',
	styles: {
		'background-color': '#FFFF00',
	}
};

const bodyStylesWhite = {
	selector: 'body',
	styles: {
		'background-color': '#FFF',
	}
};