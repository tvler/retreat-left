import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import { NextPage } from "next";

type Recomendation = Readonly<{
  subtitle?: string;
  title: string;
  desc: ReadonlyArray<string>;
  link: string;
}>;

type RecomendationCategory = string | ReactNode;

const data: ReadonlyArray<[
  RecomendationCategory,
  ReadonlyArray<Recomendation>
]> = [
  [
    <>
      President of the
      <br />
      United States
    </>,
    [
      {
        title: "Bernie Sanders",
        desc: [
          `This is the fight of our lives — led by the person who has been fighting his entire life on behalf of the working class. When other candidates were cozying up to segregationists, Bernie was getting arrested with civil rights leaders. When other candidates voted for war and bloated military budgets, Bernie showed he had the guts to oppose imperialism. While other candidates raise money from Wall Street and fossil fuels and big pharma and the insurance industry, Bernie steers his supporters to picket lines to support workers. While other candidates are fêted by the Democratic establishment and corporate media, Bernie makes enemies of the oligarchy. When other candidates campaign as if this is a personality contest, Bernie says, “Not me, Us.”`,
          `Bernie is not the movement, but he has catalyzed a movement that will win Medicare for All, tuition-free college, a Green New Deal, expanded equality and the protection of reproductive rights. This movement will dismantle mass incarceration, endless wars, wall street omnipotence and anti-worker trade deals. This movement is the strongest coalition to take on the systemic issues of our time. Bernie Sander’s base is the most multi-racial, gender and sexual identity diverse, and, crucially, the most working-class. And only the working class can build the future we deserve.`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#pres",
      },
    ],
  ],
  [
    <>
      House of
      <br />
      Representatives
    </>,
    [
      {
        subtitle: "Dist. 23",
        title: "Kim Mangone",
        desc: [
          "The deck could scarcely be more stacked against Kim Mangone. With no political experience she's running in CA 23, the reddest district in the state, against a Republican incumbent who was one of Trump's first supporters and is currently the Minority Leader and a co-signer of the USMCA. Her working-class history and military experience will give her a shot, but she's going to need our help at the polls.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong23",
      },
      {
        subtitle: "Dist. 25",
        title: "No recomendation",
        desc: [
          "This race is fraught with a wide range of unrelated controversies, making it maybe the most fascinating congressional seat to watch. On paper, Cenk Uygur is the obvious progressive choice, even though it would be his first elected office. He aligns specifically with the platform of Democratic Socialists of America and The Future Left. However, it would be risky to go where even Bernie Sanders won’t (he’s previously pulled an endorsement for Uygur) and we must take the concerns about him very seriously regarding allegations of sexism and Armenian Genocide denial. Christy Smith’s neoliberal platform, including her lack of support for Medicare for All, makes her highly questionable as an alternative and certainly undeserving of a recommendation.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong25",
      },
      {
        subtitle: "Dist. 26",
        title: "Julia Brownley",
        desc: [
          "This race seems secure for incumbent Julia Brownley. None of her rivals have ever held political office and neither of her Democratic opponents seem to be taking the race seriously. Brownley is not an ideal candidate. Many of her talking points and the bills she sponsors are very good, but she is in no way a progressive candidate and frequently votes with Republicans even when she is one of the only Democrats doing so. She has pointedly decided not to support the Green New Deal. In cases like this, it would make sense to give her the endorsement in lieu of a better candidate, but her willful lack of support for any actionably progressive policies leaves us unwilling to recommend anyone. Rep. Julia Brownley is the preferred candidate.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong26",
      },
      {
        subtitle: "Dist. 27",
        title: "Judy Chu",
        desc: [
          "Chu’s record in Congress is good for a prominent Democrat. She’s a strong supporter of abortion rights, opposed mass surveillance and other jingoistic Patriot Act boondoggles, pushed immigration reform bills and opposed immigrant detention centers, even under the Obama administration. She was a founding member of the congressional Medicare for All Caucus, introduced the Protect Our Workers from Exploitation and Retaliation Act (POWER Act, or H.R. 2169), and fought to bar employers from exploiting immigrants. Most importantly, she is a co-sponsor of Rep. Pramila Jayapal’s Medicare for All Act of 2019, which will be important in the coming years.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong27",
      },
      {
        subtitle: "Dist. 28",
        title: "Maebe A. Girl",
        desc: [
          "Democratic incumbent Adam Schiff’s role in the impeachment process boosted his name recognition, but we cannot recommend someone so subservient to his donors in the military-industrial complex. He voted for the Iraq War, the Saudi-led war in Yemen, and every military budget increase over the course of his career. Indifferent to the plight of Palestinians, Schiff sponsored legislation to criminalize the Boycott, Divestment and Sanctions movement. Schiff is known for indifference towards issues in his district, but he is expected to win based on name recognition. The DSA and Future Left are recommending Maebe A. Girl for the 28th Congressional District, though we acknowledge the low likelihood of Maebe’s victory. Our decision is based on Maebe A. Girl’s solid record of advocacy for a truly progressive platform including the Green New Deal, Medicare for All, and expanding LGBTQIA equity and social programs. Maebe is also the first Drag Queen elected to public office in the country’s history.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong28",
      },
      {
        subtitle: "Dist. 29",
        title: "Angélica María Dueñas",
        desc: [
          "Democratic incumbent Tony Cardenas previously served as an LA City Council member and state assemblymember. He’s a standard corporate Democrat who has endorsed Joe Biden for president. His two challengers, Angélica María Dueñas and Michael R. Guzik, are both running on Bernie platforms and are in favor of key policies like Medicare for All. However, Dueñas is a Democratic Socialists of America member and a 2016 Bernie Delegate, setting her apart from Guzik. She’s been endorsed by Our Revolution LA and California Progressive Alliance. Given that she has more experience in politics and the backing of other progressive organizations, we recommend you vote for Angélica María Dueñas.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong29",
      },
      {
        subtitle: "Dist. 30",
        title: "CJ Berina",
        desc: [
          "Incumbent Brad Sherman is a war hawk who supports our ongoing imperial interventions in the Middle East and Africa. He also maintained a work environment so toxic that junior staffers were too afraid to report sexual harassment from his longtime aide. Two of Sherman’s three challengers, CJ Berina and Brian Carrol, are running on progressive platforms with support for key policy issues like the Green New Deal and Medicare for All. Berina has been endorsed by Our Revolution LA and Sunrise Movement LA and is a person of color. A vote for Berina is a vote for more representation in a majority white congress.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong30",
      },
      {
        subtitle: "Dist. 32",
        title: "Emanuel Gonzales",
        desc: [
          "The incumbent Grace Napolitano has held this seat since 1999. While her website lists her issues, viewers are (hilariously) required to email her staff to get her actual views on said issues. One of her challengers, Meshal “Kash” Kashifalghita, has a 21-year career in law enforcement, which includes time in the DA’s office and as the president of the California Law Enforcement Union (he’s also an officer in the Army reserves). In addition to his disqualifying career as a tool of the state, he does not advocate for Medicare for All or openly support the Green New Deal. Emanuel Gonzales is a dialysis worker in healthcare who has campaigned for legislation to reform the healthcare system. Emanuel supports the Fight For $15 and the living wage, Medicare for All, justice for immigrants and strong labor unions. He also believes we must end cash bail, incarceration for nonviolent crimes, for-profit prisons, and the prohibition of cannabis. We recognize the slim shot at victory in this race, but we recommend voting for Emanuel.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong32",
      },
      {
        subtitle: "Dist. 33",
        title: "No recommendation",
        desc: [
          "The incumbent Ted Lieu is no worse than most of his liberal ilk and is a powerful Democratic voice (because he got good at tweeting). Still, we can’t recommend him, given his Russia hysterics and general tendency toward imperialist defense policy (he introduced a bill to collaborate with Israeli defense firms to create laser weapons, just for example). Goldberg is a real estate developer without any campaign presence beyond an FEC listing about his PAC. That’s a no from us. ",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong33",
      },
      {
        subtitle: "Dist. 34",
        title: "Frances Yasmeen Motiwalla",
        desc: [
          "Motiwalla supports the Green New Deal, Medicare for All, and is an avowed anti-war activist. While Keanakay Scott is another progressive option with strong policies to address LA's homeless crisis, her campaign presence isn’t robust enough to take her seriously as a candidate. Incumbent Jimmy Gomez is in lockstep with the Democratic party, receives donations from AIPAC and big businesses, and has a less-than-progressive voting record. Because the seat is safe, better we support the far more progressive Motiwalla.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong34",
      },
      {
        subtitle: "Dist. 35",
        title: "No recommendation",
        desc: [
          "It’s a disappointment that incumbent Norma Torres wasn’t primaried. She takes a ton of agribusiness money and has an F rating from ProgressivePunch. Her abysmal record includes voting for the United States Mexico Canada Agreement, getting rid of defense spending oversight, ballistic weapons development, warrantless FISA searches of federal employees and increased use of biometric data collection. She’s bad. Still, she’s running against a guy who lists impeachment as his candidacy’s raison d’etre. Surprise, surprise, the Inland Empire is actually quite conservative!",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong35",
      },
      {
        subtitle: "Dist. 37",
        title: "No recomendation",
        desc: [
          "Karen Bass is the head of the Congressional Black Caucus, a ranking member on the House Foreign Affairs Committee, and a co-sponsor of Rep. Pramila Jayapal’s Medicare for All Act of 2019. She supports DACA and the DREAM ACT, and worked on Proposition 47. She started the Congressional Caucus on Foster Youth, “a vehicle to organize members of Congress to come together to work for passage of legislation to improve the child welfare system.” Bass is also one of the authors of FOSTA/SESTA, and was in a position to change the bill so it didn’t endanger sex workers but didn’t do so. We are standing in solidarity with our fellow workers who have been put in danger by FOSTA/SESTA and are not recommending anyone in this race.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong37",
      },
      {
        subtitle: "Dist. 38",
        title: "Mickael Tolar",
        desc: [
          "Incumbent Linda Sanchez voted for Trump’s trade deal with Mexico and Canada and voted for each of Trump’s National Defense Authorization Acts, which included giving Saudi Arabia weapons to bomb Yemen. Also, Sanchez doesn’t advocate for Medicare for All and her husband was indicted on federal corruption charges. Her opponent, Michael Tolar, campaigns for Medicare for All and rent control. The incumbent is virtually guaranteed of winning reelection.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong38",
      },
      {
        subtitle: "Dist. 39",
        title: "Gil Cisneros",
        desc: [
          "In 2010, Gil Cisneros won a $266 million lottery jackpot, which he used to become a philanthropist (read: tax evasion specialist). He won his seat in the 2018 midterms, and was one of the Democrats who helped flip the entirety of Orange County blue. He might not be the most progressive candidate ever, but he is arguably the luckiest. Cisneros doesn’t support Medicare for All, he wants to add a public option to the Affordable Care Act. He doesn’t support universal tuition-free higher education, favoring a tuition-free higher education for “motivated students.”",
          "While he does support overturning Citizens United, he’s taken shady money from lobbyists. Despite these many flaws, his main challenger is Republican Young Kim, and they are running in a district that is eager to return to its status as a bastion of 80’s conservatism. In the choice between a centrist Democrat and a member of the increasingly reactionary Republican party, we defer to pragmatism and recommend a vote for Cisneros. There is an independent, likely libertarian candidate, Steve Cox, who frankly has a better platform than Cisneros (universal healthcare, raising taxes on the top, ending the wars on drugs and terror, making higher education tuition free). Unfortunately, Cox garnering only 856 votes in the last election (0.6% of the primary ballots cast), suggesting to us that your vote is better spent on Cisneros.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong39",
      },
      {
        subtitle: "Dist. 40",
        title: "Dr. Rodolfo Cortes Barragan",
        desc: [
          "Dr. Cortes Barragan’s stated ideology and policies are extremely in-line with the beliefs of Democratic Socialists of America-LA and affiliates. Incumbent Lucille Roybal-Allard isn’t the most corrupt Democrat in the House and has done a lot of work she should be applauded for, but Cortes Barragan is right there with us on the issues, we recommend you vote for him.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong40",
      },
      {
        subtitle: "Dist. 43",
        title: "Maxine Waters",
        desc: [
          "Waters is the incumbent and the lone Democrat against two Republican competitors. In her district, she's helped found organizations that promote black women, provided job training to young people in public housing, and worked on behalf of homeless people. However, the House Ethics Committee investigated allegations that she helped a bank in which her husband owned stock to receive bailout money during the financial crisis. For this reason she is preferred rather than recommended.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong43",
      },
      {
        subtitle: "Dist. 44",
        title: "Nanette Diaz Barragan",
        desc: [
          "Incumbent Nanette Diaz Barragan is more of a bog-standard Democrat than a true progressive, but she’s still the most left candidate in this race. Racking up endorsements from Los Angeles County Federation of Labor, AFL-CIO, SEIU California, Planned Parenthood Action Fund, Sierra Club and beyond; she has a solid base of support from labor and left organizations and her community. Nanette supported the Green New Deal and speaks up for fellow women and people of color on her website. Unfortunately, she’s very focused on promoting the Affordable Care Act versus Medicare for All, but everybody has room to grow and we hope Nanette will come over to our camp.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong44",
      },
      {
        subtitle: "Dist. 47",
        title: "Peter Matthews",
        desc: [
          "Peter is a well-established progressive author and activist with a detailed platform that has received attention from progressive media personalities like Thom Hartmann. He supports universal programs including the Green New Deal, Medicare for All, tuition-free college, and abolishing private prisons.",
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#cong47",
      },
    ],
  ],
  [
    "State Senate",
    [
      {
        subtitle: "Dist. 21",
        title: "Kipp Mueller",
        desc: [
          `Kipp Mueller is a young progressive fighting for change in the Democratic establishment. During his career as an attorney he's fought ICE pro bono and has supported unions, universal healthcare (including extending healthcare to undocumented immigrants), reproductive rights and sanctuary cities. He’s a newcomer, but he’s moving the party in the direction we’d like to see it go (leftward, ho!).`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#senate21",
      },
      {
        subtitle: "Dist. 23",
        title: "Abigail Medina",
        desc: [
          `Although Kris Goodfellow and Abigail Medina share progressive ideals, Goodfellow has more specific plans on how to implement them into law. She endorses the California Schools and Local Communities Funding Act to restore over $11 billion per year to California’s public school system. She supports California's cap-and-trade program to limit carbon dioxide emissions, which requires companies to pay money damages for non-compliance. Medina also endorses California's Earned Income Tax Credit, which boosts the incomes of low-income families. She pledges to close the wage gap by pushing corporations to pay living wages. She has actionable progressive plans, and that’s why we should vote for her.`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#senate23",
      },
      {
        subtitle: "Dist. 25",
        title: "No recommendation",
        desc: [
          `Anthony Portantino Jr. is a decent state senator. He is mostly aligned with our progressive agenda and his campaign contributions primarily come from state labor organizations. He did get a few fat checks this election cycle from Elevate Credit, Inc. and ACE Cash Express, both payday loan companies. Since he decided to run out for milk and cigarettes during the votes for SB616 (forces debt collectors to leave a debtors final $1,724 in their bank account) and SB298 (protects seasonal workers’ savings from debt collectors), it seems he’ll vote for worker protections and wages, but not to keep us from being exploited by payday lenders. Portantino should definitely stop shilling for these parasites, until he does, he’ll get no recommendation from us.`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#senate25",
      },
      {
        subtitle: "Dist. 27",
        title: "No recommendation",
        desc: [
          `Henry Stern voted no on bills around housing and police accountability. He chose not to vote on multiple bills that would have benefited immigrants, boosted harm reduction efforts in the city, and provided oversight of police departments’ use of surveillance technology. While he might be slightly better than a Republican, we don't feel comfortable recommending him.`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#senate27",
      },
      {
        subtitle: "Dist. 29",
        title: "Josh Newman",
        desc: [
          `Newman is fighting for renewable energy, quality affordable education, and funding mental health facilities for the homeless. He secured $20 million for a local program which addresses the root causes of homelessness and youth violence, and assists in post-incarceration reintegration programs. He's been endorsed by the Sierra Club, Planned Parenthood, California Teachers Association and OC Labor Federation.`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#senate29",
      },
      {
        subtitle: "Dist. 33",
        title: "No recommendation",
        desc: [
          `Incumbent Democrat Lena Gonzales has a progressive history and is running unopposed. She’s voted yes on bills such as AB 68 (ADU unit legislation), AB 1215 (a 3-year ban on biometric surveillance and facial recognition in police body cameras), AB 1487 (to raise affordable housing funds), and AB 857 (allows local governments to support public banks). She's also received a Courage Campaign score of 100%.`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#senate33",
      },
      {
        subtitle: "Dist. 35",
        title: "Steven Bradford",
        desc: [
          `Incumbent Steven Craig Bradford has devoted much of his political career to ensuring the passage of bills on criminal justice reform, solar energy, and public safety. He boasts a long list of progressive endorsements, including Dolores Huerta, the National Union of Healthcare Workers, and the California Labor Federation.`,
        ],
        link: "https://www.dsa-la.org/2020_primary_voter_guide#senate35",
      },
    ],
  ],
  [
    "State Assembly",
    [
      {
        subtitle: "Dist. 36",
        title: "Eric Ohlsen",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly36",
        desc: [
          `Ohlsen is running as a Bernie-style progressive. He is already endorsed by Our Revolution, Blue America, and the California Progressive Alliance. Ohlsen’s campaign materials prioritize infrastructure, housing, climate change, immigration reform, criminal justice reform, student debt elimination, education, and economic equality. Ohlsen’s most competitive opponents have ties to law enforcement or the military industrial complex.`,
        ],
      },
      {
        subtitle: "Dist. 38",
        title: "Dina Cervantes",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly38",
        desc: [
          `Dina Cervantes has a solid record of allying with teachers, hotel workers, unions, climate justice groups, and immigrants. She worked to block ICE from showing up to public schools. Cervantes has the institutional background and broad community support to wage a competitive campaign.`,
        ],
      },
      {
        subtitle: "Dist. 39",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly39",
        desc: [
          `Luz Maria Rivas is an incumbent Democrat running against a Republican.`,
        ],
      },
      {
        subtitle: "Dist. 41",
        title: "Chris Holden",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly41",
        desc: [
          `Chris Holden has a strong track record on most progressive issues, especially those concerning civil rights and environmental protections. He's served as the Chair of the California Legislative Black Caucus, the Chair of the Assembly Committee on Utilities and Energy, and founded & co-chaired the Wildfire Preparedness and Response Legislative Conference Committee. Most of his campaign contributions are from labor unions. The only marks against him are his abstention from SB 460 (to reinstate net neutrality in CA) & AB 2500 (to protect consumers from predatory lenders).`,
        ],
      },
      {
        subtitle: "Dist. 43",
        title: "Laura Friedman",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly43",
        desc: [
          `Since being elected to the California State Assembly in 2016, Laura Friedman has been in favor of progressive change, notably in regard to environmental issues and the affordable housing crisis. In her first term she secured the funds to complete the Glendale Riverwalk Project, and has sponsored a number of bills relating to water conservation and environmental sustainability. Friedman also serves as the chair for the Assembly Select Committee on Small Business and Entrepreneurship, and the Chair of the Joint Rules Subcommittee on Sexual Harassment Prevention and Response. Friedman’s funding is found to be around 50% labor unions with the other half being classified as “uncoded”, meaning that the category of donor is unknown or has not yet been assigned. Despite the ambiguity of some of her donors, her voting record receives an A+ rating from most progressive outlets.`,
        ],
      },
      {
        subtitle: "Dist. 44",
        title: "Jacqui Irwin",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly44",
        desc: [
          `It’s hard to consider Jacqui Irwin a progressive candidate due to her voting against or abstaining from many progressive issues and receiving an F rating from progressive outlets. Though she has a positive record for environmental reform, as well as gender equality and reproductive rights. Irwin’s voting record favors protecting law enforcement over citizens rights. Her funding comes largely from labor unions, finance & real estate, and the party itself. Jacqui Irwin is hard to recommend, however she is the preferred option over her opponent Republican Denise Pedrow.`,
        ],
      },
      {
        subtitle: "Dist. 45",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly45",
        desc: [
          `Jesse Gabriel is pretty well liked across the board even if he tends to sit on the fence. He scores great with the Sierra Club, serves on the Assembly Select Committee on Women's Reproductive Health, and a majority of his campaign contributions come from unions. However, he does have a habit of abstaining from bills which enforce restrictions on policing. That might stem from his former job as a general litigation attorney, though he focused his efforts on hate crime prevention, gender pay equity, and anti-discrimination legislation.`,
        ],
      },
      {
        subtitle: "Dist. 46",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly46",
        desc: [
          `Adrin Nazarian has a solid track record of progressive voting, especially in regard to unions and increased public infrastructure. He voted for AB 378 (authorizes collective bargaining for childcare workers) & ACA 14 (forces the UC system to reduce contracted services and increase the percentage of union workers on payroll). His campaign is also focused on affordable housing and expanding services to the homeless. However, he is also the chairman of the Assembly Select Committee on the 2028 Olympic and Paralympic Games and his campaign has taken large donations from the Los Angeles Police Protective League.`,
        ],
      },
      {
        subtitle: "Dist. 48",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly48",
        desc: [
          `Assembly District 48 covers primarily Latinx eastern San Gabriel Valley and the surrounding foothill communities. Democrat incumbent Blanco Rubio is running unopposed for her third term in this assembly seat. She is a supporter of protections for immigrants, assistance for victims of domestic violence, assistance for children in foster care, supervised pretrial release in criminal cases, and women’s rights and pay equality. That said, our donor highlight reel from 2018 shows that over 70% of her donations come from a murderer’s row including Betsy DeVos, Monsanto, Walmart, and assorted defense Contractors. Rubio is a fundraising machine, having hauled in $2.8 over the last three years, so lord only knows how many smaller races for “progressives” she is laundering all this corporate cash through.`,
        ],
      },
      {
        subtitle: "Dist. 49",
        title: "Edwin Chau",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly49",
        desc: [
          `Chau seems good on just about everything, though he has a tendency to step out of the room when votes about law enforcement and sex work or drugs come up. He didn’t vote on SB 233 (Gives immunity to sex workers when reporting certain crimes), SB 1322 (excempts minors from prostitution charges), or SB 649 (makes certain drug offenses misdemeanors). However, all of his scorecards come back B or higher from almost all progressive outlets. He rates highly among reproductive health groups, anti-corruption groups, labor unions, and somehow even with NORML, despite not weighing in on criminalization issues.`,
        ],
      },
      {
        subtitle: "Dist. 50",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly50",
        desc: [
          `The incumbent Richard Bloom certainly isn’t the worst person to have in your big tent. However, he is a donor to the Democrats for Israel Committee, which is a pro-Israel group that describes BDS as “anti-Israel and anti-peace”. Anti-peace is a bridge too far for us to give our recommendation for this candidate, especially in a race that Bloom is a shoe in for. His opponents include a guy who lists his IMDB credits on his campaign page and an immigration stance of, “All we ask is that the new people assimilate into American culture, learn English, obey our laws and swear an oath of allegiance to the USA,” and someone that may or may not have last ran for Lt. Governor with the American Independent Party.`,
        ],
      },
      {
        subtitle: "Dist. 51",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly51",
        desc: [
          `Incumbent Wendy Carrillo is running uncontested, which we all know is a sign of a healthy democracy. A couple years ago, Carrillo got some buzz running as an outsider progressive in a special election to fill Xavier Becerra’s vacated Congressional seat in District 34, running against insider Jimmy Gomez. Touting support for the California single payer healthcare bill and an immigrant background, she looked like a rising progressive star. So, the establishment jumped on the bandwagon and helped her win the special election for AD51 in 2017 with a huge donation from major PACs, in return for dropping her support for single-payer healthcare, which has been conspicuously replaced on her website with “improving access to healthcare” and “working towards universal healthcare”. In 2018, Carrillo moved deeper into the machine, raising nearly one million dollars from big pharma, charter school interests, building trades, developers, realtors, telecommunications, oil lobbyists, and the list goes on. She’s similarly raised $600k for her uncontested reelection campaign from the usual suspects this year, so that she can funnel the money around the party establishment. No recommendation.`,
        ],
      },
      {
        subtitle: "Dist. 52",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly52",
        desc: [
          `Rodriguez loves to not vote. If not voting for progressive issues can be counted as a vote against progressive issues, then he is pro-surveillance, anti-Green New Deal, anti-worker protection, pro-prison industrial complex, anti-tenant, and against public banking. He’s about as progressive as Rahm Emanuel but with less conviction and more union endorsements. He is, however, running against a Republican who might be an anti-vaxxer and most certainly doesn’t want your kids to learn about gay people existing.`,
        ],
      },
      {
        subtitle: "Dist. 53",
        title: "Godfrey Santos Plata",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly53",
        desc: [
          `Plata is running a scrappy, energetic campaign based on a deep understanding of the material challenges facing all of his working-class constituents. It’s a tough hill Plata is climbing as he attempts to unseat the established centrist incumbent, Miguel Santiago. If he’s able to pull it off, it will be a sharp tug left for city and state politics. Plata’s policy positions are all good, encompassing sophisticated and nuanced takes on everything from rent control and health care to education and social justice.`,
        ],
      },
      {
        subtitle: "Dist. 54",
        title: "Tracy Bernard Jones",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly54",
        desc: [
          `The incumbent, Sydney Kamlager, initially voted against statewide protections for renters, but after constituents raised concerns, she voted for the bill in 2019. She also voted against public banking and has taken campaign contributions from charter schools. One challenger, Tracy Bernard Jones, is a teacher who volunteered for Bernie Sanders in 2016 and 2020, identifies as a socialist, campaigns for Medicare for All, public banking, and against charter schools, and previously worked on establishing a gang truce in South Central LA. By contrast, the other challenger, Clint Brown, is a real estate developer who supports gentrification. This district, which runs from the Crenshaw District to UCLA, is virtually certain to reelect the incumbent. The best choice in the primary is to vote for Tracy Bernard Jones.`,
        ],
      },
      {
        subtitle: "Dist. 55",
        title: "No recommendation",
        link: "https://www.dsa-la.org/2020_primary_voter_guide#assembly55",
        desc: [
          `Democrat Andrew Rodriguez has the dubious pleasure of running against the Republican incumbent, Phillip Chen. AD 55 has been Republican since at least 2012, although Chen was within 10 points of being unseated in 2018. With a potential upset within reach, it’s strange that Rodriguez is running unopposed. He hasn’t updated his social media since April 2019, and the platform listed on his website gives short platitudes lifted, apparently, from the April 2019 issue of “Campaign Boilerplate.” He’s the 27-year-old Mayor of Walnut, California (being within AD55), but there is precious little to recommend him. He holds a Masters of Real Estate Development, which probably tells you all you need to know.`,
        ],
      },
    ],
  ],
];

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta
        name="Description"
        content="A mobile-friendly version of the DSA-LA 2020 voter guide. Great for bringing to the polls and using as a reference while voting."
      />
      <title>Retreat Left</title>
    </Head>

    <div className="grid">
      <div className="bg-white  pt4 pb3 flex flex-column">
        <div className="mw-grid w-100 ml-auto flex flex-column">
          <span className="fw9 ph-gutter f2 i lh-solid">CA</span>
          <span className="fw6 ph-gutter f6 tracked-tight">March 3, 2020</span>
        </div>
      </div>
      <div className="pt4 pb3 ph-gutter flex flex-column  mw-grid">
        <span className="f6 tracked-tight white lh-1rem">
          A mobile-friendly version of the{" "}
          <a
            href="https://www.dsa-la.org/2020_primary_voter_guide"
            className="color-inherit fw6"
          >
            DSA-LA 2020 voter guide
          </a>
          . Great for bringing to the polls and using as a reference while
          voting.
        </span>
        <span className="f6 tracked-tight white lh-1rem mt3">
          Want to get emailed a new voter guide every election?{" "}
          <a
            href="https://tinyletter.com/retreat-left"
            className="color-inherit fw6"
          >
            Subscribe
          </a>
          .
        </span>

        <span className="f6 tracked-tight white lh-1rem mt3">
          Source on{" "}
          <a
            className="color-inherit fw6"
            href="https://github.com/tvler/retreat-left"
          >
            GitHub
          </a>
          . Built by{" "}
          <a href="https://www.tylerdeitz.com/" className="color-inherit fw6">
            Tyler
          </a>
          .
        </span>
      </div>

      {data.map(([key, value], i) => (
        <Fragment key={i}>
          <div className="bg-white flex flex-column">
            {!!i && (
              <div className="white mix-blend-mode-diff absolute left-0 left-dotted-line right-0 bt b--dash b--dashed bl-0 bb-0 br-0" />
            )}
            <div className="mw-grid ml-auto w-100 flex-grow-1">
              <span
                className="pv3 ph-gutter tracked-tight top-0 break-word lh-1rem f6 db"
                style={{ position: "sticky" }}
              >
                {key}
              </span>
            </div>
          </div>

          <div className="white pv3 ph-gutter flex flex-column lh-1rem mw-grid">
            {value.map(({ title, subtitle, desc, link }, i) => (
              <details
                key={title + subtitle}
                className={"details-reset" + (i ? " mt4" : "")}
              >
                <summary className="flex">
                  <div className="flex flex-column items-start">
                    {subtitle && <span className="flex f6">{subtitle}</span>}
                    <span className="tracked-tight fw6">{title}</span>
                    {title === "Bernie Sanders" && (
                      <img
                        className="mv1 db w-100"
                        style={{ filter: "grayscale(1)" }}
                        src="/bernie.jpeg"
                      />
                    )}
                    <span className="f7 ph2 mt1 br-pill ba b--solid lh-copy ttu tracked-tight open-bg-white open-cool-black open-b--white">
                      Info
                    </span>
                  </div>
                </summary>

                {desc.map((p, i, { length }) => (
                  <span
                    key={p}
                    style={{ textIndent: "2.5em" }}
                    className="db f6 tj tracked-tight mt1"
                  >
                    {p}
                    {i === length - 1 && (
                      <>
                        {" ["}
                        <a className="color-inherit fw6" href={link}>
                          Source
                        </a>
                        {"]"}
                      </>
                    )}
                  </span>
                ))}
              </details>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  </>
);

export default Home;
