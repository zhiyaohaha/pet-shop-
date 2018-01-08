import ajax from  './ajax'
export const getHome = () => ajax('/api/homepage')
export const getClassify = () => ajax('/api/classify')

