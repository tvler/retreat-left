import { ReactNode } from "react";

type VoterGuideEntry = Readonly<{
  subtitle?: string;
  title: string;
  desc?: ReadonlyArray<ReactNode>;
  link: string;
  endorsed: boolean;
}>;

type VoterGuideCategory = string;

export type VoterGuide = {
  sourceUrl: string;
  guide: ReadonlyArray<[VoterGuideCategory, ReadonlyArray<VoterGuideEntry>]>;
};
