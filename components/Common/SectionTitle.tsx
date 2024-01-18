const Title = ({ children }) => {
  return <h3 className="text-lg mt-10 dark:text-white font-semibold mb-2">{children}</h3>;
};
const SectionTitle = ({
  title,
  paragraph,
  paragraph1,
  teamTitle,
  teamDescription,
  sectionTeamList,
  deal,
  dealContent1,
  dealContent,
  infra,
  infraDescription,
  width = "100%",
  center,
  mb = "8",
}) => {
  return (
    <div className={`w-full ${center ? "text-left" : ""}`} style={{ maxWidth: width, marginBottom: mb }}>
      <h2 className="text-5xl text-center font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{paragraph}</p>
      <p className="text-gray-700 mb-4">{paragraph1}</p>
      <div className="container text-gray-700">
        <Title>{teamTitle}</Title>
        <p>{teamDescription}</p>
        <ul className="list-disc ml-5 text-gray-700">
          {Array.isArray(sectionTeamList) && sectionTeamList.map((teamListItem) => (
            <li key={teamListItem.id}>{teamListItem.teamList}</li>
          ))}
        </ul>
        <Title>{deal}</Title>
        <p>{dealContent}</p>
        <p>{dealContent1}</p>
        <Title>{infra}</Title>
        <p>{infraDescription}</p>
      </div>
    </div>
  );
};
export default SectionTitle;
