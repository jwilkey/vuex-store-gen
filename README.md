# vuex-store-gen
A utility for generating commonplace vuex functionality given a state object

```` js
import storeGen from 'vuex-store-gen'

const state = {
  title: 'My site',
  text: null
}

const { getters, mutations, actions } = storeGen(state)

// OR simply

export default new Vuex.Store({
  state,
  ...storeGen(state)
})
````
