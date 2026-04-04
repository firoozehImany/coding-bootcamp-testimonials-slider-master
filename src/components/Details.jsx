export default function Details({ data }) {
  const { feedback, name, role } = data;
  return (
    <article className="flex flex-col gap-[35px]">
      <p className="text-[32px] text-text-primary font-extralight tracking-[1.8px] leading-[43px] w-[630px]">
        “ {feedback} ”
      </p>
      <div className="flex items-center gap-2 text-[20px] tracking-[0.2px]">
        <h2 className="text-text-primary font-bold">{name}</h2>
        <span className="text-text-secondary">{role}</span>
      </div>
    </article>
  );
}
