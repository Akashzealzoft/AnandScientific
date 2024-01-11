import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";



const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">

      {text}
    </p>
  );

  return (
    <section id="about" className="container pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Key Facts of Anand Scientific Company"
                paragraph=""
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Nature of Business" />
                    <List text="Location" />
                    <List text="Year of Establishment" />
                    <List text="No. of Employees" />
                    <List text="Annual Turnover" />
                    <List text="Brand Names" />
                    <List text="GST No." />
                    <List text="Shipment Mode" />
                    <List text="Modes of Payment" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Trader and Supplier" />
                    <List text="Chennai, Tamil Nadu, India" />
                    <List text="2004" />
                    <List text="10" />
                    <List text="INR 10 Crores" />
                    <List text="Eutech, Remi & Orange" />
                    <List text="133AAIPR0004K1Z0" />
                    <List text="Road Transport" />
                    <List text="Online Payments (NEFT/RTGS/IMPS) and Cheque/DD" />

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
