import { NextPage } from "next";

import { data } from "../la-nov-20-data";
import VoterGuidePage from "../VoterGuidePage";

const logo = <img alt="" src="/dsa-la@2x.png" className="h3" />;

const LA: NextPage = () => (
  <VoterGuidePage
    data={data}
    logo={logo}
    chapterDistrict="Los Angeles County"
    chapterName="DSA-LA"
  />
);

export default LA;
