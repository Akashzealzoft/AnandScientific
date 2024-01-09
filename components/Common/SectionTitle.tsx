// export const sectionTeamList = [
//   {
//     id: 1,
//     teamList: "Synchronized work"
//   },
//   {
//     id: 2,
//     teamList: "Professionalism and punctuality"
//   },
//   {
//     id: 3,
//     teamList: "Ethics, integrity and transparency"
//   },
//   {
//     id: 4,
//     teamList: "Effective communication skills"
//   },
//   {
//     id: 5,
//     teamList: "Growth oriented mindset"
//   }

import { title } from "process";

// ]
const Title = (props)=> {
  return(
    <h3 className="!leading-light text-black dark:text-white text-left font-bold">{props.children}</h3>
  )
}


const SectionTitle = ({
  title,
  paragraph,
  paragraph1,
  teamTitle,
  teamDescription,
  sectionTeamList,
  width = "100%",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  paragraph1: string;
  teamTitle: string;
  teamDescription: string;
  sectionTeamList: { id: number; teamList: string }[];
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">{paragraph1}</p>
        <div className="container text-left w-full">
          <Title>{teamTitle}</Title>
          <p className="text-body-color">{teamDescription}</p>
          <ul className="list-disc ml-10">
            {sectionTeamList?.map((teamListItem) => (
              <li key={teamListItem.id}>{teamListItem.teamList}</li>
            ))}
          </ul>
          <Title>{}</Title>

        </div>


      </div>
    </>
  );
};

export default SectionTitle;
