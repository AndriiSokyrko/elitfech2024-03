import { setQuery } from '../helper/helper' ;

const shopsAll = async (path) => {
	try {
		return await setQuery(path, 'get',{});


	} catch (e) {
		e.message('eroor')
	}
};

export {  shopsAll };
