import { Col, Row, Typography } from "antd"
import "./approved.css"

const ApprovedPrimaryScreen = () => {
    return(
        <Col>
            <Typography className="info-header">Congratulations, your limit has been approved!</Typography>
            <Typography className="info-sub-header">Activate it instantly by paying a one-time processing fee, or increase your credit limit.</Typography>
            <Col className="approved-credit-amt-card-wrapper">
                <Typography className="approved-amt-txt">&#8377; 5,00,000.00</Typography>
                <Typography className="unlocked-txt">Unlocked!</Typography>
                <Typography className="interest-txt">Interest @ 3% per month</Typography>
            </Col>
            <Col>
                <Typography>Snapshot of your credit limit:</Typography>
                <Col className="cr-limit-details">
                    <Typography>Loan Amount:</Typography>
                    <Typography>&#8377; 5,00,000.00</Typography>
                    <Typography>Interest rate:</Typography>
                    <Typography>3.00 % / month</Typography>
                </Col>
            </Col>
        </Col>
    )
}

export default ApprovedPrimaryScreen