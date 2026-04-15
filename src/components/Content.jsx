export default function Content({ data }) {
  const { feedback, name, role } = data;
  return (
    <article className="flex flex-col gap-4 md:gap-9">
      <p className="text-lg text-center xl:text-left md:text-[32px] text-text-primary font-light md:tracking-[1.6px] md:leading-[44px] md:w-[640px]">
        “ {feedback} ”
      </p>
      <div className="flex flex-col xl:flex-row items-center md:gap-2 md:text-[20px]">
        <h1 className="text-text-primary font-bold tracking-[0.6px] ">{name}</h1>
        <span className="text-text-secondary">{role}</span>
      </div>
    </article>
  );
}
