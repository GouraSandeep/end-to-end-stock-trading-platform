function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Page not found</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    color: "#111827",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "4rem",
    margin: "0",
  },
  text: {
    fontSize: "1.2rem",
    marginTop: "8px",
    color: "#6b7280",
  },
};

export default NotFound;
