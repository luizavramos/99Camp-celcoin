export default function Content(props) {
  const {title, image, alt} = props;
  return (
      <div className="post">
        <h1 className="titulo">{title}</h1>
        <img src={image} alt={alt} />
      </div>
     
  );
}