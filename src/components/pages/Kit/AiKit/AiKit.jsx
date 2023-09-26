import kitBanner from '../../../../assets/Kit/kit-banner.png';

const AiKit = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full" src={kitBanner} alt="" />
        <h1 className="absolute text-white bottom-28 left-52 text-5xl">
          Ai Kit
        </h1>
      </div>
    </div>
  );
};

export default AiKit;
