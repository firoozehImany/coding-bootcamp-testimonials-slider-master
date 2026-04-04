export default function Details({ data }) {
  const { feedback, name, role } = data;
  return (
    <article className="flex flex-col gap-[35px]">
      <p className="text-[32px] text-text-primary font-light tracking-[1.4px] leading-[44px] w-[640px]">
        “ {feedback} ”
      </p>
      <div className="flex items-center gap-2 text-[20px]">
        <h1 className="text-text-primary font-bold tracking-[0.3px] ">{name}</h1>
        <span className="text-text-secondary">{role}</span>
      </div>
    </article>
  );
}
