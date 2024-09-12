export const GreenHeroVideo = () => {
  return (
    <div>
      <div className="flex justify-center">
        <video
          src="https://res.cloudinary.com/zapier-media/video/upload/q_auto/f_auto/v1706050747/Homepage%20ZAP%20Jan%2024/012224_Homepage_Hero2_R3_V4_ybz1kv.mp4"
          className="max-w-6xl"
          controls={false}
          muted
          autoPlay
          loop
        />
      </div>
      <div className="text-black flex justify-center pt-16"></div>
    </div>
  );
};
