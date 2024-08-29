export default function Body({ showNav }) {
  return (
    <div
      className={`bg-black  ${
        !showNav ? `ml-11  ` : `ml-0 `
      } pl-10  w-full h-screen text-white`}
    >
      this is body
    </div>
  );
}
