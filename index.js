export default state => {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const createAction = name => ({ commit }, payload) => {
    commit(`SET_${name.toUpperCase()}`, payload)
  }
  const createMutation = name => (state, payload) => {
    state[name] = payload
  }
  const createGetter = name => state => state[name]

  const config = {
    getters: {},
    actions: {},
    mutations: {}
  }
  Object.keys(state).forEach(k => {
    config.getters[k] = createGetter(k)
    config.actions[`set${capitalize(k)}`] = createAction(k)
    config.mutations[`SET_${k.toUpperCase()}`] = createMutation(k)
  })

  return config
}
