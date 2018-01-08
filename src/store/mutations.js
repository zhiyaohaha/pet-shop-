export default {
  GET_HOME(state,{home}){
    // console.log(home)
    state.home = home
  },
  GET_CLASSIFY(state,{classify}){
    state.classify = classify
  },
  GET_BRAND(state,{brands}){
    state.brands = brands
  },
}
