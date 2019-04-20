let defaultCity = {
  id: localStorage.cityid || 'city54',
  spell: localStorage.cityspell || 'zhongshan',
  name: localStorage.cityname || '中山'
}
// let localStorage_city = {
//   id: localStorage.cityid,
//   spell: localStorage.cityspell,
//   name: localStorage.cityname
// }
// try {
//   defaultCity = localStorage_city.name || {
//     id: 'city54',
//     spell: 'zhongshan',
//     name: '中山'
//   }
// } catch (e) {}

export default {
  city: defaultCity
}
