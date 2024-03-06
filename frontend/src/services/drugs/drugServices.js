import { setQuery } from '../helper/helper' ;

const getDrugsByIdShop = async (path) => {
    try {
        return await setQuery(path, 'get',{});
    } catch (e) {
        e.message('eroor')
    }
};

export {  getDrugsByIdShop };
