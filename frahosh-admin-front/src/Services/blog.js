import api from "./api"

export const blogApi = (body) => api.post('/api/blog', body)