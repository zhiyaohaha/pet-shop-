import {
  getHome
}from "../api"
export default {
  getHome({commit}) {
    // debugger


    getHome().then(response => {
      const result = response.data  // {code:0, data: seller}
      if (result.code === 0) {
        const home = result.data
        commit("GET_HOME", {home})
      }
    })
  }
}

