export const PocemonItem = ({ pocemon }) => {
  return (
    <>
      <li className="pocemon-item">
        <img src={pocemon.sprites.front_default} alt=""></img>
        {pocemon.name} {pocemon.id}
      </li>
    </>
  );
};
