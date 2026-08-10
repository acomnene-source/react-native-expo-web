export default function Page() {
  return (
    <main
      style={{
        width: "300px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#a12727",
        fontFamily: "Arial",
        borderRadius: "15px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "35px",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZNnt08UmNqsOA2pBvmXoCs0CQvyj0_JmndZBWtDHLA&s=10"
          style={{
            width: "45px",
            height: "45px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />

        <h1 style={{ fontSize: "22px" }}>IFFlix</h1>
      </div>

      {/* Filmes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px 18px",
        }}
      >
        {/* The Rookie */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://img.tribunahoje.com/ycYRAAxZZlp6lH0ntrxU3ZIgZaM=/300x300/smart/s3.tribunahoje.com/uploads/imagens/therooki.webp"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              border: "3px solid #f0f0f0",
              borderRadius: "15px",
            }}
          />

          <h3 style={{ fontSize: "12px", marginBottom: "5px" }}>
            The Rookie
          </h3>

          <p style={{ fontSize: "10px", color: "#ff0f0f" }}>
            Netflix
          </p>
        </div>

        {/* Brooklyn Nine-Nine */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtK1uz-IaoP1WrggDi0n1-WbRDnrzSd1cnNM88zS3F1g&s=10"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              border: "3px solid #f0f0f0",
              borderRadius: "15px",
            }}
          />

          <h3 style={{ fontSize: "12px", marginBottom: "5px" }}>
            Brooklyn Nine-Nine
          </h3>

          <p style={{ fontSize: "10px", color: "#ff0f0f" }}>
            Netflix
          </p>
        </div>

        {/* Mentalista */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/3cedf59eaa90890cc80aaef1886c345247987259df9defe5002a872b47bb34c2.jpg"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              border: "3px solid #f0f0f0",
              borderRadius: "15px",
            }}
          />

          <h3 style={{ fontSize: "12px", marginBottom: "5px" }}>
            Mentalista
          </h3>

          <p style={{ fontSize: "10px", color: "#ff0f0f" }}>
            Netflix
          </p>
        </div>

        {/* Gossip Girl */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZDljNzZmMGMtM2FmNC00ZTkzLTg2OTctNDAxZGViYjVlYjAxXkEyXkFqcGc@._V1_.jpg"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              border: "3px solid #f0f0f0",
              borderRadius: "15px",
            }}
          />

          <h3 style={{ fontSize: "12px", marginBottom: "5px" }}>
            Gossip Girl
          </h3>

          <p style={{ fontSize: "10px", color: "#ff0f0f" }}>
            Netflix
          </p>
        </div>
      </div>
    </main>
  );
}