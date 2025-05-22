import "./sidebar.css";

export default function Sidebar() {
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
      <a href="/" className="sidebar-link">work</a>
<a href="/journal" className="sidebar-link">journal</a>
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
