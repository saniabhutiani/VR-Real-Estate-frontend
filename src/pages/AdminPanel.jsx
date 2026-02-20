import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [active, setActive] = useState("users");
  const [dark, setDark] = useState(false);

  /* ===== DETECT WEBSITE DARK MODE ===== */

  useEffect(() => {
    const checkTheme = () => {
      const isDark =
        document.body.classList.contains("dark") ||
        document.documentElement.classList.contains("dark");
      setDark(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  /* ================= USERS ================= */

  const [users, setUsers] = useState([
    { name: "Shalini", role: "Admin" },
    { name: "Rahul", role: "Agent" },
    { name: "Simran", role: "Buyer" },
    { name: "Aman", role: "Seller" },
  ]);

  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (!newUser.trim()) return;
    setUsers([...users, { name: newUser, role: "User" }]);
    setNewUser("");
  };

  const deleteUser = (i) =>
    setUsers(users.filter((_, idx) => idx !== i));

  const editUser = (i) => {
    const name = prompt("Enter name:", users[i].name);
    if (name === null) return;

    const role = prompt("Enter role:", users[i].role);
    if (role === null) return;

    const updated = [...users];
    updated[i] = { name, role };
    setUsers(updated);
  };

  /* ================= PROPERTIES ================= */

  const [properties, setProperties] = useState([
    { title: "3BHK Apartment", location: "Delhi", price: "₹75L" },
    { title: "Luxury Villa", location: "Chandigarh", price: "₹2.5Cr" },
  ]);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const addProperty = () => {
    if (!title || !location || !price) return;

    setProperties([...properties, { title, location, price }]);
    setTitle("");
    setLocation("");
    setPrice("");
  };

  const deleteProperty = (i) =>
    setProperties(properties.filter((_, idx) => idx !== i));

  const editProperty = (i) => {
    const t = prompt("Title:", properties[i].title);
    if (t === null) return;

    const l = prompt("Location:", properties[i].location);
    if (l === null) return;

    const p = prompt("Price:", properties[i].price);
    if (p === null) return;

    const updated = [...properties];
    updated[i] = { title: t, location: l, price: p };
    setProperties(updated);
  };

  return (
    <div style={pageWrapper}>
      <div style={container(dark)}>
        {/* SIDEBAR */}
        <div style={sidebar(dark)}>
          <h2 style={{ marginBottom: "20px" }}>ADMIN</h2>

          <button
            style={menuBtn(active === "users")}
            onClick={() => setActive("users")}
          >
            Manage Users
          </button>

          <button
            style={menuBtn(active === "properties")}
            onClick={() => setActive("properties")}
          >
            Manage Properties
          </button>
        </div>

        {/* MAIN CONTENT */}

        <div style={content}>
          {/* USERS */}
          {active === "users" && (
            <>
              <h1>User Management</h1>

              <div style={addBox}>
                <input
                  placeholder="User name"
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  style={input(dark)}
                />
                <button onClick={addUser} style={addBtn}>
                  Add User
                </button>
              </div>

              <table style={table(dark)}>
                <thead>
                  <tr>
                    <th style={th}>ID</th>
                    <th style={th}>Name</th>
                    <th style={th}>Role</th>
                    <th style={th}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((u, i) => (
                    <tr key={i}>
                      <td style={td}>{i + 1}</td>
                      <td style={td}>{u.name}</td>
                      <td style={td}>{u.role}</td>
                      <td style={td}>
                        <button style={editBtn} onClick={() => editUser(i)}>
                          Edit
                        </button>
                        <button style={deleteBtn} onClick={() => deleteUser(i)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* PROPERTIES */}
          {active === "properties" && (
            <>
              <h1>Property Management</h1>

              <div style={addBox}>
                <input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={input(dark)}
                />
                <input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={input(dark)}
                />
                <input
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={input(dark)}
                />

                <button onClick={addProperty} style={addBtn}>
                  Add Property
                </button>
              </div>

              <table style={table(dark)}>
                <thead>
                  <tr>
                    <th style={th}>ID</th>
                    <th style={th}>Title</th>
                    <th style={th}>Location</th>
                    <th style={th}>Price</th>
                    <th style={th}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {properties.map((p, i) => (
                    <tr key={i}>
                      <td style={td}>{i + 1}</td>
                      <td style={td}>{p.title}</td>
                      <td style={td}>{p.location}</td>
                      <td style={td}>{p.price}</td>
                      <td style={td}>
                        <button style={editBtn} onClick={() => editProperty(i)}>
                          Edit
                        </button>
                        <button
                          style={deleteBtn}
                          onClick={() => deleteProperty(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

/* ===== PAGE WRAPPER (BLACK BACKGROUND FIX) ===== */

const pageWrapper = {
  width: "100%",
  minHeight: "100vh",
};

/* ===== STYLES ===== */

const container = (dark) => ({
  display: "flex",
  width: "100%",
  minHeight: "calc(100vh - 70px)", // navbar height adjust
  background: dark ? "#0f172a" : "#f4f7fc",
  color: dark ? "#e5e7eb" : "#111",
});

const sidebar = (dark) => ({
  width: "230px",
  background: dark ? "#020617" : "#111827",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const menuBtn = (active) => ({
  padding: "12px",
  border: "none",
  background: active ? "#6366f1" : "#1f2937",
  color: "white",
  cursor: "pointer",
  borderRadius: "6px",
  textAlign: "left",
});

const content = {
  flex: 1,
  padding: "30px",
};

const addBox = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  flexWrap: "wrap",
};

const input = (dark) => ({
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  background: dark ? "#1f2937" : "white",
  color: dark ? "white" : "black",
});

const addBtn = {
  background: "#10b981",
  color: "white",
  border: "none",
  padding: "10px 18px",
  cursor: "pointer",
  borderRadius: "6px",
};

const table = (dark) => ({
  width: "100%",
  borderCollapse: "collapse",
  background: dark ? "#1f2937" : "white",
  borderRadius: "8px",
  overflow: "hidden",
});

const th = { padding: "12px", textAlign: "left" };
const td = { padding: "12px", borderBottom: "1px solid #ccc" };

const editBtn = {
  background: "#f59e0b",
  color: "white",
  border: "none",
  padding: "6px 12px",
  marginRight: "8px",
  borderRadius: "5px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AdminPanel;
