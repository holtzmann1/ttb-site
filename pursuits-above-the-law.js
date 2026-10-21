/**
 * Through the Breach 2nd Edition
 * Expansion: Above the Law
 * Basic Pursuits Database
 */

(function() {
    const ABOVE_THE_LAW_PURSUITS = [
        {
            id: "bureaucrat",
            name: "Bureaucrat",
            book: "Above the Law",
            starting: "A Bureaucrat begins the game with a powerful Fatemaster character owing her a big favor. The character can call upon this favor for a significant boon, such as gaining temporary access to a powerful weapon or having the criminal records of her and her friends expunged, but once used, the favor is gone forever. The identity of the character that owes the Bureaucrat a favor should be discussed with the Fatemaster.",
            onThePursuit: "Two-Faced: When this character fails a Social duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Academic Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "A Servant of the People",
                        desc: "At its heart, politics is nothing more than being able to leverage favors and reputation for some sort of benefit. This character is particularly good at wielding her reputation in this manner.\n\nWhen this character is called upon to make a Barter, Bewitch, or Intimidate Challenge, she may discard a card to turn the Challenge into a Bureaucracy Challenge. The results of succeeding or failing at the Challenge remain unchanged.\n\nIf the Challenge was a Barter Challenge, this character may use promises of relatively insignificant political favors to uphold her end of the bargain, rather than cash or other material goods. Generally speaking, this character must spend an hour or two speaking with her allies and associates to uphold her end of the bargain. She has a week to do so before the person she bargained with begins to feel cheated and takes appropriate measures."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Web of Allies",
                        desc: "This character has cultivated a network of political allies that she can draw upon to assist her in difficult situations.\n\nWhen this character gains this Talent, she chooses an Ally (subject to Fatemaster approval). It may be someone she met over the course of the last adventure or someone brand new. This character then earns that person’s trust, blackmails them, or otherwise wins them over to her side.\n\nOnce per session per Ally, this character may attempt a Bureaucracy Challenge to call upon her Ally for support. The TN of this Challenge is determined by the type of support the character is seeking from her Ally:\n• TN 10: The Ally will help in a way that won’t cost them much time or many resources. They may get the character an invitation to a high-class dinner party, put the character in contact with a reliable mercenary, make inconsequential announcements, or divulge the location of a person who has been taken prisoner.\n• TN 14: The Ally will place themselves at risk to help the character. They might arrange for a prisoner to be released, set up a meeting with a known criminal, smuggle contraband into the city, help search the streets of Malifaux City after sundown, make significant announcements that are in character with their normal behavior, or divulge classified or otherwise secret knowledge.\n• TN 18: The Ally will take large risks to help the character. They might arrange for a prisoner’s criminal record to “disappear,” set up a meeting with a Neverborn, loan the character a Soulstone for the session, help search the sewers beneath Malifaux City, or make public announcements that are either out of character or that run the risk of drawing considerable backlash.\n\nThe nature of the Ally determines what sort of help she can offer the character. For instance, an Ally that is a Guild Judge would be able to provide assistance with the law and anything Guild-related but would probably be unable to put her in contact with an Arcanist smuggler (unless, perhaps, it was a smuggler that had already been arrested).\n\nWhile an Ally is generally willing to help the character when called upon, if the character abuses their relationship, the Ally may become unwilling to help the character until she makes things right again.\n\nEach time this character would gain a General Talent from this Pursuit, she may instead choose to gain another Ally."
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
                            desc: "This character has mastered the Bureaucrat's most dangerous weapon: long, boring speeches.\n\nThis character may attempt to influence and distract one or more people around her with a speech. While she is giving such a speech, every character within 10 yards of this character gain :+: to their Notice Challenges made against this character and suffer :-: to their Notice Challenges made against other characters.\n\nIf the character speaks for at least five minutes, once she ends her speech, she may make a single Leadership Challenge against the highest Willpower of all the characters listening (excluding her allies). On a success, this character gains :+: to her Social Skill Challenges made against those characters for the duration of the scene.\n\nIf this character achieves a Margin of Success on this Challenge, the listening crowd’s opinion of a certain organization of this character’s choice shifts one step in a direction of her choice for the remainder of the scene. (The scale ranges from Hatred to Dislike to Apathy to Approval to Adoration).\n\nDepending upon the topic and extenuating circumstances, the mood of the listening characters may shift back or remain altered after the scene is finished, at the Fatemaster’s discretion."
                        },
                        {
                            name: "Do You Know Who I Am?",
                            desc: "When this character reveals who she is and all the terrible ways that she can make someone's life miserable, it's not backed up by physical power but the relentless, uncaring machinery of bureaucracy.\n\nThis character gains the following Manifested Power:",
                            power: {
                                name: "Do You Know Who I Am?",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Intimidate",
                                ap: "(1)",
                                tn: "10:r:",
                                resist: "Wp",
                                range: "6 yards",
                                desc: "Effect: The target gains the following Condition until the end of Dramatic Time: “Cowed: This character suffers :-: on all attack flips made against the character that applied this Condition.”",
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
                            desc: "Whether spies, informers, or just people who owe her some minor favors, this character has an extensive information network that she can consult to learn more information about those people who interest her. The larger the settlement, the more people this character can draw upon for information.\n\nOnce per session, this character may attempt a Bureaucracy Challenge while in any populated area to consult her information network about a specific target. The TN of this Bureaucracy Challenge is equal to 5 + the target’s Rank Value.\n\nOn a success, after a certain amount of time has passed (see below), the character learns the most important details about the target’s history, such as the broad details of their life on Earth, which faction or patron brought them to Malifaux (if any), where they live (if it’s a fixed location), the identity of their employer (if any), their known associates (if any), and a general sense of their activities over the past month (such as hunting bounties, working on a pneumatic device, exploring the sewers, and so on). She learns two such details of her choice, plus one detail per Margin of Success.\n\nThe amount of time it takes the character to learn this information depends upon the size of the settlement in which they make the Bureaucracy Challenge. In Malifaux City (or in a similarly sized city on Earth), the character gains this information within two hours. In Ridley (or another large town), it takes eight hours. In Edge Point or Fortune Falls (or another small town), it takes 24 hours, and in any smaller settlements (such as most Contract Towns), it takes 48 hours."
                        },
                        {
                            name: "Favors Owed",
                            desc: "The political machine may be fueled by bureaucracy and favors, but a bit of charm and a few jokes can go a long way towards greasing that machine's gears. This character has either developed such a good working relationship with her allies or browbeaten them so far into submission that favors are granted more quickly and with less effort on her part.\n\nWhen this character uses her Web of Allies Talent, she may add her Charm Aspect, if positive, to her Bureaucracy Challenge.\n\nAdditionally, this character may attempt to call upon her Allies more than once per session, but each attempt beyond the first requires her to achieve one Margin of Success for each time she has previously called upon the Ally during that session."
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
                            desc: "At the start of Dramatic Time, this character may discard a card. If she does so, she may choose a friendly or enemy character involved in the battle, even if she does not have line of sight to that character. If she discarded a card with a value of 6 to 10, she may choose a second such character, and if she discarded a card with a value of 11 or higher, she may choose a third character.\n\nThis character may raise or lower the initiative value of each chosen character by an amount up to her Ranks in the Bureaucracy Skill.\n\nIf the discarded card was a :m:, any chosen enemy characters also become Dazed until the end of their first turn."
                        },
                        {
                            name: "Plausible Deniability",
                            desc: "When something goes wrong, unless this character is caught red-handed, she always manages to somehow avoid any sort of punishment worse than a slap on the wrist. Whether due to always having a convincing alibi or just knowing the right way to answer a question without implicating oneself, this character only ever seems to suffer a few scandalous rumors from situations that would ruin lesser politicians.\n\nOnce per session when this character is accused of a crime, she may discard a card to avoid any sort of repercussions from the accusation, save for some scandalous rumors that linger for two weeks or so."
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
                            desc: "Bureaucrats have a tendency to be notorious meddlers and insufferable micromanagers. At the start of a new scene or at the start of her turn during Dramatic Time, this character may look at the top card of any other player’s Twist Deck. She may choose to discard that card or return it to the top of the deck."
                        },
                        {
                            name: "The System is Rigged",
                            desc: "To someone who isn't paying attention, it might appear that anyone can become a politician and change the system. In actuality, the system is rigged. The normal rules don't apply to those who have the power to rewrite them.\n\nThis character may treat :m: and :r: cards that she flips, Cheats, or reveals as if they had both the :m: and :r: suits."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "\"Synergy\"",
                        desc: "This character has learned how to apply synergy to fate itself.\n\nWhenever a friendly character within 10 yards of this character (including herself) Cheats Fate, another character within 10 yards may draw a card after resolving the current action."
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
                        desc: "At the start of each session, after the Prologue, this character may make a TN 8 Leadership Challenge to gain a single subordinate Soldier, plus one subordinate Soldier per Margin of Success, up to a maximum number of controlled subordinate Soldiers equal to half her ranks in this Pursuit (rounded up).\n\nThese Soldiers remain under this character’s control indefinitely (or at least, until they’re killed). This character can command a subordinate Soldier with the (1) Order Action.\n\nEach Soldier joins the character’s service with their listed weaponry and 30 rounds of ammunition, but the character is responsible for supplying any additional ammunition required beyond this initial amount.\n\nWhen one of these Soldiers is killed, its equipment is expected to be given to the next recruit, sold for profits that are split between the surviving Soldiers, or returned to this character's patron or employer so that it can be reissued to someone else. If sold, the equipment is only worth one-tenth of its base price.\n\nThis character can, of course, supply her Soldiers with different, higher-quality weapons if she so chooses.",
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
                                special: "Rg: (y)2. Target suffers 2/3/4 damage.\n\n(1) US&E Carbine (Long Arms): AV 5 (10), Rg: z12, Resist: Df, Damage: 2/3/5. Capacity 2, Reload 2. :r: Critical Strike: When damaging the target, this attack deals +1 damage for each :r: in the final duel total."
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
                            desc: "When a subordinate character under this character’s control and within Aura 6 kills an enemy during Dramatic Time, this character may draw a card.\n\nAdditionally, when this character or one of her subordinate characters searches the corpse of an enemy combatant that possessed one or more ranged combat weapons, they find a number of additional ammunition rounds equal to half the enemy combatant's rank value, rounded up.\n\nThis Talent only increases the number of bullets possessed by the enemy combatant one time, regardless of how many times the enemy combatant is searched."
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
                            desc: "When this character attempts a Challenge during Narrative Time, after flipping a card from the Fate Deck and deciding whether or not she wishes to Cheat Fate, she may discard a card to increase her final duel total by +1 for each of her subordinate Soldiers who assist her in the Challenge. If she does so, this character may not benefit from the Assist Action during this Challenge.\n\nIt falls to the Fatemaster and the player to explain how this functions from a story perspective."
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
                            desc: "This character's subordinate Soldiers and Hidden Snipers gain the following Trigger on their Ranged Combat attacks:\n:m: *Arrest*: After succeeding, the target gains the following Condition until the end of its next turn: “Arrest: This character must discard a card to perform a movement action.”\n\nAdditionally, if an enemy character with the Arrest Condition declares an Action during Dramatic Time, that character may not declare that Action again until the start of their next turn."
                        },
                        {
                            name: "Proper Motivation",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Proper Motivation",
                                desc: "Target a friendly character within 6 yards and discard a card if they are not one of this character's subordinate characters. End the Slow or Paralyzed Condition on the target; if the target is Prone, it may immediately stand up. If the target was Slow or Prone, it may take a 1 AP Walk Action. If the target was Paralyzed, it may take any 1 AP Action of this character's choice (if it wishes)."
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
                            desc: "At the start of Dramatic Time, if this character is within a civilized area (such as anywhere within Malifaux City, Ridley, or the Northern Hills), she may discard a card to declare that one of her hidden snipers is already in place.\n\nIf she does so, she chooses a location within range, at least ten yards from an opponent, and a Hidden Sniper reveals themselves in that location. For the rest of the Dramatic Time, this character treats the Hidden Sniper as a subordinate character. At the end of Dramatic Time, the Hidden Sniper retreats from the battle (possibly after exchanging a few words with this character). If the Hidden Sniper is killed, this Talent may not be used for the remainder of the session.\n\nIf the character is in an area where the presence of a hidden sniper would not make sense, she must be able to present some plausible reason why the sniper would be present in order to use this Talent.",
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
                                        desc: "When an enemy character declares a Charge Action within line of sight of this character, this character may reduce its Focused Condition value by 1, to a minimum of 0, to immediately deal 2 damage to the charging character."
                                    }
                                ],
                                weapon: {
                                    name: "Sniper Rifle",
                                    skill: "Long Arms",
                                    av: "5 (11)",
                                    resist: "Df",
                                    damage: "2/4/7",
                                    special: "Rg: z14. Target suffers 2/4/7 damage. The Range of this weapon is increased by +10 for each [+] it gains from the Focused Condition. Capacity 4, Reload 1. :r: Critical Strike: When damaging the target, this attack deals +1 damage for each :r: in the final duel total.\n\n(1) Hunting Knife (Melee): AV 3 (9), Rg: (y)1, Resist: Df, Damage: 1/3/4."
                                }
                            }
                        },
                        {
                            name: "Inspiring Presence",
                            desc: "Friendly characters within Aura 6 may discard a card (or in the case of subordinate characters, their controller may discard a card) on their turn to gain the Focused +1 Condition."
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
                            desc: "Every subordinate character under this character’s control and within 6 yards may immediately make a Ranged Combat attack against a single target within range. The subordinate characters flip cards for these attacks as if they were Fated characters, but none of their attacks can declare Triggers that generate additional attacks. If at least one of these attacks hits, every subsequent attack made against that target as a result of this Action gains :+: to its damage flip."
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
                        desc: "This character can use Heavy Guns weapons without the Heavy special rule as if they were Heavy Melee weapons with a Range of (y)2. If she does so, the weapon deals 2/3/3 damage, does not consume any ammunition (or gain any benefit from its ammunition), and ignores its Special Rules on the attack."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Behind the Gun",
                            desc: "When this character is wielding a Heavy Guns weapon, she counts as wearing Heavy Armor with the Braced special rule. This pseudo-armor does not lower her Defense."
                        },
                        {
                            name: "My Gun is Bigger",
                            desc: "When this character is wielding a Heavy Guns weapon, she may add her ranks in Heavy Guns to the final duel total of any Willpower duel she makes during her turn."
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
                            desc: "When this character takes the Reload action to reload a Heavy Guns weapon, she counts as having spent twice as many AP on the action for the purposes of determining when the weapon is fully reloaded and ready to fire."
                        },
                        {
                            name: "Suppressing Fire",
                            desc: "When this character makes a Heavy Guns attack against a target and misses, the target gains the following Condition until the end of its next turn: “Suppressed +2: This character has -2 Walk and -2 Charge (to a minimum of 1 each).”"
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
                            desc: "When this character is carrying a weapon with the Heavy special rule, it counts as being braced to a weapon mount.\n\nIn addition, when this character makes a Heavy Guns attack against an enemy character, she may move 2 yards after resolving the attack."
                        },
                        {
                            name: "Spray of Bullets",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Spray of Bullets",
                                desc: "This character may expend one round of ammunition from a wielded Heavy Guns weapon for each character (friend or foe) within Pulse 3 of her. If she does so, every such character may choose to push 3 yards away from her. Then, any characters within Pulse 3 of this character suffer damage equal to the Weak damage value of her wielded Heavy Guns weapon."
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
                            desc: "When making a Heavy Guns attack, this character may expend three times as much ammunition (calculated after any special rules such as Burst Fire) to ignore line of sight and cover for the duration of that attack. If the attack hits a target behind cover, it suffers :-: to the damage flip.\n\nIf the attack misses a character in cover, this character may discard a card to permanently reduce the value of the target's cover by one step (from hard cover to soft cover or from soft cover to no cover)."
                        },
                        {
                            name: "Overwatch",
                            desc: "After an enemy character completes a Walk Action, if this character is unengaged and had line of sight to the enemy at any point during its movement, this character may discard a card to make a (1) AP Heavy Guns attack against the target. For the purposes of this attack, the target receives the lowest amount of cover (hard cover, soft cover, or no cover) that it had during its Walk Action."
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
                            desc: "When this character is wielding a Heavy Guns weapon, that weapon gains the Full Auto special rule.\n\nWhen wielding a weapon that already has the Full Auto special rule (regardless of whether it is a Heavy Guns weapon or not), this character may discard a card to declare a Trigger on an extra attack generated by the Stutter Fire Trigger (even though the Trigger normally forbids this)."
                        },
                        {
                            name: "Fusillade Advance",
                            desc: "When this character takes the Charge Action, she may choose to make it a Fusillade Advance. If she does so, after ending within 2 yards of her target, she may make two (1) AP attacks with a wielded Heavy Guns weapon. If the Heavy Guns weapon has the Heavy special rule, she instead makes a single (2) AP attack with it. These attacks can be made even if this character is engaged, and they do not randomize when firing into melee.\n\nIf any of these attacks generate additional attacks (such as from the Sweeping Fire or Stutter Fire Triggers), the character is not considered to be engaged for the purposes of those attacks."
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
                                desc: "This character may discard a card. If she does so, she makes a single Heavy Guns attack against every opponent in range and line of sight. This character must discard a card each time she wishes to declare a Trigger on one of these attacks."
                            }
                        },
                        {
                            name: "Heavy Impact",
                            desc: "When this character makes an attack with a Heavy Guns weapon that has a base Capacity of 1, any characters damaged by the attack are knocked Prone and become Dazed until the start of this character’s next turn. Any characters who suffer Blast damage from the attack are also pushed 2 yards away from the target of the attack."
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
                        desc: "When this character casts a Spell or Manifested Power that affects one or more characters, she may discard a card to choose one of those characters and an Aspect. The chosen character has that Aspect increased by +1 for the duration of the Spell or Manifested Power, to a maximum bonus of +3.\n\nIf the Spell or Manifested Power does not have a Duration, the Aspect increase lasts until the start of this character’s next turn."
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
                                desc: "Discard a card, target a weapon within one yard, and nominate an Elemental Immuto to which this character has access. If the discarded card had a value of 11+, this character may nominate any Immuto, even if she does not have access to it. Until the start of this character's next turn, whenever the targeted weapon deals damage, the target also suffers the effects of a single instance of the nominated Elemental Immuto."
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
                            name: "Transmutive Comprehension",
                            desc: "This character adds +:r: to her Enchanting Skill."
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
                            name: "Enchant Item",
                            desc: "When this character casts a Spell, she may choose to infuse the magical energies of the Spell into an item within 1 yard. If she does so, the TN of the Spell increases by +2, and if successfully cast, the Spell’s effects do not immediately resolve.\n\nThe only Spells that can be placed in weapons are those that deal damage or that target a character other than the caster. After a successful attack, the character wielding the weapon may choose to discharge the stored Spell against their target, who may not attempt to resist it. When using projectile weapons, a single round of ammunition must be enchanted to be effective.\n\nThe only Spells that can be placed in non-weapon items are those that deal damage via a Pulse, those that affect or summon another character, or those that affect the caster. A character possessing the item can discharge the Spell as a (1) Action, in which case, she becomes the target for the stored Spell (or the center of the Pulse, in the case of damaging Spells). If the Spell is resisted, it has the same Acting Value as if it had been cast by this character.\n\nA stored Spell may only be discharged once, at which point the magic is expended and the enchanted item ceases to hold any of the energies with which it was previously infused.\n\nStored Spells never generate Margins of Success, and any damage flips resulting from a stored Spell suffer :-:. An item can only be enchanted with one Spell at a time. Stored Spells last indefinitely until dispelled.\n\nThis character may only sustain a number of stored Spells equal to her Cunning Aspect plus half the number of her completed steps in this Pursuit, rounded down (to a minimum of one stored spell). If she exceeds this limitation, the character must immediately choose one of her stored Spells to end with no effect."
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
                            name: "Spontaneous Animation",
                            desc: "This character gains the following Trigger on Enchantment Skill Challenges used to cast Spells:\n:r::r: *Spontaneous Animation*: After succeeding, target a pile of scrap (including a destroyed Construct) within 3 yards of the target. The pile of scrap animates as a subordinate Clockwork Trap under this character’s control. At the end of the scene, the Clockwork Trap falls apart and once again becomes a pile of scrap.\n\nEach time this character takes a (1) Order Action to command a Clockwork Trap animated through this Trigger, she may give orders to a number of additional Clockwork Traps equal to her Cunning Aspect (minimum 1), and the orders may be different."
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
                            name: "Split Enchantment",
                            desc: "When this character casts an Enchanting Spell, she may nominate an additional willing, legal target within 3 yards of the original target. The second target gains the full effects of the cast Spell along with the original target. Items in the possession of a willing character are considered to be willing targets for the purposes of this Talent. If the split Spell generates a Pulse, characters caught in the area of both Pulses are only affected once.\n\nIf used in combination with Enchant Item, a copy of the Spell is stored in two different items within range. Each item counts toward the maximum number of Spells this character can have stored at any one time."
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
                        name: "Layer Upon Layer",
                        desc: "Whenever this character casts an Enchanting Spell, she may discard a card to have the Spell affect every legal target within a Pulse centered on the original target (who is still affected by the Spell as normal). The size of this Pulse is determined by the value of the discarded card:\n• Card Value 1-5: Pulse 2\n• Card Value 6-10: Pulse 4\n• Card Value 11+: Pulse 6"
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
                            desc: "When this character makes a Long Arms attack as a result of the Wait Action, she gains :+: to her attack flip.\n\nAdditionally, when this character takes the Wait Action, she counts as being Focused (with a value equal to the amount of AP she spent on the Wait Action) for the purposes of determining the Range of weapons with the Rifle special rule."
                        },
                        {
                            name: "Spotter",
                            desc: "When this character uses the Assist Action to help another person with an action that uses the Long Arms Skill, she may choose to spot for that person. If she does so, the other person adds this character's ranks in either Mathematics or Notice (whichever is lower) to their final duel total, and their target gains no benefit from being Prone.\n\nSimilarly, other characters may spot for this character when she uses the Long Arms Skill; when they do so, they add their ranks in either Mathematics or Notice (whichever is lower) to this character's final duel total, and this character's target gains no benefit from being Prone."
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
                            desc: "When this character uses the Impose Action while wielding a Long Arms weapon, she may expend one round of ammunition to use the Long Arms Skill in place of the Intimidate Skill. If she does so and is successful, the target also becomes Prone (in addition to the normal effects of the Impose Action)."
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
                            desc: "If this character is hidden from sight (most likely as the result of a successful Stealth Challenge), any Long Arms attacks she makes that achieve a Margin of Success do not reveal her position. While her targets will most likely have a general sense of where she might be hiding, this information is not enough to allow them to target her with return fire unless they were already aware of her position.\n\nIn addition, when making a Long Arms attack against a character that is unaware of her position, this character treats any cover possessed by her target as one step worse (i.e., she treats hard cover as soft cover and soft cover as no cover)."
                        },
                        {
                            name: "Trick Shot",
                            desc: "When this character uses the Trick Action while wielding a Long Arms weapon, she may expend one round of ammunition to use the Long Arms Skill in place of the Deceive Skill. If she does so and is successful, the target also becomes Dazed for one round, plus one round per Margin of Success (in addition to the normal effects of the Trick Action)."
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
                            desc: "When this character has the Focused Condition, or when her attack is benefiting from the Focused Condition or the Sniper's Patience Talent, her Long Arms attacks ignore Armor and Hard to Wound."
                        },
                        {
                            name: "Stay Down",
                            desc: "When this character makes an attack using a weapon with the Rifle special rule, each of her allies within Pulse 6 of the target is considered to have soft cover until the start of her next turn. If her attack hits the target, her allies are instead considered to have hard cover."
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
                            desc: "This character gains the following Trigger on her Long Arms attacks:\n:c: *Between the Eyes*: After killing the target, all enemy characters within Pulse 6 of the target must immediately perform a Horror Duel. The TN of the Horror Duel is equal to 10 + half the target’s negative hit point total when it was killed, rounded down."
                        },
                        {
                            name: "Startling Shot",
                            desc: "When this character declares a Long Arms attack against a target, she may discard a card and declare that she is making a Startling Shot. If she does so, she makes the attack against the target’s Willpower, rather than its Defense. On a successful hit, the attack deals no damage to the target, but this character still makes a Damage Flip.\n• If the attack would have dealt Weak damage, the target becomes Slow.\n• If the attack would have dealt Moderate damage, the target becomes Paralyzed.\n• If the attack would have dealt Severe damage, the target becomes Paralyzed and must immediately make an Unconsciousness Challenge with a TN equal to the final duel total of this attack."
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
                            desc: "If this character is engaged, she may discard a card to immediately move a number of yards equal to her Walk Aspect. She must end this movement unengaged. If the discarded card had a value of 11 or higher, she may immediately make a Long Arms attack against a character that was engaging her when she took this Action."
                        }
                    }
                }
            ]
        },
        {
            id: "propagandist",
            name: "Propagandist",
            book: "Above the Law",
            starting: "This character begins with a set of high-quality brushes and paints or a high-quality box camera (counts as an Art Skill Toolkit), a printing press (stored in a safe location, counts as a Printing Skill Toolkit), or an aethervox broadcaster (about the size of a breadbox, counts as Convince Skill Toolkit).",
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
                            desc: "This character may spend one hour to spread a rumor within her current area. To do so, she makes a Convince Challenge at a TN determined by the size of her current area:\n• Contract Town: TN 9\n• Small Town (Edge Point, Fortune Falls): TN 11\n• Large Town (Ridley) or Malifaux City District: TN 13\n\nIf this character is attempting to start rumors using graffiti or pamphlets, she may use the Art or Printing Skill, respectively, in place of the Convince Skill.\n\nOn a success, the rumor quickly spreads throughout the entire area. If the character achieves a Margin of Success on her Challenge, most people who hear the rumor believe it, at least for a few days, or until it becomes obvious that the rumor is false."
                        },
                        {
                            name: "Talking in Circles",
                            desc: "After this character fails a Social Skill Challenge, she may lower the value of her Voice of the People Condition by 1 to immediately attempt the Skill Challenge again against the same TN. If there were any modifiers to her original flip (such as :+: or :-: modifiers), they apply to this second flip as well. The character uses the current (post-reduction) value of her Voice of the People Condition if it applies to the Challenge.\n\nIf this character fails this second Challenge, she may continue using this Talent, lowering the value of her Voice of the People Condition by 1 each time to make additional attempts on the Social Skill Challenge.\n\nIf this character succeeds, she is considered to have succeeded on the initial Social Skill duel, and her previous failures are ignored. The character’s Voice of the People Condition does not increase as a result of succeeding on this Social Skill duel."
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
                            desc: "When this character illustrates, writes, or broadcasts about a specific event, she may make an Art, Printing, or Convince Challenge, respectively. On a success, anyone who looks at or reads the character’s work or hears her broadcast must succeed at a Willpower Challenge against her final duel total. On a failure, their opinion shifts one step toward or away from a certain organization or idea for one week, plus one week per Margin of Failure generated by the influenced character. (The scale ranges from Hatred to Dislike to Apathy to Approval to Adoration).\n\nDepending upon the circumstances and topic, the mood of the reading character may shift back or remain altered once this duration has ended, at the Fatemaster’s discretion. Reading or looking at the work again or listening to a recording of the broadcast refreshes this duration."
                        },
                        {
                            name: "Force of Personality",
                            desc: "After this character succeeds on a Social Skill Challenge (and after she has gained the Voice of the People +1 Condition), she may lower the value of her Voice of the People Condition by any amount. For every point by which this character lowers her Voice of the People Condition, she gains a Margin of Success on the Social Skill Challenge in question."
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
                            desc: "Prolonged exposure to the magical energies of Malifaux has twisted this character's words into deadly weapons.\n\nThis character gains the following Manifested Power:",
                            power: {
                                name: "Deadly Slander",
                                typeLine: "Manifested Power",
                                av: "Intellect + Convince",
                                ap: "(1)",
                                tn: "10:m:",
                                resist: "Special (Centering + Tenacity)",
                                range: "6 yards",
                                desc: "Special: This Manifested Power is resisted by the target's Centering + Tenacity.\n\nEffect: The target suffers 2/3/4 damage and gains the following Condition for one day, plus one day per Margin of Success: “Slandered: This character suffers :-: to Social Skill Challenges.”",
                                triggers: [
                                    {
                                        cost: ":m::m:",
                                        name: "Tell It As It Is",
                                        desc: "After succeeding, this character may lower the value of her Voice of the People Condition by any amount, to a minimum of 0. For each point she lowered her Voice of the People Condition, she may draw a card."
                                    }
                                ]
                            }
                        },
                        {
                            name: "Uprising",
                            desc: "When this character makes a Social Skill Challenge against a group of ten or more people, if she achieves a Margin of Success, she may lower the value of her Voice of the People Condition by any amount to transform the group into an Angry Mob subordinate character under her control for ten minutes per point of Voice of the People lowered. At the end of this duration, the Angry Mob comes to its senses and disperses, its members often feeling somewhat ashamed about what they have done. The Angry Mob has Rank Value +8, per its Collective Focus Ability."
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
                            desc: "When this character achieves a Margin of Success when writing about, broadcasting about, or creating art about a specific event (typically on an Art, Printing, or Convince Challenge, as appropriate), her words are so powerful that they permanently convert some of her audience to her way of thinking.\n\nWithin one day of the art or writing’s circulation or the broadcast’s airing, the character attracts one subordinate character for each Margin of Success. The exact identity of the subordinate character is up to the Fatemaster, but it should be appropriate to the character’s audience. A character may have a number of these subordinate characters equal to her Intellect Aspect (minimum 1 character).\n\nSubordinate characters attracted in this way have a Rank Value of Enforcer (7) and are willing to accompany the character into combat “to protect her from those who would silence the truth.”\n\nIf this character exceeds the number of subordinate characters she can control with this Talent, she must choose which of her subordinate characters return to their former lives; these characters no longer accompany the character on her battles, but they are willing to go to great lengths to help her out in other aspects. The character gains :+::+: to all Social Skill Challenges made with brainwashed characters."
                        },
                        {
                            name: "Revisionist History",
                            desc: "When this character suffers damage, she may lower the value of her Voice of the People Condition by any amount to reduce the damage she suffers by 2 points per point she lowered her Voice of the People Condition."
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
                            desc: "After a Living, non-Beast opponent within 10 yards resolves an attack that targeted this character or one of her allies, this character may lower the value of her Voice of the People by any amount to force the opponent to move a number of yards equal to 2 yards per point she lowered her Voice of the People Condition in whatever direction this character wishes.\n\nIf this character discards a card when she declares the use of this Talent, it gains the ability affect Beasts and non-Living opponents."
                        },
                        {
                            name: "Conversationalist",
                            desc: "This character’s Voice of the People Condition now applies to all Art, Printing, and Social Skill duels (instead of just Art, Printing, and Convince Skill duels)."
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
                            desc: "This character may lower the value of her Voice of the People Condition by any amount, to a minimum of 0. For every point she lowers her Voice of the People Condition, she may give the following Condition to an Ally within earshot: “Believes the Hype +1: This character may add the Art, Printing, or Convince Ranks of the character that applied this Condition to her final duel totals. At the end of this character’s turn, the value of this Condition is lowered by exactly 1. If the value of this Condition is ever 0, this Condition ends.”"
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
