import "./App.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const URL = `http://ec2-15-164-170-26.ap-northeast-2.compute.amazonaws.com:9040/email`;
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    axios
      .post(URL, { email }, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        toast.success("이메일 확인해줘");
      })
      .catch((err) => {
        console.log(err);
        toast.error("에러남");
      });
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input name="email" type="email" placeholder="이메일" />
        <input type="submit" value="제출" />
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
