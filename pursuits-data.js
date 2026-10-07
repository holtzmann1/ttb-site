const PURSUITS_DATA = [
    {
        id: "academic",
        name: "Academic",
        starting: "An Academic begins the game with a non-magical skill toolkit.",
        onThePursuit: "Avid Student: When this character fails an Academic duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Academic Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Know-It-All",
                    desc: "When this character fails a Skill Challenge with a Skill that is associated with a Mental Aspect, she may discard a card to immediately reflip that Challenge. If the discarded card was a Tome (t), she may use an Academic Skill of her choice in place of the original Skill."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Student of Knowledge",
                        desc: "This character gains the following Trigger on all Academic Skill Duels: (t) Insight: After resolving, draw a card."
                    },
                    {
                        name: "Scientific Classification",
                        desc: "This character gains the following Tactical Action: (1) Document Denizen: Target an enemy within 10 yards and make a Challenge flip using either the Engineering Skill (if the target is a Construct), the History Skill (if the target is a human), or the Wilderness Skill (for everything else). This Challenge is opposed by the target’s Deceive + Cunning + Rank Value. The Wilderness Skill is considered to be an Academic Skill for this duel. On a success, this character learns what the target is, its Rank Value, and the nature of any Abilities or Talents that it possesses. Particularly rare or unique targets may impose a - to the character’s Challenge flip, at the Fatemaster’s discretion."
                    }
                ]
            },
            {
                step: 2,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "This character gains one General Talent."
                }
            },
            {
                step: 3,
                type: "choice",
                talents: [
                    {
                        name: "Rational Mind",
                        desc: "Choose an Academic Skill. Whenever this character makes a Challenge Flip to resist an act of manipulation (such as terror, mind control, or intimidation), she may add her ranks in the chosen Skill to her final duel total."
                    },
                    {
                        name: "Symposium",
                        desc: "During an Ongoing Challenge, the final duel totals of this character’s Academic Skills are increased by +1 each time another character in the Ongoing Challenge succeeds at an Academic Skill Challenge. This bonus lasts until the end of the Ongoing Challenge."
                    }
                ]
            },
            {
                step: 4,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "This character gains one General Talent."
                }
            },
            {
                step: 5,
                type: "choice",
                talents: [
                    {
                        name: "Annoying Distraction",
                        desc: "When this character successfully uses the Trick or Impose Action against an opponent during Dramatic Time, that opponent becomes Dazed until the start of this character’s next turn."
                    },
                    {
                        name: "Boring Lecture",
                        desc: "If this character has at least five minutes to lecture on a subject corresponding to an Academic Skill she has at least one rank in, she can make a Challenge Flip using that Academic Skill, which is opposed by the Willpower duels of every other non-Beast character that can hear her talk. If this character’s final duel total is equal to or higher than the final Willpower duel of a character, that character gains the Dazed Condition for the next hour of Narrative Time. If this character achieves a Margin of Success against any character, that character must immediately attempt a TN 10 Unconsciousness Challenge."
                    }
                ]
            },
            {
                step: 6,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "This character gains one General Talent."
                }
            },
            {
                step: 7,
                type: "choice",
                talents: [
                    {
                        name: "Lessons Learned",
                        desc: "This character gains the following Defensive Trigger: Df (t) Lessons Learned: After resolving against an enemy’s attack, draw a card."
                    },
                    {
                        name: "Mental Conditioning",
                        desc: "Choose a Mental-based Skill and a Suit. Add the chosen Suit to the Skill’s rank value."
                    }
                ]
            },
            {
                step: 8,
                type: "general",
                talent: {
                    name: "General Talent",
                    desc: "This character gains one General Talent."
                }
            },
            {
                step: 9,
                type: "choice",
                talents: [
                    {
                        name: "Philosopher",
                        desc: "Once per turn during Dramatic Time, after taking a Pass Action, this character may discard a card to draw a card."
                    },
                    {
                        name: "Erudition",
                        desc: "This character may add her Intellect Aspect to the final duel total of every non-Magical Skill that is associated with a Mental Aspect."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Eureka Moment",
                    desc: "Once per session, this character may discard a card to deduce an important piece of information about a topic of her choice. The exact information deduced by the character is up to the Fatemaster, but it should be something useful to the character."
                }
            }
        ]
    }
];
