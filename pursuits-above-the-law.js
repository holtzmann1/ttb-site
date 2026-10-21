(function() {
    const ABOVE_THE_LAW_PURSUITS = [
        {
            id: "bureaucrat",
            name: "Bureaucrat",
            book: "Above the Law",
            starting: "A Bureaucrat begins the game with a powerful Fatemaster character owing her a big favor. This favor can be called upon for a significant boon (such as temporary access to a powerful weapon or expunging criminal records), but once used, it is gone forever.",
            onThePursuit: "Two-Faced: When this character fails a Social duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Academic Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "A Servant of the People",
                        desc: "When this character makes a Barter, Bewitch, or Intimidate Challenge, she may discard a card to turn it into a Bureaucracy Challenge.\n\nIf the Challenge was a Barter Challenge, she may use promises of insignificant political favors instead of cash or material goods. This requires spending an hour or two speaking with associates within a week to uphold the bargain."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Web of Allies",
                        desc: "This character gains an Ally (subject to Fatemaster approval).\n\nOnce per session per Ally, she may attempt a Bureaucracy Challenge to call upon that Ally for support:\n• TN 10: Minor assistance (dinner invitations, mercenary contact, prisoner location).\n• TN 14: Risky assistance (releasing a prisoner, criminal meeting, smuggling contraband, secret information).\n• TN 18: High-risk assistance (expunging criminal records, Neverborn meeting, Soulstone loan, sewer search).\n\nEach time this character would gain a General Talent from this Pursuit, she may instead choose to gain another Ally."
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
                            name: "Long-Winded Speech",
                            desc: "While this character gives a speech, all characters within 10 yards gain :+: to Notice Challenges made against her and suffer :-: to Notice Challenges made against other characters.\n\nIf she speaks for at least 5 minutes, she may make a Leadership Challenge opposed by the highest Willpower among listening non-allies. On a success, she gains :+: to Social Skill Challenges against them for the scene. A Margin of Success shifts the crowd's opinion of an organization one step on the Hatred-to-Adoration scale."
                        },
                        {
                            name: "Do You Know Who I Am?",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Do You Know Who I Am?",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Intimidate",
                                ap: "(1)",
                                tn: "10:r:",
                                resist: "Wp",
                                range: "6 yards",
                                desc: "The target gains the following Condition until the end of Dramatic Time: “Cowed: This character suffers :-: on all attack flips made against the character that applied this Condition.”",
                                triggers: [
                                    {
                                        cost: ":m::r:",
                                        name: "I Am Very Important!",
                                        desc: "After succeeding, the target also becomes Slow and Dazed until the end of its next turn, plus one turn per Margin of Success."
                                    }
                                ]
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
                            name: "Information Network",
                            desc: "Once per session while in a populated area, this character may attempt a Bureaucracy Challenge (TN 5 + target's Rank Value) to consult her network about a target. On a success, she learns 2 key details about the target's history, associates, or recent activities, plus 1 detail per Margin of Success.\n\nInformation takes 2 hours in a city, 8 hours in a large town, 24 hours in a small town, or 48 hours in smaller settlements."
                        },
                        {
                            name: "Favors Owed",
                            desc: "When this character uses Web of Allies, she may add her positive Charm Aspect to the Bureaucracy Challenge.\n\nAdditionally, she may call upon Allies more than once per session, requiring one additional Margin of Success per previous attempt on that Ally during the session."
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
                            name: "Administrative Initiative",
                            desc: "At the start of Dramatic Time, this character may discard a card to choose a character in the battle (a second character on a card value of 6-10, or a third on 11+). She may raise or lower each chosen character's initiative value by up to her Bureaucracy ranks.\n\nIf the discarded card was a :m:, chosen enemy characters also become Dazed until the end of their first turn."
                        },
                        {
                            name: "Plausible Deniability",
                            desc: "Once per session when accused of a crime, this character may discard a card to avoid all repercussions from the accusation, save for scandalous rumors lingering for two weeks."
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
                            name: "Bureaucratic Meddling",
                            desc: "At the start of a new scene or at the start of her turn during Dramatic Time, this character may look at the top card of any other player’s Twist Deck and either discard it or return it to the top."
                        },
                        {
                            name: "The System is Rigged",
                            desc: "This character may treat :m: and :r: cards that she flips, Cheats, or reveals as if they had both the :m: and :r: suits."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "\"Synergy\"",
                        desc: "Whenever a friendly character within 10 yards of this character (including herself) Cheats Fate, another character within 10 yards may draw a card after resolving the current action."
                    }
                }
            ]
        },
        {
            id: "commander",
            name: "Commander",
            book: "Above the Law",
            starting: "A Commander begins the game with one weapon and any Armor. These items cannot have a total combined value greater than 20§.",
            onThePursuit: "A Few Good Men: When one of this character's subordinate characters is killed or rendered unconscious while within 6 yards of this character, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Social Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Reinforcements",
                        desc: "At the start of each session after the Prologue, this character may make a TN 8 Leadership Challenge to gain a subordinate Soldier, plus one per Margin of Success, up to a maximum of half her ranks in this Pursuit (rounded up). Soldiers join with listed weaponry and 30 rounds of ammunition. She can command a Soldier with the (1) Order Action.",
                        minion: {
                            name: "Soldier",
                            typeLine: "Minion (5), Living",
                            stats: {
                                might: 1, grace: 2, speed: 1, resilience: 0,
                                charm: 0, intellect: -1, cunning: -1, tenacity: 2,
                                defense: "4 (9)", walk: 5, height: 2, initiative: "3 (8)",
                                willpower: "4 (9)", charge: 5, wounds: 5
                            },
                            skills: "Athletics 1, Bureaucracy 1, Evade 3, Long Arms 3, Melee 3, Notice 2, Stealth 1, Toughness 1",
                            abilities: [
                                {
                                    name: "Armor +1",
                                    desc: "Reduce all damage suffered by this character by +1, to a minimum of 1."
                                },
                                {
                                    name: "From the Hip",
                                    desc: "When making a Long Arms attack, this character may substitute Grace for Intellect when calculating its Acting Value."
                                }
                            ],
                            weapon: {
                                name: "Standard Issue Sword",
                                skill: "Melee",
                                av: "4 (9)",
                                resist: "Df",
                                damage: "2/3/4",
                                special: "Rg: (y)2. Target suffers 2/3/4 damage.\n\nUS&E Carbine (Long Arms): Rg: z12, AV 5 (10), Resist: Df, Damage: 2/3/5. Capacity 2, Reload 2. :r: Critical Strike: When damaging the target, this attack deals +1 damage for each :r: in the final duel total."
                            }
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Arrest Order",
                            desc: "This character gains the following Trigger on her Ranged Combat attacks:\n:m: *Arrest*: After succeeding, the target gains the following Condition until the end of its next turn: “Arrest: This character must discard a card to perform a movement action.”"
                        },
                        {
                            name: "Spoils of War",
                            desc: "When a subordinate character under this character’s control within Aura 6 kills an enemy during Dramatic Time, this character may draw a card.\n\nAdditionally, searching the corpse of an enemy combatant with ranged weapons yields extra ammunition equal to half their Rank Value (rounded up)."
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
                            name: "Bodyguard Detail",
                            desc: "Friendly Fated characters within Aura 6 of this character's subordinate Soldiers and Hidden Snipers gain the following Defensive Trigger:\nDf :r: *Sacrifice for the Cause*: After this character fails, a friendly Soldier or Hidden Sniper within 2 yards of this character and within range and line of sight of the attacker suffers the effects of the attack instead of this character."
                        },
                        {
                            name: "Efficient Leadership",
                            desc: "When a subordinate character under this character’s control and within Aura 6 declares an action, it may use this character’s ranks in the Leadership Skill in place of its Aspect or Skill Rank when determining its Acting Value."
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
                            name: "Issue Command",
                            desc: "This character may take the (1) Order Action as a (0) Action. When this character takes the Order or Firing Line Action, a single subordinate character under her control may take a (1) AP Action after resolving that Action."
                        },
                        {
                            name: "We're a Team!",
                            desc: "When this character attempts a Challenge during Narrative Time, after flipping and deciding on Cheating Fate, she may discard a card to add +1 to her final duel total for each subordinate Soldier assisting her (preventing use of the Assist Action)."
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
                            name: "The Wrong Side of the Law",
                            desc: "This character's subordinate Soldiers and Hidden Snipers gain the :m: *Arrest* Trigger on Ranged Combat attacks. Additionally, if an enemy with the Arrest Condition declares an Action during Dramatic Time, they may not declare that Action again until the start of their next turn."
                        },
                        {
                            name: "Proper Motivation",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Proper Motivation",
                                desc: "Target a friendly character within 6 yards and discard a card if they are not one of this character's subordinate characters. End the Slow or Paralyzed Condition on the target; if the target is Prone, it may immediately stand up. If the target was Slow or Prone, it may take a 1 AP Walk Action. If the target was Paralyzed, it may take any 1 AP Action of this character's choice."
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
                            name: "Hidden Sniper",
                            desc: "At the start of Dramatic Time in a civilized area, this character may discard a card to place a subordinate Hidden Sniper at least 10 yards from an opponent. The sniper retreats at the end of Dramatic Time; if killed, this Talent cannot be used for the rest of the session.",
                            minion: {
                                name: "Hidden Sniper",
                                typeLine: "Minion (6), Living",
                                stats: {
                                    might: 1, grace: 2, speed: 1, resilience: 1,
                                    charm: -1, intellect: 2, cunning: 1, tenacity: 2,
                                    defense: "4 (9)", walk: 5, height: 2, initiative: "3 (9)",
                                    willpower: "4 (9)", charge: 5, wounds: 6
                                },
                                skills: "Acrobatics 1, Athletics 1, Bureaucracy 1, Evade 2, Long Arms 3, Melee 2, Notice 2, Stealth 2, Toughness 1",
                                abilities: [
                                    {
                                        name: "Taking Aim",
                                        desc: "When this character gains the Focused Condition, it lasts until the start of this character's next turn."
                                    },
                                    {
                                        name: "Stand and Fire",
                                        desc: "When an enemy character declares a Charge Action within line of sight, this character may reduce its Focused Condition value by 1 (to a minimum of 0) to immediately deal 2 damage to the charging character."
                                    }
                                ],
                                weapon: {
                                    name: "Sniper Rifle",
                                    skill: "Long Arms",
                                    av: "5 (11)",
                                    resist: "Df",
                                    damage: "2/4/7",
                                    special: "Rg: z14. Target suffers 2/4/7 damage. Range increases by +10 for each [+] from Focused. Capacity 4, Reload 1. :r: Critical Strike: Deals +1 damage per :r: in final duel total.\n\nHunting Knife (Melee): Rg: (y)1, AV 3 (9), Resist: Df, Damage: 1/3/4."
                                }
                            }
                        },
                        {
                            name: "Inspiring Presence",
                            desc: "Friendly characters within Aura 6 may discard a card (or their controller may discard a card) on their turn to gain the Focused +1 Condition."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Firing Line",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(2)",
                            name: "Firing Line",
                            desc: "Every subordinate character under this character’s control within 6 yards may immediately make a Ranged Combat attack against a single target within range, flipping cards like Fated characters (attacks cannot declare Triggers generating additional attacks). If at least one hits, every subsequent attack made against that target as a result of this Action gains :+: to its damage flip."
                        }
                    }
                }
            ]
        },
        {
            id: "gunner",
            name: "Gunner",
            book: "Above the Law",
            starting: "A Gunner begins the game with one Ranged Combat weapon and any Armor. These items cannot have a total combined value greater than 20§.",
            onThePursuit: "Locked and Loaded: When this character fails a Ranged Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Ranged Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Heavy Weaponry",
                        desc: "This character can use Heavy Guns weapons without the Heavy special rule as if they were Heavy Melee weapons with Range (y)2. The attack deals 2/3/3 damage, consumes no ammo, gains no benefits from ammo, and ignores weapon special rules."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Behind the Gun",
                            desc: "When wielding a Heavy Guns weapon, this character counts as wearing Heavy Armor with the Braced special rule without lowering her Defense."
                        },
                        {
                            name: "My Gun is Bigger",
                            desc: "When wielding a Heavy Guns weapon, this character may add her ranks in Heavy Guns to the final duel total of any Willpower duel made during her turn."
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
                            name: "Artillery Training",
                            desc: "When this character takes the Reload action to reload a Heavy Guns weapon, she counts as having spent twice as many AP on the action."
                        },
                        {
                            name: "Suppressing Fire",
                            desc: "When this character misses with a Heavy Guns attack, the target gains the following Condition until the end of its next turn: “Suppressed +2: This character has -2 Walk and -2 Charge (minimum 1 each).”"
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
                            name: "Walking Artillery",
                            desc: "When carrying a weapon with the Heavy special rule, it counts as braced to a weapon mount. Additionally, after making a Heavy Guns attack against an enemy, she may move 2 yards."
                        },
                        {
                            name: "Spray of Bullets",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Spray of Bullets",
                                desc: "Expend one round of ammunition from a wielded Heavy Guns weapon for each character within Pulse 3. Each character may choose to push 3 yards away; then, any characters remaining within Pulse 3 suffer the weapon's Weak damage."
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
                            name: "Shoot Through It",
                            desc: "When making a Heavy Guns attack, this character may expend three times the ammunition to ignore line of sight and cover (suffering :-: to damage if the target is behind cover). If the attack misses a target in cover, she may discard a card to permanently reduce that cover by one step."
                        },
                        {
                            name: "Overwatch",
                            desc: "After an enemy completes a Walk Action, if this character is unengaged and had line of sight at any point during the move, she may discard a card to make a (1) AP Heavy Guns attack against that enemy (treating them as having the lowest cover they had during the move)."
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
                            name: "Bullet Storm",
                            desc: "When wielding a Heavy Guns weapon, it gains the Full Auto special rule. When wielding any weapon with Full Auto, she may discard a card to declare a Trigger on an extra attack generated by Stutter Fire."
                        },
                        {
                            name: "Fusillade Advance",
                            desc: "When taking a Charge Action, after ending within 2 yards of the target, this character may make two (1) AP attacks with a wielded Heavy Guns weapon (or one (2) AP attack if it has the Heavy special rule). These attacks can be made while engaged without randomizing into melee."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "choice",
                    talents: [
                        {
                            name: "Mow Down",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(2)",
                                name: "Mow Down",
                                desc: "Discard a card to make a single Heavy Guns attack against every opponent in range and line of sight. Discard a card each time she wishes to declare a Trigger on one of these attacks."
                            }
                        },
                        {
                            name: "Heavy Impact",
                            desc: "When this character attacks with a Heavy Guns weapon having a base Capacity of 1, damaged characters become Prone and Dazed until the start of her next turn. Characters suffering Blast damage are also pushed 2 yards away from the target."
                        }
                    ]
                }
            ]
        },
        {
            id: "magewright",
            name: "Magewright",
            book: "Above the Law",
            starting: "A Magewright begins the game with a Grimoire containing one Enchanting Magia; one Necromancy, Prestidigitation, or Sorcery Magia (for a total of two Magia); and three Immuto.",
            onThePursuit: "Reality is Mutable: When this character fails a Magical duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Bolster",
                        desc: "When this character casts a Spell or Manifested Power affecting one or more characters, she may discard a card to increase one target's chosen Aspect by +1 for the duration (or until the start of her next turn if no duration), to a maximum bonus of +3."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Minor Enchantment",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Minor Enchantment",
                                desc: "Discard a card, target a weapon within 1 yard, and nominate an Elemental Immuto she knows (or any Immuto if the discarded card was 11+). Until the start of her next turn, whenever the weapon deals damage, the target suffers the effects of a single instance of that Immuto."
                            }
                        },
                        {
                            name: "Mastered Immuto",
                            desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, regardless of her Grimoire."
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
                            name: "Transmutive Comprehension",
                            desc: "This character adds +:r: to her Enchanting Skill."
                        },
                        {
                            name: "Mastered Magia",
                            desc: "When this character gains this Talent, she chooses a Magia. This character always has access to the chosen Magia, regardless of her Grimoire (acting as if possessing a Grimoire with it if she has none)."
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
                            name: "Enchant Item",
                            desc: "When casting a Spell, she may infuse it into an item within 1 yard (+2 TN; does not resolve immediately). Weapons store damaging or offensive spells discharged on hit without resistance (ammo must be enchanted for ranged weapons). Non-weapons store Pulses, summon/target effects, or caster effects discharged as a (1) Action. Stored spells cannot generate Margins of Success, suffer :-: to damage, last until dispelled, and maximum stored spells equals Cunning + half completed steps in this Pursuit (minimum 1)."
                        },
                        {
                            name: "Mastered Immuto",
                            desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, regardless of her Grimoire."
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
                            name: "Spontaneous Animation",
                            desc: "This character gains the following Trigger on Enchantment Skill Challenges used to cast Spells:\n:r::r: *Spontaneous Animation*: After succeeding, animate a scrap pile within 3 yards as a subordinate Clockwork Trap under her control until the end of the scene. When taking a (1) Order Action on it, she may order additional Clockwork Traps equal to her Cunning Aspect (minimum 1)."
                        },
                        {
                            name: "Mastered Magia",
                            desc: "When this character gains this Talent, she chooses a Magia. This character always has access to the chosen Magia, regardless of her Grimoire."
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
                            name: "Split Enchantment",
                            desc: "When casting an Enchanting Spell, she may nominate an additional willing legal target within 3 yards to receive the full effects of the Spell. If used with Enchant Item, a copy is stored in two items within range (each counting toward her stored spell limit)."
                        },
                        {
                            name: "Mastered Immuto",
                            desc: "When this character gains this Talent, she chooses an Immuto. This character always has access to the chosen Immuto, regardless of her Grimoire."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Layer Upon Layer",
                        desc: "When casting an Enchanting Spell, she may discard a card to have the Spell affect every legal target in a Pulse centered on the original target:\n• Card 1-5: Pulse 2\n• Card 6-10: Pulse 4\n• Card 11+: Pulse 6"
                    }
                }
            ]
        },
        {
            id: "marksman",
            name: "Marksman",
            book: "Above the Law",
            starting: "A Marksman begins the game with one Ranged Combat weapon and any Armor. These items cannot have a total combined value greater than 20§.",
            onThePursuit: "Ranging In: When this character fails a Ranged Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Ranged Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Take Aim",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(0)",
                            name: "Take Aim",
                            desc: "Until the start of her next turn, this character increases the range of her projectile weapons by +4 yards."
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Sniper's Patience",
                            desc: "When making a Long Arms attack from the Wait Action, this character gains :+: to the attack flip. Additionally, taking the Wait Action counts as having the Focused Condition (value equal to AP spent on Wait) for the Range of weapons with the Rifle special rule."
                        },
                        {
                            name: "Spotter",
                            desc: "When using the Assist Action on a Long Arms action, this character can spot for the target: the shooter adds this character's ranks in Mathematics or Notice (whichever is lower) to their duel total, and the target gains no benefit from being Prone. Other characters can spot for this character in the same manner."
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
                            name: "Lurking Threat",
                            desc: "When using the Impose Action with a Long Arms weapon, she may expend one round of ammunition to use Long Arms instead of Intimidate. On a success, the target also becomes Prone."
                        },
                        {
                            name: "No Distractions",
                            desc: "This character can make projectile attacks while engaged, provided that the target of her attack is not engaging her."
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
                            name: "Hidden Position",
                            desc: "If hidden from sight (such as via Stealth), Long Arms attacks that achieve a Margin of Success do not reveal her position. Additionally, when attacking a target unaware of her position, she treats cover as one step worse (hard as soft, soft as none)."
                        },
                        {
                            name: "Trick Shot",
                            desc: "When using the Trick Action with a Long Arms weapon, she may expend one round of ammunition to use Long Arms instead of Deceive. On a success, the target also becomes Dazed for 1 round, plus 1 round per Margin of Success."
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
                            name: "Precise Shot",
                            desc: "When this character has or benefits from the Focused Condition or Sniper's Patience, her Long Arms attacks ignore Armor and Hard to Wound."
                        },
                        {
                            name: "Stay Down",
                            desc: "When making an attack with a Rifle weapon, allies within Pulse 6 of the target gain soft cover until the start of her next turn (or hard cover if the attack hits)."
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
                            name: "Between the Eyes",
                            desc: "This character gains the following Trigger on her Long Arms attacks:\n:c: *Between the Eyes*: After killing the target, all enemies within Pulse 6 must immediately pass a Horror Duel (TN 10 + half target's negative hit points, rounded down)."
                        },
                        {
                            name: "Startling Shot",
                            desc: "When declaring a Long Arms attack, this character may discard a card to target the opponent's Willpower instead of Defense. On a hit, it deals no damage but makes a Damage Flip:\n• Weak: Target becomes Slow.\n• Moderate: Target becomes Paralyzed.\n• Severe: Target becomes Paralyzed and must immediately pass an Unconsciousness Challenge with TN equal to the final duel total."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Like a Ghost",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(0)",
                            name: "Like a Ghost",
                            desc: "If engaged, discard a card to move up to Walk yards ending unengaged. If the discarded card had a value of 11+, she may immediately make a Long Arms attack against an enemy that was engaging her."
                        }
                    }
                }
            ]
        },
        {
            id: "propagandist",
            name: "Propagandist",
            book: "Above the Law",
            starting: "A Propagandist begins the game with an Art Skill Toolkit (brushes/camera), Printing Skill Toolkit (printing press in a safe location), or Convince Skill Toolkit (aethervox broadcaster).",
            onThePursuit: "One Hundred Percent True: When this character fails a Social duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Social Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "The Voice of the People",
                        desc: "When this character succeeds on a Social Skill duel, she gains the following Condition until the end of the session: “Voice of the People +1: This character gains +1 to her Art, Printing, and Convince Skill duels, to a maximum bonus of +3.”"
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Rumor Mill",
                            desc: "Spend one hour to spread a rumor in the current area by making a Convince Challenge (or Art for graffiti, Printing for pamphlets):\n• Contract Town: TN 9\n• Small Town: TN 11\n• Large Town or City District: TN 13\n\nOn a success, the rumor spreads. A Margin of Success makes people believe it for a few days."
                        },
                        {
                            name: "Talking in Circles",
                            desc: "After failing a Social Skill Challenge, she may reduce her Voice of the People Condition by 1 to reflip the Challenge against the same TN with all original modifiers. She may repeat this until successful or Voice of the People reaches 0."
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
                            name: "Spin Doctor",
                            desc: "When creating art, writing, or broadcasting about an event, make an Art, Printing, or Convince Challenge. Observers must succeed on a Willpower Challenge against the total or have their opinion shift one step toward or away from an organization/idea for 1 week plus 1 week per Margin of Failure."
                        },
                        {
                            name: "Force of Personality",
                            desc: "After succeeding on a Social Skill Challenge, this character may reduce her Voice of the People Condition by any amount to gain 1 Margin of Success per point reduced."
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
                            name: "Deadly Slander",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Deadly Slander",
                                typeLine: "Manifested Power",
                                av: "Intellect + Convince",
                                ap: "(1)",
                                tn: "10:m:",
                                resist: "Special (Centering + Tenacity)",
                                range: "6 yards",
                                desc: "Effect: The target suffers 2/3/4 damage and gains the following Condition for one day, plus one day per Margin of Success: “Slandered: This character suffers :-: to Social Skill Challenges.”",
                                triggers: [
                                    {
                                        cost: ":m::m:",
                                        name: "Tell It As It Is",
                                        desc: "After succeeding, reduce Voice of the People by any amount to draw that many cards."
                                    }
                                ]
                            }
                        },
                        {
                            name: "Uprising",
                            desc: "When making a Social Skill Challenge against 10+ people with a Margin of Success, reduce Voice of the People by any amount to transform them into an Angry Mob subordinate character under her control for 10 minutes per point reduced."
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
                            name: "Brainwash",
                            desc: "When achieving a Margin of Success writing, broadcasting, or creating art about an event, attract one Enforcer (7) subordinate character per Margin of Success (up to Intellect, minimum 1). She gains :+::+: to Social Skill Challenges with brainwashed characters."
                        },
                        {
                            name: "Revisionist History",
                            desc: "When suffering damage, reduce Voice of the People by any amount to reduce the damage suffered by 2 points per point reduced."
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
                            name: "Run From the Truth",
                            desc: "After a Living, non-Beast opponent within 10 yards resolves an attack against her or an ally, reduce Voice of the People by any amount to push that opponent 2 yards per point reduced in any direction. Discarding a card allows this to affect Beasts and non-Living targets."
                        },
                        {
                            name: "Conversationalist",
                            desc: "This character’s Voice of the People Condition applies to all Art, Printing, and Social Skill duels (instead of just Art, Printing, and Convince)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "The Hype is Real",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(0)",
                            name: "The Hype is Real",
                            desc: "Reduce Voice of the People by any amount to grant an ally within earshot the following Condition: “Believes the Hype +1: Add this character's Art, Printing, or Convince ranks to final duel totals. At the end of the turn, reduce value by 1 until it reaches 0 and ends.”"
                        }
                    }
                }
            ]
        }
    ];

    if (typeof PURSUITS_DATA !== "undefined" && Array.isArray(PURSUITS_DATA)) {
        PURSUITS_DATA.push(...ABOVE_THE_LAW_PURSUITS);
    } else {
        window.PURSUITS_DATA = ABOVE_THE_LAW_PURSUITS;
    }
})();
