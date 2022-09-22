import FormContent from "./FormContent/FormContent"
import "./onboarding.css"
import StaticSideBar from "./StaticSideBar/StaticSideBar"

const Onboarding = () => {
    return(
        <div className="onboarding-main-wrapper">
            <StaticSideBar />
            <FormContent />
        </div>
    )
}

export default Onboarding