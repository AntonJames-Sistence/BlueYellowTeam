export default function SubSectionCol({ sections }) {
  return (
    <div className="mt-2 flex flex-col">
      {sections.map((section) => (
        <div className="mb-2" key={section.id}>
          <div className="font-semibold text-lg">{section.title}</div>
          <div className="leading-2 tracking-wide text-gray-700">
            {section.text}
          </div>
        </div>
      ))}
    </div>
  );
}
