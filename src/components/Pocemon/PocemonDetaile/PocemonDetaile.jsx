export const PocemonDetaile = ({ detaile }) => {
  return (
    <div className="details">
      <img
        src={detaile.sprites.other.dream_world.front_default}
        alt={detaile.name}
      />
      <h3>name: {detaile.name}</h3>
      <span className="span1">height:{detaile.height}</span>
      <span>weight: {detaile.weight}</span>
    </div>
  );
};
