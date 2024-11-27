import { Result } from "postcss";

interface LoginResponse {
  token: string;
  refreshToken: string;
}

interface RegisterResponse {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dob: string;
  profile: string;
}

class UserServices {
  login = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<LoginResponse> => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email,
      password,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let loginResult: any = {};

    loginResult = fetch("http://192.168.100.13/api/v1/users/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));

    return loginResult;
  };


  register = ({
    firstName,
    lastName,
    email,
    password,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Promise<RegisterResponse> => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let loginResult: any = {};

    loginResult = fetch("http://192.168.100.13:3002/api/v1/users/create", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));

    return loginResult;
  };
}

export default UserServices;