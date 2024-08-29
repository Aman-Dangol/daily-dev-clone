

export default function LightHeading({ text,showNav }) {
  return <p className={`text-slate-500 ${showNav ? "" : "invisible"} font-bold`}>{text}</p>;
}
