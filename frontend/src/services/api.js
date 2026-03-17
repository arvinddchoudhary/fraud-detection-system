import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8001/api/v1",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
})

export const transactionAPI = {
  getAll:  (params = {}) => api.get("/transactions/", { params }),
  getById: (id)           => api.get(`/transactions/${id}`),
  create:  (data)         => api.post("/transactions/", data),
}

export const alertAPI = {
  getAll:  (params = {}) => api.get("/alerts/", { params }),
  resolve: (id, by = "analyst") => api.patch(`/alerts/${id}/resolve`, { resolved_by: by }),
}

export const analyticsAPI = {
  getSummary: () => api.get("/analytics/summary"),
}

export default api