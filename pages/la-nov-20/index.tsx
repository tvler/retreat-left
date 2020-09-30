import { Fragment } from "react";
import { NextPage } from "next";

import { data } from "./data";
import VoterGuidePage from "../../VoterGuidePage";

const LA: NextPage = () => <VoterGuidePage data={data} />;

export default LA;
