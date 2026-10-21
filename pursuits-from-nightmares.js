/**
 * Through the Breach 2nd Edition
 * Expansion: From Nightmares
 * Basic Pursuits Database (Clean Mechanics)
 */

(function() {
    const FROM_NIGHTMARES_PURSUITS = [
        {
            id: "boogeyman",
            name: "Boogeyman",
            book: "From Nightmares",
            starting: "A Boogeyman begins with a Close Combat weapon worth no more than 6 Scrip and a non-magical skill toolkit.",
            onThePursuit: "Observe the Minutiae: When this character fails a Notice, Track, Stealth, or Scrutiny Challenge, she may draw a card. During the Epilogue, a character on this Pursuit may advance in the Notice, Track, Intimidate, Scrutiny, or Stealth Skills in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Atypical Awareness",
                        desc: "When trying to locate a specific individual she has encountered before, this character gains [+] to all Track and Notice Challenges."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Fear Response",
                        desc: "Gain the following Trigger on all Ranged and Close Combat attacks:\n:c: *Fear Response*: After succeeding, the target must choose to gain Frightened +1 or become Paralyzed.\n\n*Frightened*: The character that applied this Condition may reduce its value by any amount (minimum 0) to immediately reduce the total result of this character’s Willpower duel by the same amount (minimum 0). Lasts 24 hours."
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
                            name: "Close In",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Stalk",
                                desc: "Discard a card to give an enemy character within line of sight the following Condition until this character takes this action again or Dramatic Time ends: “Stalked: At the end of this character’s turn, if it took a Walk or Charge Action, the character that applied this Condition may take a Walk Action that must end closer to this character than where they began.”"
                            }
                        },
                        {
                            name: "Apprehension",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Dread",
                                typeLine: "Manifested Power",
                                av: "Cunning + Intimidate",
                                ap: "(1)",
                                tn: "6:c:",
                                resist: "—",
                                range: "Special",
                                desc: "Target a single character interacted with during this session for at least a few seconds. They gain the Frightened +1 Condition (+1 per Margin of Success) for 24 hours. Outside Dramatic Time, this can only be used once every 4 hours."
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
                            name: "Mindeater",
                            desc: "Gain the following Trigger on all Ranged and Close Combat attacks:\n:c: *Mindeater*: When damaging, reduce the target’s Frightened Condition by up to +3 (minimum 0); increase this attack’s damage by that same amount."
                        },
                        {
                            name: "Right Behind You",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Alleywalking",
                                typeLine: "Manifested Power",
                                av: "Cunning + Stealth",
                                ap: "(1)",
                                tn: "12:m:",
                                resist: "—",
                                range: "10 yards",
                                desc: "If this character is within 1 yard of Hard Cover, place her anywhere within range of her original location and 1 yard of Hard Cover, or within 1 yard of an enemy character within range; that character gains Frightened +1."
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
                            name: "Skulk",
                            desc: "If this character takes the Pass Action, she may increase her Initiative by +2 instead of +1, and may apply the Frightened +2 Condition at the start of her next turn to any one enemy character within line of sight that has a lower Initiative value."
                        },
                        {
                            name: "Thing in the Dark",
                            desc: "When this character becomes the target of an action or duel instigated by a character with Frightened +3 or greater, she is considered to have the Terrifying (10) Talent (increasing to Terrifying (13) if the attacker has Frightened +6 or greater)."
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
                            name: "Drink Fear",
                            desc: "When this character would apply the Frightened Condition at any value to an enemy character, she may instead heal 1 damage."
                        },
                        {
                            name: "Seeing Things",
                            desc: "Once per round, when an enemy character within 5 yards fails a Willpower duel, this character may move up to 3 yards in any direction (does not trigger disengaging strikes and does not count as movement for Talents, actions, or abilities)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Urban Legend",
                        desc: "Gain the following Talents:\n\n• *Calling Card*: Choose a specific Close Combat weapon; it increases damage by +1 and gains: :c::m: *Modus Operandi*: After damaging, if the target has Frightened +13 or more, they are immediately killed. Friendly characters to the target within 3 yards and line of sight gain Frightened +1. (May bond a new weapon after 1 month of use if lost/destroyed).\n\n• *From the Shadows*: When making an Initiative Flip, if no enemy is aware this character is an unfriendly combatant, she may immediately take one additional turn after the Initiative Flip (before normal turn order) for each instance of this Talent."
                    }
                }
            ]
        },
        {
            id: "harrowed",
            name: "Harrowed",
            book: "From Nightmares",
            starting: "A Harrowed begins with a non-magical skill toolkit and small trinkets worth no more than 3 Scrip collectively.",
            onThePursuit: "A Simple Life: When this character fails a duel with a Skill from a Charm Associated Aspect, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Crafting or Expertise Skills in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Reassurance",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(0)",
                            name: "Reassurance",
                            desc: "Until the beginning of this character’s next turn, all friendly characters within 3 yards receive +1 to the result of any duel they take."
                        }
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Martyr",
                        desc: "If a friendly character within 3 yards would gain a harmful Condition, this character may discard a card to gain that Condition instead."
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
                            name: "Unbowed",
                            desc: "During any challenge or duel taken by this character or a friendly Fated within line of sight, this character can discard 1 card to immediately negate one [-] in that duel."
                        },
                        {
                            name: "Pacifism",
                            desc: "This character can receive Defensive +1 at the start of each new round (maximum Defensive +2). If she does so, she suffers [-] to all damage flips made during that round ([-][-] if Defensive +2)."
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
                            name: "Lighten the Load",
                            desc: "This character gains 1 Enchanting Magia and 1 Alteration Immuto of her choice, known regardless of Grimoire. If she has no Magical Theory, she gains the Lifewell Doctrine, Tradition Magic, or a Unique Magical Theory."
                        },
                        {
                            name: "Familiar Presence",
                            desc: "Any time this character makes or generates a healing flip, the target(s) heal +1 damage."
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
                            name: "Silver Lining",
                            desc: "Increase this character’s Control Hand size by +1. Whenever a friendly character within Aura 6 discards a card, that character immediately heals 1 damage in addition to the discard effect."
                        },
                        {
                            name: "Memento Vivre",
                            desc: "While carrying a memento (an heirloom or object of personal value), this character receives Armor +1 (not counted toward Defense penalty). If lost, she may pass a TN 15 Centering Challenge during an Epilogue to bond with a new object."
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
                            name: "Bastion",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Bastion",
                                typeLine: "Manifested Power",
                                av: "Centering + Tenacity",
                                ap: "(2)",
                                tn: "10:t:",
                                resist: "—",
                                range: "Aura 6",
                                desc: "All friendly characters within range make a 1/2/3 healing flip, increased by +1 for each Margin of Success achieved."
                            }
                        },
                        {
                            name: "Stand Beside Me",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Stand Beside Me",
                                typeLine: "Manifested Power",
                                av: "Centering + Tenacity",
                                ap: "(2)",
                                tn: "11:t:",
                                resist: "—",
                                range: "3 yards",
                                desc: "Until this character performs a Walk, Run, or Charge action on her turn, all friendly characters in range count as being under Magical Shielding. Add this character’s ranks in Centering instead of Counter-Spelling to their final duel totals to resist Spells or Manifested Powers."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Refuge",
                        desc: "This character gains a Refuge (business, home, or room). While inside and not interacting with the outside world, friendly characters can make a healing flip every 6 hours and reduce any Conditions by any amount. Hostile characters cannot locate the Refuge by any means for up to 3 days (requires 1 week to recharge)."
                    }
                }
            ]
        },
        {
            id: "manifester",
            name: "Manifester",
            book: "From Nightmares",
            starting: "A Manifester begins with two Prestidigitation Magia and two Alteration Immuto, retained regardless of any Grimoire attuned to.",
            onThePursuit: "Life is but a Dream: When this character fails a Magical Skills duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skills in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Unending Creativity",
                        desc: "When casting a Prestidigitation Magia, this character may automatically include one instance of an Immuto she knows without increasing the spell’s TN."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Short Term Memory",
                        desc: "During Pursuit selection, this character gains a Prestidigitation Magia at the start of the Prologue, losing it during the Epilogue. A single Magia cannot be chosen twice in a row."
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
                            name: "Imaginary Friend",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Imaginary Friend",
                                typeLine: "Manifested Power",
                                av: "Prestidigitation + Cunning",
                                ap: "(2)",
                                tn: "6+X:m:",
                                resist: "—",
                                range: "3 yards",
                                desc: "Summon a Peon or Minion within range (increase TN by the character's Rank Value). It acts as a subordinate character for 1 minute or until Dramatic Time ends. The summoned character gains the Incorporeal Talent and halves its Wounds (rounding up)."
                            }
                        },
                        {
                            name: "Sleepwalking",
                            desc: "This character adds +:m: to her Prestidigitation Skill."
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
                            name: "Reshape",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Odd Angles",
                                typeLine: "Manifested Power",
                                av: "Prestidigitation + Intellect",
                                ap: "(1)",
                                tn: "11:m:",
                                resist: "—",
                                range: "10 yards",
                                desc: "Does not require line of sight. Select one friendly character and one enemy character within range. The friendly character gains line of sight to the target and may resolve non-Close Combat actions against it, ignoring intervening Cover, until this character’s next turn."
                            }
                        },
                        {
                            name: "Duplication",
                            desc: "When declaring Triggers on Magical Skill duels, this character may declare up to two Triggers (requiring separate instances of suits; cannot declare the same Trigger multiple times)."
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
                            name: "Phantasmal Doorways",
                            desc: "This character gains the following Manifested Power and Tactical Action:",
                            power: {
                                name: "Phantasmal Doorway",
                                typeLine: "Manifested Power",
                                av: "Prestidigitation + Cunning",
                                ap: "(2)",
                                tn: "6:m:",
                                resist: "—",
                                range: "Special",
                                desc: "Place a Doorway within 1 yard (remains until removed as a (0) Action or via Playing With Portals; increase TN by +3:m: per existing active Doorway). At TN 14:m:, target a friendly character/object within 1 yard of a Doorway and place it within 1 yard of another Doorway, then remove both."
                            },
                            action: {
                                cost: "(1)",
                                name: "Playing With Portals",
                                desc: "Select a friendly Doorway; all characters within Aura 3 may suffer 2/2/3 damage. Place this character within 1 yard of the Doorway and remove it (does not trigger disengaging strikes)."
                            }
                        },
                        {
                            name: "Reminisce",
                            desc: "Gain the following Defensive Trigger:\nDf or Wp (:m::m:) *Reminisce*: After succeeding, immediately resolve the effects of the spell or Manifested Power that targeted this character against the original caster (cannot declare Triggers or new Immuto)."
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
                            name: "Always by My Side",
                            desc: "Name a Peon or Minion. When summoning it via Imaginary Friend, decrease TN by -2; it does not halve Wounds and is immune to Horror Duels. Additionally, she may increase the TN of Imaginary Friend by +4 to summon an Enforcer."
                        },
                        {
                            name: "Solid Translucency",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Solid Translucency",
                                typeLine: "Manifested Power",
                                av: "Prestidigitation + Cunning",
                                ap: "(1)",
                                tn: "8:m:",
                                resist: "—",
                                range: "5 yards",
                                desc: "Create a glass-like barrier up to 2 yards tall and 2 yards wide within range (Hard Cover, stone durability, 10 damage breaks it, does not block LoS, smooth, or can be placed as stairs). Transparent walls require TN 14 Notice to spot. Increase TN by +1 per +1 yard to length/width (max +10 yards)."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Bend Reality",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Bend Reality",
                            typeLine: "Manifested Power",
                            av: "Prestidigitation + Cunning",
                            ap: "(1)",
                            tn: "12:m::m:",
                            range: "5 yards",
                            resist: "—",
                            desc: "Create an inanimate, common object out of thin air within range (loaded pistol, uncharged Soulstone, key, small door in a wall). Lasts 10 minutes plus 1 minute per rank in Prestidigitation (or until dismissed)."
                        }
                    }
                }
            ]
        },
        {
            id: "cutthroat",
            name: "Cutthroat",
            book: "From Nightmares",
            starting: "A Cutthroat begins with up to two Close Combat weapons and any armor (total combined value not exceeding 20 Scrip).",
            onThePursuit: "Blade’s Edge: When this character fails a Close Combat Skills duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Close Combat Skills in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "One on One",
                        desc: "If this character is engaged with only one other character when resolving a Close Combat attack action, she gains +1 to her final duel total.\n\nWhen making a Melee, Pugilism, or Martial Arts attack, she may substitute Grace for Might or Speed when calculating her Acting Value."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Offhand Weapon",
                        desc: "When wielding two weapons, designate one as Primary and the second as Offhand (must be Flexible, Pugilism, Melee, or Martial Arts). While wielding both, the Primary weapon gains:\n:r: *Second Strike*: After dealing Severe damage, resolve a 1 AP attack with the Offhand weapon (may not declare Triggers)."
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
                            name: "Cut Down",
                            desc: "During the first round of Dramatic Time, if this character resolves a Close Combat attack against a character with lower Initiative than hers, she gains [+] to her attack flip."
                        },
                        {
                            name: "Dynamic",
                            desc: "If this character would gain the Defensive Condition, she may instead choose to gain the Focused Condition of equal value, and vice versa."
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
                            name: "Riposte",
                            desc: "Gain the following Defensive Trigger:\nDf (:m:) *Riposte*: Make a TN 12 Evade Duel (+3 per Margin of Success the attacker earned) for each successful Close Combat attack resolved against this character. On a success, take no damage and the attacker suffers Weak damage from her Offhand weapon (if in range)."
                        },
                        {
                            name: "Maneuverability",
                            desc: "While engaged, this character increases her Evade Skill by +1 and reduces all damage she suffers while unarmored by +1 (minimum 1). These bonuses are lost immediately if she gains the Armor Talent at any value."
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
                            name: "Patience",
                            desc: "After this character resolves the Wait Action, she gains Fast on her next turn."
                        },
                        {
                            name: "Bladework",
                            desc: "This character may ignore one [-] from her attack or damage flips when resolving a Close Combat duel using a Flexible or Melee weapon."
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
                            name: "Rapidity",
                            desc: "During Dramatic Time, this character gains Rush +2 (Charge Aspect +2). If she resolves a Charge, she gains [+] to attack flips with her Primary weapon and [+] to damage flips with her Offhand weapon."
                        },
                        {
                            name: "The Closing Act",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Again!",
                                desc: "Immediately resolve a 1 AP Close Combat attack with her Primary weapon against a single target. If it deals no damage, resolve a 1 AP Close Combat attack with her Offhand weapon against the same target (neither attack may declare Triggers)."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Final Flourish",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "With a Flourish",
                            typeLine: "Manifested Power",
                            av: "Speed + Might or Grace",
                            ap: "(0)",
                            tn: "10:r:",
                            resist: "—",
                            range: "Special",
                            desc: "If this character performed a Close Combat action this turn that reduced an enemy character to 0 Wounds or less, that character must discard 2 cards or immediately be killed. Friendly characters to the killed target within 4 yards and line of sight must take a TN 12 Horror Duel."
                        }
                    }
                }
            ]
        },
        {
            id: "breachburned",
            name: "Breachburned",
            book: "From Nightmares",
            starting: "A Breachburned begins with two Magia (Sorcery or Enchanting) and two Immuto of her choice, retained regardless of Grimoire.",
            onThePursuit: "Enmeshed in the Aether: Whenever this character fails a Magical Skills duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skills in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Sight in Two Worlds",
                        desc: "During Pursuit selection, this character can draw the top card of her Twist Deck; she may remove it from the game for that session or put it back, reshuffling the deck without drawing additional Twist Cards."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "The Configuration",
                        desc: "Control Hand size increases by +1. During Pursuit selection after drawing Twist Cards, place any number of cards from Control Hand face up as Configuration Cards (they count towards max hand size but cannot Cheat Fate).\n\nOnce per duel as a free effect, place one Configuration Card on the bottom of her Twist Deck to modify the final total of any friendly or enemy duel by +1 or -1, then heal 1 damage.\n\nGain Tactical Action: (0) Attunement: Add any number of cards from Control Hand to Configuration (maintaining max hand size)."
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
                            name: "Shamanistic Markings",
                            desc: "Enemy Spells and Manifested Powers targeting this character increase TN by +1. If she suffers damage from a Spell or Manifested Power, pass a TN 12 Centering Challenge to add a card to Configuration from Control Hand or draw a card."
                        },
                        {
                            name: "Trance State",
                            desc: "Control Hand size increases by +1. Gain Tactical Action:\n(1) Altered State: Until the end of the round, halve all damage suffered from attacks or actions that do not use a Magical Skill."
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
                            name: "Sight Beyond",
                            desc: "At any time as a free effect, place one Configuration Card on the bottom of her Twist Deck to look at the top card of each Fated's Twist Deck; each player chooses whether to place it on top or bottom of their deck."
                        },
                        {
                            name: "Opalescent",
                            desc: "Control Hand size increases by +1. Select one additional Sorcery or Enchanting Magia, retained regardless of Grimoire."
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
                            name: "Alteration",
                            desc: "Once per duel as a free effect, place up to 3 Configuration Cards on the bottom of her Twist Deck to modify any friendly or enemy duel total by +2 or -2 per card. For each card spent, heal 1 damage or deal 1 damage to an enemy within 6 yards and line of sight."
                        },
                        {
                            name: "Aetheric Flood",
                            desc: "At any time as a free effect, place up to 3 Configuration Cards on the bottom of her Twist Deck and select an equal number of characters within 6 yards and line of sight. Each suffers 1/2/3 damage per card (based on card value), and damaged enemies lose all suits associated with their actions for 1 round."
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
                            name: "Space Between Worlds",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Space Between Worlds",
                                typeLine: "Manifested Power",
                                av: "Sorcery + Intellect",
                                ap: "(2)",
                                tn: "5:t:",
                                resist: "—",
                                range: "10 yards",
                                desc: "Select a point within range and place 1-3 Configuration Cards on the bottom of her Twist Deck (+5 TN per card beyond the first). All characters between caster and the point suffer 2 damage per Configuration Card used."
                            }
                        },
                        {
                            name: "Extradimensional Interjection",
                            desc: "When a character flips cards for a duel, as a free effect place 2 Configuration Cards on the bottom of her Twist Deck. A Fated in the duel adds half of one card's value (rounded up) to their Acting Value (after Cheating Fate). This character heals 1 damage."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "From Across the Aether",
                        desc: "Control Hand size increases by +1. When this character or a friendly character looks at a card from Fate Deck or Twist Deck, they may look at two instead of one.\n\nAt any time as a free effect, place 2 Configuration Cards on the bottom of her Twist Deck to change the result of one card in a duel to any number (1-13) and any suit."
                    }
                }
            ]
        },
        {
            id: "behemoth",
            name: "Behemoth",
            book: "From Nightmares",
            starting: "A Behemoth begins by increasing Wounds by +1, may increase Height to 3, and begins with a Close Combat weapon worth no more than 10 Scrip.",
            onThePursuit: "Heavy Hitter: When this character fails a Heavy Melee Skill duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in the Heavy Melee Skill or a Training Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Towering Figure",
                        desc: "This character gains +1 to the final duel total of any Impose Actions she takes (or gains [+] to the duel if the target has a lower Height)."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "In the Thick of It",
                        desc: "While engaged with two or more enemy characters, this character increases her Defense by +1."
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
                            name: "Regeneration",
                            desc: "This character gains Regeneration +1 (heals 1 damage at the start of its turn during Dramatic Time)."
                        },
                        {
                            name: "Walking Fortress",
                            desc: "Increase this character’s Wounds by +2. Whenever permanently increasing Wounds via a Talent, gain an additional +1 Wound."
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
                            name: "Heavy Duty",
                            desc: "This character may replace any non-Flexible Close Combat Action’s Associated Aspect with Might."
                        },
                        {
                            name: "Heave",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(2)",
                                name: "Heave",
                                desc: "Select an engaged target/object with Height <= hers and make an Opposed Might or Speed Duel. On success, push target up to (5 + Might) yards in any direction; target becomes Prone and suffers 2/2/3 damage."
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
                            name: "Stoicism",
                            desc: "Immune to Fast and Slow Conditions. If she would gain Paralyzed, it instead reduces total AP by -1 rather than resolving normal effects."
                        },
                        {
                            name: "Collateral Damage",
                            desc: "When making a Close Combat attack, she may reduce her final attack flip total by -2 to add Blast to Moderate and Severe damage (immune to her own blast).\n\nGain Trigger on all Close Combat actions:\n:r: *Glass Bones*: After succeeding, modify any Critical Effect result by up to +2."
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
                            name: "Tough Enough",
                            desc: "During Pursuit selection, gain temporary Wounds equal to Toughness Skill (lost during Epilogue; cannot be healed once depleted; does not interact with Walking Fortress)."
                        },
                        {
                            name: "Siege Engine",
                            desc: "During Charge, ignore intervening characters of equal or lower Height (they must pass TN 10 Acrobatics or take 1 damage and become Prone). May smash structures on a Toughness + Resilience Challenge based on material/thickness."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Powerhouse",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(1)",
                            name: "Powerhouse",
                            desc: "Discard a card. The next Close Combat attack this character makes doubles its damage."
                        }
                    }
                }
            ]
        },
        {
            id: "painkiller",
            name: "Painkiller",
            book: "From Nightmares",
            starting: "A Painkiller begins with any mixture of Close Combat weapons and armor not worth more than 20 Scrip.",
            onThePursuit: "Not Done Yet: When this character suffers a Critical Effect during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Skill with the Resilience or Tenacity Associated Aspect in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Adrenal Shock",
                        desc: "When this character takes an Unconsciousness Challenge, the TN is reduced by -3."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Flesh Wounds",
                        desc: "When suffering Severe Damage, gain Focused +1. If below half health (rounded up), Focused Condition does not end at turn end. May discard a card on her turn to gain Focused +1 (max Focused +3)."
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
                            name: "The Price",
                            desc: "This character may suffer 1 irreducible damage instead of discarding a card for a Talent, Trigger, or ability (cannot reduce below 1 Wound; cannot Cheat Fate this way; does not trigger damage-taken effects like Black Blood)."
                        },
                        {
                            name: "Vivisected",
                            desc: "If this character suffers a Critical Effect, she may discard a card to reduce the total result by up to half her total steps in this Pursuit (rounded up)."
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
                            name: "Red Out",
                            desc: "While at or below half health, this character gains [+] to all attack and damage flips."
                        },
                        {
                            name: "Ichor Aetheric",
                            desc: "While at or below half health, this character gains [+] to all Magical Skills challenges when casting a spell or Manifested Power."
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
                            name: "Call to Agony",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Reddened Mist",
                                desc: "Heal 1 damage for every character within Pulse 3 that is at or below half health."
                            }
                        },
                        {
                            name: "Bloodlust",
                            desc: "Gain the following Trigger on all Close Combat attacks:\n:r: *Slice and Dice*: After damaging, this character may discard a card to take this action again."
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
                            name: "Eye for an Eye",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Eye for an Eye",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Toughness",
                                ap: "(1)",
                                tn: "8:r:",
                                range: "—",
                                resist: "—",
                                desc: "Gain the following Defensive Trigger for one round (usable once per successful cast): Df (Any Suit) *Eye for an Eye*: After failing, the target suffers the same amount of damage they dealt to this character (after reductions like Armor)."
                            }
                        },
                        {
                            name: "Peeled Away",
                            desc: "After a character fails a Horror Duel against this character, she may immediately Charge them if in range.\n\nGain Tactical Action:\n(0) My True Face: One enemy within 6 yards and line of sight takes a TN 10 Horror Duel (+ value of Bleeding Out Condition)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Draped in Red",
                        desc: "Immediately after being reduced to or below -5 Wounds, this character gains Reactivate until she is restored to above -5 Wounds."
                    }
                }
            ]
        }
    ];

    if (typeof PURSUITS_DATA !== "undefined" && Array.isArray(PURSUITS_DATA)) {
        PURSUITS_DATA.push(...FROM_NIGHTMARES_PURSUITS);
    } else {
        window.PURSUITS_DATA = FROM_NIGHTMARES_PURSUITS;
    }
})();
