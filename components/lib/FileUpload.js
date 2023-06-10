import axios from "axios";
import Moralis from "moralis";

const upload = (data) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGYzNTQwOTM5OGMwNTVGYTc3OTk4ODRFZWU0NWEwQjVjZTFCREE4OEYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzcxOTUyNDE3MzAsIm5hbWUiOiJmcmVlLWZpbGUtc3RvcmUifQ.JL3F5ls1L7ErT3PGEWfw-O9ytJOG84PfFS8Ar98G9f4";
  var config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
    },
    data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        return resolve(response.data.cid);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

const moraliskey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjdiY2Y2YzJmLTNkOGMtNDJlNS1iYzAyLWRhZDc3ZjRiZmQ5ZCIsIm9yZ0lkIjoiODE4NSIsInVzZXJJZCI6IjE2MjkxIiwidHlwZUlkIjoiZmIyZTc0MjctNzgxYi00NzI0LTk4MDctNGY0ZTVhNDFiMzQ4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODYzNzU2MjQsImV4cCI6NDg0MjEzNTYyNH0.jUglCJK9pi9ajgF3iaUh9WWJEx3zyU8po6HWqXGvYxM";

const uploadFile = async (file) => {
  var data = file;

  const config = {
    method: "post",
    url: "https://api.nft.storage/upload",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVDRGQzZkMxOEEyMUVGYzNBRTNBNDUzRDFCRDkxYzUxNWYwRjgxRDUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0Mjk4OTY1NzM4MiwibmFtZSI6IlNwYXJkYSJ9.C2T_35hw4Yycqspgp3cHygOyuX_Pk1OTWDUGQ8RAadY",
      "Content-Type": "text/plain",
    },
    data: data,
  };

  return new Promise((resolve, reject) => {
    return axios(config)
      .then(function (response) {
        if (response.data.ok) {
          return resolve(response.data.value.cid);
        }
      })
      .catch(function (error) {
        return reject(error);
      });
  });
};

export { uploadFile, upload };
