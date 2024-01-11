"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="We at Anand Scientific Company uphold a leading position in Indian markets for our outstanding quality work related to lab equipment. As a trader since 2004, we have been committed to bring the finest grade of equipment of latest technology, standards and needs for the industries, hospitals, research centers and others from varied segments. Our offerings contain Heavy Duty Lab Centrifuge, PH Field Monitor, Water Proof PH Meter, Microprocessor Viscometer, Metallurgical Microscope, Blood Pressure Monitor and more items. Their superior quality features, accurate results, durability and cost-effective prices make these items worth the money."
          paragraph1="Under the profound leadership of Mr. Ramesh Raja, we are running our business procedures smoothly from local to national areas. A large number of customers are not only appreciating the excellent quality of our work but also vouching for us to many new customers in the field. This way, we are rapidly increasing our network base and presence in markets with time."
          sectionTeamList={[
            { id: 1, teamList: "Synchronized work" },
            { id: 2, teamList: "Professionalism and punctuality" },
            { id: 3, teamList: "Ethics, integrity and transparency" },
            { id: 4, teamList: "Effective communication skills" },
            { id: 5, teamList: "Growth oriented mindset" }

          ]}
          teamTitle="Our Team"
          deal="Vendors & Brands We Deal In"
          infra="Our Infrastructure"
          infraDescription="We have a reliable infra facility for the storage of procured products. Our warehousing area is maintained in a systematic manner to keep a bulk stock stored safely for a long duration. With this facility, we are able to support our customers even during the bulk or urgent demands very conveniently."
          dealContent="Our company has made & maintained a healthy relationship with some prestigious organizations of the laboratory ware industry. These companies provide us with high quality developed products as well as raw inputs that are used by production experts in making a range of PH Field Monitor, Heavy Duty Lab Centrifuge, Microprocessor Viscometer, Water Proof PH Meter, etc."
          dealContent1="Every vendor of our firm is chosen after conducting a series of surveys, researches and case studies on the grounds of their market reputation, product quality, track records, clarity in deals, competitive rates, etc. With their support, we are dealing with some of the top brands in the domain that are Anand, Eutech, Remi & Orange."
          teamDescription="Blessed by a team of self motivated & intelligent people, we have established a reputed position for ourselves in the market. All the team members are well-updated with the market & its constantly changing trends to run trading operations in an efficient & fluent manner. Their main qualities include:"
          center
          mb="80px"
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;


