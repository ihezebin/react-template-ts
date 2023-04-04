import style from './index.module.scss'
import {Button, Result} from "antd";


export default function Unauthorized() {

    return <div className={style.unauthorized}>
        <div className={style.result}>
            <Result
                status="403"
                title="401"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary">前往认证</Button>}
            />
        </div>
    </div>
}