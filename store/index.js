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
      // Handle successful login (e.g., save token, update state)
      commit('SET_USER', response.data.user) // Assuming the response includes user data
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
      // Handle successful signup
      commit('SET_USER', response.data.user) // Assuming the response includes user data
      return response.data
    } catch (error) {
      // Handle error
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