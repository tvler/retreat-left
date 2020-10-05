import { NextPage } from "next";

import { data } from "../slo-nov-20-data";
import VoterGuidePage from "../VoterGuidePage";

const SLO: NextPage = () => (
  <VoterGuidePage
    data={data}
    chapterDistrict="San Luis Obispo"
    chapterName="DSA-SLO"
  />
);

export default SLO;
