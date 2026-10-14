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
                    desc: "Whether it's hauling heavy crates off a riverboat or digging Soulstones out of a dark and cramped mine, this character knows that the fastest way to finish a job is to put her back into it and just get it done. Slacking off and shirking one's responsibilities only delay the work, and that's time that could be spent getting other things finished.\n\nThis character gains :+: to all Athletics Challenges. If she succeeds on an Athletics Challenge, she gains a Margin of Success."
                }
            },
            {
                step: 1,
                type: "choice",
                talents: [
                    {
                        name: "Keep Standing",
                        desc: "No matter how deep this character's wounds, they never seem to keep her down for all that long. Where a lesser person would fall to the ground, grabbing the stump of their arm and screaming in pain as blood sprays in every direction, this character is likely to just glance at the wound, mutter a few select curse words, and then look around for someone who could point them toward a cheap physician.\n\nThis character may discard a Twist Card when she suffers a Critical Effect to mitigate its effects. If the Critical Effect is an Instant Critical Effect, it is ignored.\n\nIf the Critical Effect is a Lasting Critical Effect, it has no effect until the start of this character's next turn (during Dramatic Time) or for one minute (during Narrative Time).\n\nAdditionally, this character may discard a Twist Card to automatically pass an Unconsciousness Challenge."
                    },
                    {
                        name: "Long Suffering",
                        desc: "Say what you want about long hours of physical toil, it tends to make a person tough and hardy. After a lifetime of coming home with sore limbs and aching muscles, a knife wound in one's side just isn't all that impressive. To some, this resignation with regards to pain almost seems superhuman, but to the Drudge, it's not much more than another doctor's bill that she probably doesn't have the money to cover.\n\nThis character gains +2 Wounds."
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
                        desc: "Due to the large projects they are frequently expected to complete, Drudges rarely work alone. Most often, they are part of a team made up of hard-working men and women such as themselves. By working together, they can pool their strength and time and finish the project faster than any of them could have hoped on their own.\n\nEven when they're off the work site, Drudges carry this same mentality with them. It's often the Drudge that encourages everyone to stay on task and avoid becoming distracted, and when tempers flare and personalities clash, it's usually the Drudge that ends up trying to get everyone to shake hands, put aside their differences, and get back to work.\n\nThis character may take the (1) Assist Action as a (0) Action.\n\nAdditionally, when this character is targeted by the Assist Action, she gains a :+: to the assisted Action (in addition to the usual benefits of the Assist Action)."
                    },
                    {
                        name: "Hard to Kill",
                        desc: "This character can keep soldiering forward despite even the most serious of wounds. No matter what her opponents throw at her, the Drudge is ready to take more (and, often, to dish out far worse).\n\nOnce per Dramatic Time when this character receives a Critical Effect, she may choose not to receive that Critical Effect."
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
                        desc: "Efforts that proceed at a consistent, reliable speed are, for this character, far more efficient than bursts of speed. As she works, she falls into a comfortable pace, ensuring that she will not tire as other, more fervent characters might.\n\nAfter this character succeeds at a Skill Challenge made as a result of an Ongoing Challenge, she gains a :+: to her next Skill Challenge made as part of that Ongoing Challenge."
                    },
                    {
                        name: "Slow to Die",
                        desc: "Somehow, this character seems to avoid the worst injuries she could suffer. A close range blast from a shotgun knocks her back and leaves her chest bleeding, but fails to blow a hole right through her. A slash from a greatsword cuts deep into her arm but fails to sever it. Whether through an almost supernatural level of toughness, incredible luck, or just sheer stubbornness, this character is impressively resistant to permanent injury.\n\nWhen this character suffers a Critical Effect, the Critical Effect flip suffers a :-:."
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
                        desc: "There are some people who just won't give up, and they can inspire others to press on despite the worst that the world can throw at them. The sight of a Drudge resolutely facing down an enemy despite her wounds is the stuff of inspirational posters and tavern stories, and she lives up to her indomitable reputation without even trying.\n\nAt the beginning of Dramatic Time, this character may heal 2/3/5 damage. In addition, she may choose any conscious friendly character that can hear her to also heal 2/3/5 damage."
                    },
                    {
                        name: "Put Your Back Into It",
                        desc: "No matter the task, a Drudge knows that, sooner or later, she is going to have to pick up a shovel or a pickaxe and do a bit of hard labor. Some might call it a pessimistic outlook on life, and maybe it is, but it doesn't stop it from also being a true statement.\n\nBefore this character performs a Close Combat, Expertise, Training, or Ranged Combat Skill Challenge, she may discard a card to use either Athletics + Resilience (if the Skill Challenge is tied to a Physical Aspect) or Athletics + Tenacity (if the Skill Challenge is tied to a Mental Aspect) in place of the Skill Challenge's original Skill and Aspect."
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
                        desc: "This character tends to have an uncanny knack for surviving attacks that should have killed her. While most Fated are capable of avoiding certain pitfalls that destiny has laid out for them, the Drudge seems to have a special influence over suffering and pain... namely, her own.\n\nEventually, Drudges just seem to stop getting all that hurt. Extreme situations can still threaten their life, and they're certainly not immortal, as more than one gunfight has proven, but for the most part, Drudges seem to avoid most of the injuries that afflict other characters. Nephilim can chew on their arms, swordsmen can stab them in the chest, and snipers can put bullets in their heads, but somehow, the Drudge usually seems to just walk away with a splitting headache and a few minor scrapes and bruises to show for it.\n\nThis character may Cheat any Damage Flip she suffers, regardless of :-: modifiers or jokers."
                    },
                    {
                        name: "Can't Keep Me Down",
                        desc: "Less of a second wind and more of a constant breeze that never stops blowing, some Drudges seem to capable of recovering from their wounds far faster than would be expected. Most Drudges find themselves unable to explain just how they can take so much punishment and keep functioning, so they just shrug their shoulders and write it off with a simple explanation, such as \"I'm just stubborn, I guess.\"\n\nAt the start of this character's turn during Dramatic Time, if she has less than half her total Wounds remaining (rounded up), she heals 1 damage. If she is suffering from one or more Critical Effects or has less than 0 Wounds remaining, she instead heals 2 damage."
                    }
                ]
            },
            {
                step: 10,
                type: "single",
                talent: {
                    name: "My Lot in Life",
                    desc: "As resilient as a Drudge might be, there are still times in her life when she's going to find herself in a bad situation, perhaps with a missing limb or a fatal wound. When that happens, rather than panicking or passing out, a Drudge tends to just sigh and realize that she always knew this day would come eventually.\n\nEven if such injuries lead to her death, a Drudge doesn't plan to wait for death on her back. She's worked too hard to go out that way, and if it's her time to go, then she plans to go on her terms, whatever they may be.\n\nAt the start of this character's turn during Dramatic Time, she may discard a card to gain a number of additional AP equal to the number of Lasting Critical Effects she is suffering from (even if she is currently ignoring their effects due to the Keep Standing Talent), to a maximum of 3 additional AP."
                }
            }
        ]
    }
];
