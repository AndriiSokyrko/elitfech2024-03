import { setQuery } from '../helper/helper' ;

const saveOrder = async (path, data) => {
    try {
        return await setQuery(path, 'post',{data});
    } catch (e) {
        e.message('error!')
    }
};

export {  saveOrder };