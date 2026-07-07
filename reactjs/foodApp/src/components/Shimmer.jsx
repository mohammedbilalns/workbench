const Shimmer = () => {
    return (
      <div className="body">
        <div className="filter-bar">
          <div className="shimmer-search shimmer-animate"></div>
          <div className="shimmer-btn shimmer-animate"></div>
          <div className="shimmer-btn shimmer-animate"></div>
        </div>
  
        <div className="res-container">
          {Array(12)
            .fill("")
            .map((_, index) => (
              <div className="shimmer-card" key={index}>
                <div className="shimmer-img shimmer-animate"></div>
                <div className="shimmer-line shimmer-animate"></div>
                <div className="shimmer-line shimmer-animate short"></div>
                <div className="shimmer-line shimmer-animate"></div>
                <div className="shimmer-line shimmer-animate"></div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  