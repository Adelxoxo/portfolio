const firstName = 'Riadh';
const lastName = 'Adrani';
const suffix = 'Slick Portfolio With Svelte 5';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
