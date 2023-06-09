import style from './index.module.scss'
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";


const Unauthorized = () => {

    const navigate = useNavigate()

    return <div className={style.unauthorized}>
        <Result
            status="403"
            title="403"
            // subTitle="Sorry, you are not authorized to access this page."
            subTitle="抱歉，您没有权限访问该页面！"
            extra={<Button onClick={() => navigate(-1)}>返回</Button>}
        />
    </div>
}

export default Unauthorized