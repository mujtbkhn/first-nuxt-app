export const state = () => ({
  properties: [],
  user: null,
})

export const mutations = {
  SET_PROPERTIES(state, properties) {
    state.properties = properties
  },
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  async login({ commit }, credentials) {
    try {
      const { $api } = useNuxtApp()
      const response = await $api.post('/login', credentials)
      commit('SET_USER', response.data.user)
      return response.data
    } catch (error) {
      // Handle error
      throw error
    }
  },

  async signup({ commit }, userData) {
    try {
      const { $api } = useNuxtApp()
      const response = await $api.post('/signup', userData)
      commit('SET_USER', response.data.user)
      return response.data
    } catch (error) {
      throw error
    }
  },

  async fetchProperties({ commit }) {
    try {
      const { $api } = useNuxtApp()
      const response = await $api.get('/list-properties')
      commit('SET_PROPERTIES', response.data)
      return response.data
    } catch (error) {
      console.error("Error fetching all properties", error)
      throw error
    }
  },
}

export const getters = {
  getProperties: (state) => state.properties,
  getUser: (state) => state.user,
}