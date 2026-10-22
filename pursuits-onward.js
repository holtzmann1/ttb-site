/**
 * Through the Breach 2nd Edition
 * Expansion: Onward!
 * Basic Pursuits (with Specializations) & Advanced Pursuits Database
 */

(function() {
    const ONWARD_BASIC_PURSUITS = [
        {
            id: "beastmaster",
            name: "Beastmaster",
            book: "Onward!",
            starting: "A Beastmaster begins with 5 Scrip and a subordinate character with the Beast Characteristic (Rank Value 5 or less).",
            onThePursuit: "Wild Animals: When any of this character's Beast subordinates suffers 3+ damage from a single source, she may draw a card. During Epilogue, advance in any Expertise Skill.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Born and Bred",
                        desc: "Gain [+] on all Husbandry Challenges. May use Husbandry instead of Doctor when targeting a Beast (First Aid, Surgery)."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Loyal Companion",
                        desc: "Gain one subordinate Beast of Rank Value 5 or less (or increase existing subordinate Beast Rank Values by +1).\n\nGain Action: (1) *Tend*: TN 10 Husbandry duel targeting friendly Beast within 2 yards to heal 1 damage (+1 per Margin of Success)."
                    }
                },
                {
                    step: 2,
                    type: "choice",
                    talents: [
                        {
                            name: "General Talent",
                            desc: "This character gains one General Talent."
                        },
                        {
                            name: "Loyal Companion",
                            desc: "Gain one subordinate Beast of Rank Value 5 or less (or increase existing subordinate Beast Rank Values by +1)."
                        }
                    ]
                },
                {
                    step: 3,
                    type: "choice",
                    talents: [
                        {
                            name: "Law of Nature",
                            desc: "Discard a card to have one subordinate Beast add the discarded card's suit to all final duel totals until start of its next turn."
                        },
                        {
                            name: "Law of the Pack",
                            desc: "Increase duel totals by +2 when targeting a Beast with a Husbandry Challenge. If it healed the target, all friendly subordinate Beasts of same type within 5 yards heal 1 damage."
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
                        name: "Menagerie",
                        desc: "Keep Beasts in Menagerie (max total Rank Value = 3x completed steps; accompanying max = 2x completed steps; Explorer's Society members ignore total limit at Manor).\n\nOnce per day, target Beast/Swampfiend within 5 yards with contested Husbandry vs Wp duel to apply Tamed +1 (+1 per Margin of Success). When Tamed equals Rank Value, it joins Menagerie as a subordinate."
                    }
                }
            ],
            specializations: {
                base: {
                    id: "base",
                    name: "Beastmaster (Базовый путь)",
                    steps: [
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
                                    name: "Effective Training",
                                    desc: "Subordinate Beasts may Cheat Fate from this character's Control Hand (ignoring subordinate Rank Value for duel totals)."
                                },
                                {
                                    name: "Nonlethal Subduction",
                                    desc: "Attacks against Beasts may be declared non-lethal (damage flips suffer [-], no Critical Effects). Dropping target to 0 or below forces Unconsciousness Challenge (TN increased by nearby subordinates up to +3)."
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
                                    name: "Iconic Animalia",
                                    desc: "At day start, choose one Beast in Menagerie: it does not use Order Actions, acting on its own turn with full AP under this character's control."
                                },
                                {
                                    name: "Ecosystemic",
                                    desc: "May take Order Action as (0) when targeting friendly subordinate Beast. All friendly subordinate Beasts gain Unimpeded (ignore terrain penalties during movement)."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Zoological Genius",
                                desc: "Gain +1 AP at turn start for every two accompanying subordinate Beasts (maximum +2 AP)."
                            }
                        }
                    ]
                },
                cryptozoologist: {
                    id: "cryptozoologist",
                    name: "Cryptozoologist (Криптозоолог)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Cryptolog",
                                desc: "Against non-Monstrous species in Cryptolog: +1 to duel totals and ignore one [-].\n\nAction: (0) *Cryptologged*: TN = Rank Value (5+) Husbandry duel on non-Monstrous Beast/Swampfiend within 25 yards to record species and 1 Talent/Action into Cryptolog (draw card per Margin of Success; costs (1) AP if unfriendly)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Preferred Specimens",
                                    desc: "Once per day, track a chosen Beast/Swampfiend via Ongoing Challenge (Husbandry/Track/Wilderness, TN = Rank Value, Success = Fate Points, Duration 2 hrs, Failure 4) to encounter it."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Bestial Biology",
                                desc: "This character gains Action:\n(1) *Bestial Biology*: Select a Talent in Cryptolog: all friendly characters ignore that Talent on all Beasts and Swampfiends until round end."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "I Told You It Was Real!",
                                    desc: "When encountering a wild Beast/Swampfiend, discard cards: for every 3 cards discarded, grant the creature one Talent or Action from Cryptolog."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Monstrous Manual",
                                desc: "Permanently remove 6 entries from Cryptolog to apply the Monstrous template to one owned Beast (excluding +1 AP; max 1 Monstrous subordinate at a time)."
                            }
                        }
                    ]
                },
                huntmaster: {
                    id: "huntmaster",
                    name: "Huntmaster (Егерь / Охотник)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Declare Adversary",
                                desc: "This character gains the following Manifested Power:",
                                power: {
                                    name: "Declare Adversary",
                                    typeLine: "Manifested Power",
                                    av: "Cunning + Track",
                                    ap: "(0) or (1)",
                                    tn: "12",
                                    range: "15 yards",
                                    resist: "—",
                                    desc: "Name a Minion, Enforcer, Henchman, or Master. This character and all friendly subordinate Beasts gain [+] to attacks targeting characters with that name (only 1 Adversary active at a time)."
                                }
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Predatory Instincts",
                                    desc: "When targeting an enemy with an Attack Action, suffer [-] to attack flip to gain [+] to damage flip (or vice versa)."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Smell of Blood",
                                desc: "After damaging an enemy, discard a card to have one friendly Beast in Menagerie take a 1 AP Move Action."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Ripping and Tearing",
                                    desc: "When applying a Condition from an Attack Action, discard a card to instead apply Bleeding Out +1 or Wounded +1 (healing flips suffer [-], healed amount reduced by -1; TN 12 Doctor to remove)."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "The Wildest Hunt",
                                desc: "At day start, select one Beast in Menagerie. Whenever issuing an Order to it, up to 2 additional accompanying Beasts of the same type may each take a 1 AP Action."
                            }
                        }
                    ]
                }
            }
        },
        {
            id: "gourmand",
            name: "Gourmand",
            book: "Onward!",
            starting: "A Gourmand begins with a Culinary Skill toolkit and food ingredients worth up to 5 Scrip.",
            onThePursuit: "Overcooked: When this character fails a duel with the Charm Associated Aspect, she may draw a card. During Epilogue, advance in any non-Magical Charm Skill.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Foraging for Food",
                        desc: "Spend 1 hour and pass TN 8 Culinary/Wilderness Challenge to find 1 edible ingredient (+1 per Margin of Success)."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Home Cooked Meal",
                        desc: "Pass TN 5 Culinary duel (+1 per unique ingredient) to create Servings equal to Margins of Success (last 1 day).\n\nConsume Serving (1 AP within 1 yard): Heals 1 damage and grants “Well Fed +1: +1 Physical Aspects (max 4, cap +3)” for 1 hour."
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
                            name: "Walking Kitchen",
                            desc: "While holding a Culinary toolkit, gain Armor +1 (no Defense penalty) and reduce damage from Burning by 2."
                        },
                        {
                            name: "Taste Test",
                            desc: "When creating at least 1 Serving, gain the benefits of consuming a Serving without expending it. Automatically detect poisons and foreign substances in food/drink within 1 yard."
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
                        name: "Gourmet Creations",
                        desc: "This character gains Action:\n(0) *Curated Menu*: Pass TN 10 Culinary duel. Servings grant declared Trigger for 1 hour until next turn:\n• :r: *Appetizers*: 1/1/2 healing flip.\n• :m: *Brain Food*: Well Fed applies to Mental Aspects instead.\n• :c: *Hit the Spot*: Well Fed also applies to one chosen Skill.\n• :t: *Dinner Rush*: Initiative flip increased by +1."
                    }
                }
            ],
            specializations: {
                base: {
                    id: "base",
                    name: "Gourmand (Базовый путь)",
                    steps: [
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
                                    name: "Bon Appétit",
                                    desc: "Servings heal +1 extra damage. At full health, excess healing becomes temporary Wounds (last 1 hour)."
                                },
                                {
                                    name: "Gorged",
                                    desc: "Consuming a Serving also grants Hard to Wound +1 (damage flips against target suffer [-]) for 1 hour."
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
                                    name: "Food Fight",
                                    desc: "Gain weapon: Food Fight (Culinary + Grace, Rg 5, Dmg 1/1/2). Reduce Servings by X to select X effects: Catapult Lunchbox (heals allies), Splattering (1/2b/3bb), Boiling (Burning +2), Spoon (Dazed). May count targets as having consumed a Serving."
                                },
                                {
                                    name: "Larder Storage",
                                    desc: "Serving duration effects increase by +1 hour. Servings retain potency for up to 1 week."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Tour de Force",
                                desc: "Add 2 suits of choice to all Culinary duels/Challenges and declare any number of Triggers."
                            }
                        }
                    ]
                },
                patissier: {
                    id: "patissier",
                    name: "Pâtissier (Кондитер)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Sweet Treats",
                                desc: "Creating food with sweetener, flour, and another ingredient creates Treats (count as Servings, but heal 2 damage instead of 1)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Sticky Trap",
                                    desc: "This character gains Action:\n(1) *Sticky Trap*: Expend 1 Treat to place a 1-yard sticky puddle within 5 yards. Passing through inflicts Slow and Speed -2 until end of next turn."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Sugar Rush",
                                desc: "Consuming a Treat can be done as a (0) Action to gain Fast instead of Well Fed."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Baked Fresh",
                                    desc: "Curated Menu gains Triggers:\n• :r: *Baker's Dozen*: Consuming a Treat counts as consuming 1 additional Treat.\n• :m: *Confectional Wisdom*: Living consumer resolves one additional (0) Action during turn."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Crème de la Crème",
                                desc: "This character gains Action:\n(2) *Blue Ribbon Bakery*: Expend 1 Treat on ally within 1 yard: target loses Slow, gains Fast, and gains Reactivate."
                            }
                        }
                    ]
                },
                brewer: {
                    id: "brewer",
                    name: "Brewer (Пивовар / Бариста)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Specialty Brews",
                                desc: "Brewing with plants and water creates Brews (Servings that grant Speed +1 for 10 min, max +3). Fermenting grains/veggies for 1 week creates Flasks (grants Intoxicated, or Poison +2 if already Intoxicated; counts as Serving for allies)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Spillage",
                                    desc: "Brewing alcohol takes 1 day. When a friendly drinks a Brew/Flask, an ally within 1 yard also drinks it.\n\nAction: (1) *Spillage*: Expend 1 Brew/Flask for 3-yard puddle; passing through ends move and requires TN 12 Acrobatics or places 1 yard away."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "The Long Steep",
                                desc: "Consuming a Brew grants Focused +1 and removes Dazed. Consuming a Flask ignores Wp penalties from Intoxicated, and Poison from drinking heals instead."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Cheers!",
                                    desc: "Curated Menu gains Triggers:\n• :t: *Caffeinated*: Drinker gains Df Trigger: Df (Suit) *Jittery* (Gain Shielded +1).\n• :c: *Shot of Clarity*: If gaining Intoxicated from Brew, gain 1 AP instead."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Another Round!",
                                desc: "This character gains Action:\n(2) *Another Round!*: Expend X Brews/Flasks (range +2 yards per drink). For each Brew, allies in range gain Speed +1 and draw a card. For each Flask, all targets gain Intoxicated (2+ Flasks: allies count [-] as [+] until round end; 3+ Flasks: enemies count [+] as [-])."
                            }
                        }
                    ]
                }
            }
        },
        {
            id: "methodologist",
            name: "Methodologist",
            book: "Onward!",
            starting: "A Methodologist begins with 2 Magia and 1 Immuto in her Alchemicery Grimoire.",
            onThePursuit: "Test Failure: When this character fails a Mathematics duel, she may draw a card. During Epilogue, advance in any Academic Skill.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "-Onomies and -Ologies",
                        desc: "Gain two Mathematics Triggers (:r: Understanding, :c: Substitutions, :t: Processes, :m: Corrections). Once per day, use Mathematics in place of any Academic, Crafting, or Magical Skill."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Alchemicery",
                        desc: "Add 2 Magia to Alchemicery (spells cast with Scientific Method Magical Theory). Each day, prepare Magia/Immuto equal to 1 + completed Pursuit steps."
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
                            name: "Not Magic, Science",
                            desc: "Add Debunked! Magia to Alchemicery (always prepared). May use Mathematics instead of Counter-Spelling when casting it."
                        },
                        {
                            name: "Scientific Theory",
                            desc: "Increase all Skill values in Scientific Method Magical Theory by +1 (max 2). Add 2 Immuto to Alchemicery."
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
                        name: "Thesis",
                        desc: "Research Magia via Ongoing Challenge Unifying Theories (Mathematics, TN = spell TN, Success = 1 + TN/5, Duration 1 day, Failure 3) to add it to Alchemicery."
                    }
                }
            ],
            specializations: {
                base: {
                    id: "base",
                    name: "Methodologist (Базовый путь)",
                    steps: [
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
                                    name: "Prima Materia",
                                    desc: "Action: (2) *Prima Materia*: Swap one prepared Magia for an unprepared Magia in Alchemicery."
                                },
                                {
                                    name: "On Fundamentals",
                                    desc: "Add 3 Immuto to Alchemicery. May research Immuto via Unifying Theories (TN 5)."
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
                            type: "single",
                            talent: {
                                name: "Create Magnum Opus",
                                desc: "Every 15 successes in Unifying Theories creates one Magnum Opus (Philosopher's Soulstone, Alkahest, Specterglass, Essentia Mortis, Homunculus, Secretum Magicae)."
                            }
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Golden Ratio",
                                desc: "Drawing Twist Cards in sequence 1, 2, 3, 5, 8, 13 completes the Golden Ratio and immediately crafts a Magnum Opus."
                            }
                        }
                    ]
                },
                astronomer: {
                    id: "astronomer",
                    name: "Astronomer (Астроном)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Head in the Clouds",
                                desc: "Add 3 Immuto to Alchemicery (always prepared, do not count against preparation limit)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Eyes Above",
                                    desc: "Action: (0) *Eyes Above*: Discard cards to increase range of an ally's weapon/power within 15 yards by +5 yards (+5 yards per discarded card) until next turn."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Falling Skies",
                                desc: "This character gains the following Manifested Power:",
                                power: {
                                    name: "Falling Skies",
                                    typeLine: "Manifested Power",
                                    av: "Intellect + Mathematics",
                                    ap: "(2)",
                                    tn: "Special",
                                    range: "20 yards",
                                    resist: "—",
                                    desc: "Call a comet at target point: add duel total to strength. Resolve whenever desired: 1-12 (1 yd, 1/2/3 dmg); 13-20 (3 yds, 2/3/4 dmg, Dazed); 21-34 (7 yds, 3/4/5 dmg, Dazed, Prone); 35-49 (12 yds, 5/6/7 dmg, Dazed, Prone, Slow); 50+ (18 yds, 7/8/9 dmg, Dazed, Prone, Slow, Focus 0; +2 dmg per 10 over 50)."
                                }
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Stargazer's Curse",
                                    desc: "Failing Mathematics duel gives Crazy +1. While Crazy: (1) View the Endless (rearrange top cards of deck); (1) Celestial Elucidation (swap a prepared Magia for any unknown Magia for the day)."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Alter the Constellations",
                                desc: "When failing Mathematics or Magical duel with TN <= 14, automatically pass it and gain Crazy +2 (removed only via Centering Challenge)."
                            }
                        }
                    ]
                },
                botanist: {
                    id: "botanist",
                    name: "Botanist (Ботаник)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Herbology",
                                desc: "Add two Sorcery Magia requiring Elemental Immuto, and the Natural Elemental Immuto to Alchemicery (always prepared)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Green Thumb",
                                    desc: "Casting Natural spell with TN 12+ grants 1 Seed.\n\nAction: (2) *Punnett Square*: Discard 1/2/3 Seeds to summon a permanent subordinate Plant of Rank Value 6/7/8 with Rooted within 1 yard of a Rooted character."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Panacea",
                                desc: "Every 15 successes in Unifying Theories crafts 1 Panacea. Use as (0) on target within 1 yard to pick 3: full heal, remove all Conditions, remove all Critical Effects, restore lost memories/soul."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Uproot",
                                    desc: "Remove Rooted from one friendly subordinate Plant (remains subordinate until another is uprooted)."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Mycelium Network",
                                desc: "Redirect Conditions or damage to a Plant within 10 yards (discard a card if targeting same plant again). Draw spell range and line of sight from any friendly Plant within 10 yards."
                            }
                        }
                    ]
                },
                geologist: {
                    id: "geologist",
                    name: "Geologist (Геолог)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Quickmine",
                                desc: "Add one Sorcery Magia and Earth & Stone Elemental Immuto to Alchemicery (always prepared).\n• Earth (TN +1): Target treats movement as Severe (Hazardous if added twice).\n• Stone (TN +2): Target gains Dazed (+1 duration per added instance)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Echoed Sight",
                                    desc: "Underground: determine exact location, [+] on Notice/Track/Wilderness, no darkness penalties. Discard card to detect all metals, stone structures, and beings within 50 yards."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Tacta Auri",
                                desc: "Every 15 successes in Unifying Theories crafts 1 Tacta Auri.\n\nAction: (2) *Transmuting Touch*: Discard 5-Destiny cards: target within 1 yard must discard 5-Destiny cards or Height+1 Fate Points, or turns to solid gold statue (worth 150 Scrip for small objects)."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Rocky Ground",
                                    desc: "Ignore Severe terrain and ground-based Hazardous terrain.\n\nManifested Power: Rocky Ground (Resilience + Mathematics, AP 2, TN 12, Pulse 4): Area within 4 yards becomes Hazardous Terrain."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Transmutation",
                                desc: "This character gains Manifested Power:\n*Transmutation* (Tenacity + Mathematics, AP 2, TN 18, Self): Replace profile with Stone or Earth Golem for 1 + Mathematics rounds (returns unconscious at 0 Wounds)."
                            }
                        }
                    ]
                }
            }
        },
        {
            id: "explorer",
            name: "Explorer",
            book: "Onward!",
            starting: "An Explorer begins with an Academic or Training Toolkit and up to 5 Scrip of items.",
            onThePursuit: "You Belong in a Museum: When this character fails a duel, she may suffer 2 irreducible damage to draw a card. During Epilogue, advance in any Academic Skill.",
            steps: [
                {
                    step: 0,
                    type: "single",
                    talent: {
                        name: "Fieldwork",
                        desc: "Increase duel totals by +2 during Ongoing Challenges taking place in ruins, wilderness, or non-urban areas."
                    }
                },
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Areas of Study",
                        desc: "At day start, increase any one Skill by +1 until end of day."
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
                            name: "Preparedness",
                            desc: "Select one additional Skill when resolving Areas of Study."
                        },
                        {
                            name: "Dumb Enough to Work",
                            desc: "Action: (0) *According to Plan*: Suffer 1 damage to allow an ally within 10 yards to move 2 yards, discard and draw a Twist Card, or resolve a (0) Action."
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
                        name: "Extra Supplies",
                        desc: "Select one additional Skill of the same category for every skill toolkit in possession."
                    }
                }
            ],
            specializations: {
                base: {
                    id: "base",
                    name: "Explorer (Базовый путь)",
                    steps: [
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
                                    name: "Well-Weathered",
                                    desc: "Reduce the resting time needed to lower environmental Conditions (Claustrophobia, Frostbite, Sunstroke) by 50%."
                                },
                                {
                                    name: "Societal Favors",
                                    desc: "Gain 2 Explorer's Society Benefits per month (usable even without formal Society membership)."
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
                                    name: "Impromptu Innovation",
                                    desc: "Suffer 1 damage to treat next (0) Action as (1) Action, or vice versa."
                                },
                                {
                                    name: "Reconfiguring",
                                    desc: "Suffer 1 damage to treat next Twist Card played as having a value of 9."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Acts of Legend",
                                desc: "Select one additional Skill for Areas of Study. Discard a Twist Card during an Academic/Training duel to add its value to final total (usable Destiny Steps times per session)."
                            }
                        }
                    ]
                },
                cartographer: {
                    id: "cartographer",
                    name: "Cartographer (Картограф)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Mapmaking",
                                desc: "Craft or upgrade maps via Creative Cartography (Track/Wilderness; TN: Settled 16, Wild 14, Unexplored 12, Off-Map 10; Duration 1 day).\nBonuses: 1 (Sketches: +1 Wilderness), 2-3 (Basic: +1 Wild), 4-5 (Topo: [+] Wild), 6-7 (Monsters: ignore 1 failure, no ambushes), 8-9 (Detailed: [+] Notice), 10+ (Oasis wonder)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Trailblazing",
                                    desc: "Each Success earned on the Creative Cartography Ongoing Challenge counts as 2 successes."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Adventure Awaits!",
                                desc: "Discard a Twist Card during a duel involving a relevant Map to add its value and suit to total. Double Exploits and Benefits from Mapmaker Honor."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "At the Edge of the World",
                                    desc: "Make a free duplicate copy when creating a Map. Upgrades apply to all possessed maps of the same area."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "Environmental Change",
                                desc: "Gain 1 Environmental Charge when upgrading a map to Bonus 3.\n\nAction: (1) *Environmental Change*: Expend 1 Charge to manifest a local environmental change (quicksand, weather shift, shelter, pure spring water)."
                            }
                        }
                    ]
                },
                treasure_hunter: {
                    id: "treasure_hunter",
                    name: "Treasure Hunter (Охотник за сокровищами)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Nice Find",
                                desc: "When selling loot/treasure, discard cards: each discarded card increases gained Scrip by +25%."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "All That Glitters",
                                    desc: "Discard cards when examining Grimoire/Relic to reveal secret qualities or next locked Tier. Automatically unlocks First Tier of any Relic acquired."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Tomb Raider's Luck",
                                desc: "Add 1 permanent Magia to newly discovered Grimoires. Reduce Cursed Condition by 1 at the start of each day."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Looted Ruins",
                                    desc: "Discard Twist Card during duels involving Grimoires/Relics to add its value and suit. Double Exploits and Benefits from Acquisitioner Honor."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "X Marks the Spot",
                                desc: "Outside Malifaux City, discard a card at day start to gain Treasure Mapped +1. Expend to discover: 3 pts (Special Item), 6 pts (Unique Grimoire), 12 pts (Relic)."
                            }
                        }
                    ]
                },
                oceanographer: {
                    id: "oceanographer",
                    name: "Oceanographer (Океанограф)",
                    steps: [
                        {
                            step: 6,
                            type: "single",
                            talent: {
                                name: "Into the Deep End",
                                desc: "Gain [+] on Athletics (swimming) and Track/Wilderness on water. Gain Aquatic Talent (full speed swimming, underwater Charge)."
                            }
                        },
                        {
                            step: 7,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Freediver",
                                    desc: "Hold breath for 5 minutes. Count up to 5 failed Suffocating Challenges per day as successes. Move across Severe water terrain at normal speed."
                                }
                            ]
                        },
                        {
                            step: 8,
                            type: "single",
                            talent: {
                                name: "Sea Legs",
                                desc: "Gain [+] on sailing/crafting Aquatic Vehicles, no penalties on unstable platforms, [+] to Initiative on water."
                            }
                        },
                        {
                            step: 9,
                            type: "choice",
                            talents: [
                                {
                                    name: "General Talent",
                                    desc: "This character gains one General Talent."
                                },
                                {
                                    name: "Deadly Catch",
                                    desc: "Discard Twist Card against Swampfiends or on water to add value and suit to total. Double Exploits and Benefits from Ichthyist Honor."
                                }
                            ]
                        },
                        {
                            step: 10,
                            type: "single",
                            talent: {
                                name: "I'm the Captain Now",
                                desc: "Gain an Aquatic Vehicle worth <= 500 Scrip (or 500 Scrip credit, or 50% discount on any vessel)."
                            }
                        }
                    ]
                }
            }
        }
    ];

    const ONWARD_ADVANCED_PURSUITS = [
        {
            id: "magnate",
            name: "Magnate",
            book: "Onward!",
            isAdvanced: true,
            requirements: "Социальный статус знаменитости, богатство или успешная ложь об огромном влиянии.",
            steps: [
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Cult of Personality",
                        desc: "Success on Social Challenge grants 1 Fame Card (max = completed steps; usable as Twist Card, discard to pass Social failure, enter exclusive clubs, or grant ally suit and +2/+3/+4).\n\nTarnished Reputation: Embarrassment discards 2 Fame Cards and gives [-] to Social duels for 3 days."
                    }
                },
                {
                    step: 2,
                    type: "single",
                    talent: {
                        name: "Flush With Cash",
                        desc: "Discard a Fame Card to gain 20 Scrip immediately. May pay 20 Scrip in place of discarding a Fame Card (counts as Moderate card)."
                    }
                },
                {
                    step: 3,
                    type: "single",
                    talent: {
                        name: "Social Influence",
                        desc: "Discard Fame Cards in Narrative Time to erase infractions: Minor (1 Fame), Typical (2 Fame), Major (3 Fame), Severe (4 Fame: murder, treason, illegal soulstones)."
                    }
                },
                {
                    step: 4,
                    type: "single",
                    talent: {
                        name: "Bribery",
                        desc: "This character gains Action:\n(2) *Bribery*: Discard Fame Card for Barter/Bewitch/Convince vs Wp on enemy within 10 yards ([-] if non-human). On success, target immediately takes a turn under Order Action and exits combat if paid > 5x Willpower in Scrip."
                    }
                },
                {
                    step: 5,
                    type: "single",
                    talent: {
                        name: "Center of it All",
                        desc: "Gain/lose twice as many Fame Cards. Discarding Fame Card for club access reveals a relevant secret.\n\nGain Talent: When You’re Famous, People Just Give You Things (Gain 50 Scrip allowance per month)."
                    }
                }
            ]
        },
        {
            id: "dua_operative",
            name: "DUA Operative",
            book: "Onward!",
            isAdvanced: true,
            requirements: "Опыт шпионажа, саботажа (напр. Infiltrator) и прохождение проверки по шифру в конспиративное убежище.",
            steps: [
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Ungentlemanly Skills",
                        desc: "Gain 5 Skill Points across Deceive, Explosives, Forgery, Grappling, Lockpicking, Melee, Pick Pocket, Pistol, or Stealth."
                    }
                },
                {
                    step: 2,
                    type: "single",
                    talent: {
                        name: "Turncoat",
                        desc: "Action: (1) *Inevitable Betrayal*: Attack target within 2 yards considering you friendly: damage flip ignores [-] and gains [+].\n\nManifested Power: Part of the Plan (Intellect + Deceive, AP 1, TN 12, Wp, 10 yds): Target treats caster as friendly and attacks against caster suffer [-]."
                    }
                },
                {
                    step: 3,
                    type: "choice",
                    talents: [
                        {
                            name: "Hidden Agenda (Tier I)",
                            desc: "In urban areas, pass Ongoing Challenge (TN 15, 4 hrs) to gain Secret Plans. Tier I: Sabotage (1 plan: [-] on duel, Muddled +1, no Fate Points), Double Cross (1 plan: pause ally turn for own turn, ally suffers 2 dmg), Hidden Cache (2 plans: allies draw card and gain 2 Scrip gear)."
                        },
                        {
                            name: "Umbral Technology (Tier I)",
                            desc: "Wield 1 Tier I Umbral Device: Refraction Matrix ((0) Activate Refraction: [+] Stealth, Soft Cover, Umbra trait), Faraday Collar (Armor vs Umbra +2; Df Trigger blinds), or Kantcrystal (Umbra trait, Df push 5 yds, (0) Second Shadow gives Umbra)."
                        }
                    ]
                },
                {
                    step: 4,
                    type: "choice",
                    talents: [
                        {
                            name: "Hidden Agenda (Tier II)",
                            desc: "Access Tier II Plans: Incriminate (1 plan: clean crime scene; 2 plans: frame someone else), Secret Passages (2 plans: leave Dramatic Time from cover, reappear within 3 yards of anyone at round start), The Time to Act (3 plans: gain Reactivate)."
                        },
                        {
                            name: "Umbral Technology (Tier II)",
                            desc: "Wield Tier II Umbral Devices: Penumbral Converter ((1) Shade Swap: switch places with Umbra target within 10 yds; target gains Slow), Oculus Obscura (Grimoire with remote vision/hearing and auto-cast up to TN 8)."
                        }
                    ]
                },
                {
                    step: 5,
                    type: "choice",
                    talents: [
                        {
                            name: "Hidden Agenda (Tier III)",
                            desc: "Access Tier III Plans: Backup Plan (2 plans: allies within 5 take free Wait), Explosive Turn of Events (2+X plans: plant X bombs dealing 4/5/6 dmg), Reports of My Death... (3 plans: revive 24 hrs after death at full health, once per character)."
                        },
                        {
                            name: "Umbral Technology (Tier III)",
                            desc: "Wield Tier III Umbral Devices: Antiluminal Bridge (creates 2 teleport portals for Umbra characters), Black Mirror (retaliate damage and conditions to attacker within 2 yds), Silhouettifier ((1) Peeled Shadow: summon Daeva subordinate for 1 hr)."
                        }
                    ]
                }
            ]
        },
        {
            id: "paleontologist",
            name: "Paleontologist",
            book: "Onward!",
            isAdvanced: true,
            requirements: "Опыт раскопок и базовые познания в некромантии/окаменелостях.",
            steps: [
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Petrified Remains",
                        desc: "Gain Raise Undead Magia; may use History instead of Necromancy for summoning Undead. TN is +5 on fleshy corpses, but gains +:c: if target is mostly bones or dead > 10 years."
                    }
                },
                {
                    step: 2,
                    type: "single",
                    talent: {
                        name: "Disinterred",
                        desc: "Raise Undead initial duration increases to 1 hour. Skeletal Undead summoned count their Rank Value as Minion (6) unless higher."
                    }
                },
                {
                    step: 3,
                    type: "single",
                    talent: {
                        name: "Filled with Bones",
                        desc: "When raising an Undead, may animate only its skeleton (rips out of flesh): halves Wounds (min 1), gains +2 Willpower, +1 Defense, and revives at full Wounds."
                    }
                },
                {
                    step: 4,
                    type: "single",
                    talent: {
                        name: "Rapid Fossilization",
                        desc: "Skeletal Undead summoned gain Hard to Wound +1 (or Impossible to Wound +1 if already possessing Hard to Wound: damage flips suffer [-] and cannot Cheat)."
                    }
                },
                {
                    step: 5,
                    type: "single",
                    talent: {
                        name: "Mineral Replacement",
                        desc: "All skeletal Undead summoned by this character gain Armor +3."
                    }
                }
            ]
        },
        {
            id: "inevitor",
            name: "Inevitor",
            book: "Onward!",
            isAdvanced: true,
            requirements: "Связь с энтропией, осознание быстротечности цивилизаций или глубокие исторические изыскания.",
            steps: [
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "History Repeats",
                        desc: "May use History in place of Notice.\n\nAction: (X) *History Repeats*: One character within 6 yards immediately resolves an Action costing X AP taken during their last turn."
                    }
                },
                {
                    step: 2,
                    type: "single",
                    talent: {
                        name: "That Which Endures",
                        desc: "Gain Shielded +3 at turn start during Dramatic Time (reduced by 1 for every point of Armor possessed)."
                    }
                },
                {
                    step: 3,
                    type: "single",
                    talent: {
                        name: "Crumbling Majesty",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Crumbling Majesty",
                            typeLine: "Manifested Power",
                            av: "Intellect + History",
                            ap: "(1)",
                            tn: "10:t:",
                            range: "1 yard",
                            resist: "—",
                            desc: "Target building/structure loses 1 Structure (+1 per Margin of Success or extra :t:). Structure: Wood/Glass 1, Brick 2, Stone 3, Metal 4 (+1 to +4 based on quality). At 0, area within 3 yards crumbles to dust."
                        }
                    }
                },
                {
                    step: 4,
                    type: "single",
                    talent: {
                        name: "Preservation",
                        desc: "This character gains the following Manifested Power:",
                        power: {
                            name: "Preservation",
                            typeLine: "Manifested Power",
                            av: "Intellect + History",
                            ap: "(1)",
                            tn: "10:t:",
                            range: "5 yards",
                            resist: "Df",
                            desc: "Target object cannot gain Conditions, suffer damage, or be altered for 5 minutes (or 1 round of Dramatic Time for Constructs), but may still move."
                        }
                    }
                },
                {
                    step: 5,
                    type: "single",
                    talent: {
                        name: "I Was There",
                        desc: "Pass TN 16 History Challenge (+1 per 25 yrs) to mentally project back into the past of an area for 1 minute (physical body is Paralyzed; observes sights, sounds, and speech as if physically present)."
                    }
                }
            ]
        },
        {
            id: "curiositeer",
            name: "Curiositeer",
            book: "Onward!",
            isAdvanced: true,
            requirements: "Страсть к собирательству историй, безделушек и культурных реликвий.",
            steps: [
                {
                    step: 1,
                    type: "single",
                    talent: {
                        name: "Cabinet of Curiosities",
                        desc: "Begins with 3 Trinkets (+1 per completed step; expend for 0 AP on target within 5 yards; recharges daily):\n• Target gains Muddled +1.\n• Target heals 1 damage."
                    }
                },
                {
                    step: 2,
                    type: "single",
                    talent: {
                        name: "Keep It Safe",
                        desc: "Trinket additions: Target gains Distracted +1; or adds 1 suit of choice to duel next turn.\n\nCheating Fate restores 1 expended Trinket (once/turn).\n\nAction: (0) *Enshrine*: Pulse 3 heals 1 damage (or suffer 2 dmg to take as (1))."
                    }
                },
                {
                    step: 3,
                    type: "single",
                    talent: {
                        name: "Those Who Wander",
                        desc: "Trinket additions: Target gains Shielded +1 at turn start; or ally moves 3 yards.\n\nMay take Walk as (0) Action. Resolving Movement Action restores 1 Trinket (once/turn)."
                    }
                },
                {
                    step: 4,
                    type: "single",
                    talent: {
                        name: "Pocket Wisdom",
                        desc: "Trinket additions: Target ignores [-] in Wp duels; or loses Slow.\n\nCausing another character to heal restores 1 Trinket (once/turn)."
                    }
                },
                {
                    step: 5,
                    type: "single",
                    talent: {
                        name: "Neverending Collection",
                        desc: "Trinket addition: Once per day, expend Trinkets to manifest items worth 1 Scrip each.\n\nOnce per Dramatic Time, one Trinket ability affects all targets within Aura 6."
                    }
                }
            ]
        }
    ];

    if (typeof PURSUITS_DATA !== "undefined" && Array.isArray(PURSUITS_DATA)) {
        PURSUITS_DATA.push(...ONWARD_BASIC_PURSUITS);
    } else {
        window.PURSUITS_DATA = ONWARD_BASIC_PURSUITS;
    }

    if (typeof ADVANCED_PURSUITS_DATA !== "undefined" && Array.isArray(ADVANCED_PURSUITS_DATA)) {
        ADVANCED_PURSUITS_DATA.push(...ONWARD_ADVANCED_PURSUITS);
    } else {
        window.ADVANCED_PURSUITS_DATA = ONWARD_ADVANCED_PURSUITS;
    }
})();
