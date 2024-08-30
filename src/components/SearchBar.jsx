import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="display md:flex items-center bg-slate-400 px-4 gap-4 rounded hidden ">
      <Search></Search>

      <input
        type="text"
        placeholder="Search for something"
        className=" bg-slate-400 text-slate-500 outline-0  placeholder:text-teal-50 p-[2%]"
      />
    </div>
  );
}
