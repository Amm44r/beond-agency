const styles = {
    boxWidth: " w-full",
  
    heading1: "font-josefin font-bold text-black5 text-[56px] ss:text-[64px] leading-[84px] ss:leading-[96px]",
    heading2: "font-josefin font-bold text-black5 text-[39.375px] ss:text-[45px] leading-[56px] ss:leading-[64px]",
    heading2_light: "font-josefin font-normal text-black5 text-[39.375px] ss:text-[45px] leading-[56px] ss:leading-[64px]",
    heading3: "font-josefin font-bold text-black text-[28px] ss:text-[32px] leading-[42px] ss:leading-[48px]",
    heading4: "font-josefin font-bold text-black text-[20.125px] ss:text-[23px] leading-[28px] ss:leading-[32px]",
    heading5: "font-josefin font-normal text-black text-[14px] ss:text-[16px] leading-[21px] ss:leading-[24px]",
    heading5_caps: "font-josefin font-bold text-black5 text-[14px] ss:text-[16px] leading-[21px] ss:leading-[24px] tracking-[3.84px]", 
    heading6: "font-josefin font-bold text-black5 text-[9.625px] ss:text-[11px] leading-[21px] ss:leading-[24px]",
    paragraph: "font-figtree font-normal text-[14px] ss:text-[16px] leading-[26.25px] ss:leading-[30px] tracking-[1.12px] ss:tracking-[1.28px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "xl:px-80 md:px-32 ss:px-16 px-4",
    paddingY: "lg:py-64 py-32", //figure out y padding
    padding: "ss:px-16 px-6 ss:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;