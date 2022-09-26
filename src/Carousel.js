import { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  render() {
    const { images } = this.props;
    const { active } = this.state;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((pic, index) => (
            <img
              src={pic}
              alt="animal thumbnail"
              key={pic}
              onClick={(event) => {
                this.setState(Object.assign(this.state, { active: index }));
              }}
              className={index == active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
