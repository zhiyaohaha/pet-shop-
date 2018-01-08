import {
  getHome,
  getClassify,
  getBrand
}from "../api"
export default {
  async getHome({commit}, cb) {
    // debugger
    const result = await getHome()
    if (result.code === 0) {
      const home = result.data
      commit("GET_HOME", {home})
      cb && cb()
    }
  },
  async getClassify({commit}, cb) {
    const result = await getClassify()
    if (result.code === 0) {
      const classify = result.data
      commit("GET_CLASSIFY", {classify})
      cb && cb()
    }
  },
  async getBrand({commit}, cb) {
    const result = await getBrand()
    if (result.code === 0) {
      const brands = result.data
      commit("GET_BRAND", {brands})
      cb && cb()
    }
  },
}

