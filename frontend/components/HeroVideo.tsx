export const HeroVideo = () => {
  return (
    <div>
      <div className="flex justify-center">
        <video
          src="https://res.cloudinary.com/zapier-media/video/upload/f_auto,q_auto/v1706042175/Homepage%20ZAP%20Jan%2024/012324_Homepage_Hero1_1920x1080_pwkvu4.mp4"
          className="max-w-6xl"
          controls={false}
          muted
          autoPlay
          loop
        />
      </div>
      <div className="text-black flex justify-center pt-16">
        Zapier is trusted by over 2.2 million companies worldwide
      </div>
    </div>
  );
};
