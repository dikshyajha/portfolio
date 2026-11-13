const Spotlight = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "radial-gradient(circle, #4d415e, #1a1a1d)",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default Spotlight;
