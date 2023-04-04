import style from './index.module.scss'
import {Button, Result} from "antd";

export default function NotFound() {


    return <div className={style.notFound}>
        <div className={style.result}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">返 回</Button>}
            />
        </div>
    </div>
}