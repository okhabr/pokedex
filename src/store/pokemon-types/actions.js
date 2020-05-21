import {filterTypes} from './types';
import {getAllTypes} from '../api';


export const requestTypes = () => async (dispatch) => {
    try {
      const res = await fetch(getAllTypes);
      const data = await res.json();
      const types = data.results.map (type => type.name);
      dispatch({
        type: filterTypes.SUCCESS,
        payload: types
      })
    } catch (err) {
      dispatch({
        type: filterTypes.ERROR,
        payload: err.message,
      })
    }
}
