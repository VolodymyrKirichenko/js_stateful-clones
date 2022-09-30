'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let object = { ...state };
  const arr = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(object, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete object[key];
        }
        break;

      case 'clear':
        object = {};
        break;
    }

    arr.push({ ...object });
  }

  return arr;
}

module.exports = transformStateWithClones;
