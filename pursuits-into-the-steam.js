/**
 * Through the Breach 2nd Edition
 * Expansion: Into the Steam
 * Basic Pursuits Database (Clean Mechanics)
 */

(function() {
    const INTO_THE_STEAM_PURSUITS = [
        {
            id: "animator",
            name: "Animator",
            book: "Into the Steam",
            starting: "An Animator begins the game with a non-magical skill toolkit.",
            onThePursuit: "Always More Scrap: When a Cobbled or Amalgam controlled by this character is killed or sacrificed by an enemy during Dramatic Time, the Animator may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Cobble Together",
                        desc: "This character gains the following Manifested Power. Order Actions command all Cobbled simultaneously. Unused Cobbling Points are lost upon creation.\n\n• 1 Pt: +1 AV to Bash/Fling (max +3), +1 Df (max +3), +1 Wp (max +3), +1 Wounds (max +3), +1 Walk/Charge (max +3), +1 Physical Skill rank (max 4), or +1 damage (Severe, then Moderate, then Weak).\n• 2 Pts: Add Fling ranged attack (AV Grace+Pistol, Rg z8, Dmg 1/2/3, Pistols 1).",
                        power: {
                            name: "Cobble Together",
                            typeLine: "Manifested Power",
                            av: "Intellect + Artefacting",
                            ap: "(1)",
                            tn: "10:t:",
                            range: "8 yards",
                            resist: "—",
                            desc: "Summon a Cobbled with 4 Cobbling Points (max 1 active; gains Slow if activating round summoned). Requires access to Corpses or Scrap (mass of a large dog)."
                        },
                        minion: {
                            name: "Cobbled",
                            typeLine: "Minion, Construct",
                            stats: {
                                might: 1, grace: 1, speed: 0, resilience: 0,
                                charm: -5, intellect: -5, cunning: -5, tenacity: -5,
                                defense: "4", walk: 4, height: 1, initiative: "0",
                                willpower: "2", charge: 4, wounds: 4
                            },
                            skills: "Evade 2, Melee 2",
                            abilities: [
                                {
                                    name: "Fated Creation",
                                    desc: "If created from a Corpse, gains the Undead Characteristic. Changes to Aspects do not affect Derived Aspects."
                                }
                            ],
                            weapon: {
                                name: "Bash",
                                skill: "Melee",
                                av: "3",
                                resist: "Df",
                                damage: "1/2/4",
                                special: "Rg: (y)1. Target suffers 1/2/4 damage."
                            }
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Part Efficiency",
                            desc: "When casting Cobble Together, the summoned Cobbled gains +2 Cobbling Points for each instance of this Talent."
                        },
                        {
                            name: "Rage of the Machine",
                            desc: "Cobbled and Amalgam summoned by this character gain Tactical Action:\n(2) Frenzied Flurry: Discard a Twist Card to make three 1 AP Close Combat attacks against a single target."
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
                            name: "Extra Cobbling",
                            desc: "The maximum number of Cobbled this character may have active at one time increases by +1 for each instance of this Talent."
                        },
                        {
                            name: "Scuttling Nuisances",
                            desc: "Friendly characters do not randomize into engagement against this character's Cobbled. Friendly non-Cobbled attacks against targets engaged with her Cobbled gain [+] to the attack flip."
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
                            name: "Part Efficiency",
                            desc: "When casting Cobble Together, the summoned Cobbled gains +2 Cobbling Points for each instance of this Talent."
                        },
                        {
                            name: "Uncontrolled Detonation",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Uncontrolled Detonation",
                                typeLine: "Manifested Power",
                                av: "Intellect + Explosives",
                                ap: "(1)",
                                tn: "12:t:",
                                range: "10 yards",
                                resist: "Df",
                                desc: "Target Cobbled explodes. Make an attack flip using its Melee + Toughness against the Defense of every character within Pulse 2. Characters hit suffer 2 damage. Then, sacrifice the Cobbled."
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
                            name: "Extra Cobbling",
                            desc: "The maximum number of Cobbled this character may have active at one time increases by +1 for each instance of this Talent."
                        },
                        {
                            name: "Skilled Cobbling",
                            desc: "Cobbled are Height 2 with Bash Range (y)2. Amalgam has Bash Range (y)3. Both gain Melee Expert (+1 AP per turn, only usable for Close Combat attacks)."
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
                            name: "Part Efficiency",
                            desc: "When casting Cobble Together, the summoned Cobbled gains +2 Cobbling Points for each instance of this Talent."
                        },
                        {
                            name: "Twisted Propagation",
                            desc: "Cobbled within line of sight gain Trigger on Bash attacks:\n:c: *Twisted Propagation*: After killing target, if it leaves matching remains (Scrap/Corpse), summon a Cobbled into base contact (cannot activate this round, cannot exceed max active Cobbled)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Fusion",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Meld Together",
                            typeLine: "Manifested Power",
                            av: "Cunning + Artefacting",
                            ap: "(1)",
                            tn: "12:t::c:",
                            range: "10 yards",
                            resist: "—",
                            desc: "Sacrifice 2+ Cobbled within range to summon an Amalgam with Cobbling Points equal to total of sacrificed Cobbled (gains Slow if activated this round; cannot summon Cobbled while Amalgam exists). Tear apart as (1) Action leaves Scrap/Corpse."
                        },
                        minion: {
                            name: "Amalgam",
                            typeLine: "Enforcer, Construct",
                            stats: {
                                might: 2, grace: 0, speed: 2, resilience: 2,
                                charm: -5, intellect: -5, cunning: -5, tenacity: -5,
                                defense: "3", walk: 5, height: 3, initiative: "0",
                                willpower: "2", charge: 6, wounds: 7
                            },
                            skills: "Evade 2, Melee 2, Toughness 2",
                            abilities: [
                                {
                                    name: "Fated Creation",
                                    desc: "If created from a Corpse, gains the Undead Characteristic. Changes to Aspects do not affect Derived Aspects."
                                }
                            ],
                            weapon: {
                                name: "Bash",
                                skill: "Melee",
                                av: "3",
                                resist: "Df",
                                damage: "2/3/5",
                                special: "Rg: (y)2. Target suffers 2/3/5 damage."
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "augmented",
            name: "Augmented",
            book: "Into the Steam",
            starting: "An Augmented begins with one Pneumatic Limb with augments up to 25 Scrip.",
            onThePursuit: "End of the Line: When this character fails a Might duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Might-based Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "choice",
                    talents: [
                        {
                            name: "Mechanical Heart",
                            desc: "Gain [+] to all Toughness duels made to avoid unconsciousness."
                        },
                        {
                            name: "Mechanical Eyes",
                            desc: "See in darkness as easily as daylight and gain immunity to the Blind Condition."
                        },
                        {
                            name: "Brain Pan",
                            desc: "Increase Willpower by +1 and gain immunity to Horror duels."
                        },
                        {
                            name: "Synthetic Transfusion",
                            desc: "Gain immunity to Bleeding Out. When receiving First Aid, the healer may use Alchemistry instead of Doctor."
                        }
                    ]
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Path of Steel: Specialized Tools",
                            desc: "Gain the following Trigger on Close Combat attacks:\n:t: *Electrocute*: When damaging, this attack ignores Armor."
                        },
                        {
                            name: "Path of Sinew: Specialized Tools",
                            desc: "Gain the following Trigger on Close Combat attacks:\n:r: *Venipuncture*: After damaging a Living target, heal 1 damage."
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
                            name: "Dual Pneumatic Arms",
                            desc: "Gain a Pneumatic Limb (up to 40 Scrip). If possessing two Pneumatic arms, gain [+] on all Close Combat attacks made with Pneumatic arms."
                        },
                        {
                            name: "Dual Pneumatic Legs",
                            desc: "Gain a Pneumatic Limb (up to 40 Scrip). If possessing two Pneumatic legs, gain +2 to Walk and Charge Aspects."
                        },
                        {
                            name: "Pneumatic Capacity",
                            desc: "Gain a Pneumatic Limb (up to 40 Scrip). Use the Pneumatic (Aspect) abilities of Pneumatic Limbs one additional time per Dramatic Time."
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
                            name: "Path of Steel: Arc Caster",
                            desc: "Gain the Construct Characteristic. The Electrocute Trigger also ignores Hard to Wound and Hard to Kill. When suffering an enemy Critical Effect, gain Fast."
                        },
                        {
                            name: "Path of Sinew: Siphon Blood",
                            desc: "Gain the Construct Characteristic. Venipuncture healing above max Wounds grants “Stored Blood +1: After suffering damage, reduce value to heal that much damage”. Venipuncture on a kill heals 2/3/4 damage."
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
                            name: "Implacable Assault",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Implacable Assault",
                                desc: "Discard a Twist Card to gain [+] to attack and damage flips for the duration of her turn."
                            }
                        },
                        {
                            name: "Augmented Leap",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Augmented Leap",
                                desc: "Discard a Twist Card and pass TN 10 Athletics to move Charge yards (+2 yards per Margin of Success), ignoring intervening terrain and characters (cannot leap through solid walls)."
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
                            name: "Path of Steel: Arc Bolt",
                            desc: "Gain integrated weapon: Arc Bolt (Long Arms), Rg z8, Dmg 2/3/4. Ignores Armor, does not randomize in melee, consumes no ammunition."
                        },
                        {
                            name: "Path of Sinew: Accelerated Metabolism",
                            desc: "At the start of her turn, if this character has Stored Blood +2 or higher, she may end the Stored Blood Condition to gain Fast."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "choice",
                    talents: [
                        {
                            name: "Apotheosis: Additional Arms",
                            desc: "Gain a pair of mechanical arms on back. Gain Pneumatic Expert (+1 AP per turn, only usable for Pneumatic Close Combat attacks)."
                        },
                        {
                            name: "Apotheosis: Executioner Claws",
                            desc: "Replace one or both hands with Executioner Claw (Heavy Melee, Rg (y)3, Dmg 3/4/5). Trigger: :r::c: Decapitate (target must discard 2 Twist Cards or be killed). Replacing both hands grants [+] to attacks."
                        },
                        {
                            name: "Apotheosis: Patchwork Plating",
                            desc: "Gain Armor +1 without reducing Defense (stacks up to Armor +4)."
                        },
                        {
                            name: "Apotheosis: Spider Legs",
                            desc: "Replace legs with mechanical spider legs. Gain Nimble (+1 AP per turn, only usable for Movement General Actions). Previous Pneumatic legs are incorporated."
                        }
                    ]
                }
            ]
        },
        {
            id: "collaborator",
            name: "Collaborator",
            book: "Into the Steam",
            starting: "A Collaborator begins with weapon and armor up to 25 Scrip total.",
            onThePursuit: "Team Tactics: When this character fails a Social duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Social Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Preparations",
                        desc: "After flipping Initiative, this character may discard a card to reflip Initiative."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Set ‘em Up",
                            desc: "After damaging an enemy with an attack, discard a Twist Card to grant target “In Position: Enemies attacking this character add the discarded card's suit to final totals” until start of next turn."
                        },
                        {
                            name: "All Together Now",
                            desc: "In an Ongoing Challenge, discard a Twist Card to allow all participants to add its suit to Challenge duel totals."
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
                            name: "Special Forces: Strike Team",
                            desc: "Allies within 6 yards gain Close Combat Triggers based on Collaborator's Initiative suit: :r: *Critical Strike* (+1 dmg per :r:); :m: *Reposition* (move 3 yards); :t: *Duck and Weave* (+2 Df until next turn); :c: *Twist the Blade* ([+] to damage flip)."
                        },
                        {
                            name: "Pull It Together",
                            desc: "In an Ongoing Challenge, discard a card when another character fails to prevent that failure from contributing Failure Requirements."
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
                            name: "Inspiring Speech",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Inspiring Speech",
                                desc: "Pass TN 10 Leadership test. Target ally gains “Inspired: [+] to all Close Combat and Ranged Combat attacks” for 1 round (+1 round per Margin of Success)."
                            }
                        },
                        {
                            name: "Special Forces: Firing Line",
                            desc: "Allies within 6 yards gain Ranged Combat Triggers based on Collaborator's Initiative suit: :r: *Precision* (+1 to duel total per :r:); :m: *Flush Out* (push target 3 yards); :t: *Armor Piercing* (ignores Armor); :c: *Aim Low* (target gains Slow)."
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
                            name: "Excessive Preparations",
                            desc: "Gain [+] to Initiative flips. Count the suits of both flipped cards for Triggers from Special Forces and Master Plan until end of Dramatic Time."
                        },
                        {
                            name: "Prompt",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Prompt",
                                typeLine: "Manifested Power",
                                av: "Charm + Leadership",
                                ap: "(1)",
                                tn: "11:t:",
                                range: "8 yards",
                                resist: "—",
                                desc: "Target willing ally moves up to 3 yards in any direction and performs a (1) Action of choice."
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
                            name: "Do It Like This",
                            desc: "This character may Cheat Fate for a willing ally within 6 yards."
                        },
                        {
                            name: "Plans Within Plans",
                            desc: "This character may declare two different Triggers on an attack (must meet suit requirements for both)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Master Plan",
                        desc: "Allies gain bonus during Dramatic Time based on Collaborator's Initiative suit:\n• :r:: After killing an enemy, attacker makes a 1/2/3 healing flip.\n• :m:: Friendly allies ignore severe terrain when moving.\n• :t:: After killing an enemy, attacker draws a card.\n• :c:: Friendly allies gain Hard to Wound +1 (damage flips against them suffer [-])."
                    }
                }
            ]
        },
        {
            id: "engineer",
            name: "Engineer",
            book: "Into the Steam",
            starting: "An Engineer begins the game with a Mobile Toolkit.",
            onThePursuit: "Interchangeable Parts: When this character fails an Engineering or Artefacting duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Crafting Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Complex Machinery",
                        desc: "Gain [+] to ongoing Engineering or Crafting duels. When using Artefacting to create a Construct, gain +1 Construct Point and reduce Scrip cost by 1 per completed Engineer step (minimum 1 Scrip)."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Mechanical Animation",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(2)",
                            name: "Mechanical Animation",
                            desc: "Pass TN 10:t: Engineering + Artefacting duel to animate target inanimate Construct under control for 1 day (deactivate as (1) Action within 1 yard; max 1 controlled Construct)."
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
                            name: "Invention",
                            desc: "Create a mechanical prototype device granting a Manifested Power (max TN = completed Pursuit steps + 8; base AV fixed by creator). Non-creators require daily TN 9 Artefacting + Intellect to activate. Duplicate takes 8 hours and Scrip = 2x TN."
                        },
                        {
                            name: "Analyze Weakness",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Analyze Weakness",
                                desc: "Target enemy gains “Weak Points: Enemies attacking this character ignore Armor and Hard to Wound” until end of Dramatic Time."
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
                            name: "Invention",
                            desc: "Create an additional prototype mechanical device granting a Manifested Power (bypasses Guild magic restrictions)."
                        },
                        {
                            name: "Additional Constructs",
                            desc: "This character may control an additional Construct animated with Mechanical Animation."
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
                            name: "Invention",
                            desc: "Create an additional prototype mechanical device granting a Manifested Power (bypasses Guild magic restrictions)."
                        },
                        {
                            name: "Grinding Halt",
                            desc: "Constructs under this character's control gain Defensive Trigger:\nDf (:t:) *Grinding Halt*: Gain Armor +2 for the duration of this Action."
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
                            name: "Invention",
                            desc: "Create an additional prototype mechanical device granting a Manifested Power (bypasses Guild magic restrictions)."
                        },
                        {
                            name: "Field Repairs",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Field Repairs",
                                desc: "Discard a Twist Card to heal 1/2/3 damage on target Construct within 1 yard."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Artificial Soulstone",
                        desc: "Gain an Artificial Soulstone (Lade 3, holds 5 Charges, regains 1 Charge/month automatically or normal recharge). Usable regardless of Harness Soulstone rank (others treat as Lade 5). Remake takes 8 hours and 30 Scrip (renders older ones inert)."
                    }
                }
            ]
        },
        {
            id: "illusionist",
            name: "Illusionist",
            book: "Into the Steam",
            starting: "An Illusionist begins with the Stage Magic Talent (Manifested Power Hocus Pocus).",
            onThePursuit: "Nothing is Real: When an enemy successfully disbelieves one of this character's illusions for the first time during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Illusions",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Illusions",
                            typeLine: "Manifested Power",
                            av: "Charm + Prestidigitation",
                            ap: "(1)",
                            tn: "10:m:",
                            range: "—",
                            resist: "—",
                            desc: "Create an animated illusion for 1 minute (commanded with (1) Order Action; TN 10 Wp duel to disbelieve; physical contact disbelieves automatically).",
                            triggers: [
                                {
                                    cost: ":t:",
                                    name: "Lasting Illusions",
                                    desc: "Every :t: in final duel total increases duration by 1 minute."
                                }
                            ]
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Powerful Illusions",
                            desc: "Illusions created by this character have duration increased by +1 minute and the TN to see through them increased by +2."
                        },
                        {
                            name: "Effortless Illusions",
                            desc: "This character may control illusions created with the Illusion Manifested Power as a (0) Action instead of a (1) Action."
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
                            name: "A Thousand Faces",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "A Thousand Faces",
                                typeLine: "Manifested Power",
                                av: "Charm + Enchanting",
                                ap: "(1)",
                                tn: "10:m:",
                                range: "—",
                                resist: "—",
                                desc: "Cloak body and gear in an illusion of a generic member of a group. Automatically fools observers (TN 10 Wp duel if doubted; physical contact disbelieves)."
                            }
                        },
                        {
                            name: "Smoke and Mirrors",
                            desc: "Gain Defensive Trigger:\nDf/Wp (:m:) *Smoke and Mirrors*: After succeeding against an enemy, place self anywhere within 5 yards."
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
                            name: "Phantasmal Distraction",
                            desc: "Enemies within 2 yards of an illusion hostile to them cannot make disengaging strikes while they believe the illusion."
                        },
                        {
                            name: "Disappearing Act",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Disappearing Act",
                                typeLine: "Manifested Power",
                                av: "Intellect + Prestidigitation",
                                ap: "(1)",
                                tn: "10:m:",
                                range: "10 yards",
                                resist: "Wp",
                                desc: "Target is removed from reality, returning safely within 5 yards at round end (+1 round per Margin of Success)."
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
                            name: "The Prestige",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "The Prestige",
                                typeLine: "Manifested Power",
                                av: "Cunning + Counter-Spelling",
                                ap: "(1)",
                                tn: "10:m:",
                                range: "10 yards",
                                resist: "Wp",
                                desc: "Dispel all illusions within Pulse 10. Hidden objects glow in light; hidden people pass TN 12 Wp or are revealed."
                            }
                        },
                        {
                            name: "Powerful Illusions",
                            desc: "Illusions created by this character have duration increased by +1 minute and the TN to see through them increased by +2."
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
                            name: "Hat Trick",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Hat Trick",
                                typeLine: "Manifested Power",
                                av: "Intellect + Prestidigitation",
                                ap: "(1)",
                                tn: "10:t::m:",
                                range: "8 yards",
                                resist: "—",
                                desc: "Reach into a pocket and out another within range to make an immediate Pick Pocket, Pistol attack, or (y) one-handed attack with [+] against a target in range of second pocket."
                            }
                        },
                        {
                            name: "Magician's Duel",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Magician's Duel",
                                typeLine: "Manifested Power",
                                av: "Intellect + Sorcery",
                                ap: "(1)",
                                tn: "10:t:",
                                range: "6 yards",
                                resist: "Special (Intellect + Magical Skill)",
                                desc: "Target suffers 2/3/4 damage.",
                                triggers: [
                                    {
                                        cost: ":t::m:",
                                        name: "Showstopper",
                                        desc: "Target gains “Dazzled: Cannot take actions using the Skill chosen to resist this attack” until start of next turn."
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
                        name: "House of Mirrors",
                        desc: "This character no longer suffers damage from Weak damage flips."
                    }
                }
            ]
        },
        {
            id: "infiltrator",
            name: "Infiltrator",
            book: "Into the Steam",
            starting: "An Infiltrator begins the game with a non-magical skill toolkit.",
            onThePursuit: "Act Like You Belong: When this character fails a Deceive or Stealth duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Social Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Strike First",
                        desc: "When attacking someone who believes her friendly or has not acted this round, add a suit of choice to final duel total."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Sneaky",
                            desc: "Choose Deceive or Stealth; gain [+] to Challenge Duels with that Skill."
                        },
                        {
                            name: "Slip Away",
                            desc: "Gain [+] to Defense flips against disengaging strikes."
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
                            name: "Disguised",
                            desc: "This character cannot be the target of the Charge Action."
                        },
                        {
                            name: "From the Shadows",
                            desc: "When making an Initiative Flip, if no enemy is aware this character is an unfriendly combatant, take 1 additional turn immediately after the Initiative Flip per instance."
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
                            name: "Betrayal",
                            desc: "When attacking someone who believes her friendly or has not acted, gain [+] to attack flip and Trigger on Close/Ranged Combat:\n:m: *No Witnesses*: Target gains “Unbeknownst: Cannot target anyone with Disguised Talent with Attack actions” until round end (once per round)."
                        },
                        {
                            name: "Disguised",
                            desc: "This character cannot be the target of the Charge Action."
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
                            name: "Infiltration",
                            desc: "Choose an organization (high standing). Use Bureaucracy for resources: Common (TN 10), Minion Recruitment (TN 12), Uncommon (TN 14), Enforcer Recruitment (TN 16), Rare (TN 18)."
                        },
                        {
                            name: "Endless Lies",
                            desc: "This character may always choose to use the Deceive Skill in place of another Social Skill during a Challenge Duel."
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
                            name: "Disillusioned",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Disillusion",
                                typeLine: "Manifested Power",
                                av: "Charm + Deceive",
                                ap: "(0)",
                                tn: "12:m:",
                                range: "4 yards",
                                resist: "Wp",
                                desc: "Push target enemy up to its Walk in any direction.",
                                triggers: [
                                    {
                                        cost: ":m::c:",
                                        name: "Question Loyalty",
                                        desc: "Target gains “Whose Side Am I On?!: Anyone attacking this character gains [+] to the flip” for the rest of the round."
                                    }
                                ]
                            }
                        },
                        {
                            name: "Endless Lies",
                            desc: "This character may always choose to use the Deceive Skill in place of another Social Skill during a Challenge Duel."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Membership Cards",
                        desc: "Switch Infiltration organization once per day with 5 minutes concentration. If she does not have the Infiltration Talent, gain Infiltration instead."
                    }
                }
            ]
        },
        {
            id: "mage",
            name: "Mage",
            book: "Into the Steam",
            starting: "A Mage gains a Magical Theory and the Arcane Shield Talent (reduces all damage suffered by 1, min 0, before acting in Dramatic Time).",
            onThePursuit: "Focused Efforts: When this character fails to cast a Manifested Power spell, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "New Manifestation",
                        desc: "Gain a new Manifested Power (max TN = completed Pursuit steps + 8) or add an Immuto to an existing Manifested Power without increasing its TN."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "New Manifestation",
                            desc: "Gain a new Manifested Power (max TN = completed Pursuit steps + 8) or add an Immuto to an existing Manifested Power without increasing its TN."
                        },
                        {
                            name: "Triggered Immuto",
                            desc: "Choose a Manifested Power, an Immuto, and a suit: the spell gains a Trigger for that suit with the Immuto’s effect without increasing its TN."
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
                            name: "New Manifestation",
                            desc: "Gain a new Manifested Power (max TN = completed Pursuit steps + 8) or add an Immuto to an existing Manifested Power without increasing its TN."
                        },
                        {
                            name: "Totem",
                            desc: "Gain a Totem sidekick minion reflecting character's nature (Peon, 4 Wounds, 3 aspect points up to +2, one Skill rank 2, two Skills rank 1, one Manifested Power max TN 10 or improved attack; commanded via (1) Order; remade via 1-day ritual).",
                            minion: {
                                name: "Totem",
                                typeLine: "Peon, Living/Construct/Undead/Spirit/Oni",
                                stats: {
                                    might: 0, grace: 0, speed: 0, resilience: 0,
                                    charm: 0, intellect: 0, cunning: 0, tenacity: 0,
                                    defense: "2", walk: 4, height: "1 or 2", initiative: "0",
                                    willpower: "2", charge: 4, wounds: 4
                                },
                                skills: "Any Skill 2, Any Skill 1, Any Skill 1",
                                abilities: [
                                    {
                                        name: "Manifested Power",
                                        desc: "Gains a single Manifested Power (or spell) of choice with max TN 10, or an improved attack."
                                    }
                                ],
                                weapon: {
                                    name: "Bash",
                                    skill: "Melee",
                                    av: "3",
                                    resist: "Df",
                                    damage: "1/2/4",
                                    special: "Rg: (y)2. Target suffers 1/2/4 damage."
                                }
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
                            name: "New Manifestation",
                            desc: "Gain a new Manifested Power (max TN = completed Pursuit steps + 8) or add an Immuto to an existing Manifested Power without increasing its TN."
                        },
                        {
                            name: "Furious Casting",
                            desc: "This character gains the following Attack Action:",
                            action: {
                                cost: "(2)",
                                name: "Furious Casting",
                                desc: "Discard a Twist Card to make three 1 AP attacks with a single Manifested Power against a single target."
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
                            name: "Triggered Immuto",
                            desc: "Choose a Manifested Power, an Immuto, and a suit: the spell gains a Trigger for that suit with the Immuto’s effect without increasing its TN."
                        },
                        {
                            name: "Improved Totem",
                            desc: "Totem gains a second Manifested Power (max TN 12). Directing Totem via (1) Order becomes a (0) Action (gains Totem Talent if not already possessed)."
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
                            name: "New Manifestation",
                            desc: "Gain a new Manifested Power (max TN = completed Pursuit steps + 8) or add an Immuto to an existing Manifested Power without increasing its TN."
                        },
                        {
                            name: "Reflect Magic",
                            desc: "Gain Defensive Trigger:\nDf/Wp (:r::m:) *Reflect Magic*: After a harmful spell fails against this character, deal 2/3b/5bb damage to the caster (damage flip suffers [-])."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Chain Casting",
                        desc: "Choose a Manifested Power; it gains Trigger:\n:t::m: *Overpower*: After damaging, immediately take this Action again against the same target (cannot declare Triggers)."
                    }
                }
            ]
        },
        {
            id: "primal",
            name: "Primal",
            book: "Into the Steam",
            starting: "A Primal begins the game with +1 Wound.",
            onThePursuit: "On the Scent: When this character fails a Notice, Track, or Wilderness duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Cunning-based Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Force of Nature",
                        desc: "When dealing damage with a natural attack (Pugilism, Martial Arts, Grappling, Beast melee; excluding pneumatic limbs), deal +1 damage."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Beast Whisperer",
                        desc: "Communicate with Beasts via body language. Beasts will not attack unless provoked or controlled. Make Social Skill tests with Beasts without penalty."
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
                            name: "Stalk",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Stalk",
                                desc: "Discard a card to give target within line of sight “Stalked: If target takes a Walk or Charge, applier may take a Walk Action ending closer to target” until reused or Dramatic Time ends."
                            }
                        },
                        {
                            name: "Animal Companion",
                            desc: "Gain an Animal Companion (non-Defiant Beast of Minion level or lower). Commanded using (1) Order Action. May possess one per instance of this Talent."
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
                            name: "Hunting Call",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Hunting Call",
                                typeLine: "Manifested Power",
                                av: "Charm + Husbandry",
                                ap: "(1)",
                                tn: "10:t:",
                                range: "8 yards",
                                resist: "Wp",
                                desc: "Target Beast makes a 1 AP Action controlled by caster (cannot force sacrifice)."
                            }
                        },
                        {
                            name: "Animal Companion",
                            desc: "Gain an additional Animal Companion (non-Defiant Beast of Minion level or lower)."
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
                            name: "Smell Fear",
                            desc: "If an enemy engaged with this character or her Animal Companion fails a Willpower duel, make an immediate Close Combat attack against that enemy (once per round)."
                        },
                        {
                            name: "Loyal Devotion",
                            desc: "Gain Defensive Trigger:\nDf (:t:) *Protect Me*: After an enemy attack succeeds, an Animal Companion within 2 yards suffers the attack instead if a legal target."
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
                            name: "The Law of Meat",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "The Law of Meat",
                                typeLine: "Manifested Power",
                                av: "Intellect + Wilderness",
                                ap: "(1)",
                                tn: "12:c:",
                                range: "6 yards",
                                resist: "Wp",
                                desc: "Target suffers 2/3/4 damage. If reduced to 0 Wounds, target is immediately killed and cannot Cheat Fate or spend Fate Points to survive."
                            }
                        },
                        {
                            name: "Pack",
                            desc: "(1) Order Action commands two Animal Companions with different orders. If she has only a single Animal Companion, (1) Order becomes a (0) Action."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Eat Your Fill",
                        desc: "After killing a Living creature with a Close Combat attack, may immediately end turn to heal all damage suffered by gorging on flesh. Animal Companions gain this Talent as well."
                    }
                }
            ]
        }
    ];

    if (typeof PURSUITS_DATA !== "undefined" && Array.isArray(PURSUITS_DATA)) {
        PURSUITS_DATA.push(...INTO_THE_STEAM_PURSUITS);
    } else {
        window.PURSUITS_DATA = INTO_THE_STEAM_PURSUITS;
    }
})();
