class ShopItemFunc extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "ShopItemFunc" }, /*#__PURE__*/
      React.createElement("div", { class: "main-content" }, /*#__PURE__*/
      React.createElement("h2", null, this.props.brand), /*#__PURE__*/
      React.createElement("h1", null, this.props.title), /*#__PURE__*/
      React.createElement("h3", null, this.props.description), /*#__PURE__*/
      React.createElement("div", { class: "description" }, this.props.descriptionFull), /*#__PURE__*/
      React.createElement("div", { class: "highlight-window mobile" }, /*#__PURE__*/
      React.createElement("div", { class: "highlight-overlay" })), /*#__PURE__*/

      React.createElement("div", { class: "divider" }), /*#__PURE__*/
      React.createElement("div", { class: "purchase-info" }, /*#__PURE__*/
      React.createElement("div", { class: "price" },
      this.props.currency,
      this.props.price), /*#__PURE__*/

      React.createElement("button", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")))));




  }}


const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
  "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399.0,
  currency: "£" };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/
React.createElement(ShopItemFunc, {
  brand: item.brand,
  title: item.title,
  description: item.description,
  descriptionFull: item.descriptionFull,
  price: item.price,
  currency: item.currency }));