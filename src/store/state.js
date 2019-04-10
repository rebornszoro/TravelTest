let defaultCity = '中山'
try {
  defaultCity = localStorage.city || '中山'
} catch (e) {}

export default {
  city: defaultCity
}
