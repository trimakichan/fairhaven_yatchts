
import "./loading.scss";

const Loading = () => {

  return (
    <main className="loading">
      <img
        src="/boatWheelHalf.svg"
        alt="half anchor background image"
        className="boatWheel-left-image"
      />
      <img
        src="/boatWheelHalf.svg"
        alt="half anchor background image"
        className="anchor-right-image"
      />
      <div className="loading-icon">
        <img
          src="/spinner.svg"
          className="loading-icon"
          alt="spinner animation"
        />
        <div className="textMRoboto loading-text">Loading....</div>
      </div>
    </main>
  );
};

export default Loading;
