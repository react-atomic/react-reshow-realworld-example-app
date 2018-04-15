import {dispatch, dispatcher, pageStore, ReduceStore} from 'reshow';
import {ajaxDispatch} from 'organism-react-ajax';
import ini from 'parse-ini-string';
import {nest} from 'object-nested';

class realworldStore extends ReduceStore
{
    getInitialState()
    {
        const url = 'env.setting.ini';
        const callback = (json, text) =>
        {
            const config = nest(ini(text), '_');
            ajaxDispatch({type: 'callback', json: config});
        }
        ajaxDispatch({
            type: 'ajaxGet', 
            params: { url, callback }
        }); 
        return {};
    }
    reduce(state, action)
    {
        return state;
    }
}

export default new realworldStore(dispatcher);
