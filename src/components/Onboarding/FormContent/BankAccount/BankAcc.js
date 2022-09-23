import { BankFilled, SyncOutlined, UploadOutlined } from "@ant-design/icons"
import { Col, Typography, Row } from "antd"
import "./BankAcc.css"

const BankAcc = () => {
    return (
        <div className="bankacc-main-wrapper">
            <Row>
                <Typography className="info-header">Step 2 of 3!</Typography>
                <Typography className="info-sub-header">Verify your primary/ salary account, via one of the options given below.</Typography>
            </Row>
            <div className="add-bank-tabs-wrapper">
                <Typography className="recommended-tab">RECOMMENDED</Typography>
                <div className="add-bank-tab">
                    <SyncOutlined />
                    <div className="add-bank-tab-text">
                        <p className="main-text">Account Aggregator</p>
                        <p className="sub-text">OTP-based bank statement</p>
                    </div>
                </div>
                <div className="add-bank-tab">
                    <BankFilled />
                    <div className="add-bank-tab-text">
                        <p className="main-text">Netbanking</p>
                        <p className="sub-text">User Id &amp; password</p>
                    </div>
                </div>
                <div className="add-bank-tab">
                    <UploadOutlined />
                    <div className="add-bank-tab-text">
                        <p className="main-text">Bank Statement</p>
                        <p className="sub-text">Upload a PDF statement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankAcc