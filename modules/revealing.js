// module to exposes a key/value interface

function MyStore() {

  var myStore = {},
      revealed;

  revealed = {
    set: storeSet,
    get: storeGet
  };

  return revealed;

  function storeSet(id, val) {
    if (myStore[id]) {
      throw new Error('ID: ' + id + ' already set');
    }

    myStore[id] = val;
  }

  function storeGet(id) {
    if (!myStore[id]) {
      throw new Error('Record with ID ' + id + ' not found.');
    }

    return myStore[id];
  }
}


// use the module

var store = MyStore();
store.set('key1', 'value1');
console.log('here is key1: ', store.get('key1'));

try {
  store.get('invalid');
}
catch(e) {
  console.log('invalid store key', e);
}

console.log('store', Object.keys(store));
