export default function Details({ data }) {
  const { feedback, name, role } = data;
  return (
    <article className="flex flex-col gap-[33px]">
      <p className="text-3xl text-text-primary font-light tracking-[0.6px] leading-[39px] w-[560px]">
        “ {feedback} ”
      </p>
      <div className="flex items-center gap-2">
        <h2 className="text-text-primary text-[18px] font-bold">{name}</h2>
        <span className="text-text-secondary text-[18px]">{role}</span>
      </div>
    </article>
  );
}
