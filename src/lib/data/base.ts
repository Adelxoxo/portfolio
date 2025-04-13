const firstName = 'Adel';
const lastName = 'Kobić';
const suffix = 'Adel Kobić';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
