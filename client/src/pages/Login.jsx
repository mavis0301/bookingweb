import {React,useState, useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { login_failure, login_success, start_login } from '../constants/actionTypes';
import "./login.scss"
import axios from 'axios'
import { LoginContext } from '../context/LoginContext';
const Login = () => {
    const registerSuccess = useLocation();
    const navigate = useNavigate();
    const{loading, error, dispatch}=useContext(LoginContext)
    const [loginData, setLoginData] = useState({
        account : undefined,
        password: undefined
    })
    const handleChange= (e) =>{
        setLoginData(prev=>({...prev,[e.target.id]:e.target.value}));
    }
    const handleClick = async(e) =>{
        e.preventDefault();
        dispatch({type:start_login})
        try{
            const res = await axios.post("api/auth/login",loginData);
            dispatch({type:login_success,payload:res.data.userDetails});
            console.log(res.data)
            navigate("/");
        }catch(error){
            console.log(error.response)
            dispatch({type:login_failure,payload:error.response.data})
        }
    }
    return (
        <>
     <div className='login'>
        <Navbar type={"auth"}/>
            <div className="container">
                <div className="wrapper">
                    <h2 className="title">
                    登入或建立帳戶
                    </h2>
                    <div className="form">
                      <input type="text" id="account" placeholder='帳號' onChange={handleChange}/>
                        <input type="password" id="password" placeholder='密碼' onChange={handleChange}/>
                        <button className="submit" onClick={handleClick}>登入</button>
                        <span>忘記密碼？</span>
                        <Link to="/register" style={{textDecoration:"none",color: "inherit"}}>
                        <span>註冊＆創建一個帳號</span>
                        </Link>
                       
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Login