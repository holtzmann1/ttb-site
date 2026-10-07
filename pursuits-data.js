const PURSUITS_DATA = [
    {
        id: "academic",
        name: "Academic",
        starting: "Non-magical skill toolkit.",
        onThePursuit: "Avid Student: When this character fails an Academic duel, she may draw a card. During the Epilogue, she may advance in any Academic Skill in addition to options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Know-It-All",
                    desc: "When this character fails a Skill Challenge with a Mental Aspect, she may discard a card to reflip. If the card was a Tome (t), she may use an Academic Skill of choice in place of the original."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Student of Knowledge",
                        desc: "Gains Trigger on Academic Skill Duels: (t) Insight: After resolving, draw a card."
                    },
                    {
                        name: "Scientific Classification",
                        desc: "(1) Document Denizen: Target enemy within 10 yards. Make Challenge (Engineering vs Construct, History vs Human, Wilderness vs others) opposed by target's Deceive + Cunning + Rank. On success, learn type, Rank Value, Abilities and Talents."
                    }
                ]
            },
            {
                step: 2,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "Выбери любой General Talent на вкладке общих талантов."
                }
            },
            {
                step: 3,
                type: "choice",
                talents: [
                    {
                        name: "Rational Mind",
                        desc: "Choose an Academic Skill. Whenever making a Challenge Flip to resist manipulation (terror, mind control, intimidation), add ranks in chosen Skill to final total."
                    },
                    {
                        name: "Symposium",
                        desc: "During Ongoing Challenges, duel totals of Academic Skills increase by +1 each time another ally succeeds on an Academic Skill Challenge."
                    }
                ]
            },
            {
                step: 4,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "Выбери любой General Talent на вкладке общих талантов."
                }
            },
            {
                step: 5,
                type: "choice",
                talents: [
                    {
                        name: "Annoying Distraction",
                        desc: "When successfully using Trick or Impose during Dramatic Time, target becomes Dazed until start of this character's next turn."
                    },
                    {
                        name: "Boring Lecture",
                        desc: "Lecture for 5 mins on Academic subject. Challenge Flip vs Willpower of all hearing non-beasts. Equal or higher: Dazed for 1 hour. Margin of Success: TN 10 Unconsciousness Challenge."
                    }
                ]
            },
            {
                step: 6,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "Выбери любой General Talent на вкладке общих талантов."
                }
            },
            {
                step: 7,
                type: "choice",
                talents: [
                    {
                        name: "Lessons Learned",
                        desc: "Defensive Trigger: Df (t) Lessons Learned: After resolving against an enemy attack, draw a card."
                    },
                    {
                        name: "Mental Conditioning",
                        desc: "Choose a Mental-based Skill and a Suit. Add the chosen Suit to the Skill's rank value."
                    }
                ]
            },
            {
                step: 8,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "Выбери любой General Talent на вкладке общих талантов."
                }
            },
            {
                step: 9,
                type: "choice",
                talents: [
                    {
                        name: "Philosopher",
                        desc: "Once per turn during Dramatic Time, after taking a Pass Action, may discard a card to draw a card."
                    },
                    {
                        name: "Erudition",
                        desc: "May add Intellect Aspect to final duel total of every non-Magical Mental Skill."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Eureka Moment",
                    desc: "Once per session, discard a card to deduce an important piece of information about a topic of choice (at Fatemaster's discretion)."
                }
            }
        ]
    }
];
