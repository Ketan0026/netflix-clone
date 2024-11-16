import React, { useState } from "react";
import "./SubscriptionTemplate.css";

export function CardTemplate({ planName, quality, onClick, selected, bg }) {
  const getBackgroundColor = () => {
    switch (planName) {
      case "Premium":
        return "radial-gradient(140.76% 131.96% at 100% 100%, rgb(229, 9, 20) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)";
      case "Standard":
        return "radial-gradient(140.76% 131.96% at 100% 100%, rgb(176, 56, 220) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)";
      case "Basic":
        return "radial-gradient(140.76% 131.96% at 100% 100%, rgb(109, 59, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)";
      case "Mobile":
        return "radial-gradient(140.76% 131.96% at 100% 100%, rgb(33, 114, 227) 0%, rgba(74, 42, 150, 0.5) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(29, 82, 157)";
      default:
        return "white";
    }
  };

  return (
    <div className="subs-plan-card">
      <label>
        <div
          className={`cards ${selected ? "selected active" : ""}`}
          style={{
            background: bg || selected ? getBackgroundColor() : "white",
          }}
          onClick={onClick}
        >
          <h2>{planName}</h2>
          <sub>{quality}</sub>
          {selected && (
            <div className="selectIcon">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                className="success-icon"
                data-uia="success-svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </label>
    </div>
  );
}

export function PlanFeatures({
  selectedPlan,
  price,
  quality,
  res,
  device,
  deviceNo,
  downloads,
}) {
  const getMonthlyPrice = () => {
    switch (selectedPlan) {
      case "Premium":
        return "₹649";
      case "Standard":
        return "₹499";
      case "Basic":
        return "₹199";
      default:
        return "₹149";
    }
  };

  const getVideoQuality = () => {
    switch (selectedPlan) {
      case "Premium":
        return "Best";
      case "Standard":
        return "Great";
      case "Basic":
        return "Good";
      default:
        return "Fair";
    }
  };
  const getResolution = () => {
    switch (selectedPlan) {
      case "Premium":
        return "4K (Ultra HD) + HDR";
      case "Standard":
        return "1080p";
      case "Basic":
        return "720p";
      default:
        return "480p";
    }
  };
  const getDevices = () => {
    switch (selectedPlan) {
      case "Mobile":
        return "Mobile phone, tablet";
      default:
        return "TV, computer, mobile phone, tablet";
    }
  };
  const getDevicesCount = () => {
    switch (selectedPlan) {
      case "Premium":
        return "4";
      case "Standard":
        return "2";
      default:
        return "1";
    }
  };
  const getDownloads = () => {
    switch (selectedPlan) {
      case "Premium":
        return "6";
      case "Standard":
        return "2";
      default:
        return "1";
    }
  };

  return (
    <div className="current-plan-features">
      <ul>
        <li>
          <div className="features-layout">
            <div>Monthly Price</div>
            <div style={{ fontSize: "1rem" }}>
              {price ? price : getMonthlyPrice()}
            </div>
          </div>
        </li>
        <li>
          <div className="features-layout">
            <div>Video and sound quality</div>
            <div>{quality ? quality : getVideoQuality()}</div>
          </div>
        </li>
        <li>
          <div className="features-layout">
            <div>Resolution</div>
            <div>{res ? res : getResolution()}</div>
          </div>
        </li>
        <li>
          <div className="features-layout">
            <div>Supported devices</div>
            <div>{device ? device : getDevices()}</div>
          </div>
        </li>
        <li>
          <div className="features-layout">
            <div>Devices your household can watch at the same time</div>
            <div>{deviceNo ? deviceNo : getDevicesCount()}</div>
          </div>
        </li>
        <li>
          <div className="features-layout">
            <div>Download devices</div>
            <div>{downloads ? downloads : getDownloads()}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export function PlanTemplate() {
  const [selectedPlan, setSelectedPlan] = useState("Premium");

  const handlePlanSelection = (planName) => {
    setSelectedPlan(planName);
  };
  return (
    <div className="planForm">
      <div>
        <div
          className="planForm-banner"
          onClick={() => handlePlanSelection("Premium")}
        >
          <CardTemplate
            planName="Premium"
            quality="4K + HDR"
            selected={selectedPlan === "Premium"}
            bg="Premium"
          />
          <PlanFeatures
            price="₹649"
            quality="Best"
            res="4K (Ultra HD) + HDR"
            deviceNo="4"
            downloads="6"
          />
        </div>
      </div>
      <div>
        <div
          className="planForm-banner"
          onClick={() => handlePlanSelection("Standard")}
        >
          <CardTemplate
            planName="Standard"
            quality="1080p"
            selected={selectedPlan === "Standard"}
            bg="Standard"
          />
          <PlanFeatures
            price="₹499"
            quality="Great"
            res="1080p"
            deviceNo="2"
            downloads="2"
          />
        </div>
      </div>
      <div>
        <div
          className="planForm-banner"
          onClick={() => handlePlanSelection("Basic")}
        >
          <CardTemplate
            planName="Basic"
            quality="720p"
            selected={selectedPlan === "Basic"}
            bg="Basic"
          />
          <PlanFeatures price="₹199" quality="Good" res="720p" />
        </div>
      </div>
      <div>
        <div
          className="planForm-banner"
          onClick={() => handlePlanSelection("Mobile")}
        >
          <CardTemplate
            planName="Mobile"
            quality="480p"
            selected={selectedPlan === "Mobile"}
            bg="Mobile"
          />
          <PlanFeatures
            price="₹149"
            quality="Fair"
            res="480p"
            device="Mobile phone, tablet"
          />
        </div>
      </div>
    </div>
  );
}

function SubscriptionTemplate() {
  const [selectedPlan, setSelectedPlan] = useState("Premium");

  const handlePlanSelection = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="templateContainer">
      <div className="plan-form">
        <CardTemplate
          planName="Premium"
          quality="4K + HDR"
          onClick={() => handlePlanSelection("Premium")}
          selected={selectedPlan === "Premium"}
        />
        <CardTemplate
          planName="Standard"
          quality="1080p"
          onClick={() => handlePlanSelection("Standard")}
          selected={selectedPlan === "Standard"}
        />
        <CardTemplate
          planName="Basic"
          quality="720p"
          onClick={() => handlePlanSelection("Basic")}
          selected={selectedPlan === "Basic"}
        />
        <CardTemplate
          planName="Mobile"
          quality="480p"
          onClick={() => handlePlanSelection("Mobile")}
          selected={selectedPlan === "Mobile"}
        />
      </div>
      <PlanFeatures selectedPlan={selectedPlan} />
      <PlanTemplate />
    </div>
  );
}

export default SubscriptionTemplate;
