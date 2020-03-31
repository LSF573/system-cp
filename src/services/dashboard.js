export function fetchDashboard (params) {
  return $api.get(`/dashboard?tab=${params.tab}`)
}
