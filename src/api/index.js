import ajax from  './ajax'
export const getHome = () => ajax('/api/homepage')
export const getClassify = () => ajax('/api/classify')
/*export const requestGoods = () => ajax('/api2/goods')
export function getHome() {
  return axios.get('/api/homepage')
}
export function getClassify() {
  return axios.get('/api/classify')
}*/
