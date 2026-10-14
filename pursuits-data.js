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
                    desc: "When this character fails a Skill Challenge with a Skill that is associated with a Mental Aspect, she may discard a card to immediately reflip that Challenge. If the discarded card was a Tome :t:, she may use an Academic Skill of her choice in place of the original Skill."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Student of Knowledge",
                        desc: "This character gains the following Trigger on all Academic Skill Duels:\n:t: *Insight*: After resolving, draw a card."
                    },
                    {
                        name: "Scientific Classification",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(1)",
                            name: "Document Denizen",
                            desc: "Target an enemy within 10 yards and make a Challenge flip using either the Engineering Skill (if the target is a Construct), the History Skill (if the target is a human), or the Wilderness Skill (for everything else). This Challenge is opposed by the target’s Deceive + Cunning + Rank Value. The Wilderness Skill is considered to be an Academic Skill for this duel. On a success, this character learns what the target is, its Rank Value, and the nature of any Abilities or Talents that it possesses. Particularly rare or unique targets may impose a :-: to the character’s Challenge flip, at the Fatemaster’s discretion."
                        }
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
                        desc: "This character gains the following Defensive Trigger:\nDf :t: *Lessons Learned*: After resolving against an enemy’s attack, draw a card."
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
    },
    {
        id: "criminal",
        name: "Criminal",
        starting: "A Criminal begins the game with a non-magical skill toolkit.",
        onThePursuit: "Opportunist: When this character fails a Training duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Training Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Improvise",
                    desc: "This character may discard a card to create a shiv. The shiv lasts indefinitely until it is used, at which point it breaks at the end of Dramatic Time. The shiv has the following stats:",
                    weapon: {
                        name: "Shiv",
                        skill: "Melee",
                        range: "1",
                        damage: "1/2/4",
                        special: "Concealable, Thrown. If the target is engaged with at least one other friendly character, this weapon deals +1 damage.",
                        trigger: {
                            cost: ":c::c:",
                            name: "In the Neck",
                            desc: "After damaging, the target gains the **Bleeding Out** Condition."
                        }
                    }
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Scoundrel",
                        desc: "This character gains the following Trigger to all Social Skill Challenges:\n:m: *Fast Talk*: After resolving, take a Pick Pocket Action against a target within 1 yard. The Pick Pocket Action gains :+: to its flip."
                    },
                    {
                        name: "Friends in Low Places",
                        desc: "This character gains :+: to Barter, Bewitch, and Leadership Challenges made against bandits, gang members, criminals, mercenaries, and other lawless types. Additionally, if a Fatemaster character ever decides to pursue a bounty that has been placed on this character, this character finds out about it from one of her contacts as soon as is possible."
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
                        name: "Relentless",
                        desc: "This character is immune to Horror Duels."
                    },
                    {
                        name: "Duplicitous",
                        desc: "This character may use her Deceive Skill in place of her Evade Skill when calculating her Defense Derived Aspect."
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
                        name: "Dirty Trick",
                        desc: "This character gains the following Trigger on the Trick Action:\n:m: *Dirty Trick*: After succeeding, take a (1) AP Close Combat attack against the target, if it is in range."
                    },
                    {
                        name: "Thugs",
                        desc: "This character attracts the service of two Thugs who want nothing more than to be her left and right hands as the character slowly climbs her way up through the ranks of the criminal underworld. These Thugs are subordinate characters. When this character uses the (1) Order Action to command her Thugs, she may command them both, and her orders may be different. Alternatively, if this character is commanding a single Thug, she may treat the (1) Order Action as if it were a (0) Action. If any of this character's Thugs are killed, she may recruit new Thugs at the start of the next session.",
                        minion: {
                            name: "Thug",
                            typeLine: "Minion (5), Living",
                            stats: {
                                might: 2, grace: 1, speed: 0, resilience: 2,
                                charm: -3, intellect: 2, cunning: -1, tenacity: 2,
                                defense: "4 (9)", walk: 4, height: 2, initiative: "1 (6)",
                                willpower: "4 (9)", charge: 4, wounds: 6
                            },
                            skills: "Evade 2, Intimidate 2, Melee 3, Notice 1, Toughness 1",
                            abilities: [
                                {
                                    name: "Goons",
                                    desc: "When this character's controller succeeds on the (1) Trick Action, this character also gains the benefits of the Action (instead of just its controller)."
                                },
                                {
                                    name: "Pick On Someone Yer Own Size!",
                                    desc: "When this character's controller is targeted with a (y) attack, if this character would be a valid target for the attack, its controller may discard a card to make this character the target of the attack."
                                }
                            ],
                            weapon: {
                                name: "Crude Club",
                                skill: "Melee",
                                av: "5 (10)",
                                resist: "Df",
                                damage: "2/2/4",
                                special: "Target suffers 2/2/4 damage. Whenever this weapon deals Severe damage, the target suffers a Weak Critical Effect in addition to any other Critical Effects it would suffer."
                            }
                        }
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
                        name: "Study Opponent",
                        desc: "When this character gains this Talent, she chooses either Close Combat or Ranged Combat attacks. When this character makes an attack of the chosen type, she may choose to target the opponent’s Willpower instead of Defense."
                    },
                    {
                        name: "Into Shadows",
                        desc: "When this character gains this Talent, she chooses either Close Combat or Ranged Combat attacks. This character gains the following Trigger on all attacks of the chosen type:\n:m: *Hide in Shadow*: After succeeding, this character may move up to 3 yards in any direction."
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
                        name: "Misdirection",
                        desc: "This character gains the following Defensive Trigger:\nDf :m: *Misdirection*: After a Close Combat attack from an enemy character succeeds against this character, this character may discard a card. If she does, a target enemy character in the attacker’s engagement range suffers the effects of the Attack Action instead of this character."
                    },
                    {
                        name: "Shock and Awe",
                        desc: "When this character succeeds on the (1) Trick Action, every friendly character within 6 yards and line of sight of the target also gains the Action’s benefits (instead of just this character)."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Nimble",
                    desc: "This character generates an additional AP on her turn that can only be used to take a Movement General Action."
                }
            }
        ]
    },
    {
        id: "dabbler",
        name: "Dabbler",
        starting: "A Dabbler begins the game with a Grimoire containing one Sorcery Magia; one Enchanting, Necromancy, or Prestidigitation Magia (for a total of two Magia); and three Immuto.",
        onThePursuit: "Epiphany: When this character fails a Magical duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Imbue Protection",
                    desc: "This character gains the following Tactical Action:",
                    action: {
                        cost: "(0)",
                        name: "Imbue Protection",
                        desc: "This character may target a friendly character within 1 yard (which may be herself) and discard a card. If she does so, the target gains the following Condition for five minutes: “Imbued Protection +1: When this character suffers damage, reduce the damage suffered by +1 (to a minimum of 0), then reduce the value of this Condition by the same amount.” Increase the value of this Condition to Imbued Protection +2 if the discarded card had a value of 6-10, or Imbued Protection +3 if the card had a value of 11 or greater."
                    }
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Counter Magic",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(0)",
                            name: "Counter Magic",
                            desc: "Target a character within 10 yards and line of sight. Until the start of this character’s next turn, the next time the target attempts to cast a Spell or Spell-like Manifested Power, this character may make a Counter-Spelling Challenge against a TN equal to the final duel total of the Spell or Manifested Power being cast. On a success, the Spell or Manifested Power is successfully countered and has no effect, just as if the casting attempt had failed."
                        }
                    },
                    {
                        name: "Mastered Immuto",
                        desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, no matter her chosen Grimoire."
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
                        name: "Arcane Musings",
                        desc: "This character adds +:t: to her Sorcery Skill."
                    },
                    {
                        name: "Mastered Magia",
                        desc: "When this character gains this Talent, she chooses a Magia. This character always has access to the chosen Magia, no matter her chosen Grimoire. If she does not possess a Grimoire, she may act as if she possessed a Grimoire with this Magia."
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
                        name: "Spell Twisting",
                        desc: "After this character adds one or more Immuto to a Spell, she may discard a card to add one instance of an additional Immuto she knows (which may be the same Immuto, if allowed) to the Spell with no increase to the Spell's TN."
                    },
                    {
                        name: "Mastered Immuto",
                        desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, no matter her chosen Grimoire."
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
                        name: "Surge",
                        desc: "This character gains the following Trigger on Magical Skill Challenges used to cast Spells:\n:t::t: *Surge*: After succeeding, draw a card."
                    },
                    {
                        name: "Mastered Magia",
                        desc: "When this character gains this Talent, she chooses a Magia. This character always has access to the chosen Magia, no matter her chosen Grimoire. If she does not possess a Grimoire, she may act as if she possessed a Grimoire with this Magia."
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
                        name: "Empowered Channeling",
                        desc: "This character gains :+: to the casting attempt and any resulting damage flip of the first Spell she casts on her turn."
                    },
                    {
                        name: "Mastered Immuto",
                        desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, no matter her chosen Grimoire."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Casting Expert",
                    desc: "This character gains 1 additional AP on her turn, but this AP may only be used to cast a Spell or Manifested Power."
                }
            }
        ]
    },
{
        id: "drudge",
        name: "Drudge",
        starting: "A Drudge begins play with either a non-magical skill toolkit or one pneumatic limb with any number of steam augments, up to a total value of 25§.",
        onThePursuit: "Long Days: When this character fails a Training duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Training Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Hard Worker",
                    desc: "This character gains :+: to all Athletics Challenges. If she succeeds on an Athletics Challenge, she gains a Margin of Success."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Keep Standing",
                        desc: "This character may discard a Twist Card when she suffers a Critical Effect to mitigate its effects. If the Critical Effect is an Instant Critical Effect, it is ignored.\n\nIf the Critical Effect is a Lasting Critical Effect, it has no effect until the start of this character's next turn (during Dramatic Time) or for one minute (during Narrative Time).\n\nAdditionally, this character may discard a Twist Card to automatically pass an Unconsciousness Challenge."
                    },
                    {
                        name: "Long Suffering",
                        desc: "This character gains +2 Wounds."
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
                        name: "Teamwork",
                        desc: "This character may take the (1) Assist Action as a (0) Action.\n\nAdditionally, when this character is targeted by the Assist Action, she gains a :+: to the assisted Action (in addition to the usual benefits of the Assist Action)."
                    },
                    {
                        name: "Hard to Kill",
                        desc: "Once per Dramatic Time when this character receives a Critical Effect, she may choose not to receive that Critical Effect."
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
                        name: "Steady Pace",
                        desc: "After this character succeeds at a Skill Challenge made as a result of an Ongoing Challenge, she gains a :+: to her next Skill Challenge made as part of that Ongoing Challenge."
                    },
                    {
                        name: "Slow to Die",
                        desc: "When this character suffers a Critical Effect, the Critical Effect flip suffers a :-:."
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
                        name: "Soldier On",
                        desc: "At the beginning of Dramatic Time, this character may heal 2/3/5 damage. In addition, she may choose any conscious friendly character that can hear her to also heal 2/3/5 damage."
                    },
                    {
                        name: "Put Your Back Into It",
                        desc: "Before this character performs a Close Combat, Expertise, Training, or Ranged Combat Skill Challenge, she may discard a card to use either Athletics + Resilience (if the Skill Challenge is tied to a Physical Aspect) or Athletics + Tenacity (if the Skill Challenge is tied to a Mental Aspect) in place of the Skill Challenge's original Skill and Aspect."
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
                        name: "Just a Graze",
                        desc: "This character may Cheat any Damage Flip she suffers, regardless of :-: modifiers or jokers."
                    },
                    {
                        name: "Can't Keep Me Down",
                        desc: "At the start of this character's turn during Dramatic Time, if she has less than half her total Wounds remaining (rounded up), she heals 1 damage. If she is suffering from one or more Critical Effects or has less than 0 Wounds remaining, she instead heals 2 damage."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "My Lot in Life",
                    desc: "At the start of this character's turn during Dramatic Time, she may discard a card to gain a number of additional AP equal to the number of Lasting Critical Effects she is suffering from (even if she is currently ignoring their effects due to the Keep Standing Talent), to a maximum of 3 additional AP."
                }
            }
        ]
    },
    {
        id: "graverobber",
        name: "Graverobber",
        starting: "A Graverobber begins the game with a Grimoire containing one Necromancy Magia; one Enchanting, Prestidigitation, or Sorcery Magia (for a total of two Magia); and three Immuto.",
        onThePursuit: "Black Soul: When this character fails a Magical duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Sense Corpse",
                    desc: "This character gains the following Tactical Action:\n\n(0) Sense Corpse: This character may discard a card to sense the presence of a corpse within 5 yards of her. This corpse is typically buried in the ground and requires digging to exhume, but it's also possible for the character to find corpses boarded up behind walls or in similar hidden areas. Note that this Action only locates corpses; it does not create them out of thin air.\n\nThe Fatemaster is within her rights to declare that there are no corpses in a given area, particularly if the character has already found corpses there or if the area is frequently and heavily patrolled, such as the Guild Enclave."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "They Weren't Using It",
                        desc: "When this character uses her Sense Corpse Talent, if the discarded card was a :c:, the corpse has valuables such as rings, jewelry, or pneumatic augmentations that she can sell for a small profit. These valuables have a total scrip value equal to half the value of the card the character discarded to use her Sense Corpse Talent."
                    },
                    {
                        name: "Mastered Immuto",
                        desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, no matter her chosen Grimoire."
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
                        name: "Morbid Thoughts",
                        desc: "This character adds +:c: to her Necromancy Skill."
                    },
                    {
                        name: "Mastered Magia",
                        desc: "When this character gains this Talent, she chooses a Magia. This character always has access to the chosen Magia, no matter her chosen Grimoire. If she does not possess a Grimoire, she may act as if she possessed a Grimoire with this Magia."
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
                        name: "Macabre Infusions",
                        desc: "If this character does not have the Undead Characteristic, she may count as if she had the Undead Characteristic whenever she wishes. Fatemaster Undead characters consider this character to be one of them and will treat her with disinterest unless attacked or directly threatened."
                    },
                    {
                        name: "Mastered Immuto",
                        desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, no matter her chosen Grimoire."
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
                        name: "Consume Corpse",
                        desc: "When casting a Necromancy Spell, this character may choose to consume any number of corpses within 5 yards of her to lower the TN of the spell by -2 for each such consumed corpse. Corpses consumed in this way are reduced to dust and ash as the character leeches the energy from them.\n\nThe character must be aware of any corpses she consumes in this manner, but she does not need line of sight to them (and thus may even consume buried corpses that she has sensed with her Sense Corpse Talent).\n\nAlternatively, if this character has any Undead subordinate characters under her control, she may consume them with this Talent as if they were corpses. She may only consume undead characters under her direct control; uncontrolled undead or those under the control of another character cannot be consumed in this manner."
                    },
                    {
                        name: "Mastered Magia",
                        desc: "When this character gains this Talent, she chooses a Magia. This character always has access to the chosen Magia, no matter her chosen Grimoire. If she does not possess a Grimoire, she may act as if she possessed a Grimoire with this Magia."
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
                        name: "Maniacal Laugh",
                        desc: "This character may discard a card to animate all corpses within Aura 8 of her as Mindless Zombies. The corpses remain animated for a number of rounds equal to half the value of the discarded card, rounded up. The Mindless Zombies count as subordinate characters under this character's control.\n\nThis character may command every Mindless Zombie under her control with a (1) Order Action, and the orders may be different."
                    },
                    {
                        name: "Mastered Immuto",
                        desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, no matter her chosen Grimoire."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Unholy Beacon",
                    desc: "This character may discard a card from her Control Hand to take control of an Undead character within her line of sight. If the Undead character is of Minion Rank or lower, this character does not have to perform a Challenge to take control of it.\n\nIf the target is of Enforcer Rank or higher, the character must make a Necromancy + Charm against the Undead character’s Willpower to take control of it. This Challenge Flip may be cheated as normal. On a success, the Undead character is placed under this character’s control as a subordinate character. On a failure, the Undead character becomes immune to this Talent for 24 hours.\n\nUndead characters of Minion Rank or lower remain under this character’s control indefinitely, usually until they are destroyed. Undead characters of Enforcer Rank or higher only remain under this character’s control for 24 hours (at which point this character can attempt to use this Talent on them again).\n\nStitched characters - Fated characters who happen to be Undead - are immune to this Talent."
                }
            }
        ]
    },
    {
        id: "guard",
        name: "Guard",
        starting: "A Guard begins the game with one Close Combat weapon and any Armor. These items cannot have a total combined value greater than 20§.",
        onThePursuit: "Iron Tank: When this character fails a Close Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Close Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Lasting Challenge",
                    desc: "When this character succeeds on the Impose Action, the effects last until the end of Dramatic Time or until this character takes the Impose Action again (in which case the previous Impose Action lasts until the start of this character's next turn)."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Stoic Defender",
                        desc: "This character gains the following Defensive Trigger:\n\nDf (:r:) Glancing Blow: When suffering damage, reduce the amount of damage suffered by 1, to a minimum of 0."
                    },
                    {
                        name: "Stand Ground",
                        desc: "This character does not need to discard a card to take the Defensive Stance Action."
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
                        name: "Take the Hit",
                        desc: "This character may discard a card from her control hand after an attack hits a friendly character within 2 yards of her. If she does, this character moves to a position between the friendly character and the attacker, and this character suffers the effects of the attack, which suffers a :-: to its damage flip, instead of the friendly character. Opponents engaged with this character when she moves may not attempt Disengaging Strikes to stop this movement."
                    },
                    {
                        name: "Ocular Pat Down",
                        desc: "After watching a target character for at least one minute during Narrative Time, this character may attempt a Scrutiny Challenge against a TN equal to the target’s Cunning + Stealth + Rank Value. On a failure, this character may not attempt to use this Talent against the target for the remainder of the scene.\n\nIf this character succeeds, she learns whether or not the target has any concealed weapons, and if so, what they are. In addition, the target gains the following Condition for the rest of the scene: “Assessed Threat: This character suffers a :-: to Intimidate Challenges. If this character enters into combat against the character that applied this Condition, this character’s Initiative is reduced by -5 (to a minimum of 0), and the character that applied this Condition gains :+: to all Close Combat Attacks made against this character.”"
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
                        name: "Flurry",
                        desc: "When this character gains this Talent, choose a Close Combat Skill. This character gains the following Tactical Action:\n\n(2) Flurry: This character may discard a Twist Card to take three 1 AP strikes with a Close Combat weapon with the chosen skill against a single target."
                    },
                    {
                        name: "Laugh Off",
                        desc: "This character may not be pushed or moved by enemy characters."
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
                        name: "Juggernaut",
                        desc: "This character gains the following Tactical Action:\n\n(0) Juggernaut: This character may discard a card to heal 1/2/4 damage."
                    },
                    {
                        name: "Imposing Stance",
                        desc: "When this character takes the Impose Action, she may target two characters instead of one. She makes a single Intimidate Challenge against both of them."
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
                        name: "Enduring Defense",
                        desc: "When this character takes the Defensive Stance action, her Defensive Condition lasts one additional round (i.e., until the start of her second turn after she took the Defensive Stance action)."
                    },
                    {
                        name: "Knock Aside",
                        desc: "This character gains the following Defensive Trigger:\n\nDf (:r:) Knock Aside: After an attacker misses this character with a Close Combat attack, if this character has a readied Close Combat weapon, the attacker suffers that weapon’s weak damage and is pushed a number of yards away from this character equal to this character’s Might Aspect (minimum 1 yard)."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Sentinel",
                    desc: "This character may take the Defensive Stance Action as a (0) Action.\n\nIn addition, whenever this character has the Defensive Condition (at any value), all friendly characters within 2 yards of her gain :+: to their Defense Challenges."
                }
            }
        ]
    },
    {
        id: "gunfighter",
        name: "Gunfighter",
        starting: "A Gunfighter begins the game with one or two Pistols. These items cannot have a total combined value greater than 20§.",
        onThePursuit: "High Noon: When this character fails a Ranged Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Ranged Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Quick Draw",
                    desc: "This character may treat the (1) Ready Weapon Action as if it were a (0) Action when drawing a Pistol, and she may draw two Pistols instead of one."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Call Out",
                        desc: "When this character takes the Impose Action, she may add her ranks in the Pistol Skill to her final duel total."
                    },
                    {
                        name: "Bulletproof",
                        desc: "This character gains the following ability:\n\nBulletproof +1: Reduce all damage suffered by this character from Ranged Combat attacks by +1, to a minimum of 1."
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
                        name: "Gunfighter",
                        desc: "This character may use Pistol weapons as if their Range were (y)2 (in addition to their normal range)."
                    },
                    {
                        name: "Quick Reload",
                        desc: "This character reduces the AP cost required to load Pistol weapons by 1."
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
                        name: "Rapid Fire",
                        desc: "This character gains the following Tactical Action:\n\n(2) Rapid Fire: This character may discard a Twist Card to take three 1 AP attack Actions with a Ranged Combat weapon against a single target."
                    },
                    {
                        name: "Fastest Gun",
                        desc: "This character gains the following Defensive Trigger:\n\nDf (:m:) Fastest Gun: After a Ranged Combat attack fails against this character, this character may expend one round of ammunition in a readied Pistol to deal its damage to the attacker. This damage flip receives a :-:."
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
                        name: "No Time For This",
                        desc: "Whenever this character is involved in an Ongoing Challenge, she may choose to make one of the Challenge Flips using her Pistol Skill instead of the appropriate Skill (she still uses the appropriate Aspect, however). It falls to the Fatemaster and the player to explain how this functions from a story perspective."
                    },
                    {
                        name: "Debilitating Shot",
                        desc: "After damaging an enemy with a Ranged Combat weapon, this character may discard a card to give her enemy the Useless Limb (Arms) or Useless Limb (Legs) Condition with a limb of her choice. The Condition lasts until the enemy has fully healed all of her missing Wounds."
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
                        name: "Finger on the Trigger",
                        desc: "This character gains the following Tactical Action:\n\n(1) Finger on the Trigger: Until the start of this character’s next turn, if an enemy character within 10 yards declares a Charge Action or Ranged Combat action, this character may immediately make a 1 AP Ranged Combat attack against the enemy character.\n\nOn a success, the enemy character suffers 1 damage and the Charge Action or Ranged Combat attack fails."
                    },
                    {
                        name: "Bullet Bending",
                        desc: "Before making a Ranged Combat attack, this character may discard a card. If she does so, her Ranged Combat attack may ignore her choice of either cover or line of sight. If this character chooses to ignore line of sight and fires at a target behind cover, that target receives the benefits of cover (whether soft cover or hard cover) as usual."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Ranged Expert",
                    desc: "This character gains 1 additional AP on her turn, but this AP may only be used to make a Ranged Combat attack."
                }
            }
        ]
    },
    {
        id: "mercenary",
        name: "Mercenary",
        starting: "A Mercenary begins the game with one Ranged Combat weapon and any armor. These items cannot have a total combined value greater than 20§.",
        onThePursuit: "A Fistful of Scrip: When this character fails a Ranged Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Ranged Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Bounty Hunter",
                    desc: "When this character encounters a character with a bounty on his or her head (including otherwise decent people she was simply paid to locate), she automatically realizes this and remembers the amount of the bounty and whether the character is wanted dead, alive, or either of the two. If the wanted character has disguised themselves or is using a fake name, this character must succeed on a Scrutiny Challenge (TN equal to the wanted character’s Deceive + Cunning + Rank Value) to realize that he or she has a bounty on their head; on a failure, the disguise or fake name prevents this character from realizing the wanted character’s true identity."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Endless Pursuit",
                        desc: "This character gains :+: to her Track Challenges, and on a successful Track Challenge, she finds her target 50% faster than normal. If she achieves a Margin of Success on a Track Challenge, she learns how the characters she is tracking are equipped, including their provisions, weapons, armor, and a general sense of how much ammunition they have (if any)."
                    },
                    {
                        name: "Odd Jobs",
                        desc: "At the start of every session, this character gains an amount of scrip equal to twice her completed ranks in this Pursuit. This income represents various odd jobs that the character has completed between adventures, so if she has not had at least eight hours of waking time between sessions to complete one of these minor assignments, she does not gain this scrip. The exact nature of the odd jobs the character completes are up to her and the Fatemaster to work out."
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
                        name: "To the Highest Bidder",
                        desc: "When this character is targeted with a Close Combat attack performed by a non-Beast attacker, she may choose to throw a handful of scrip amounting to no less than half the attacker’s Rank Value into the air. If she does so, she may add her ranks in Barter to her Defense and Willpower for the duration of the attack. If the Close Combat attack misses, the target cannot make any further attacks against this character for the rest of its turn, and if the attack achieved a Margin of Failure, the attacker’s turn immediately ends as it focuses its full attention on snatching up the money."
                    },
                    {
                        name: "Contract Negotiation",
                        desc: "This character gains :+: to her Barter Challenges. If she turns in a character with a bounty on their head (dead or alive), she may attempt a Barter Challenge (TN 5 + the target’s Rank Value) to increase the value of the character’s bounty by +50%."
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
                        name: "Human Shield",
                        desc: "This character gains the following Defensive Trigger:\n\nDf (:m:) Human Shield: After this character fails, she grabs a target character of Minion rank or lower within 2 yards and Line of Sight (which may not be the attacker) and places it into physical contact with her, between her and the attacker. Damage is then split evenly between the Minion and this character, with any uneven damage going to the Minion."
                    },
                    {
                        name: "Making Ends Meet",
                        desc: "After this character fails a Skill Challenge, she may “lose” an amount of scrip equal to twice the difference between her final acting value and the TN of the Skill Challenge. If she does so, she is considered to have passed the Skill Challenge with no Margins of Success. If the Skill Challenge was an attack, it counts as a tie (and thus, the damage flip suffers a :--: modifier)."
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
                        name: "Coin for Kills",
                        desc: "After this character kills an enemy, she may discard a card to gain an amount of scrip equal to the target’s Rank Value. The exact source of this scrip is left to the player and Fatemaster to work out."
                    },
                    {
                        name: "Deadly Hunter",
                        desc: "This character gains :+: to the damage flip of any attack made against a target that she was paid to fight or kill.\n\nIt falls to the Fatemaster’s discretion what counts as “paid to fight,” but for the most part, if the character was hired by a Fatemaster character to commit violence or is chasing a bounty, this Talent should apply."
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
                        name: "Hard Knock Life",
                        desc: "This character may, at the end of her turn during Dramatic Time, choose to either “lose” two scrip or suffer 1 Wound. If she chooses to do either, she may draw a card."
                    },
                    {
                        name: "Borrowed Time",
                        desc: "At the start of this character’s turn during Dramatic Time, this character may choose to “lose” five scrip or suffer 2 damage. If she chooses to do either, she gains Fast."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "Paid in Advance",
                    desc: "When this character flips her Initiative at the start of Dramatic Time, she may draw up to five cards. If she does so, at the start of her second turn and every turn thereafter until the end of Dramatic Time, she must discard a card (if possible).\n\nAdditionally, when this character accepts a mission or agrees to bring in a bounty, she gains 50% of the final reward or bounty as an advance. If the character does not complete the mission or capture the bounty, she is expected to return this cash advance. If she does not, her reputation suffers, she earns the enmity of the people that gave her the advance, and she cannot use this Talent (for either of its effects) for a period of two months."
                }
            }
        ]
    },
    {
        id: "overseer",
        name: "Overseer",
        starting: "An Overseer begins the game with a non-magical skill toolkit.",
        onThePursuit: "Oversight: When this character fails a Social duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Social Skill in addition to those Skill Advancement options presented by the Fatemaster.",
        steps: [
            {
                step: 0,
                type: "single",
                talent: {
                    name: "Management Material",
                    desc: "When this character joins an Ongoing Challenge, she may discard a card to use the Leadership Skill as if it were one of the Skills Allowed by the Ongoing Challenge for a set number of Durations, as determined by the value of the discarded card. If the discarded card had a value of 1-5, she may use the Leadership Skill for one Duration. If it had a value of 6-10, she may use it for two Durations, and if it had a value of 11+, she may use it for three Durations."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Concerted Effort",
                        desc: "This character always makes Initiative flips before any of her companions. If two or more characters have this Talent, they may choose the order in which they make their Initiative flips.\n\nWhen friendly characters make Initiative flips, they may choose not to make an Initiative flip and to use this character’s initiative value (after calculating all modifiers) instead."
                    },
                    {
                        name: "Supervision",
                        desc: "This character may discard a card to add the suit of the discarded card to the final duel total of any friendly character that can see or hear her (including herself)."
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
                        name: "Work Smarter",
                        desc: "After this character succeeds at a Skill Challenge during an Ongoing Challenge, permanently reduce the TN of the Ongoing Challenge by -1 for all subsequent Durations of the Ongoing Challenge. If there are multiple characters with this Talent participating in the Ongoing Challenge, this effect is cumulative."
                    },
                    {
                        name: "Reminder of a Worse Fate",
                        desc: "When another friendly character within 6 yards attempts a Horror or Unconsciousness Challenge, she may add this character’s ranks in the Leadership Skill to her final duel total."
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
                        name: "Best Practices",
                        desc: "When this character succeeds on a Challenge Flip made as part of an Ongoing Challenge, she gains one extra Margin of Success."
                    },
                    {
                        name: "Protect Me!",
                        desc: "This character gains the following Defensive Trigger:\n\nDf (:t:) Protect Me!: After this character fails, another willing character within 2 yards of this character and within range and line of the sight of the attacker suffers the effects of the attack instead of this character. This character’s subordinate characters (if any) are always considered to be willing characters."
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
                        name: "How to Do Your Job",
                        desc: "After another character within 6 yards fails a Skill Challenge, this character may discard a card to make a Skill Challenge against the same TN. If there were any modifiers to the original character’s flip (such as :+: or :-: modifiers), they apply to this character’s flip as well.\n\nIf this character succeeds, the other character uses this character’s final duel total in place of her original failed final duel total."
                    },
{
                        name: "You Lazy So-and-So",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "You Lazy So-and-So",
                            typeLine: "Manifested Power",
                            av: "Charm + Leadership",
                            ap: "(1)",
                            tn: "8:r:",
                            resist: "Wp",
                            range: "6 yards",
                            desc: "Target unconscious character regains consciousness and heals 1/2/3 damage.",
                            triggers: [
                                {
                                    cost: ":r::r:",
                                    name: "Stop Complaining",
                                    desc: "The target may ignore one Critical Effect currently affecting her for three rounds."
                                },
                                {
                                    cost: ":t:",
                                    name: "On Your Feet!",
                                    desc: "The target may immediately stand up from being Prone."
                                }
                            ]
                        }
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
                        name: "Finish the Job",
                        desc: "When another friendly character within 6 yards of this character would fall unconscious or be killed, that character may discard a card to take a 1 AP Action before they fall unconscious or are killed. This ability cannot affect a specific character more than once per round."
                    },
                    {
                        name: "Stay Focused",
                        desc: "This character may discard a card to end the Focused Condition on herself. If she does so, every friendly character within 6 yards that can see or hear her gains Focused +1."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "What Lackeys Are For",
                    desc: "On her turn during Dramatic Time, this character may discard three cards. If she does so, every friendly character that can see or hear her may immediately take a 1 AP Action in any order that this character wishes."
                }
            }
        ]
    }
];
