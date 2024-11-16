import React from "react";
import "./Subscription.css";
import SubscriptionTemplate from "./SubscriptionTemplate";
import HomeFooter from '../footer/HomeFooter'

function Subscription() {
  return (
    <div className="basicLayout">
      <div className="subsHeader">
        <a className="svg-nfLogo" href="/home">
          <img src="/images/logo.svg" alt="" />
        </a>
        <a className="authLink" href="/">
          Sign Out
        </a>
      </div>
      <div className="simpleContainer">
        <div className="subContainer">
          <div className="subs-header">
            <h1>Choose the plan that’s right for you</h1>
          </div>
          <SubscriptionTemplate />
          <div className="term-and-condition">
            <small className="disclaimer">
              <span>
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                subject to your internet service and device capabilities. Not
                all content is available in all resolutions. See our{" "}
                <a href="#">Terms of Use</a> for more details.
              </span>
            </small>
            <small className="disclaimer">
              <span>
                Only people who live with you may use your account. Watch on 4
                different devices at the same time with Premium, 2 with
                Standard, and 1 with Basic and Mobile.
              </span>
            </small>
          </div>
          <div className="btnHolder">
            <button>Next</button>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Subscription;
