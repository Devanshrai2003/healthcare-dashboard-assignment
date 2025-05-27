import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { healthIndicators } from "../../../data/healthIndicators";
import "./AnatomySection.css";
export function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="diagram">
        <img
          className="human-image"
          src="/assets/images/anatomy.png"
          alt="human anatomy diagram"
        />
        <MagnifyingGlassPlusIcon className="zoom-icon" />
      </div>
      {healthIndicators.map((indicator) => {
        return (
          <div
            key={indicator.index}
            className="indicator"
            style={{
              backgroundColor: indicator.bgColor,
              color: indicator.textColor,
              top: indicator.position.top,
              left: indicator.position.left,
              position: "absolute",
            }}
          >
            <img src={indicator.iconSrc} className="indicator-icon" />
            <span>{indicator.label}</span>
          </div>
        );
      })}
    </div>
  );
}
