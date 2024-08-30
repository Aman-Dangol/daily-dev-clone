import SearchBar from "./SearchBar";

export default function Hornav() {
  return (
    <div className="bg-slate-700 z-20  px-[17%] md:px-[5%]  justify-between items-center fixed top-0 left-0 w-full text-center  border-slate-500 border-b-[1px] h-[4%] md:h-[8%] flex ">
      <h1>Daily Dev clone</h1>
      <SearchBar />
      <div>profiles</div>
    </div>
  );
}
