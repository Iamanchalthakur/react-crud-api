import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  create(data) {
    return http.post("/users", data);
  }

  login(data) {
    return http.post("/login", data);
  }

  update(data){
    return http.put("/users", data);
  }
  

}

export default new UserDataService();