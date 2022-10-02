import axios from "axios";

import SERVER_URL from "@Library/api/config";

const api = axios.create({ baseURL: SERVER_URL });

export default api;
