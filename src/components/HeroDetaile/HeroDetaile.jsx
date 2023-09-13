import css from './HeroDetaile.module.css';

export const HeroDetaile = ({ detaile }) => {
  return (
    <div className={css.details}>
      <img
        className={css.imgdetaile}
        src={detaile.images.lg}
        alt={detaile.name}
      />
      <h2 className={css.name}>name: {detaile.name}</h2>
      <h3 className={css.fullName}>fullName: {detaile.biography.fullName}</h3>
      <h4 className={css.publisher}>
        publisher: {detaile.biography.publisher}
      </h4>
      <span className={css.span}>
        eyeColor :{detaile.appearance.eyeColor}; hairColor:
        {detaile.appearance.hairColor}
      </span>
      <span className={css.span1}>
        height:{detaile.appearance.height[1]}; weight:
        {detaile.appearance.weight[1]}
      </span>
    </div>
  );
};
