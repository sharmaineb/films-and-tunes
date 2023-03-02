import data from './filmtunes-data.json';

data.forEach((obj, i) => {
	obj.id = i
})

export default data;