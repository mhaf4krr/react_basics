import axios from "axios";

//Configuring Axios

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZgudGr4ggEe6aX2i6ZFsUssZoPuQ9_QeL-hcn5gvGmo",
  },
});
