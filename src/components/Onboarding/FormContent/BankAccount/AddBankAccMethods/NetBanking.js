import { LeftOutlined } from "@ant-design/icons"
import { Button, Col, Input, Typography } from "antd"
import "./NetBanking.css"

const NetBanking = ({ handleTabChange }) => {
    return (
        <Col lg={20} className="netbanking-main-wrapper">
            <Col className="inputs-wrapper">
                <Input className="customerID-input" placeholder="Customer ID" />
                <Input.Password className="customerID-pword-input" placeholder="Password" />
            </Col>
            <Col>
                <Button lg={{span: 24, offset: 4}} shape="round" className="get-otp-btn">GET OTP</Button>
                <Col className="backtoPrevPage-btn" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleTabChange("")}>
                    <LeftOutlined style={{marginRight: "2px"}} className="backtoBankAcc-btn-icon" />
                    <Typography className="backtoBankAcc-btn-txt">Choose a different mode of verification.</Typography>
                </Col>
            </Col>
        </Col>
    )
}

export default NetBanking