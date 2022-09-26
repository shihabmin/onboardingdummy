import { Col, Typography, Radio, Space, Button } from "antd"
import "./KYC.css"

const KYCApprovals = () => {
    return (
        <Col>
            <Typography className="info-header">Step 3 of 3!</Typography>
            <Typography className="info-sub-header">Complete your KYC to know your credit limit</Typography>
            <Radio.Group className="select-kyc-method">
                <Space direction="vertical">
                    <Radio value={1}>
                        <Col style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                        <Typography className="kyc-radio-main-text">C-KYC</Typography>
                        <Typography className="kyc-radio-sub-text">Central KYC, a GOI initiative</Typography>                        
                        </Col>
                        </Radio>
                    <Radio value={2}>
                        <Col style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                        <Typography className="kyc-radio-main-text">V-KYC</Typography>
                        <Typography className="kyc-radio-sub-text">Video KYC, via a video call</Typography>                        
                        </Col>
                        </Radio>
                    <Radio value={3}>
                        <Col style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                        <Typography className="kyc-radio-main-text">E-KYC</Typography>
                        <Typography className="kyc-radio-sub-text">Electronic KYC, verified with your Aadhaar</Typography>                        
                        </Col>
                    </Radio>
                </Space>
            </Radio.Group>
            <Button className="continue-btn-kyc" shape="round">CONTINUE</Button>
        </Col>
    )
}

export default KYCApprovals