import Search from "./Search";

const HomePage = () => {
  return (
    <section className="min-h-screen px-10 py-10 mx-auto container">
      <div className="flex flex-col text-center justify-center items-center py-10">
        {" "}
        <h4>
          Find out what second jobs and additonal sources of income your MP has.
        </h4>
        <p className="py-4">
          Search for your MP below. All data is taken from Parliament reports.
        </p>
        <div className="py-10">
          <Search />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
