import { useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [showWorkMenu, setShowWorkMenu] = useState(false);

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "50px",
        height: "100vh",
        background: "transparent",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: "20px",
        paddingLeft: "20px",
      }}
    >
      <div
        className="work-container"
        onMouseEnter={() => setShowWorkMenu(true)}
        onMouseLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowWorkMenu(false);
          }
        }}
        style={{ position: "relative" }}
      >
        <a href="/" className="sidebar-link">
          work
        </a>
        {showWorkMenu && (
          <div className="work-submenu">
            <a href="/studio" className="sidebar-sublink">
              studio
            </a>
            <a href="/events" className="sidebar-sublink">
              events
            </a>
            <a href="/corporate" className="sidebar-sublink">
              corporate
            </a>
            <a href="/personal-projects" className="sidebar-sublink">
              personal projects
            </a>
            <a href="/street-snaps" className="sidebar-sublink">
              street snaps
            </a>
            <a href="/film" className="sidebar-sublink">
              film
            </a>
          </div>
        )}
      </div>
      <a href="/journal" className="sidebar-link">
        journal
      </a>
      <a
        href="mailto:robert.antonov0@gmail.com"
        className="sidebar-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        contact
      </a>
    </aside>
  );
}
