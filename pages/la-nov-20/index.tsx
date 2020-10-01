import { NextPage } from "next";

import { data } from "./data";
import VoterGuidePage from "../../VoterGuidePage";

const logo = <img alt="" src="/dsa-la@2x.png" className="h3" />;

const LA: NextPage = () => (
  <VoterGuidePage data={data} logo={logo} chapter="Los Angeles County" />
);

export default LA;
