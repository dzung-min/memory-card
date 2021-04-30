function Image({ src, onImageClickHanlder, imageID }) {
  return (
    <img src={src} alt="" onClick={onImageClickHanlder} data-id={imageID} />
  );
}

export default Image;
