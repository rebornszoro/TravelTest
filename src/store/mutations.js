export default {
  changeCity (state, city_) {
    state.city = city_
    try {
      localStorage.cityname = city_.name
      localStorage.cityspell = city_.spell
      localStorage.cityid = city_.id
    } catch (e) {
      console.log(e)
    }
  }
}
