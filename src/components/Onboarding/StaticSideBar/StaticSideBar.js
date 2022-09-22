import "./StaticSideBar.css"
import { Steps } from "antd"
import 'antd/dist/antd.min.css';
const { Step } = Steps;

const StaticSideBar = () => {
    return (
        <div className="staticsidebar-main-wrapper">
            <div>
                <p className="info-header">Simplify your Line-of-credit</p>
                <p className="info-sub-header">In 3 easy steps!</p>

            </div>
            <div>
                <Steps direction="vertical" current={1}>
                    <Step title="Personal &amp; GST Details" />
                    <Step title="Bank Account" />
                    <Step title="KYC &amp; Approvals" />
                </Steps>
            </div>
        </div>
    )
}

export default StaticSideBar