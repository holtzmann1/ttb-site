/**
 * Through the Breach 2nd Edition
 * Expansion: From Shadows
 * Basic Pursuits Database (Clean Mechanics)
 */

(function() {
    const FROM_SHADOWS_PURSUITS = [
        {
            id: "trouper",
            name: "Trouper",
            book: "From Shadows",
            starting: "A Trouper begins with a non-magical skill toolkit.",
            onThePursuit: "Post-Performance Notes: When this character fails a Training duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Training Skill in addition to those Skill Advancement options provided by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Guileful",
                        desc: "This character may take the Trick Action as a (0) Action. She also reduces the AP cost of Wait by -1 and does not lower her Initiative when taking it."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Style",
                        desc: "At the start of each day, select one of the following Styles to gain +1 to final duel totals involving the listed Skill or statistic (+1 per friendly Fated using a different Style within 3 yards, max +2):\n• Lead: Close Combat Skills\n• Stage: Defense\n• Director: Training Skills\n• Ensemble: Ranged Combat Skills\n• Actor: Social Skills\nOnly one Style at a time; changing Styles removes previous benefits."
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
                            name: "Teamwork",
                            desc: "When performing the Assist action, take a TN 10 Leadership Challenge (automatically passes if target uses a different Style). On a success, both she and one other character may Assist the same target (negating the one-assistant restriction)."
                        },
                        {
                            name: "Group Choreography",
                            desc: "Gain the following Talent:\n• *Proper Positioning*: After resolving her first Move action during her turn, select one friendly character within 3 yards to take a TN 14 Acrobatics Challenge (gains [+] if using a different Style). On a success, the target may immediately take a Move action."
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
                    type: "single",
                    talent: {
                        name: "Recast",
                        desc: "Friendly Fated using a different Style within 6 yards are counted for Style bonuses, and the maximum bonus increases to +3.\n\nGain the following Tactical Action:",
                        action: {
                            cost: "(0)",
                            name: "New Role",
                            desc: "Select a Style this character is not currently using. She gains the benefits of the selected Style."
                        }
                    }
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
                            name: "Incredible Display",
                            desc: "Gain the following Talent and Tactical Action:\n• *Awestruck*: After moving, discard a card to select a character within 5 yards that can see her; target gains “Awestruck: Suffers [-] on attacks against the applier” until the end of its next turn.",
                            action: {
                                cost: "(1)",
                                name: "Face in the Crowd",
                                desc: "Take a TN 12 Stealth Challenge (auto-pass if target uses a different Style). On a success, place herself within 1 yard of a character (friendly or enemy) within 3 yards and resolve a 1 AP action of choice (does not trigger disengaging strikes)."
                            }
                        },
                        {
                            name: "Over Your Shoulder",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Over Your Shoulder",
                                desc: "Select a friendly Fated character within 1 yard and take a TN 12 Acrobatics Challenge (gains [+] if target uses a different Style). On a success, the target may immediately resolve a 1 AP action."
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
                            name: "On My Mark",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "On My Mark",
                                desc: "Select a friendly Fated character and take a TN 14 Leadership Challenge (gains [+] if target uses a different Style). On a success, the target resolves a 1 AP action and takes her turn immediately after this character completes her turn (if not already activated this round)."
                            }
                        },
                        {
                            name: "Lethal Movement",
                            desc: "Gain the following Defensive Trigger:\nDf (:m:) *Lethal Movement*: After succeeding, select a friendly character within 3 yards and take a TN 10 Acrobatics Challenge (auto-pass if target uses a different Style). On a success, place herself within 1 yard of target (ignoring intervening characters and non-impassable terrain; no disengaging strikes), then take a 1 AP action against one enemy in engagement range."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Peak Performance",
                        desc: "At the beginning of each day, choose any two Styles and receive benefits from both simultaneously.\n\nTreat all 2 AP actions as having an AP cost of 1. She may also take two 0 AP actions during her turn."
                    }
                }
            ]
        },
        {
            id: "elementalist",
            name: "Elementalist",
            book: "From Shadows",
            starting: "An Elementalist begins with a Grimoire containing 2 Sorcery Magia and 2 Elemental Immuto (cannot be Decay, Infected, Spirit, or Terror).",
            onThePursuit: "Elemental Gathering: Whenever this character fails to cast a Sorcery spell with at least one Elemental Immuto, she may draw a card. During the Epilogue, a character on this Pursuit may advance in the Sorcery Skill in addition to those Skill Advancement options provided by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Animus",
                        desc: "One Elemental Immuto she knows becomes her Anima (gains one if she knows none; cannot be Decay, Infected, Spirit, or Terror; retained regardless of Grimoire). Whenever she casts or is targeted by a Sorcery spell containing any of her Anima, she heals 1 damage."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Elemental Attunement",
                        desc: "When casting a Sorcery spell, this character may reduce the cost of the first instance of each unique Elemental Immuto included in the spell by -1 (cannot be Decay, Infected, Spirit, or Terror)."
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
                            name: "Mantra",
                            desc: "This character may add one suit of her choice to any Sorcery spell she casts that includes at least two instances of Elemental Immuto (two different Immuto or a single one added multiple times)."
                        },
                        {
                            name: "Mastery of Elements",
                            desc: "Add 1 Sorcery Magia and 1 Elemental Immuto to any Grimoire she has. She may also select an additional Elemental Immuto to become an Anima."
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
                            name: "Chakra Incarnate",
                            desc: "Select one Anima; gain a Gamin of that type as a familiar (acts on its turn with full actions; dismiss with (0); if killed, repairs in 10 minutes).\n\nGain the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Chakra Incarnate",
                                desc: "Summon her familiar anywhere within 5 yards (may act as normal during the turn it is summoned)."
                            }
                        },
                        {
                            name: "Gaminform",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Gaminform",
                                desc: "Select up to 2 Anima; gain the two abilities listed under each selected Immuto entry (excluding Demise) for rounds equal to Sorcery ranks (or 1 minute outside Dramatic Time)."
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
                            name: "Conflux",
                            desc: "Whenever resolving a Sorcery spell, select one Anima included in that spell. All characters within Pulse 2 of the target suffer 2 damage and the Demise effect appropriate for that Elemental Immuto."
                        },
                        {
                            name: "Kami Fragments",
                            desc: "Gain the Summon Gamin Magia (retained regardless of Grimoire; if already known, reduce TN by -2:t: and summoned Gamin are immune to Slow). May add up to 2 Elemental Immuto to Summon Gamin, granting benefits from both Immuto entries."
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
                            name: "Ties Through All",
                            desc: "Once per turn, when casting a Sorcery spell with 3+ unique Elemental Immuto, automatically add one of the following Alteration Immuto for free (select two if 4+ unique): Blast, Increased Damage, Alter Range, Ignore Character."
                        },
                        {
                            name: "Primeval Force",
                            desc: "Once per turn, when casting a Sorcery spell with 3+ instances of the same Anima, automatically add one of the following effects for free (select two if 4+ instances): Blast, Increased Damage, Increase Pulse, Location Genus."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Call Forth",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Call Forth",
                            typeLine: "Manifested Power",
                            av: "Sorcery + Intellect",
                            ap: "(2)",
                            tn: "16:t::t:",
                            range: "5 yards",
                            resist: "—",
                            desc: "Select up to 2 Anima and summon a subordinate Golem with the appropriate Elemental abilities within range on a supporting surface. Lasts 5 rounds (+1 round per Margin of Success)."
                        }
                    }
                }
            ]
        },
        {
            id: "extortionist",
            name: "Extortionist",
            book: "From Shadows",
            starting: "An Extortionist begins with a non-magical skill toolkit.",
            onThePursuit: "Sweet with the Sour: When this character fails a Social duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Social Skill in addition to those Skill Advancement options provided by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Influence",
                        desc: "After succeeding in a Social duel against another character with a Margin of Success, increase all other Social duel totals against that character by +1 for 24 hours (maximum +2)."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Favors Owed",
                        desc: "When receiving compensation, she may choose to instead gain Favors (+1 for normal/1-5 Scrip, +2 for risky/6-10 Scrip, +3 for dangerous/11-15+ Scrip). Expend Favors for benefits:\n• *Duplicity*: [+] on one Barter, Bewitch, or Scrutiny Challenge against a target for 1 day per Favor.\n• *Payday*: Gain 5 Scrip (Narrative Time only) per Favor (max 1/week + Crime Boss value).\n• *Intel*: Spend half a day to learn a target's job, relationships, vices, or activities over the past week.\n• *Coercion*: Have a non-enemy perform an appropriate task (dangerous/illegal tasks cost 2-4 Favors)."
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
                    type: "single",
                    talent: {
                        name: "Blackmail",
                        desc: "Expend 1 Favor and spend 3 hours per +1 bonus investigating a target via an uncheated Skill Challenge (Bureaucracy, Forgery, Notice, Track, Barter, Bewitch, Convince, Deceive, Intimidate):\n• 1-9 (Minor Secret): Gain 1 Favor against the target.\n• 10-16 (Major Secret): Gain 3 Favors against the target.\n• 17+ (Career Ending): Gain 5 Favors against the target.\nFavors gained this way can only be used against the blackmailed target or on abilities involving them."
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
                    type: "single",
                    talent: {
                        name: "Recruit Underlings",
                        desc: "Gain Talent: Crime Boss +1 (gain +1 Favor at day start; lost if unused by end of day).\n\nExpend 1 Favor to gain 1 subordinate Underling (max Underlings = half Pursuit ranks, rounded up). Outfitting equipment is provided by this character.",
                        minion: {
                            name: "Underling",
                            typeLine: "Minion (4), Living",
                            stats: {
                                might: 1, grace: 1, speed: 1, resilience: 1,
                                charm: 0, intellect: 0, cunning: 2, tenacity: 1,
                                defense: "3 (7)", walk: 4, height: 2, initiative: "3 (7)",
                                willpower: "3 (7)", charge: 5, wounds: 5
                            },
                            skills: "Melee 1, Gambling 2, Notice 2, Track 1, Intimidate 2, Athletics 1, Stealth 1",
                            abilities: [
                                {
                                    name: "Don't Mind Me (10)",
                                    desc: "If this character took no offensive actions on her last turn, or during round 1 before acting, enemies targeting this character must pass TN 10 Scrutiny or choose a different target."
                                },
                                {
                                    name: "Slink Away",
                                    desc: "Gains [+] to Defense flips against disengaging strikes. If a friendly character is engaged with an enemy, that enemy cannot make disengaging strikes against this character."
                                },
                                {
                                    name: "Dirty Work",
                                    desc: "Once per day, performs a mundane task/job for her controller or resolves Favors on controller's behalf."
                                }
                            ],
                            weapon: {
                                name: "Knife",
                                skill: "Melee",
                                av: "2 (6)",
                                resist: "Df",
                                damage: "1/2/3",
                                special: "Rg: (y)1. Target suffers 1/2/3 damage."
                            }
                        }
                    }
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
                            name: "Subterfuge",
                            desc: "Once per session, discard 1-5 cards to view that many cards from top of Fate Deck and remove up to that many from the game for the session (max 5, no Jokers; remaining placed on top in chosen order). For each removed card:\n• Character or ally heals 1/2/3 damage (based on card value).\n• Card's suit is added to a pool that character or ally may add to a final duel total (discarded to Fate Deck discard once used)."
                        },
                        {
                            name: "Wetwork",
                            desc: "This character gains the following Tactical Actions:",
                            action: {
                                cost: "(0)",
                                name: "Wetwork / Ah, Ah, Ah!",
                                desc: "• (0) Wetwork: Expend X Favors to increase Close Combat damage by +X until turn end and inflict a Critical Effect with Severity equal to Favors spent (1: Weak, 2: Moderate, 3+: Severe; if Bleeding Out or death, use next lowest).\n• (0) Ah, Ah, Ah!: Expend X Favors to impart X [-] damage flips on one target within 10 yards until end of round."
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
                            name: "Protection Money",
                            desc: "Once per month, make an Intimidation Challenge (TN 5 + district modifiers, -1 per Underling, -2 per Favor spent). On success, gain 2 Favors per week against characters associated with the target (does not count toward Payday weekly limit). Failure imposes [-] on future attempts against that target."
                        },
                        {
                            name: "Eyes Everywhere",
                            desc: "Expend 2 Favors or dismiss 1 Underling to alter something in the environment without others knowing (stealing an item, changing a lock, alerting guards, supplying an item) achievable by ordinary people."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Kingpin",
                        desc: "Gain Talent: Crime Boss +1 (gain +1 temporary Favor at day start).\n\nOne Underling gains +3 AV, 1 General Talent, and Skill ranks: +2, +2, +1, +1. (If she has no Underlings, gain one).\n\nAt session start after Prologue, pass a TN 9 Convince Challenge to gain 1 Underling (+1 per Margin of Success) until session end (does not count against Underling limit).\n\nGain +1 AP during her turn, usable only to issue the Order Action to an Underling."
                    }
                }
            ]
        },
        {
            id: "warder",
            name: "Warder",
            book: "From Shadows",
            starting: "A Warder begins with 1 Enchanting Magia, 1 Necromancy Magia (must be resisted with Wp), and 1 Alteration Immuto, retained regardless of Grimoire.",
            onThePursuit: "Walk Unafraid: When this character fails a Willpower or Necromancy duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in the Counter-Spelling or Necromancy Skill in addition to those Skill Advancement options provided by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Restore Balance",
                        desc: "Any enemy with the Undead or Spirit Characteristic is considered this character’s Ward. This character gains [+] in all Centering, Scrutiny, and Willpower duels taken against a Ward."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Lantern of Souls",
                        desc: "When a Ward of Minion rank or higher dies within Aura 8, harvest its essence to increase Chi Condition by +1 (negating death triggers like Soulstones recharging).\n\n*Chi +1*: Adds +1 to final duel totals of Spells or Manifested Powers she casts (max +3). After resolving, lower Chi by 1."
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
                            name: "Deep Meditation",
                            desc: "At day start, if she rested 6+ hours, gain Chi +3.\n\nGain Tactical Action during Dramatic Time:",
                            action: {
                                cost: "(1)",
                                name: "Deep Meditation",
                                desc: "This character increases her Chi Condition by +1 (maximum 3)."
                            }
                        },
                        {
                            name: "Cleanse",
                            desc: "Immune to Haunted and Possessed Conditions.\n\nGain the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Cleansing Ritual",
                                desc: "Select a non-Undead, non-Spirit character within 10 yards and pass a TN 10 Centering Challenge to reduce one of target's Conditions by -1 (-1 per Margin of Success)."
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
                            name: "Learned Rituals",
                            desc: "Gain 1 Enchanting Magia, or 1 Necromancy Magia resisted by Wp (retained regardless of Grimoire). When casting a spell or Manifested Power on a Ward, lower Chi by 1 to add a suit of choice to the final duel total."
                        },
                        {
                            name: "Transference",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Transference",
                                typeLine: "Manifested Power",
                                av: "Enchanting + Tenacity",
                                ap: "(1)",
                                tn: "10:c:",
                                range: "5 yards",
                                resist: "—",
                                desc: "Name a Talent. For 3 rounds, Wards in range do not count as having that Talent. Lower Chi by X when casting to heal all friendly non-Undead, non-Spirit characters in range X damage (max 3)."
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
                            name: "Harmony",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Harmony",
                                typeLine: "Manifested Power",
                                av: "Enchanting + Tenacity",
                                ap: "(1)",
                                tn: "11:c:",
                                range: "—",
                                resist: "—",
                                desc: "For 3 rounds, Wards moving within Aura 5 suffer 2 irreducible damage. Lower Chi by X when casting to grant Defense +X to all friendly non-Undead, non-Spirit characters in range (max +3)."
                            }
                        },
                        {
                            name: "Sever Ties",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Sever Ties",
                                typeLine: "Manifested Power",
                                av: "Necromancy + Cunning",
                                ap: "(1)",
                                tn: "12:c:",
                                range: "3 yards",
                                resist: "Df/Wp",
                                desc: "Target Ward suffers 2/3/4 damage. If subordinate, it breaks control and treats its former commander as an enemy for 24 hours. Lower Chi by X when casting to increase damage by +X (max +3)."
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
                            name: "Shubatsu",
                            desc: "Lower Chi by 2 and spend 1 hour purifying an area up to a small building: occupants gain Armor +2 and +2 to Wp duels against Ward actions for 1 week.\n\nGain Tactical Action while inside:",
                            action: {
                                cost: "(2)",
                                name: "Purified Border",
                                desc: "Until start of next turn, Wards attempting to cross the border must pass TN 14 Centering or treat border as impassable (on success, Severe/Hazardous Terrain; ignores Incorporeal)."
                            }
                        },
                        {
                            name: "Otherworldly Obedience",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Otherworldly Obedience",
                                typeLine: "Manifested Power",
                                av: "Necromancy + Tenacity",
                                ap: "(2)",
                                tn: "12:c:",
                                range: "8 yards",
                                resist: "Wp",
                                desc: "Target Ward immediately performs a 1 AP Action of this character's choice (cannot attack itself). Lower Chi by 1 to make it perform a 2 AP Action or an additional 1 AP Action."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Banishment",
                        desc: "When a Ward within 3 yards is reduced to 0 Health or below, lower Chi by 1 and pass a Counter-Spelling Challenge (TN = target's Rank Value) to immediately kill it (ignoring Flicker/Demise; cannot be reanimated/summoned). Increase Chi by target's max Fate Points.\n\nGain Talents:\n• *Terrifying (Ward) 11*: Enemies considered Wards must pass TN 11 Horror Duel when ending turn in engagement or targeting her with harmful action.\n• *Sage's Seals*: Maximum Chi increases to +6; always ignores Hard to Wound and Incorporeal on Wards."
                    }
                }
            ]
        },
        {
            id: "monk",
            name: "Monk",
            book: "From Shadows",
            starting: "A Monk begins with any combination of equipment, items, or non-Ranged weapons not exceeding 10§ total (Crafting requirement max 1).",
            onThePursuit: "Self-Discipline: When this character fails a Martial Arts duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in the Martial Arts or Centering Skill in addition to those Skill Advancement options provided by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Correct Form",
                        desc: "Uses the following profile for Martial Arts attacks regardless of Skill rank, and treats Staffs as Martial Arts weapons:\n• Rank 0: Rg (y)1, Dmg 1/2/2, Stunning\n• Rank 1: Rg (y)1, Dmg 2/2/3, Stunning\n• Rank 2: Rg (y)1, Dmg 2/3/4, Stunning\n• Rank 3: Rg (y)1, Dmg 2/3/5, Stunning\n• Rank 4: Rg (y)1, Dmg 3/3/5, Stunning\n• Rank 5: Rg (y)1, Dmg 3/3/6, Stunning\n*Stunning*: Whenever dealing Severe damage, target suffers a Weak Critical Effect in addition to other Critical Effects."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Enlightened Fighting",
                        desc: "At the start of each day, gain Enlightened +1 for 24 hours (lower by 1 to raise or lower another Condition by 1).\n\nGain Talent: *Enlightened Fighting*: After succeeding in a Martial Arts Attack with a Margin of Success, gain Enlightened +1."
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
                            name: "Rising Sun",
                            desc: "Martial Arts and Pugilism attacks gain Fistload (ignore one [-] on Damage Flip).\n\nGain Talent: *Rising Sun*: When reducing Enlightened Condition to increase the value of another Condition, increase that Condition's value by an additional +1."
                        },
                        {
                            name: "Setting Dusk",
                            desc: "Martial Arts and Pugilism attacks gain Fistload (ignore one [-] on Damage Flip).\n\nGain Talent: *Setting Dusk*: When reducing Enlightened Condition to decrease the value of another Condition, decrease that Condition's value by an additional -1."
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
                    type: "single",
                    talent: {
                        name: "One of Five Paths",
                        desc: "Gain Talent: *Self Reflection*: When gaining Enlightened for the first time during Dramatic Time, increase value by an additional +1.\n\nGain the following Tactical Action:",
                        action: {
                            cost: "(0)",
                            name: "Moment of Respite",
                            desc: "Take a TN 9 Centering Challenge. On a success, gain Enlightened +1 (+1 per Margin of Success, max Enlightened +5)."
                        }
                    }
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
                            name: "Alighted Spirit",
                            desc: "Gains Elemental Weapon Magia and Spirit Elemental Immuto (may use Centering + Tenacity to cast instead of Enchanting + Cunning; only targets herself)."
                        },
                        {
                            name: "Impossible Movement",
                            desc: "Ignore Hazardous Terrain during movement.\n\nGain the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Impossible Movement",
                                desc: "During one Move action during her turn, move on terrain otherwise impossible (running on/up walls, across water, through occupied areas)."
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
                            name: "Catch the Blade",
                            desc: "Gain the following Defensive Trigger:\nDf (Special) *Catch the Blade*: After failing against a Close Combat Attack, reduce Enlightened Condition by any amount. Reduce damage suffered by -2 per point reduced (still suffers Conditions and non-damage effects)."
                        },
                        {
                            name: "Deflect the Shot",
                            desc: "Gain the following Defensive Trigger:\nDf (Special) *Deflect the Shot*: After failing against a Ranged Combat attack, reduce Enlightened Condition by any amount. Reduce damage suffered by -2 per point reduced."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Grandmaster",
                        desc: "When gaining Enlightened for the first time during Dramatic Time, increase by +1. Increase all Physical and Mental Aspects by +1 (max +5, can never be lowered).\n\nGain Talent: *Stance Change*: Whenever dealing Severe damage with a Martial Arts attack, lower Enlightened by 1 to immediately resolve an additional Martial Arts attack against the target (costs 1 Enlightened per additional attack).\n\nMay qualify directly for Four Rivers Monk Advanced Pursuit."
                    }
                }
            ]
        },
        {
            id: "huckster",
            name: "Huckster",
            book: "From Shadows",
            starting: "A Huckster begins with a non-magical skill toolkit.",
            onThePursuit: "Fake It 'Till You Make It: When this character fails a Forgery, Barter, or Crafting Challenge, she may draw a card. During the Epilogue, a character on this Pursuit may advance in the Forgery, Barter, or Deceive Skills in addition to those Skill Advancement options provided by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Eye for Quality",
                        desc: "Purchase items for 10% less than asking cost (even after bartering). Add Forgery Skill to Notice Checks to spot fakes, ignoring bonuses or TN increases from the forgery's creator."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Flimflam",
                        desc: "Select a Crafting Skill as a Specialty. Once per day, pass a TN 8 Specialty Challenge and spend 6 hours selling to gain 2 Scrip (+1 Scrip per Margin of Success)."
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
                            name: "Sales Pitch",
                            desc: "When selling or making herself the center of attention, add ranks in both Barter and Deceive to final duel total. A Margin of Success grants an additional 10% Scrip on anything sold in that moment."
                        },
                        {
                            name: "Track the Cash",
                            desc: "Whenever flipping either Joker, gain 1 Scrip.\n\nThis character gains the following Manifested Power:",
                            power: {
                                name: "Track the Cash",
                                typeLine: "Manifested Power",
                                av: "Forgery + Tenacity",
                                ap: "(1)",
                                tn: "11",
                                range: "—",
                                resist: "—",
                                desc: "Target any currency touched or known to exist. For 24 hours (+24 hours per card discarded), track its location and distance by instinct. Ends if the currency is separated."
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
                            name: "Black Market Goods",
                            desc: "Once per session, pass a TN 14 Barter Challenge ([+] in urban areas, [-] in rural areas) to access a black market for the session or 1 week, allowing purchase of illicit, illegal, or rare goods at +20% cost (+50% for unique items)."
                        },
                        {
                            name: "Ware-y",
                            desc: "Ignore Manipulative and Don’t Mind Me Talents. When using Specialty Crafting Skill, add Forgery Skill to final duel total, and gain +1 extra Scrip per Margin of Success when selling Flimflam."
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
                            name: "Counterfeiting",
                            desc: "Produce forgeries at 50% material cost via Specialty Crafting Challenge (1 bonus per 3 hours): Poor (TN 7), Average (TN 12), High (TN 16), Masterpiece (TN 20+). Items sell for double original value per stage above Average."
                        },
                        {
                            name: "Expired Warranty",
                            desc: "Spend 1 hour sabotaging an item: first use applies “Rigged to Fail” (useless except for components; TN 13 Crafting to remove).\n\nPass TN 13 Specialty Crafting Challenge to apply “Expired Warranty”: first use deals 2/2/3 damage and Dazed to user, destroying the item."
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
                            name: "Placebo Effect",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Placebo Effect",
                                typeLine: "Manifested Power",
                                av: "Forgery + Cunning",
                                ap: "(1)",
                                tn: "11",
                                range: "—",
                                resist: "—",
                                desc: "Touched item loses 1 Trigger, 1 Magia/Immuto, or 1 Special quality/ability for 1 hour (permanent on Margin of Success). At +:m: TN, transfer the removed quality to a second item for 1 hour."
                            }
                        },
                        {
                            name: "Antiquing",
                            desc: "Gain a Grimoire with 2 Magia and 2 Immuto, replacing Magical Skills in those Magia with Forgery. Discard a card to add one suit of choice to final duel totals when casting spells from this Grimoire."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Open for Business",
                        desc: "Receive 60 Scrip towards renting or buying a storefront. Pass weekly TN 8 Barter Challenge selling Flimflam to earn 6 Scrip (+ bonus Scrip per Margin of Success based on district and Specialty: Slums +1, Quarantine Zone +3, New Construction +1-2, Industrial +2, Little Kingdom +2, Downtown +6-8)."
                    }
                }
            ]
        },
        {
            id: "archer",
            name: "Archer",
            book: "From Shadows",
            starting: "An Archer begins with one Archery weapon and up to 20 rounds of ammunition with the Bolt special rule (total value max 20§).",
            onThePursuit: "Nock Another: When this character fails an Archery duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in the Archery Skill in addition to those Skill Advancement options provided by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Overdraw",
                        desc: "Reduce Focused Condition by exactly 1 to double the range of one Archery weapon used this turn."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Steady Aim",
                        desc: "No penalties to projectile attack flips on unstable platforms. If she did not move or push this turn, gain [+] to attack flips against immobile objects."
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
                            name: "Pinning Shot",
                            desc: "On a Margin of Success with an Archery weapon, add :m: or :t: to final duel total. If having two of that suit, actions required to remove Conditions applied by the attack increase by +1."
                        },
                        {
                            name: "Fletching",
                            desc: "Create any ammunition with the Bolt special rule regardless of Skill requirement at 50% material cost."
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
                            name: "Izamu’s Eye",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Izamu's Eye",
                                desc: "Enemies targeted with projectile attacks this turn receive no benefit from Soft Cover."
                            }
                        },
                        {
                            name: "Twin Arrows",
                            desc: "Expend 1 extra bolt on an Archery attack to gain Trigger:\n:r: or :c: *Twin Arrows*: After damaging, resolve a damage flip against one target within 3 yards of original target (suffers [-][-] and cannot Cheat)."
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
                            name: "Hachiman’s Verdict",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Hachiman's Verdict",
                                desc: "When attacking with an Archery weapon this turn, reduce ammunition by 1/2/3 to add Blast / Blast Blast / Blast Blast to Moderate and Severe damage."
                            }
                        },
                        {
                            name: "Successive Shots",
                            desc: "After hitting with an Archery attack with a Margin of Success, immediately resolve a free additional attack with that weapon against the same target (cannot generate additional attacks)."
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
                            name: "Read the Wind",
                            desc: "Discard a card to ignore all [-] to attack and damage flips with Archery weapons until end of turn."
                        },
                        {
                            name: "Kyudo",
                            desc: "If no enemies are within 10 yards, gain [+] to all attack and damage flips when using Archery weapons."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Seisha Hitchu",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(1)",
                            name: "Seisha Hitchu",
                            desc: "Discard 2 cards and flip top card of Fate Deck. Unless Black Joker, target is automatically hit and suffers Severe damage (suit may be added). If Black Joker, attack misses and action cannot be used for remainder of Dramatic Time."
                        }
                    }
                }
            ]
        }
    ];

    if (typeof PURSUITS_DATA !== "undefined" && Array.isArray(PURSUITS_DATA)) {
        PURSUITS_DATA.push(...FROM_SHADOWS_PURSUITS);
    } else {
        window.PURSUITS_DATA = FROM_SHADOWS_PURSUITS;
    }
})();
