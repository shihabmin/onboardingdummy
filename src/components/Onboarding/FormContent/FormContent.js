import BankAcc from "./BankAccount/BankAcc"
import "./FormContent.css"
import KYCApprovals from "./KYC/KYCApprovals"

const FormContent = () => {
    return(
        <div className="form-content-main-wrapper">
            {/* <BankAcc /> */}
            <KYCApprovals />
        </div>
    )
}

export default FormContent