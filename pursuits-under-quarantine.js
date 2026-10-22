/**
 * Through the Breach 2nd Edition
 * Expansion: Under Quarantine
 * Basic Pursuits Database (Clean Mechanics)
 */

(function() {
    const UNDER_QUARANTINE_PURSUITS = [
        {
            id: "bully",
            name: "Bully",
            book: "Under Quarantine",
            starting: "A Bully begins the game with any melee weapon and armor up to 25 Scrip total.",
            onThePursuit: "Dark Deeds: When this character fails a Close Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Close Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Terrorize",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Terrorize",
                            typeLine: "Manifested Power",
                            av: "Tenacity + Intimidate",
                            ap: "(0)",
                            tn: "—",
                            range: "6 yards",
                            resist: "Wp",
                            desc: "Target gains “Terrified: Suffers [-] on all attacks against any character with the Terrorize Manifested Power” until start of caster's next turn in Dramatic Time (or 5 minutes in Narrative Time). Relentless characters are immune."
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Leave a Mark",
                            desc: "Terrorize gains Trigger:\n:r: *Mentally Scarred*: After succeeding, target suffers 2 damage."
                        },
                        {
                            name: "Frozen in Terror",
                            desc: "While engaged with this character, enemy characters with the Terrified Condition may not take Actions that would leave her engagement range."
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
                            name: "Thug",
                            desc: "This character gains [+] to Close Combat attacks against characters with the Terrified Condition."
                        },
                        {
                            name: "Peer Pressure",
                            desc: "This character receives [+] to all Social Skill Challenges made against characters with the Terrified Condition."
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
                            name: "Feast of Terror",
                            desc: "Whenever an enemy character fails a Willpower duel within Aura 3 of this character, she may heal 1 Wound."
                        },
                        {
                            name: "Rough Up",
                            desc: "Gain Trigger on Close Combat attacks:\n:r: *Rough Up*: After damaging, immediately take the Terrorize Action against a target within range (cannot declare Triggers)."
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
                            name: "Browbeat",
                            desc: "In an Ongoing Challenge, may make one Challenge flip using Intimidate instead of the required Skill (still uses the appropriate Aspect; requires someone/something to intimidate)."
                        },
                        {
                            name: "Push Around",
                            desc: "Terrorize gains Trigger:\n:c: *Push Around*: After succeeding, target immediately takes a 1 AP Action controlled by caster (cannot be attack unless scored 1+ Margin of Success; cannot force direct sacrifice)."
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
                            name: "Rule Through Fear",
                            desc: "Once per turn, use (1) Order Action to command any Minion or Peon within 6 yards that understands her and has the Terrified Condition as a subordinate (does not transfer permanent ownership; cannot force direct sacrifice)."
                        },
                        {
                            name: "Intimidating Presence",
                            desc: "When being attacked, this character may use the total of Intimidate Skill + Tenacity Aspect in place of her Defense Aspect."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Sinister Reputation",
                        desc: "Gain [+] to any flip involving the Intimidate Skill. When using Terrorize, the Terrified Condition lasts for 1 day (+1 day per Margin of Success)."
                    }
                }
            ]
        },
        {
            id: "chemist",
            name: "Chemist",
            book: "Under Quarantine",
            starting: "A Chemist begins the game with an Alchemistry skill toolkit.",
            onThePursuit: "Chemicals!: When this character fails a Crafting duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Crafting Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Poisoned Weapons",
                        desc: "Gain Trigger on Close Combat and Ranged Combat attacks:\n:c: *Infect*: After succeeding, target gains Poison +1 a number of times equal to :c: in final duel total."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Chemical Weaponry",
                            desc: "While holding an Alchemistry toolkit, gain attack: Flask of Formaldehyde (Thrown Weapons, Rg (y)1, Dmg 1/1b/1bb, Thrown; all damaged characters gain Poison +1; toolkit is not considered a weapon until used)."
                        },
                        {
                            name: "Vapor Mixture",
                            desc: "Spend 1 hour, 1 Scrip of chemicals, and pass TN 10 Alchemistry Challenge to craft 1 Vapor Mixture (Margin of Success: +1 mixture or +1 turn duration). Using it (1 AP) creates an immobile Aura 3 area of Soft Cover for 2 turns."
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
                            name: "First Hand Experience",
                            desc: "Add half completed steps in this Pursuit (rounded up) to Alchemistry Challenges and to duels made to resist poisons and diseases."
                        },
                        {
                            name: "Catalyst",
                            desc: "Characters with the Poison Condition starting turn within Aura 8 of this character suffer 1 damage from Poison and lower their Poison Condition value by 1."
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
                            name: "Transformative Vigor",
                            desc: "Spend 1 hour, 3 Scrip, and pass TN 12 Alchemistry to craft Transformative Vigor (+1 per Margin of Success). Living drinker (1 AP) gains “The Monster Within: +2 Physical Aspects (max +4), +1 Height (max 3), -2 Mental Aspects (min -4), +1 Pugilism damage” until sunrise/sunset."
                        },
                        {
                            name: "Mithridization",
                            desc: "When this character would suffer damage from the Poison Condition, she instead heals 1 damage."
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
                            name: "Elixir of Life",
                            desc: "Spend 1 hour, 5 Scrip, and pass TN 12 Alchemistry to craft Elixir of Life (+1 per Margin of Success). Living drinker (1 AP) heals 2/3/4 damage and removes one Critical Effect."
                        },
                        {
                            name: "Expunge",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Expunge",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Necromancy",
                                ap: "(0)",
                                tn: "12:c:",
                                range: "8 yards",
                                resist: "Df",
                                desc: "Target suffers damage equal to its current Poison Condition value (max 9 damage). Lower target's Poison Condition by 9 (min 0)."
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
                            name: "Truth Serum",
                            desc: "Spend 1 hour, 5 Scrip, and pass TN 10 Alchemistry to craft Truth Serum (+1 dose or +2 TN per Margin of Success). Living ingester gains “Chemical Honesty: Must pass TN 12 Wp duel to lie or evade truth; must tell honest truth on failure” for 1 hour."
                        },
                        {
                            name: "Agony",
                            desc: "Characters with the Poison Condition starting turn within Aura 3 of this character suffer a penalty to Challenge Duels equal to their current Poison value (max -3)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Mystery Brew",
                        desc: "Spend 1 hour, 8 Scrip, and pass TN 15 Alchemistry to craft Mystery Brew (+1 per Margin of Success). Flip Fate card (may cheat) for each brew:\n• :r: *Deadly Acid*: Melee weapon (Rg (y)1, Dmg 3/4b/5bb, Thrown, ignores Armor).\n• :m: *Draught of Change*: Imbibe (1 AP) to transform into chosen Beast for up to 1 hour (as Shapeshift Magia; gear unaffected).\n• :t: *Distillation of Magic*: Imbibe (1 AP) to gain “Rush of Magic: Draw and discard a card at end of round” for 24 hours.\n• :c: *Necromantic Goo*: Smear on corpse (1 AP); raised as Undead within 1 hour gains permanent +2 Wounds and +1 Acting Values."
                    }
                }
            ]
        },
        {
            id: "forgotten",
            name: "Forgotten",
            book: "Under Quarantine",
            starting: "A Forgotten begins the game with a non-magical skill toolkit.",
            onThePursuit: "Ignorant: Whenever this character fails a duel she has no Skill ranks in, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Social Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Unimportant",
                        desc: "Gain [+] to any duel made to avoid being noticed in a group. Add half completed Pursuit steps (rounded up, min +1) to Stealth Challenge totals."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Face in the Crowd",
                            desc: "Ranged Combat attacks targeting this character suffer [-] while she is within 3 yards of one or more other characters (friend or foe)."
                        },
                        {
                            name: "Slink Away",
                            desc: "Gain [+] to Defense flips against disengaging strikes. If at least one other friendly character is engaged with an enemy, that enemy cannot make disengaging strikes against her."
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
                            name: "Backstabber",
                            desc: "Hitting a target unaware of her presence with a Close Combat attack grants [+] to the damage flip, and the target gains Slow."
                        },
                        {
                            name: "Don't Mind Me",
                            desc: "If she took no offensive actions on her last turn (or round 1 before acting), make a Deceive Challenge (TN 6 + attacker Rank Value) when targeted by an enemy attack. On success, attacker must choose a different target (+2 to duel if already possessed)."
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
                            name: "Memories Gained",
                            desc: "Close Combat attacks gain Trigger:\n:m: *Memory Thief*: After damaging, make Necromancy + Tenacity vs Wp duel to mentally ask one yes/no/\"I don't know\" question; target answers truthfully without knowing."
                        },
                        {
                            name: "Memories Lost",
                            desc: "Gain access to Subsume Corpse, Forget, and Invisibility Magia regardless of Grimoire. Gain a Magical Theory if none possessed."
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
                            name: "Fade into Memory",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Fade into Memory",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Necromancy",
                                ap: "(1)",
                                tn: "10:c:",
                                range: "10 yards",
                                resist: "—",
                                desc: "Removed from reality, reappearing within range at round end.",
                                triggers: [
                                    {
                                        cost: ":m:",
                                        name: "A Memory Stirs...",
                                        desc: "Nominate a friendly willing character within 3 yards to be treated as the caster instead."
                                    }
                                ]
                            }
                        },
                        {
                            name: "Remembrance",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Remembrance",
                                typeLine: "Manifested Power",
                                av: "Cunning + Necromancy",
                                ap: "(1)",
                                tn: "10:c:",
                                range: "6 yards",
                                resist: "Wp",
                                desc: "Target gains a permanent false memory of your choice (up to 10 minutes length + 10 minutes per Margin of Success)."
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
                            name: "Flashback",
                            desc: "Discard a Twist Card to accomplish a past task taking <= 10 minutes within the last 12 hours (cannot alter observable present facts; simple tasks succeed automatically, complex ones require Fatemaster scene outside Dramatic Time)."
                        },
                        {
                            name: "Fragments",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(0)",
                                name: "Triggered Memories",
                                desc: "Discard a Twist Card, choose a Skill, and target a visible character: use target's rank in chosen Skill in place of own until scene end (or 3 turns in Dramatic Time)."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Forgettable",
                        desc: "After interacting <= 5 minutes, discard a Twist Card upon leaving sight to erase all memories of herself from target's mind. In Dramatic Time, makes enemy forget she is involved in combat."
                    }
                }
            ]
        },
        {
            id: "ghost-eater",
            name: "Ghost Eater",
            book: "Under Quarantine",
            starting: "A Ghost Eater begins the game with a Reliquary.",
            onThePursuit: "Darkest Magic: Whenever this character fails a Magic duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Harvest Chi",
                        desc: "When a Living or Spirit of Minion+ rank dies within Aura 8, harvest its soul to gain Chi +1 (adds +1 to Spells/Manifested Powers, max +3; reduced by 1 after casting; closest harvester gains; no Soulstone recharge, no Séance)."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Spirit Barrage",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Spirit Barrage",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Necromancy",
                                ap: "(1)",
                                tn: "—",
                                range: "z12 or (y)1",
                                resist: "Df",
                                desc: "Target suffers 2/3/4 damage. May lower Chi by up to 3 points: gains [+] to Attack and Damage flips per point lowered."
                            }
                        },
                        {
                            name: "Quickener",
                            desc: "When gaining the Chi Condition, push up to 2 yards in any direction after resolving the current Action."
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
                            name: "Instill Youth",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Instill Youth",
                                desc: "Reduce Chi by any amount to target a friendly character within 5 yards: for each Chi lowered, target heals 2 damage or becomes 1 year younger (cannot reduce below young adult)."
                            }
                        },
                        {
                            name: "Transcendence",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Transcendence",
                                desc: "During Dramatic Time, lower Chi by any amount: for each Chi, grant one friendly character within Pulse 8 the Spirit Characteristic and Armor +2 (max Armor +3) until start of next turn (extend 1 turn by lowering 1 Chi)."
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
                            name: "Pull of the Grave",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Pull of the Grave",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Necromancy",
                                ap: "(1)",
                                tn: "8:c:",
                                range: "10 yards",
                                resist: "Wp",
                                desc: "Target gains Slow. If target is Undead or Spirit, caster does not reduce Chi Condition after resolving."
                            }
                        },
                        {
                            name: "In the Spirit World",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "In the Spirit World",
                                desc: "Lower Chi by 1 and discard a Twist Card to gain Incorporeal until start of next turn (extend 1 turn by lowering 1 Chi)."
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
                            name: "Fortify the Spirit",
                            desc: "Gain Defensive Trigger:\nDf/Wp (:t:) *Fortify the Spirit*: Increase final duel total by current Chi value (max +3)."
                        },
                        {
                            name: "Revitalize",
                            desc: "When this character gains the Chi +1 Condition, she heals 1 damage."
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
                            name: "Spiritual Guidance",
                            desc: "When gaining Chi +1 from Harvest Chi, may instead ask one question to the killed character (answered truthfully in a 5-word spiritual whisper)."
                        },
                        {
                            name: "Hunpo Assault",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(2)",
                                name: "Hunpo Assault",
                                desc: "Lower Chi by 3 to teleport up to 8 yards, then make a 1 AP (y) attack against every enemy in range. Before each attack, may lower Chi by up to 3 for [+] to Attack and Damage per point."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Resurrection",
                        desc: "Upon death, Chi ends but remains retain Harvest Chi. Reaching Chi +10 resurrects fully intact at end of round (or immediately outside Dramatic Time), ending Chi."
                    }
                }
            ]
        },
        {
            id: "ghoul",
            name: "Ghoul",
            book: "Under Quarantine",
            starting: "A Ghoul begins with hardened teeth: natural attacks (Pugilism, Martial Arts, Grappling, Beast melee; not pneumatic limbs) ignore 1 point of Armor.",
            onThePursuit: "You Are What You Eat: When this character fails a Close Combat duel during Dramatic Time, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Close Combat Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Grim Feast",
                        desc: "This character gains the following Tactical Action:",
                        action: {
                            cost: "(2)",
                            name: "Grim Feast",
                            desc: "Devour corpse of Living or Undead Minion+ within 1 yard to gain “Well Fed +1: +1 Physical Aspects (max 4, cap +3)” for 1 hour (refreshes duration on new gain; corpse cannot be raised)."
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Unnatural Vigor",
                            desc: "Gain +1 Wound per 3 completed steps in this Pursuit (rounded up). Reduce damage suffered by Well Fed value (min 1; does not stack with Armor, use highest)."
                        },
                        {
                            name: "Razor-Sharp Teeth",
                            desc: "Natural attacks (Pugilism, Martial Arts, Grappling, Beast melee; not pneumatic limbs) deal +1 damage."
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
                            name: "Appetizer",
                            desc: "Natural attacks gain Trigger:\n:c: *Pound of Flesh*: After damaging a Living or Undead character, heal 1/2/3 damage."
                        },
                        {
                            name: "Nom Nom Nom",
                            desc: "After taking the Grim Feast action, this character heals 2/3/4 damage."
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
                            name: "Calorie Burn",
                            desc: "At turn start, lower Well Fed by 1 to gain Fast, or by 2 to gain Reactivate (cannot lower below 0)."
                        },
                        {
                            name: "Lasting Meal",
                            desc: "Well Fed from Grim Feast lasts 1 day (instead of 1 hour). Max Well Fed value increases to +4."
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
                            name: "Table Scraps",
                            desc: "May use Grim Feast on destroyed Constructs or scrap metal. Appetizer triggers apply to Constructs. Eat Your Fill applies to Constructs as well."
                        },
                        {
                            name: "Consume Fate",
                            desc: "Discard a Twist Card when declaring an Action to gain [+] to all non-damage flips made during that Action."
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
                            name: "Gobble Up",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Gobble Up",
                                typeLine: "Manifested Power",
                                av: "Speed + Athletics",
                                ap: "(0)",
                                tn: "12:m:",
                                range: "6 yards",
                                resist: "Df",
                                desc: "Push 6 yards toward target. For the rest of turn, gain [+] to attack and damage flips with natural attacks against target."
                            }
                        },
                        {
                            name: "Brain Food",
                            desc: "Well Fed Condition increases Mental Aspects as well as Physical Aspects (max Aspect value +4)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Ravenous Beast",
                        desc: "Natural attacks gain Trigger:\n:r: *Down the Gullet*: After killing a Living or Undead target, immediately take Grim Feast Action against target for 0 AP."
                    }
                }
            ]
        },
        {
            id: "medium",
            name: "Medium",
            book: "Under Quarantine",
            starting: "A Medium begins with the Spiritual Sensitivity Talent.",
            onThePursuit: "Shrieking Spirits: Whenever one of this character's non-Peon Spirit subordinates is killed within 6 yards, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Spirit Beacon",
                        desc: "Gains Spirit Characteristic. At turn start, discard a Twist Card to summon a Seishin within 3 yards (max controlled = half Pursuit steps rounded up, min 1). (1) Order Action commands all Seishin simultaneously with different orders.",
                        minion: {
                            name: "Seishin",
                            typeLine: "Peon (3), Spirit",
                            stats: {
                                might: -4, grace: 2, speed: 2, resilience: -5,
                                charm: -5, intellect: -5, cunning: -5, tenacity: -5,
                                defense: "4 (7)", walk: 5, height: 2, initiative: "3 (6)",
                                willpower: "4 (7)", charge: 0, wounds: 2
                            },
                            skills: "Centering 2, Martial Arts 2, Notice 1",
                            abilities: [
                                {
                                    name: "Ghost",
                                    desc: "Automatically killed if hit by successful attack. Ignores and ignored by characters and terrain during movement."
                                },
                                {
                                    name: "Representation of Power",
                                    desc: "At start of controller's turn, may teleport within 3 yards of controller."
                                },
                                {
                                    name: "Spiritual Empathy",
                                    desc: "Conveys simple sensory concepts to controller."
                                },
                                {
                                    name: "Invigorate",
                                    desc: "Friendly Spirits within Aura 2 gain +2 Defense."
                                }
                            ],
                            weapon: {
                                name: "Howling Fury",
                                skill: "Martial Arts",
                                av: "4",
                                resist: "Wp",
                                damage: "1/2/4",
                                special: "Rg: (y)1. Usable only if controller has Empower Spirit Talent."
                            }
                        }
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Séance",
                            desc: "This character gains the following Tactical Action:",
                            action: {
                                cost: "(1)",
                                name: "Speak with the Dead",
                                desc: "Discard a Twist Card and pass TN 12 Bewitch Challenge to summon spirit (no card discard if formal 1-hr séance with 2+ people). Contest spirit's Wp via Social Skills to ask 1 question per completed Pursuit step (1 AP per question)."
                            }
                        },
                        {
                            name: "Mark of Jigoku",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Mark of Jigoku",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Necromancy",
                                ap: "(1)",
                                tn: "—",
                                range: "8 yards",
                                resist: "Wp",
                                desc: "Target gains “Adversary: Spirits gain [+] to Attacks targeting this character” until start of caster's next turn."
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
                        name: "Blood and Wind",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Blood and Wind",
                            typeLine: "Manifested Power",
                            av: "Tenacity + Necromancy",
                            ap: "(1)",
                            tn: "10:c:",
                            range: "6 yards",
                            resist: "—",
                            desc: "Summon a Gaki within range; caster suffers 1 damage (Gaki gains Slow if activated this round; fades after 1 hour or at 0 Wounds)."
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
                            name: "Spirits of Hate",
                            desc: "Blood and Wind gains Trigger:\n:c: *Spirits of Hate*: Suffer 1 additional damage to summon an Onryo instead of a Gaki."
                        },
                        {
                            name: "Absorb Spirit",
                            desc: "When suffering damage, kill a summoned Seishin within Aura 3 to prevent 1 damage from any source (min 0) or all damage from Blood and Wind."
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
                            name: "Spirits of Wrath",
                            desc: "Blood and Wind gains Trigger:\n:c: *Spirits of Vengeance*: Suffer 2 additional damage to summon a Goryo for 10 minutes instead of a Gaki for 1 hour."
                        },
                        {
                            name: "Spiritual Command",
                            desc: "(1) Order Action commands two Spirit subordinates simultaneously with different orders."
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
                            name: "Empower Spirit",
                            desc: "Controlled Seishin gain the (1) Howling Fury attack (AV 4 Martial Arts, Rg (y)1, Resist Wp, Dmg 1/2/4)."
                        },
                        {
                            name: "Fury of the Yomi",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Fury of the Yomi",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Leadership",
                                ap: "(2)",
                                tn: "10:c:",
                                range: "Pulse 6",
                                resist: "—",
                                desc: "Friendly Spirits in range push up to 4 yards and make a 1 AP attack of caster's choice (flip as Fated characters with [+], cannot Cheat)."
                            }
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Astral Projection",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Unleash Seirei",
                            typeLine: "Manifested Power",
                            av: "Tenacity + Necromancy",
                            ap: "(1)",
                            tn: "12:c:",
                            range: "6 yards",
                            resist: "—",
                            desc: "Summon a Seirei within range for 1 hour (or until 0 Wounds)."
                        },
                        minion: {
                            name: "Seirei",
                            typeLine: "Enforcer, Spirit, Fated",
                            stats: {
                                might: 3, grace: 2, speed: 2, resilience: 2,
                                charm: -2, intellect: 0, cunning: 2, tenacity: 2,
                                defense: "4", walk: 5, height: 2, initiative: "*",
                                willpower: "5", charge: 6, wounds: 5
                            },
                            skills: "Centering 3, Intimidate 3, Melee 3, Notice 2",
                            abilities: [
                                {
                                    name: "Twinned Soul",
                                    desc: "Acts on summoner's turn and uses her AP to perform Actions."
                                },
                                {
                                    name: "Forlorn",
                                    desc: "At turn start, may suffer 2 damage to gain 1 additional AP (once per turn, requires 3+ Wounds)."
                                },
                                {
                                    name: "Fated Soul",
                                    desc: "Flips as Fated character; controller may Cheat Fate for it."
                                },
                                {
                                    name: "Incorporeal",
                                    desc: "Ignores terrain/characters during movement; halves damage from Ranged and Close Combat."
                                }
                            ],
                            weapon: {
                                name: "Razor-Sharp Fingernails",
                                skill: "Melee",
                                av: "6:c:",
                                resist: "Df or Wp",
                                damage: "3/4/5",
                                special: "Rg: (y)2. Ignores Armor. Choose Df or Wp resist.\n:c: Feast of Vengeance: After killing an enemy with Adversary, controller heals 1/2/3 damage."
                            }
                        }
                    }
                }
            ]
        },
        {
            id: "necromancer",
            name: "Necromancer",
            book: "Under Quarantine",
            starting: "A Necromancer begins with the Man's Best Friend Talent (canine companion is an ugly living-looking Canine Remains).",
            onThePursuit: "Lord of Death: Whenever one of this character's Undead subordinates is killed within 6 yards, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Magical Skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Death Magic",
                        desc: "Always has access to Raise Undead Magia regardless of Grimoire. Gains The Whisper Magical Theory if none possessed."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Eternal Servitude",
                        desc: "Undead created or controlled with Raise Undead remain under her control until destroyed (no effect on Stitched)."
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
                            name: "Rigor Mortis",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Rigor Mortis",
                                typeLine: "Manifested Power",
                                av: "Tenacity + Necromancy",
                                ap: "(1)",
                                tn: "10:c:",
                                range: "10 yards",
                                resist: "Wp",
                                desc: "Living target gains Slow. Friendly Undead target gains Fast instead."
                            }
                        },
                        {
                            name: "Specialist",
                            desc: "Choose an Undead specialty to raise at +2 TN on Raise Undead (takes higher of corpse/type stats, plus talents and attacks): Bad Parenting (Child -> Crooligan), Death Row (Murderer -> Guilty), Guild Orders (Guardsman -> Guild Autopsy), Road Kill Scholar (Dog -> Canine Remains), Union Dues (Laborer -> Crooked Man), Watery Grave (Drowned person -> Drowned), Womanizer (Woman -> Rotten Belle). May choose another instead of General Talents."
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
                            name: "Zombie Fodder",
                            desc: "Gain Defensive Trigger:\nDf (:c:) *Zombie Fodder*: After an attack succeeds against her, a controlled Undead within 2 yards suffers the attack effects instead."
                        },
                        {
                            name: "Unknowable Pain",
                            desc: "Controlled Undead gain Defensive Trigger:\nDf (:m:) *Unknowable Pain*: After suffering damage from an enemy attack, move up to Charge towards the attacker."
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
                            name: "Shuffling Horde",
                            desc: "When taking (1) Order Action on an Undead subordinate, command additional Undead subordinates equal to Charm Aspect (min +1) with different orders."
                        },
                        {
                            name: "Accomplice",
                            desc: "After this character finishes her turn, one Undead subordinate within 6 yards may immediately take its turn as if ordered."
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
                            name: "Siphon Soul",
                            desc: "Gain Trigger on Spells, Manifested Powers, and Close Combat:\n:c: *Siphon Soul*: After killing a Living target, a friendly Undead subordinate within 6 yards heals 2 damage."
                        },
                        {
                            name: "Empty Vessel",
                            desc: "After killing a Living target with an attack, discard a Twist Card to immediately cast Raise Undead on the corpse for 0 AP (cannot use Increase AP Immuto)."
                        }
                    ]
                },
                {
                    step: 10,
                    type: "single",
                    talent: {
                        name: "Corpse Conductor",
                        desc: "Undead subordinates within Aura 6 gain [+] to Close Combat attacks. Ordered Undead subordinates gain +2 Df until start of her next turn."
                    }
                }
            ]
        },
        {
            id: "sawbones",
            name: "Sawbones",
            book: "Under Quarantine",
            starting: "A Sawbones begins the game with a Doctor skill toolkit.",
            onThePursuit: "Trust Me, I'm a Doctor: Whenever this character fails an Expertise duel, she may draw a card. During the Epilogue, a character on this Pursuit may advance in any Expertise skill in addition to those Skill Advancement options presented by the Fatemaster.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Under My Care",
                        desc: "Spend 5 minutes checking a Living character (can be self): target gains “Under My Care: Heals +1 damage when healed by applier” (max targets = Doctor ranks, min 1)."
                    }
                },
                {
                    step: 1,
                    type: "choice",
                    talents: [
                        {
                            name: "Surgical Instruments",
                            desc: "While holding Doctor toolkit, gain attacks:\n• Surgical Instruments (Melee, Rg (y)1, Dmg 2/3/5, ignores Hard to Wound).\n• Syringe (Melee, Rg (y)1, Dmg 0/0/1, applies Poison +4; :r: *Overdose*: Deals 2/3/4 damage and prevents Poison +4)."
                        },
                        {
                            name: "Patient Files",
                            desc: "Damage flips against characters with Under My Care applied by this character suffer [-]."
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
                            name: "Battlefield Surgery",
                            desc: "Surgery takes 5 min per negative Wound (instead of 1 hr). May operate on characters who had surgery in past week (if > 1 day ago). May perform First Aid on targets treated in past hour at +5 TN."
                        },
                        {
                            name: "Don't Mind Me",
                            desc: "If she took no offensive actions on last turn (or round 1 before acting), make Deceive Challenge (TN 6 + attacker Rank Value) when targeted by enemy attack to force a retarget (+2 if already possessed)."
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
                            name: "I'm a Doctor!",
                            desc: "In an Ongoing Challenge, may make one Challenge flip using Doctor instead of the required Skill (still uses appropriate Aspect)."
                        },
                        {
                            name: "Medical Assistant",
                            desc: "Gain a Medical Assistant minion; (1) Order to command it becomes a (0) Action (replace if killed via TN 10 Bureaucracy/Carouse and 5 Scrip).",
                            minion: {
                                name: "Medical Assistant",
                                typeLine: "Minion (5), Living",
                                stats: {
                                    might: 1, grace: 2, speed: 1, resilience: 1,
                                    charm: 0, intellect: 1, cunning: 1, tenacity: 1,
                                    defense: "5 (10)", walk: 5, height: 2, initiative: "2 (7)",
                                    willpower: "4 (9)", charge: 5, wounds: 6
                                },
                                skills: "Carouse 1, Centering 2, Doctor 2, Evade 3, Labor 1, Literacy 1, Melee 3, Notice 1, Toughness 1",
                                abilities: [
                                    {
                                        name: "Test Subject",
                                        desc: "Heals 1 damage at end of activation."
                                    },
                                    {
                                        name: "Hands Off!",
                                        desc: "Df/Wp (:m:) Hands Off!: After being damaged by enemy attack, push up to 4 yards."
                                    }
                                ],
                                weapon: {
                                    name: "Sharp Scalpel",
                                    skill: "Melee",
                                    av: "4 (9)",
                                    resist: "Df",
                                    damage: "1/3/4",
                                    special: "Rg: (y)1. :c: Infect: Gains Poison +1 per :c: in final duel total.\n\n(1) Medical Attention (Doctor/Intellect): TN 8, Rg: (y)1. Target friendly within 1 yard (not targeted in past hour) heals 2 damage and gains Slow."
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
                            name: "MEDIC!",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Patch Up",
                                typeLine: "Manifested Power",
                                av: "Cunning + Doctor",
                                ap: "(1)",
                                tn: "10:r:",
                                range: "5 yards",
                                resist: "Wp",
                                desc: "Target heals 1/2/3 damage and removes 1 Critical Effect (target may choose not to resist). When a friendly in range suffers a Critical Effect, if not Slow, discard a Twist Card and become Slow to cast immediately (ignores the Critical Effect on success)."
                            }
                        },
                        {
                            name: "Take Your Meds",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Take Your Meds",
                                typeLine: "Manifested Power",
                                av: "Doctor + Prestidigitation",
                                ap: "(1)",
                                tn: "10",
                                range: "8 yards",
                                resist: "Wp",
                                desc: "Must declare a Trigger:\n• :r: *Hallucinogens*: Target gains +1 Melee damage, [-] on non-Melee duels.\n• :m: *Uppers*: Target gains [+] to all duels; first Action each round must be Walk.\n• :t: *Downers*: Target gains Armor +1, -1 general AP at turn start.\n• :c: *Painkillers*: Target heals 2/3/4 damage; suffers +1 damage when damaged."
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
                            name: "Life Support",
                            desc: "Doctor Challenge (TN 10 + negative Wounds) on corpse dead <= Doctor ranks rounds (with untrapped soul): revives at 0 Wounds. Discard Twist Cards to remove Critical Effects (cannot repair Amputated/Obliterated)."
                        },
                        {
                            name: "Quarantine",
                            desc: "This character gains the following Manifested Power:",
                            power: {
                                name: "Quarantine",
                                typeLine: "Manifested Power",
                                av: "Cunning + Doctor",
                                ap: "(1)",
                                tn: "10:r:",
                                range: "5 yards",
                                resist: "Wp",
                                desc: "Target gains “Probably Plagued: [-] on Social Challenges. Living characters starting turn within 3 yards must pass TN 10 Doctor or push away > 3 yards” until targeted by TN 10 Doctor Challenge.",
                                triggers: [
                                    {
                                        cost: ":c:",
                                        name: "Even a Broken Clock",
                                        desc: "Target gains choice of Blighted +2, Infection +3, or Poison +4."
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
                        name: "Code Red",
                        desc: "When a friendly Living character is knocked unconscious or killed, this character may discard a Twist Card to gain Reactivate."
                    }
                }
            ]
        }
    ];

    if (typeof PURSUITS_DATA !== "undefined" && Array.isArray(PURSUITS_DATA)) {
        PURSUITS_DATA.push(...UNDER_QUARANTINE_PURSUITS);
    } else {
        window.PURSUITS_DATA = UNDER_QUARANTINE_PURSUITS;
    }
})();
