import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";

class Details extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       loading: true
  //     };
  //   }
  state = {
    loading: true
  };
  componentDidMount() {
    throw new Error("sykes");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${
          animal.contact.address.state
        }`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    const { animal, location, breed, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed}  - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
