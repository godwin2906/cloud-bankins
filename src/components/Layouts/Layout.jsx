import React from "react";
import "../Layouts/layout.css";
import { ChevronDown } from "lucide-react";
import useMedia from "use-media";
import menu from "../../assets/menu.svg";

export default function Layout({ layoutTop, layoutBottom }) {
  const isMobile = useMedia({ maxWidth: "520px" });
  return (
    <section className="layout-container">
      <div className="header-box">
        <div className="header-left">
          {isMobile ? (
            <img src={menu} />
          ) : (
            <>
              <button className="cb-logo">CB</button>
              <h1 className="cb-text">Cloudbankin</h1>
            </>
          )}
        </div>
        {!isMobile && (
          <div className="header-right">
            <div className="user-logo">GC</div>
            <div className="user-name-container">
              <span className="user-name">Gregory clerk</span>
              <span className="dropdown-arrow">
                <ChevronDown />
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="stepper-with-field-box">
        <div>{layoutTop}</div>
        <div className="bottom-layout">{layoutBottom}</div>
      </div>
    </section>
  );
}
