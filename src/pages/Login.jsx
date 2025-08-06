// src/pages/Login.jsx
import bgLogin from '../assets/imgs/bg-login.png';
import { useApp } from '../contexto/AppContext';
import FormLogin from "../componentes-reutilizables/FormLogin.jsx";

export default function Login() {
    const { bannerHeight } = useApp();

    const styleImgLogin =
        {
            width: '100%',
            // height: calc(100vh - bannerHeight),
            height: `calc(100vh - ${bannerHeight})`,

};
    return (
    <>
        <div className="cont-layout col-12 flex">

            <div className="col-izq-layout col-6">

                <img className="img-bg-login"
                    src={bgLogin}
                    style={styleImgLogin}/>

            </div>
            <div className="col-der-layout col-6 flex-center-v">

                <FormLogin />
            </div>
        </div>
    </>);
}
