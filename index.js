const Notification = (props) => {
  //  Write your code here.
  const { className, children } = props;

  return <p className={className}>{children}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="btn1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="icon"
      />
      <Notification className="heading" children="Information Message" />
    </div>
    <div className="btn2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="icon"
      />
      <Notification className="heading" children="success Message" />
    </div>
    <div className="btn3">
      <img
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="icon"
      />
      <Notification className="heading" children="warning Message" />
    </div>
    <div className="btn4">
      <img
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="icon"
      />
      <Notification className="heading" children="danger Message" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
