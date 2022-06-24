import axios from "axios";

const refresh = () => {
  const refreshToken = localStorage.getItem('refreshtoken');
  const expireAt = localStorage.getItem("expiresAt");
  let token = localStorage.getItem("accesstoken");

  const url = 'https://pounder-vote.shop/api/token/refresh/';

  
   //수정필요
    // 토큰 갱신 서버통신
   // const data  = await axios.post('https://pounder-vote.shop/api/token/refresh/', body );
    axios
      .post(
        'https://pounder-vote.shop/api/token/refresh/',
        {
          refresh : refreshToken,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        const accesstoken = response.data.access;
        localStorage.setItem('token', accesstoken);
        const tokening = localStorage.getItem('token');
        console.log(tokening)

      })
      .catch((error) => {
        console.log(error);
        window.alert('토큰갱신에러');
      })
    //localStorage.setItem("accessToken", data.data.access);
    /*localStorage.setItem(
      "expiresAt",
      moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
    );*/

}
export { refresh }