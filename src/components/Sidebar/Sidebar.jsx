import "./Sidebar.css";
import { generalLinks, toolsLinks } from "../../data/links";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>
        <b>Health</b>care.
      </h2>
      <p>General</p>
      <div className="general-links">
        {generalLinks.map((genLink) => {
          const Icon = genLink.icon;
          return (
            <div
              key={genLink.text}
              className={`link-element ${genLink.isActive ? "active" : ""}`}
            >
              <Icon className="icon" />
              <span>{genLink.text}</span>
            </div>
          );
        })}
      </div>
      <p>Tools</p>
      <div className="tools-links">
        {toolsLinks.map((toolLink) => {
          const Icon = toolLink.icon;
          return (
            <div key={toolLink.text} className={`link-element`}>
              <Icon className="icon" />
              <span>{toolLink.text}</span>
            </div>
          );
        })}
      </div>
      <div className="bottom-links">
        <div className="link-element">
          <Cog6ToothIcon className="icon" />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}
