/**
 * Through the Breach 2nd Edition
 * Expansion: Into the Bayou
 * Basic Pursuits Database (Clean Mechanics)
 */

(function() {
    const INTO_THE_BAYOU_PURSUITS = [
        {
            id: "bokor",
            name: "Bokor",
            book: "Into the Bayou",
            starting: "A Bokor begins the game with a non-magical skill toolkit.",
            onThePursuit: "Beguile: When an enemy succeeds at a Willpower duel to resist one of this character's Spells or Manifested Powers, this character may draw a card. During the Epilogue, a character on this Pursuit may advance in any Crafting Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Seize Mind",
                        desc: "The character always has access to the Mind Control Magia, regardless of Grimoire (acting as if possessing a Grimoire with it if she has none). If she does not possess a Magical Theory, she gains Tradition Magic."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "The Mysteries of Fate",
                            desc: "Once per session, spend 5 minutes reading fate and flip a Fate card (may be cheated):\n• :r:: Learn about someone who can provide physical help.\n• :t:: Learn about someone who can provide useful information.\n• :c:: Learn about someone openly opposing her and a clue to stop them.\n• :m:: Learn about someone secretly working against her and a clue to stop them.\n• Red Joker: Once later this session, treat any one flip as the Red Joker (cannot be used if a Black Joker was flipped).\n• Black Joker: Fatemaster can once later this session treat any one flip as the Black Joker."
                        },
                        {
                            name: "Hex Bag",
                            desc: "Spend 1 hour creating a Hex Bag (only 1 active at a time). Possessor gains the following Manifested Power:",
                            power: {
                                name: "Hex Bag",
                                typeLine: "Manifested Power",
                                av: "Charm + Enchanting",
                                ap: "(0)",
                                tn: "10",
                                range: "6 yards",
                                resist: "Wp",
                                desc: "Target a character. Must declare a Trigger:\n• :r: *Prick*: Target suffers 1 damage.\n• :t: *Feet to the Flames*: Target gains Burning +1.\n• :c: *Just a Drop*: Target gains Poison +1.\n• :m: *Dizzy Spell*: Target gains Dazed until end of its next turn."
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
                    type: "single",
                    talent: {
                        name: "Malicious Effigy",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Sewn in Malice",
                            typeLine: "Manifested Power",
                            av: "Cunning + Stitching",
                            ap: "(1)",
                            tn: "10:m:",
                            range: "6 yards",
                            resist: "Wp",
                            desc: "Summon a Voodoo Doll adjacent to caster and under her control, Linked to target. Max active Voodoo Dolls equals Charm Aspect (minimum 1; excess breaks link and becomes inert)."
                        },
                        minion: {
                            name: "Voodoo Doll",
                            typeLine: "Peon (3), Construct, Doll",
                            stats: {
                                might: -5, grace: -5, speed: 0, resilience: -5,
                                charm: -3, intellect: -3, cunning: -3, tenacity: -3,
                                defense: "2 (5)", walk: 4, height: 1, initiative: "0 (3)",
                                willpower: "2 (5)", charge: 4, wounds: 4
                            },
                            skills: "Martial Arts 1",
                            abilities: [
                                {
                                    name: "Linked",
                                    desc: "Ceases being Linked to any other Voodoo Dolls. When this character suffers damage or gains a Condition, the Linked character suffers 1 damage or gains the same Condition with a value of 1."
                                },
                                {
                                    name: "Dance, Puppet",
                                    desc: "Controller may use a (1) Action adjacent to this character to make the Linked character within Line of Sight move up to 4 yards in any direction."
                                }
                            ],
                            weapon: {
                                name: "Pins",
                                skill: "Martial Arts",
                                av: "1 (4)",
                                resist: "Df",
                                damage: "1/1/2",
                                special: "Rg: (y)1. Target suffers 1/1/2 damage."
                            }
                        }
                    }
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
                            name: "Suppress Destiny",
                            desc: "Flipping the Black Joker does not prevent this character from Cheating Fate. If another character within 6 yards flips the Black Joker, this character may discard a card to allow that character to Cheat Fate."
                        },
                        {
                            name: "Jinx",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Jinx",
                                typeLine: "Manifested Power",
                                av: "Charm + Enchanting",
                                ap: "(1)",
                                tn: "10:c:",
                                range: "8 yards",
                                resist: "Wp",
                                desc: "Target suffers 2 damage and gains the Useless Limb Condition for a limb of your choice until the start of your next turn."
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
                            name: "Ensorcell",
                            desc: "Gain the following Defensive Trigger:\nDf (:m:) *Ensorcell*: After suffering damage from an enemy attack, the attacker immediately takes a 1 AP Action under this character's control (cannot force sacrifice or direct self-attack)."
                        },
                        {
                            name: "Enthrall",
                            desc: "At the start of every session, gain an Enforcer subordinate character charmed by magic (commanded via (1) Obey, follows suicidal orders without complaint; returns to normal life at session end)."
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
                            name: "Puppet Master",
                            desc: "When casting a Spell or Manifested Power involving Mind Control Magia, gain +:m: to final duel total and Trigger:\n:m::m: *“Yes, Master…”*: After succeeding, take this Action again against the same target (cannot declare Triggers)."
                        },
                        {
                            name: "Animal Hex",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Animal Hex",
                                typeLine: "Manifested Power",
                                av: "Cunning + Enchanting",
                                ap: "(1)",
                                tn: "14:r:",
                                range: "6 yards",
                                resist: "Wp",
                                desc: "Target transforms into a small harmless animal (toad, chicken, piglet) for 3 rounds (+1 round per Margin of Success). Retains Wounds, but can only take Walk Actions (end as a Free Action).",
                                triggers: [
                                    {
                                        cost: ":r::m:",
                                        name: "Princess Clause",
                                        desc: "Target remains in animal form until another character kisses it as a (1) Action, immediately ending the effect."
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Empowered by Fate",
                        desc: "This character adds a Red Joker to her Twist Deck."
                    }
                }
            ]
        },
        {
            id: "boomer",
            name: "Boomer",
            book: "Into the Bayou",
            starting: "A Boomer begins with one shotgun worth up to 12 Scrip with one free customization.",
            onThePursuit: "Leadstorm: When this character fails a Ranged Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Ranged Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Bigger Boom",
                        desc: "Spend 1 hour modifying a shotgun loaded with Shot ammunition to either: add Blast to Severe damage (-1 Capacity), or add Blast to Moderate and Severe damage (-3 Capacity). Cannot lower Capacity below 1."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Wideshot",
                            desc: "When generating one or more Blasts with a firearm, total Blast radius increases by +1 yard."
                        },
                        {
                            name: "Friendlier Fire",
                            desc: "When a friendly character suffers Blast damage from one of this character's firearms, that damage is reduced by 1 (minimum 1 damage)."
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
                            name: "Up Close and Personal",
                            desc: "May use Shotgun weapons with a range of (y)2 yards. When used this way, this character is immune to damage from that weapon's Blasts."
                        },
                        {
                            name: "Deadly Crits",
                            desc: "After generating a Critical Effect with a firearm against an enemy, add up to half Pursuit ranks (rounded up) to the value of the Critical Effect."
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
                            name: "Aim High",
                            desc: "When making a Ranged Combat attack, choose Height 1-4. Characters below chosen Height are not randomized when firing into engagement and do not suffer damage from Blasts (if no legal targets remain, attack misses)."
                        },
                        {
                            name: "Collateral Damage",
                            desc: "After inflicting a Critical Effect with a firearm against initial target, discard a card to cause all characters suffering Blast damage from the attack to also suffer a Weak Critical Effect."
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
                            name: "Blow Apart",
                            desc: "Gain the following Trigger on all Shotgun attacks:\n:c: *Blow Apart*: After resolving, if target received Cover from an inanimate object, a 1-yard-radius section of the object is destroyed (completely destroyed if encompassed)."
                        },
                        {
                            name: "Bloodbath",
                            desc: "When generating a Critical Effect with a firearm, severity improves by one step (Weak to Moderate, Moderate to Severe) before cards are flipped."
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
                            name: "Hit the Deck",
                            desc: "Gain the following Trigger on all Shotgun attacks:\n:m: *Hit the Deck*: Damaged characters must pass a Willpower duel (TN 10 + damage suffered) or immediately take the Drop Prone Action and become Slow."
                        },
                        {
                            name: "Unchecked Carnage",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(2)",
                                name: "Unchecked Carnage",
                                desc: "Deplete readied Shotgun's entire Capacity (not usable with Slugs). Attack all characters in range within a 90° cone: first third of range suffers Severe damage, middle third suffers Moderate, furthest third suffers Weak (no Blasts; all count as targets for Triggers)."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Massive Damage",
                        desc: "Characters suffering a Critical Effect from this character's firearm attacks suffer 2 additional damage after resolving the Critical Effect (does not generate another Critical Effect)."
                    }
                }
            ]
        },
        {
            id: "boozer",
            name: "Boozer",
            book: "Into the Bayou",
            starting: "A Boozer begins with a Culinary skill toolkit and five flasks of alcohol (any type).",
            onThePursuit: "Moonshiner: When this character fails a Crafting duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Resilience-based Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Drinking \"Problem\"",
                        desc: "Gain [+] to Culinary Challenges to brew alcohol.\n\nGain Tactical Action: (0) *Hidden Stash*: Discard a card to find one hidden flask of alcohol (find an additional flask if card value is 10+).\n\n*Flask of Alcohol*: Imbibing grants Living characters Intoxicated for 10 minutes (or Poison +1 if already Intoxicated)."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Have A Drink",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(1)",
                            name: "Have A Drink",
                            desc: "Target a Living character within 1 yard and make a Bewitch Challenge opposed by target's Carouse + Tenacity. On a success, target imbibes an offered flask of alcohol."
                        }
                    }
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
                            name: "Breathe Flame",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Breathe Flame",
                                typeLine: "Manifested Power",
                                av: "Cunning + Carouse",
                                ap: "(1)",
                                tn: "—",
                                range: "6 yards",
                                resist: "Df",
                                desc: "Requires Intoxicated Condition. Target suffers 1/2B/3BB damage. Damaged characters gain Burning +1."
                            }
                        },
                        {
                            name: "Beer Me!",
                            desc: "Range of Have A Drink increases to 3 yards per rank in Thrown Weapons Skill."
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
                            name: "Alcohol Abuse",
                            desc: "Have A Drink gains the following Triggers:\n• :r: *Liver Damage*: After succeeding, target suffers 1/3/4 damage.\n• :c: *A Bit Woozy*: After succeeding, target becomes Slow.\n• :t: *Spillage*: Target does not drink flask; gains “Flammable: Gaining Burning adds +2 Burning, then ends” for 5 minutes.\n• :m: *The Good Stuff*: After succeeding, target becomes Blind until end of next turn."
                        },
                        {
                            name: "Numb the Pain",
                            desc: "While this character has the Intoxicated Condition, ignore all penalties from Weak and Moderate Critical Effects (they still accumulate and resume when Intoxicated ends)."
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
                            name: "Hangover",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Blaaaargh!!",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Culinary",
                                ap: "(1)",
                                tn: "10:c:",
                                range: "8 yards",
                                resist: "Wp",
                                desc: "If target is Intoxicated, end it immediately; target becomes Paralyzed and suffers [-] to Social Skill Challenges for 1 hour or until cleaned with soap and water."
                            }
                        },
                        {
                            name: "Stumble Around Drunk",
                            desc: "If Intoxicated, push up to 2 yards in any direction at the start of her turn. If pushed into another character, that character pushes 2 yards directly away."
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
                            name: "Incoherent Rambling",
                            desc: "Failing a Social Skill Challenge while Intoxicated allows an immediate retry. On success, treat first Challenge as passed; on failure, suffer [-] to Social Skill Challenges against target(s) for 1 week."
                        },
                        {
                            name: "You're Drunk, Go Home",
                            desc: "Gain the following Defensive Trigger:\nDf (:t:) *You're Drunk, Go Home*: After succeeding against an enemy attacker with Intoxicated, push the attacker yards equal to its Walk Aspect away."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Ethanol Powered",
                        desc: "At the start of her turn, this character may imbibe one flask of alcohol in her possession to gain 1 additional General AP."
                    }
                }
            ]
        },
        {
            id: "buckaroo",
            name: "Buckaroo",
            book: "Into the Bayou",
            starting: "A Buckaroo begins with a Beast mount of Minion level or lower (Height >= character, no Defiant Characteristic, Fatemaster approval).",
            onThePursuit: "In the Saddle: When this character fails a Close Combat or Expertise duel while mounted, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Close Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "I Can Ride That!",
                        desc: "Spend 1 AP adjacent to a non-Defiant Beast (Minion or lower, Height >= character's own) and pass Husbandry Challenge (TN = Beast Wounds + Willpower). On failure, take damage from one of Beast's Close Combat attacks and Drop Prone. On success, ride it until dismounted (tamed permanently on Margin of Success if fed). Animal Companions require no check."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Leaps and Bounds",
                        desc: "While mounted on a Beast, she may Cheat Fate for her mount. Her mount ignores severe terrain movement penalties and reduces damage suffered by 1 (minimum 1)."
                    }
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
                            name: "Plough Over",
                            desc: "While mounted on a Beast, rider and mount gain Trigger on Close Combat attacks (once per Activation):\n:m: *Ploughed Over*: Instead of dealing damage, push target 4 yards away. If unengaged (or able to Charge while engaged), immediately Charge a different target."
                        },
                        {
                            name: "Drag Along",
                            desc: "While mounted on a Beast, rider and mount gain Trigger on Close Combat attacks:\n:c: *Drag Along*: After damaging an enemy, push up to 3 yards per :c: in final duel total, then push target into base contact."
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
                            name: "Rear Up",
                            desc: "While mounted on a Beast, gain the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Rear Up",
                                desc: "Discard a card to make a duel using Husbandry rank + mount's Might, opposed by Evade of every character within Pulse 3 of mount. Failing characters suffer 2 damage and Drop Prone."
                            }
                        },
                        {
                            name: "Cavalry to the Rescue!",
                            desc: "When charging an enemy while mounted, engaged friendly characters may move up to 3 yards away before mount moves, and each moving ally may discard a card to heal 1/2/3 damage."
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
                            name: "Trample",
                            desc: "When declaring a Charge while mounted, mount's (y) actions inflict +1 damage. If at least one hits, target Drops Prone after the Charge resolves."
                        },
                        {
                            name: "Ride Through",
                            desc: "While mounted on a Beast, this character and her mount may declare Charge Actions even while engaged."
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
                            name: "Come With Me If You Want To Live",
                            desc: "When declaring a Walk Action while mounted, carry a willing character within 2 yards (Height <= mount's Height), placing them adjacent to mount after movement."
                        },
                        {
                            name: "\"WHEE!\"",
                            desc: "When declaring a Charge while mounted, move mount up to its Charge Aspect, then dismount and move additional yards equal to own Charge Aspect (ignoring terrain and characters) with [+] to Attack and Damage flips. Take 1 damage upon landing."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Barreling Charge",
                        desc: "While mounted on a Beast, this character may perform the Charge Action as a (1) Action."
                    }
                }
            ]
        },
        {
            id: "copycat",
            name: "Copycat",
            book: "Into the Bayou",
            starting: "A Copycat begins the game with a Deceit skill toolkit.",
            onThePursuit: "Feigning Competence: When this character fails a Skill Duel involving a Skill that was copied with the Imitation Action, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Expertise Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Imitation",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(1)",
                            name: "Imitation",
                            desc: "Discard a card to target a character within 6 yards. Use target's rank in one Skill in place of own (max +3 over own rank) while acting in character with target's personality until next sunrise/sunset or reused."
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Mimicry",
                            desc: "Gain [+] on any Deceive Challenge that involves mimicking another character's voice."
                        },
                        {
                            name: "Insulting Parody",
                            desc: "Taking the Impose Action against a character whose Skill is copied with Imitation costs (0) AP and grants +1 additional Margin of Success on success."
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
                            name: "Lost in the Role",
                            desc: "Imitation bonuses last indefinitely until this character takes the Imitation Action again (does not end at sunrise or sunset)."
                        },
                        {
                            name: "Sincerest Flattery",
                            desc: "When using the Imitation Action, copy additional Skills equal to Cunning Aspect (minimum 1 additional Skill)."
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
                            name: "Do As You Do",
                            desc: "Once per Ongoing Challenge, copy another character's final duel total for the same Skill instead of making own flip (cannot copy from previous Duration)."
                        },
                        {
                            name: "Me Too!",
                            desc: "After a friendly character finishes their turn during Dramatic Time, if this character has not acted this round, discard a card to immediately activate."
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
                            name: "Talented Mimicry",
                            desc: "When taking Imitation, also copy one of the target's Talents for the duration (Talents requiring unique physical shapes like Flight/Incorporeal require plausible costume explanations approved by Fatemaster)."
                        },
                        {
                            name: "Klaatu, Barada, N...",
                            desc: "Discard a card on her turn to attempt to copy a Spell cast within 5 yards since last turn (uses same Magia/Immuto, relevant Aspect/Skill, and adds the discarded card's suit to final total)."
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
                            name: "Copy Fate",
                            desc: "After another character Cheats Fate, discard a card to place that character's Twist Card face up in front of her; cheat with it as if in Control Hand until end of Dramatic Time/scene."
                        },
                        {
                            name: "Fates Entwined",
                            desc: "When a target copied by Imitation makes a Healing Flip or gains a Condition, this character may heal the same or gain that Condition (and vice versa)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Living Mirror",
                        desc: "When targeting a character of same race, height, and gender with Imitation, transform into a physical copy of that character (affects posture, voice, skin, bone structure; does not copy gear or augmentations)."
                    }
                }
            ]
        },
        {
            id: "pugilist",
            name: "Pugilist",
            book: "Into the Bayou",
            starting: "A Pugilist begins the game with +1 Wound.",
            onThePursuit: "King of the Iron Fist: When this character fails a Close Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Close Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Adrenaline Rush",
                        desc: "When suffering damage caused by another character, gain Condition: “Adrenaline +1: At the end of turn, heal exactly 1 damage and lower this Condition by 1” until end of Dramatic Time."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Launch Off",
                            desc: "When declaring a Charge within 1 yard of an object >= 2 yards high, add Athletics rank to Charge Aspect and ignore terrain during movement."
                        },
                        {
                            name: "Bring It!",
                            desc: "Increase Defense by the number of enemy characters in engagement range (maximum bonus +3)."
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
                            name: "Fightin' Dirty",
                            desc: "This character may take the (1) Trick Action as a (0) Action."
                        },
                        {
                            name: "Pummel",
                            desc: "After dealing Weak Pugilism or Grappling damage to a target, lower Adrenaline by 1 to make another Pugilism or Grappling attack against that target."
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
                            name: "Extended Attack",
                            desc: "Range of Grappling and Pugilism attacks increases to (y)2 (or to (y)3 if already (y)2)."
                        },
                        {
                            name: "Combo Attack",
                            desc: "Gain Trigger on Grappling or Pugilism attacks:\n:t: *Right Hook*: Lower Adrenaline by 1 to make an additional attack against the target (+1 damage, and Acting Value increases by new Adrenaline value)."
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
                            name: "Reversal",
                            desc: "Gain Defensive Trigger:\nDf (:m:) *Reversal*: After suffering damage from Grappling, Martial Arts, or Pugilism, reduce damage by 2 (min 1) and make a free Grappling or Pugilism attack against target."
                        },
                        {
                            name: "Rush 'em",
                            desc: "Lower Adrenaline Condition by 2 to declare the Charge Action for 1 AP."
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
                            name: "Keep Your Guard Up",
                            desc: "Other characters may not declare Triggers on Close Combat attacks against this character."
                        },
                        {
                            name: "Worked Up",
                            desc: "At start of Dramatic Time, flip a Fate card (may be cheated): Weak = Adrenaline +1; Moderate = Adrenaline +3; Severe = Adrenaline +5; Red Joker = Adrenaline +5 and Fast (Black Joker = nothing)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Time to End This",
                        desc: "At the end of her turn, if she has Adrenaline +5 or higher, end Adrenaline to gain Reactivate."
                    }
                }
            ]
        },
        {
            id: "swineherd",
            name: "Swineherd",
            book: "Into the Bayou",
            starting: "A Swineherd begins with a Clubbin' Stick or a Pig Prodder.",
            onThePursuit: "The Crispiest of Bacon: When a friendly Pig is killed or rendered unconscious within 8 yards of this character, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Expertise Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Piglets!",
                        desc: "At session start after Prologue, pass TN 8 Husbandry Challenge to gain 1 subordinate Piglet (+1 per Margin of Success, max equal to completed Pursuit ranks, min 1). Commanded with (1) Order Action."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Pork Whisperin'",
                        desc: "Friendly Pigs starting turn within Aura 8 ignore Set ’er Off for their turn. When using Order to command subordinate Pigs, command up to two Pigs with different orders."
                    }
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
                            name: "Sic 'em",
                            desc: "Choose a Skill; all attacks with it gain Trigger:\n:t: *Sic ‘em*: After damaging, a friendly Pig within 8 yards and Line of Sight may push into base contact with target."
                        },
                        {
                            name: "\"Sooey!\"",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "“Sooey!”",
                                desc: "Take a TN 10 Husbandry Challenge. On success, all Pigs in range move Charge yards toward her. On failure, all Pigs in range Charge her as hostile characters (even if engaged)."
                            }
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
                            name: "Grow Up Strong",
                            desc: "At end of session, choose one subordinate Piglet to mature into a Bayou Pig (counts as two Piglets toward maximum control limit; excess must be released or stabled)."
                        },
                        {
                            name: "Now, I May Be a Simple Bayou Swineherd, But...",
                            desc: "In an Ongoing Challenge, make one Challenge Flip using Husbandry or Homesteading instead of the required Skill."
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
                            name: "Pig Throwin'",
                            desc: "This character gains the following Attack Action:",
                            action: {
                                cost: "(1)",
                                name: "Thrown Pig (Thrown Weapons)",
                                desc: "Range: 3 yards x Thrown Weapons rank. Damage: 2/3/4. Select a Ht 1 Pig within 2 yards; place adjacent to target and it suffers 1/2/3 damage (may cheat).\n• :r: *Enraged*: Pig gains Fast.\n• :t: *Gently*: Pig suffers 1 less damage (minimum 0)."
                            }
                        },
                        {
                            name: "Shot in the Rear",
                            desc: "Hitting an unengaged subordinate Pig with a Ranged Combat attack allows that Pig to immediately take a free Charge Action against a legal target of choice."
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
                            name: "Slop 'em Up",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Slop 'em Up",
                                typeLine: "Manifested Power",
                                av: "Cunning + Prestidigitation",
                                ap: "(1)",
                                tn: "10:m:",
                                range: "6 yards",
                                resist: "Df",
                                desc: "Target gains “Covered in Slop: Suffers [-] to Social Skill duels and cannot declare Triggers; Pigs attacking this target gain [+] to Attack flip” until washed off."
                            }
                        },
                        {
                            name: "Feed the Piggies",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Feed the Piggies",
                                desc: "Requires food on hand. Flip a Fate card (may cheat): on a :c:, take 1 damage per Pig or Ghoul within Pulse 3; on any other result, all Pigs and Ghouls in Pulse 3 heal 2/3/4 damage."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Call Forth the Pork",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Call Forth the Pork",
                            typeLine: "Manifested Power",
                            av: "Husbandry + Enchanting",
                            ap: "(1)",
                            tn: "12:m:",
                            range: "6 yards",
                            resist: "—",
                            desc: "Transform one subordinate Piglet or Bayou Pig into a Warpig for 1 minute."
                        }
                    }
                }
            ]
        },
        {
            id: "trapper",
            name: "Trapper",
            book: "Into the Bayou",
            starting: "A Trapper begins the game with a non-magical skill toolkit.",
            onThePursuit: "Beguile: When this character fails an Expertise duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Expertise Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Set Traps",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(2)",
                            name: "Set Traps",
                            desc: "Pass TN 10 Wilderness Challenge to set a trap. Next non-Incorporeal passing within 1 yard must pass Acrobatics (TN 10 + 2 per Margin of Success) or take 1/2/3 damage and gain Useless Limb until healed (:t: right arm, :c: left arm, :m: right leg, :r: left leg, Joker choice). Creator can ignore own traps; detected by Notice, disarmed by Wilderness."
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Lay of the Land",
                            desc: "While in cover, this character receives cover from all non-Close Combat (y) Actions (instead of just projectile (z) Actions)."
                        },
                        {
                            name: "Quick Traps",
                            desc: "Set Traps becomes a (1) Action (or a (0) Action if discarding a card)."
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
                            name: "Hunting Screen",
                            desc: "Spend 5 minutes setting up a Hunting Screen in a 2-yard radius: occupants gain soft cover and [+] to Stealth Challenges."
                        },
                        {
                            name: "Deadly Traps",
                            desc: "Traps placed with Set Traps inflict 2/3/4 damage and increase the Acrobatics TN to avoid them by +2."
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
                            name: "Scavenge Supplies",
                            desc: "Spend 1 AP in Dramatic Time to search a defeated enemy within 1 yard. Pass Notice Challenge (TN 20 - Rank Value) to find items worth Scrip equal to Rank Value - 3 (once per enemy)."
                        },
                        {
                            name: "Elaborate Traps",
                            desc: "Traps have a range of 3 yards and may be triggered twice before ceasing to function (a target will not trigger twice without leaving and returning)."
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
                            name: "Playing Possum",
                            desc: "Gain Defensive Trigger:\nDf (:m:) *Playing Possum*: After resolving an attack against her, immediately Drop Prone. So long as she does not attack, cast spells, stand up, or move > 3 yards/turn, opponents treat her as dead and cannot target her until Dramatic Time ends."
                        },
                        {
                            name: "Snares",
                            desc: "When a character is damaged by a trap placed by Set Traps, they also become Slow for 10 minutes or until Dramatic Time ends."
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
                            name: "Hide in the Mud",
                            desc: "Taking the Pass Action grants Defensive +1 until start of next turn. Taking two Pass Actions in a turn also grants: “Bulletproof +2: Reduce all damage from Ranged Combat attacks by +2 (min 1)” until start of next turn."
                        },
                        {
                            name: "Spring Traps",
                            desc: "Traps may be set as Spring Traps: instead of Useless Limb, catapults target into air, leaving them bound and able only to take (1) TN 12 Acrobatics to escape (or an ally cuts them down with a (2) Action)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "The Strong Get Stronger",
                        desc: "When another character is killed or knocked unconscious within 6 yards, draw a card (if hand has 3+ cards after drawing, discard a card)."
                    }
                }
            ]
        }
    ];

    if (typeof PURSUITS_DATA !== "undefined" && Array.isArray(PURSUITS_DATA)) {
        PURSUITS_DATA.push(...INTO_THE_BAYOU_PURSUITS);
    } else {
        window.PURSUITS_DATA = INTO_THE_BAYOU_PURSUITS;
    }
})();
