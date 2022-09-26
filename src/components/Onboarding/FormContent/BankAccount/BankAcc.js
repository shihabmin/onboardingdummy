import { BankFilled, SyncOutlined, UploadOutlined } from "@ant-design/icons"
import { Col, Typography, Row } from "antd"
import { useState } from "react"
import NetBanking from "./AddBankAccMethods/NetBanking"
import "./BankAcc.css"

const BankAcc = () => {
  const [selectedTab, setSelectedTab] = useState("")

  const handleTabChange = (e) => (value) => {
    setSelectedTab(e)
  }

  return (
    <div className="bankacc-main-wrapper">
      <Row>
        <Typography className="info-header">Step 2 of 3!</Typography>
        <Typography className="info-sub-header">Verify your primary/ salary account, via one of the options given below.</Typography>
      </Row>
      {selectedTab === "" &&
        <div className="add-bank-tabs-wrapper">
          <Typography className="recommended-tab">RECOMMENDED</Typography>
          <div className="add-bank-tab" onClick={handleTabChange("account-aggregator")}>
            <SyncOutlined />
            <div className="add-bank-tab-text">
              <Typography className="main-text">Account Aggregator</Typography>
              <Typography className="sub-text">OTP-based bank statement</Typography>
            </div>
          </div>
          <div className="add-bank-tab" onClick={handleTabChange("netbanking")}>
            <BankFilled />
            <div className="add-bank-tab-text">
              <Typography className="main-text">Netbanking</Typography>
              <Typography className="sub-text">User Id &amp; password</Typography>
            </div>
          </div>
          <div className="add-bank-tab" onClick={handleTabChange("bank-statement")}>
            <UploadOutlined />
            <div className="add-bank-tab-text">
              <Typography className="main-text">Bank Statement</Typography>
              <Typography className="sub-text">Upload a PDF statement</Typography>
            </div>
          </div>
        </div>
      }
      {selectedTab === "netbanking" &&
        <Col>
          <Col className="add-bank-tab add-bank-tab__selected">
            <BankFilled />
            <Col className="add-bank-tab-text">
              <Typography className="main-text">Netbanking</Typography>
              <Typography className="sub-text">User Id &amp; password</Typography>
            </Col>
          </Col>
          <NetBanking handleTabChange={handleTabChange}/>
        </Col>
      }
    </div>
  )
}

export default BankAcc