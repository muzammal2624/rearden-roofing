import img from "../assets/construction-hero@2x.webp";

export default function ServiceCard(props) {
  const { title, description, image } = props;
  return (
    <>
      <div className="service-card">
        <div className="image">
          <img src={image} alt="" />
        </div>

        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
