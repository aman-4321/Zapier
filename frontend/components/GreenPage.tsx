export const GreenPage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full mt-14 pt-14 flex flex-col items-center"
      style={{
        backgroundColor: "#D8ECEA",
      }}
    >
      <div className="text-6xl font-semibold text-black mb-4 text-center">
        <div>Meet Zapier: Your new home</div>
        <div>to automate anything</div>
      </div>
      <div className="text-black text-center text-2xl font-normal font-sans">
        <div className="">
          You dream up what to automate—Zapier will handle the rest. Combine
          user interfaces, data
        </div>
        <div>
          tables, and logic with 7,000+ apps to build and automate anything you
          can imagine.
        </div>
        <div className="mt-4">
          Zapier will help you grow twice as fast, even without hiring another
          person.
        </div>
      </div>
    </div>
  );
};
