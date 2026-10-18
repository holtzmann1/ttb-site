const SKILL_TRIGGERS = [
    // ==========================================
    // 1. ACADEMIC SKILLS
    // ==========================================

    // Bureaucracy
    {
        skill: "Bureaucracy",
        name: "Ruthless Litigation",
        cost: ":m:",
        desc: "After succeeding, the target must attempt a Bureaucracy Challenge at TN 10 + 2 per Margin of Success on your Bureaucracy Challenge. On a failure, the target becomes Dazed until the end of the scene."
    },
    {
        skill: "Bureaucracy",
        name: "Legal Documents",
        cost: ":t:",
        desc: "After succeeding, you may immediately produce documents backing up your claim. Any Social or Bureaucracy Challenges made with the intent of challenging your claim or changing the minds of those who have seen the documents suffer a :-: to the duel."
    },
    {
        skill: "Bureaucracy",
        name: "Monotone",
        cost: ":c:",
        desc: "After succeeding, choose one target that can hear you. That target must succeed on a TN 10 Willpower Challenge or fall asleep. The TN of the Challenge is increased by +2 for each Margin of Success on your Bureaucracy Challenge."
    },
    {
        skill: "Bureaucracy",
        name: "Legal Fees",
        cost: ":r:",
        desc: "After succeeding during Narrative Time, you may present a bill to the target for the time they forced you to spend on the current matter. Within a week, the target pays you 2 scrip, +1 scrip per Margin of Success, gives you an item, or performs a service of similar value. You may not declare this Trigger more than once per session."
    },

    // Engineering
    {
        skill: "Engineering",
        name: "Technobabble",
        cost: ":m:",
        desc: "After succeeding, you may make a Social Duel against a nearby character. If that character does not possess any ranks of Engineering, you gain a :+: to the duel."
    },
    {
        skill: "Engineering",
        name: "Careful Preparations",
        cost: ":t:",
        desc: "After succeeding, choose a suit. The next time you make an Artefacting Challenge this scene, add the chosen suit to your final duel total."
    },
    {
        skill: "Engineering",
        name: "A Piece Fell Off...",
        cost: ":c:",
        desc: "After failing in a duel involving a machine, you find scrap materials worth 2 scrip. This Trigger cannot be declared more than once per scene."
    },
    {
        skill: "Engineering",
        name: "Power Loop",
        cost: ":r:",
        desc: "After succeeding in a duel involving a friendly Construct, it gains the following Condition until the end of the scene: \"Power Loop: When performing a duel, this character may use the Acting Value of another friendly model with the Power Loop Condition instead of its own.\""
    },

    // History
    {
        skill: "History",
        name: "Written by the Victors",
        cost: ":m:",
        desc: "After succeeding, make a Deceive Challenge against a nearby target with a :+: to the duel. If this Deceive Challenge succeeds, you are able to convince the target that a historical event happened differently than it actually did (or that it didn't happen at all). The target believes the alternate history until confronted with solid facts to the contrary."
    },
    {
        skill: "History",
        name: "Of Course!",
        cost: ":t:",
        desc: "After succeeding, you learn a previously hidden secret about Malifaux's history that pertains to your current subject of inquiry. It need not be an important secret, but it should shed some further light on your current situation and make an interesting topic for a future research paper."
    },
    {
        skill: "History",
        name: "Boring History Lesson",
        cost: ":c:",
        desc: "After succeeding, choose one target that can hear you, plus one target per Margin of Success. Those targets are Dazed for as long as you continue talking."
    },
    {
        skill: "History",
        name: "Research Grant",
        cost: ":r:",
        desc: "After succeeding, your research attracts the attention of the Guild or another interested faction. Within a few days, you gain an amount of scrip equal to your final duel total. This Trigger may only be declared once per session."
    },

    // Literacy
    {
        skill: "Literacy",
        name: "Flowery Words",
        cost: ":m:",
        desc: "After succeeding, make a Bewitch or Convince Challenge against a nearby target with a :+: to the duel."
    },
    {
        skill: "Literacy",
        name: "Uncover Grimoire",
        cost: ":t:",
        desc: "After succeeding, you realize that the text you are reading is actually a Grimoire containing a single Magia and Immuto of the Fatemaster's choice. If the text is already a Grimoire, the Fatemaster chooses one Immuto and adds it to the Grimoire. A text may only benefit from this Trigger once. You may only declare this Trigger once per session."
    },
    {
        skill: "Literacy",
        name: "Scrawlings",
        cost: ":c:",
        desc: "After succeeding, anyone attempting to read what you have written must succeed on a Literacy Challenge at TN 10 + 2 per Margin of Success. On a failure, the character is unable to read what you have written."
    },
    {
        skill: "Literacy",
        name: "Editing",
        cost: ":r:",
        desc: "After succeeding, you may make a Forgery Challenge with a :+: to the duel. On a success, you may rewrite 1 page, +1 page per Margin of Success, to say whatever you wish. Rewriting a written Grimoire does not affect the Magia and Immuto contained within it."
    },

    // Mathematics
    {
        skill: "Mathematics",
        name: "Probability Studies",
        cost: ":m:",
        desc: "After succeeding, you may reveal your hand to the Fatemaster and draw a card from your Twist Deck. If the suit of the drawn card matches the suit of any other card in your hand, discard the drawn card. Otherwise, place it in your hand."
    },
    {
        skill: "Mathematics",
        name: "Integers",
        cost: ":t:",
        desc: "After succeeding, you may discard a Twist Card from your hand. If you do so, each other player may shuffle any Twist Cards in their discard piles with the same value as the discarded card back into their Twist Decks. Then shuffle any cards in the Fate Deck discard pile with that value back into the Fate Deck."
    },
    {
        skill: "Mathematics",
        name: "Outliers",
        cost: ":c:",
        desc: "After succeeding, you may search the Fate Deck discard pile for the Red Joker and Black Joker cards and shuffle any you find back into the Fate Deck."
    },
    {
        skill: "Mathematics",
        name: "Addition",
        cost: ":r:",
        desc: "After succeeding, you gain the following Condition until the end of the scene: \"Additive: When Cheating Fate, you may end this Condition to Cheat Fate with two Twist Cards instead of one; add the value and suit of one card to the other to determine the value of the cheated 'card', so long as this value does not exceed 13.\""
    },

    // Music
    {
        skill: "Music",
        name: "Gentle Lullaby",
        cost: ":m:",
        desc: "After succeeding, every character within Aura 8 becomes Dazed for as long as you continue singing or playing."
    },
    {
        skill: "Music",
        name: "Inspiring Ballad",
        cost: ":t:",
        desc: "After succeeding, friendly characters within Aura 8 may discard a Twist Card to gain :+: to Social Skill Challenges for as long as you continue singing or playing."
    },
    {
        skill: "Music",
        name: "Heartache",
        cost: ":c:",
        desc: "After succeeding, all characters within Aura 8 become keenly aware of their troubles and heartaches and suffer a :-: on Social Skill Challenges for as long as you continue singing or playing."
    },
    {
        skill: "Music",
        name: "Marching Tune",
        cost: ":r:",
        desc: "After succeeding during Dramatic Time, every friendly character within Aura 8 may discard a Twist Card to gain the Fast Condition."
    },

    // ==========================================
    // 2. CLOSE COMBAT SKILLS
    // ==========================================

    // Flexible
    {
        skill: "Flexible",
        name: "Git!",
        cost: ":m:",
        desc: "After succeeding, move the target 1 yard in any direction."
    },
    {
        skill: "Flexible",
        name: "Whipping Frenzy",
        cost: ":t:",
        desc: "After succeeding, make another Flexible Weapon attack against the same target. This attack may not declare Triggers."
    },
    {
        skill: "Flexible",
        name: "Tangled Up",
        cost: ":c:",
        desc: "After succeeding, the target gains the following Condition until you leave its engagement range, you make another attack with this weapon, or the end of its next turn: \"Tangled Up: This character may not take Walk or Charge Actions.\""
    },
    {
        skill: "Flexible",
        name: "Cruel Laugh",
        cost: ":r:",
        desc: "After succeeding, this character gains the Focused Condition."
    },

    // Grappling
    {
        skill: "Grappling",
        name: "Drag",
        cost: ":m:",
        desc: "After succeeding, move up to 2 yards and then push the target into physical contact with you."
    },
    {
        skill: "Grappling",
        name: "Grab and Throw",
        cost: ":t:",
        desc: "After succeeding, throw the target a distance up to your Might in yards (minimum 1 yard), then the target becomes Prone."
    },
    {
        skill: "Grappling",
        name: "Dislocate",
        cost: ":c:",
        desc: "Gain a :+: to the damage flip, but it may not be cheated."
    },
    {
        skill: "Grappling",
        name: "Submission Hold",
        cost: ":r:",
        desc: "Target suffers +1 damage."
    },

    // Heavy Melee
    {
        skill: "Heavy Melee",
        name: "Knock Back",
        cost: ":m:",
        desc: "After damaging, push the target 3 yards away from this character."
    },
    {
        skill: "Heavy Melee",
        name: "Crushing",
        cost: ":t:",
        desc: "After succeeding, this attack ignores Armor."
    },
    {
        skill: "Heavy Melee",
        name: "Finisher",
        cost: ":c:",
        desc: "After damaging, if the target is Paralyzed, the target is killed."
    },
    {
        skill: "Heavy Melee",
        name: "Stagger",
        cost: ":r:",
        desc: "The damage flip suffers :-:. After damaging, the target gains the Slow Condition."
    },

    // Martial Arts
    {
        skill: "Martial Arts",
        name: "Pressure Point",
        cost: ":m:",
        desc: "After succeeding, the target gains the following Condition until the start of this character's next turn: \"Blocked Chi: This character may not take (0) Actions.\""
    },
    {
        skill: "Martial Arts",
        name: "Pin Down",
        cost: ":t:",
        desc: "After succeeding, the target gains the following Condition until you leave its engagement range or until the start of your next turn, whichever comes first: \"Pinned: This character may not move or be pushed.\""
    },
    {
        skill: "Martial Arts",
        name: "Low Blow",
        cost: ":c:",
        desc: "After succeeding, the target becomes Dazed until the end of its next turn."
    },
    {
        skill: "Martial Arts",
        name: "Jump Kick",
        cost: ":r:",
        desc: "After succeeding, if this attack was taken as part of a Charge Action, take an additional Martial Arts attack against the target. You may only declare this Trigger once per turn."
    },

    // Melee
    {
        skill: "Melee",
        name: "Circling Around",
        cost: ":m:",
        desc: "After succeeding, place yourself anywhere within the target's engagement range."
    },
    {
        skill: "Melee",
        name: "Impromptu Parry",
        cost: ":t:",
        desc: "After failing, gain +1 Defense against Close Combat attacks made by the target until the start of your next turn."
    },
    {
        skill: "Melee",
        name: "Smeared With Poison",
        cost: ":c:",
        desc: "After succeeding, the target gains Poison +1."
    },
    {
        skill: "Melee",
        name: "Bloody Mess",
        cost: ":r:",
        desc: "After killing the target, draw a Twist Card and then discard a Twist Card."
    },

    // Pneumatic
    {
        skill: "Pneumatic",
        name: "Steam in My Eyes!",
        cost: ":m:",
        desc: "After damaging the target with a Close Combat weapon, the target becomes Blind until the end of its next turn."
    },
    {
        skill: "Pneumatic",
        name: "Steam Blast",
        cost: ":t:",
        desc: "When damaging the target with a Close Combat weapon, this attack’s Moderate and Severe damage values gain +b. All b damage dealt by this attack is Weak damage. You are unaffected by any b generated by this attack."
    },
    {
        skill: "Pneumatic",
        name: "Industrial Strength",
        cost: ":c:",
        desc: "After damaging, the target receives a Critical Effect of the appropriate severity."
    },
    {
        skill: "Pneumatic",
        name: "Overheated",
        cost: ":r:",
        desc: "After damaging, the target gains Burning +1."
    },

    // Pugilism
    {
        skill: "Pugilism",
        name: "Rabbit Punch",
        cost: ":m:",
        desc: "After succeeding, take an additional Pugilism attack against the target. This attack may not declare Triggers."
    },
    {
        skill: "Pugilism",
        name: "TKO",
        cost: ":t:",
        desc: "After damaging, the target must make a TN 10 Unconsciousness Challenge. The TN of this Challenge is increased by +1 if this attack dealt Moderate damage and by +2 if Severe."
    },
    {
        skill: "Pugilism",
        name: "Cowed",
        cost: ":c:",
        desc: "After damaging, the target gains the following Condition until the end of its next turn: \"Cowed: This character suffers :-: on all attack flips made against the character that applied this Condition.\""
    },
    {
        skill: "Pugilism",
        name: "Beatdown",
        cost: ":r:",
        desc: "When damaging, deal +1 damage if the target does not have the Armor ability."
    },

    // ==========================================
    // 3. CRAFTING SKILLS
    // ==========================================

    // Alchemistry
    {
        skill: "Alchemistry",
        name: "We Can Drink That!",
        cost: ":m:",
        desc: "After creating an alchemical item, you gain a jar of moonshine."
    },
    {
        skill: "Alchemistry",
        name: "Additional Product",
        cost: ":t:",
        desc: "After creating an item, you gain an additional item of that type."
    },
    {
        skill: "Alchemistry",
        name: "Toxic Distillation",
        cost: ":c:",
        desc: "After creating an alchemical item, you gain a vial of strong poison (anyone who drinks it gains Poison +4)."
    },
    {
        skill: "Alchemistry",
        name: "...And It Burns!",
        cost: ":r:",
        desc: "After creating an alchemical item, you gain a Flaming Bottle (Thrown Weapons Skill, 1/1bb/1bbb damage, and everyone damaged gains Burning +2)."
    },

    // Art
    {
        skill: "Art",
        name: "Propaganda",
        cost: ":m:",
        desc: "After creating an object of art, choose a simple task, such as 'donate to the poor' or 'join the M&SU.' Fatemaster characters who see your art must perform a Willpower Challenge (TN 8 + 1 per rank in this Skill) or be compelled to either perform the task (if feasible) or encourage others to do so."
    },
    {
        skill: "Art",
        name: "Masterpiece",
        cost: ":t:",
        desc: "After creating an object of art, it becomes worth quite a bit of money. The scrip value of the piece is equal to the final duel total of the Art Challenge, and you may sell your creation to interested buyers for this amount."
    },
    {
        skill: "Art",
        name: "The Perfect Portrait",
        cost: ":c:",
        desc: "After creating a likeness of a character, that character gains the following Condition: \"A Portrait of the Soul: When this character would suffer damage, she may instead choose to end this Condition and transfer the damage to the likeness created when this character received this Condition.\""
    },
    {
        skill: "Art",
        name: "Ambiance",
        cost: ":r:",
        desc: "After creating an object of art, your art provides a certain type of ambiance that affects the mood of those around it. Choose a single Social Skill. While in view of your art, characters suffer a :-: on all Challenges with the chosen Skill. If more than one piece of art has this ability, the character arranging the room or viewing area decides which piece will provide its effect."
    },

    // Artefacting
    {
        skill: "Artefacting",
        name: "Spontaneous Animation",
        cost: ":m:",
        desc: "After succeeding, immediately create and animate under your control a Ht 1 Construct worth 20 scrip or less. You may only declare this Trigger once per session, and the Construct breaks apart and becomes worthless at the end of the session."
    },
    {
        skill: "Artefacting",
        name: "Valuable Components",
        cost: ":t:",
        desc: "After creating a Construct or item with a value greater than 10 scrip, you find leftover parts that you can sell for 3 scrip."
    },
    {
        skill: "Artefacting",
        name: "Give It A Good Thwump",
        cost: ":c:",
        desc: "After failing, immediately make another Artefacting Challenge against the same TN. If this Challenge is successful, your first failure is considered to be a success."
    },
    {
        skill: "Artefacting",
        name: "Extra Scrap",
        cost: ":r:",
        desc: "If you are Repairing a Construct, it heals +1 damage and gains Armor +1 until the end of the scene. You may only declare this Trigger once per scene."
    },

    // Blacksmithing
    {
        skill: "Blacksmithing",
        name: "Knock Offs",
        cost: ":m:",
        desc: "After creating a weapon, gain two additional weapons of the same type, each with the Shoddy Customization."
    },
    {
        skill: "Blacksmithing",
        name: "Additional Product",
        cost: ":t:",
        desc: "After creating an item, you gain an additional item of that type."
    },
    {
        skill: "Blacksmithing",
        name: "Special Process",
        cost: ":c:",
        desc: "After creating a weapon, add the Nickel-Plated Customization to the weapon at no cost."
    },
    {
        skill: "Blacksmithing",
        name: "I Added Some Spikes",
        cost: ":r:",
        desc: "After creating a pistol or rifle, add a free bayonet to the weapon (see page 240)."
    },

    // Culinary
    {
        skill: "Culinary",
        name: "Strong Stuff",
        cost: ":m:",
        desc: "After brewing alcohol, anyone drinking the alcohol gains the following ability for the next hour: \"Drunk and Reckless: At the start of this character's turn, it may suffer 2 damage to generate 1 additional General AP.\""
    },
    {
        skill: "Culinary",
        name: "Banquet",
        cost: ":t:",
        desc: "After creating food or drink, you produce enough for three additional people per :t: in the final duel total."
    },
    {
        skill: "Culinary",
        name: "This Tastes Like Dog Food",
        cost: ":c:",
        desc: "After creating food or drink, you gain a plate of animal food. If fed to a Beast within the next hour, that Beast gains :+: to all duels it makes during Narrative Time for the rest of the day."
    },
    {
        skill: "Culinary",
        name: "Loosen Your Belts",
        cost: ":r:",
        desc: "After creating food or drink, anyone partaking of the food or drink gains the following Condition until the end of the day: \"Stuffed: The character that applied this Condition gains a :+: on Bewitch and Convince Duels made against this character.\""
    },

    // Explosives
    {
        skill: "Explosives",
        name: "Bomb in a Jar",
        cost: ":m:",
        desc: "After creating an explosive, you are able to disguise the explosive as a simple household item (Notice TN 8 + 1 per Rank in this Skill to recognize it as an explosive)."
    },
    {
        skill: "Explosives",
        name: "Incendiary",
        cost: ":t:",
        desc: "After creating an explosive, characters damaged by the explosive gain Burning +1."
    },
    {
        skill: "Explosives",
        name: "Concentrated",
        cost: ":c:",
        desc: "After creating an explosive, the explosive deals no b. Instead, it deals +1 damage per b."
    },
    {
        skill: "Explosives",
        name: "Here Comes the Boom",
        cost: ":r:",
        desc: "After creating an explosive, add +b to the explosive's Moderate and Severe damage values."
    },

    // Homesteading
    {
        skill: "Homesteading",
        name: "We Built Around It",
        cost: ":m:",
        desc: "After constructing a building or compound, you discover a single wondrous feature (such as a tree that grows healing fruit, wood that cannot be burned, or underground caves allowing you to move safely between buildings) of the Fatemaster's choice."
    },
    {
        skill: "Homesteading",
        name: "A Fort",
        cost: ":t:",
        desc: "After constructing a building or compound, so long as you are within its boundaries, you and your allies treat all soft cover as hard cover and ignore severe terrain."
    },
    {
        skill: "Homesteading",
        name: "Safe Pasture",
        cost: ":c:",
        desc: "After building a fence, you gain a :+: to any Husbandry duels made against Beasts within the fenced off area."
    },
    {
        skill: "Homesteading",
        name: "Barbed",
        cost: ":r:",
        desc: "After building a fence, the fence gains the following property: \"Barbed: Characters passing through this fence suffer 1/2/3 damage.\""
    },

    // Printing
    {
        skill: "Printing",
        name: "Propaganda Machine",
        cost: ":m:",
        desc: "After printing written text, anyone reading what you have printed must succeed on a Centering Challenge (TN 8 + 1 per Rank in this Skill) or be swayed to a political opinion espoused in the printed work."
    },
    {
        skill: "Printing",
        name: "Paper Blizzard",
        cost: ":t:",
        desc: "After printing written text, you produce +25% more copies of whatever you are printing."
    },
    {
        skill: "Printing",
        name: "Slander",
        cost: ":c:",
        desc: "After printing written text, anyone reading what you have printed must succeed on a Centering Challenge (TN 8 + 1 per Rank in this Skill) or develop a negative opinion of someone mentioned in the work."
    },
    {
        skill: "Printing",
        name: "Laudation",
        cost: ":r:",
        desc: "After succeeding, anyone reading what you have printed must succeed on a Centering Challenge (TN 8 + 1 per Rank in this Skill) or develop a positive opinion of someone mentioned in the work."
    },

    // Stitching
    {
        skill: "Stitching",
        name: "From Curtains",
        cost: ":m:",
        desc: "After creating or repairing an article of clothing, it appears to be of much higher quality than usual."
    },
    {
        skill: "Stitching",
        name: "Exquisite Craftsmanship",
        cost: ":t:",
        desc: "After creating an article of clothing, the character wearing it gains a :+: to their Bewitch duels the first time it is worn. This bonus lasts until the item is removed, 12 hours pass, or the character suffers damage, whichever comes first."
    },
    {
        skill: "Stitching",
        name: "Loose Stitches",
        cost: ":c:",
        desc: "After succeeding on a corpse or Undead, it gains the following Condition for one day: \"Loose Stitches: After being damaged, all characters within Aura 1 of this character gain Poison +1.\""
    },
    {
        skill: "Stitching",
        name: "Tight Stitches",
        cost: ":r:",
        desc: "When Mending an Undead target, it heals +1 damage and gains the following Condition for one day: \"Hard to Wound +1: Damage flips against this character suffer :-:.\" An Undead character may only benefit from this Trigger once per day."
    },

    // ==========================================
    // 4. EXPERTISE SKILLS
    // ==========================================

    // Doctor
    {
        skill: "Doctor",
        name: "Outpatient Care",
        cost: ":m:",
        desc: "After successful Surgery, the target heals 2/3/4 damage."
    },
    {
        skill: "Doctor",
        name: "Lots of Bandages",
        cost: ":t:",
        desc: "After succeeding, if you are performing First Aid, make another First Aid attempt on the same target."
    },
    {
        skill: "Doctor",
        name: "Antidote",
        cost: ":c:",
        desc: "After succeeding, if you are performing First Aid, remove the Poison Condition from the target."
    },
    {
        skill: "Doctor",
        name: "Take Two of These and Call Me in the Morning",
        cost: ":r:",
        desc: "After succeeding, if you are performing First Aid, the target heals +1 Wound per :r: in the final duel total."
    },

    // Forgery
    {
        skill: "Forgery",
        name: "Perfect Copy",
        cost: ":m:",
        desc: "After succeeding, you gain a :+: to any Convince or Deceive Challenge made regarding the forgery or anything written about in its text (if applicable)."
    },
    {
        skill: "Forgery",
        name: "Official Papers",
        cost: ":t:",
        desc: "For the next 24 hours, you gain a :+: to your Bureaucracy Challenges when using the forged object."
    },
    {
        skill: "Forgery",
        name: "Skilled Duplication",
        cost: ":c:",
        desc: "After succeeding, any attempts to detect the forgery have their TNs increased by +5."
    },
    {
        skill: "Forgery",
        name: "Illicit Gains",
        cost: ":r:",
        desc: "After successfully forging an object of art, you may sell the forgery at the full value of the original."
    },

    // Gambling
    {
        skill: "Gambling",
        name: "Draw Up",
        cost: ":m:",
        desc: "After succeeding, draw a Twist card, then discard a Twist card."
    },
    {
        skill: "Gambling",
        name: "Quick Hands",
        cost: ":t:",
        desc: "After succeeding, look at the bottom card of the Fate deck. You may choose to put it on the top of the Fate deck."
    },
    {
        skill: "Gambling",
        name: "Discard",
        cost: ":c:",
        desc: "After succeeding, look at the top card of the Fate deck. You may choose to put it on the bottom of the Fate deck."
    },
    {
        skill: "Gambling",
        name: "Shuffle",
        cost: ":r:",
        desc: "After succeeding, you may discard a Twist card to reshuffle the discard pile back into the Fate deck. No characters may draw cards as a result of this reshuffling."
    },

    // Husbandry
    {
        skill: "Husbandry",
        name: "Puppies!!!",
        cost: ":m:",
        desc: "After successfully birthing a Beast, you birth +1 Beast of the same type, +1 additional Beast per Margin of Success."
    },
    {
        skill: "Husbandry",
        name: "Grow Up Strong",
        cost: ":t:",
        desc: "After successfully birthing a Beast, increase two of its Physical Aspects by +1 each."
    },
    {
        skill: "Husbandry",
        name: "Twisted",
        cost: ":c:",
        desc: "After successfully birthing a Beast, it becomes a twisted creature with unnatural parts (such as horns on a horse, chitinous plates on a dog, etc.). Choose one Talent or attack possessed by a different Beast and give it to the Beast, pending Fatemaster approval."
    },
    {
        skill: "Husbandry",
        name: "Proper Care",
        cost: ":r:",
        desc: "After succeeding, if the target is a Beast, it heals 1/2/3 damage."
    },

    // Lockpicking
    {
        skill: "Lockpicking",
        name: "Entering",
        cost: ":m:",
        desc: "After succeeding, gain the following Condition for the next 5 minutes: \"Silent Entry: Gain a :+: to all Stealth duels.\""
    },
    {
        skill: "Lockpicking",
        name: "Copy",
        cost: ":t:",
        desc: "After succeeding, gain a copy of the key that opens whatever lock you just picked."
    },
    {
        skill: "Lockpicking",
        name: "Trapped Lock",
        cost: ":c:",
        desc: "After succeeding, the next time a character uses the lock (by either using a key or attempting to pick it), they gain the Poison +3 Condition."
    },
    {
        skill: "Lockpicking",
        name: "Breaking",
        cost: ":r:",
        desc: "After succeeding, the next time the lock is closed, it becomes jammed and cannot be unlocked using a key."
    },

    // Notice
    {
        skill: "Notice",
        name: "Context Clues",
        cost: ":m:",
        desc: "After succeeding, you may make an immediate Scrutiny Challenge against a character in the area with a :+: to the duel."
    },
    {
        skill: "Notice",
        name: "I'm On Point",
        cost: ":t:",
        desc: "After succeeding during an Ongoing Challenge, you may discard a card to remove one Failure Requirement from the Ongoing Challenge."
    },
    {
        skill: "Notice",
        name: "Wary",
        cost: ":c:",
        desc: "After succeeding, you gain the following Condition until the end of the scene: \"On Alert: When this character enters Dramatic Time, she may end this Condition to gain :+: to her Initiative flip.\""
    },
    {
        skill: "Notice",
        name: "Size Up",
        cost: ":r:",
        desc: "After succeeding against a character, you learn the target's highest Close Combat or Ranged Combat Skill and its value."
    },

    // Track
    {
        skill: "Track",
        name: "No Trail",
        cost: ":m:",
        desc: "After succeeding, you may obscure the trail, imposing a :--: penalty on anyone else trying to follow the same trail."
    },
    {
        skill: "Track",
        name: "Deep Impressions",
        cost: ":t:",
        desc: "After succeeding, you gain a rough idea of how the people you are tracking are equipped (such as backpacks, types of weapons, strangely shaped heavy items, etc.)."
    },
    {
        skill: "Track",
        name: "Follow Their Lead",
        cost: ":c:",
        desc: "After succeeding, you gain a :+: to any Wilderness duels made while you follow the trail."
    },
    {
        skill: "Track",
        name: "Guns Blazing",
        cost: ":r:",
        desc: "On a success, when you catch up with the targets you are tracking, you may take one additional turn at the start of any resulting Dramatic Time (after the Initiative flip but before characters begin resolving their turns in Initiative order)."
    },

    // Wilderness
    {
        skill: "Wilderness",
        name: "One With Nature",
        cost: ":m:",
        desc: "After succeeding, if you encounter an enemy Beast at any point during the next four hours, you may denote it as being 'friendly.' So long as you or your companions do not attack, hamper, or otherwise annoy the Beast, it does not become hostile."
    },
    {
        skill: "Wilderness",
        name: "Hidden Cache",
        cost: ":t:",
        desc: "After succeeding, you find a hidden cache of supplies. This might be a few rounds of ammunition, a useful item, a crude map of the surrounding area, or so on."
    },
    {
        skill: "Wilderness",
        name: "Forecast",
        cost: ":c:",
        desc: "After succeeding, you may choose what sort of weather the local area experiences for the next day, plus one day per Margin of Success. This weather must be natural to the area; for instance, you could 'predict' rain in the summer, but predictions of snow are unlikely to occur."
    },
    {
        skill: "Wilderness",
        name: "Look, Berries!",
        cost: ":r:",
        desc: "After succeeding, one of your Living companions (which may be you) may heal 1 damage."
    },

    // ==========================================
    // 5. MAGICAL SKILLS
    // ==========================================

    // Counter-Spelling
    {
        skill: "Counter-Spelling",
        name: "Expose Prestidigitation",
        cost: ":m:",
        desc: "After succeeding, if the caster of the spell is within line of sight, they gain the Dazed Condition until the end of their next turn."
    },
    {
        skill: "Counter-Spelling",
        name: "Douse Sorcery",
        cost: ":t:",
        desc: "After succeeding, if the caster of the spell is within line of sight, they suffer 1/2/3 damage as you turn their spell's energy back upon them."
    },
    {
        skill: "Counter-Spelling",
        name: "Unravel Necromancy",
        cost: ":c:",
        desc: "After succeeding, target Undead Peon or Minion within line of sight suffers 1/2/3 damage."
    },
    {
        skill: "Counter-Spelling",
        name: "Break Enchantment",
        cost: ":r:",
        desc: "After succeeding, target Construct Peon or Minion within line of sight suffers 1/2/3 damage."
    },

    // Enchanting
    {
        skill: "Enchanting",
        name: "Quicken Reflexes",
        cost: ":m:",
        desc: "After succeeding, a friendly target within 3 yards of you gains +1 Grace until the start of your next turn."
    },
    {
        skill: "Enchanting",
        name: "Enhance Intelligence",
        cost: ":t:",
        desc: "After succeeding, a friendly target within 3 yards of you gains +1 Intelligence until the start of your next turn."
    },
    {
        skill: "Enchanting",
        name: "Amplify Resilience",
        cost: ":c:",
        desc: "After succeeding, a friendly target within 3 yards of you gains +1 Toughness until the start of your next turn."
    },
    {
        skill: "Enchanting",
        name: "Strengthen Muscles",
        cost: ":r:",
        desc: "After succeeding, a friendly target within 3 yards of you gains +1 Might until the start of your next turn."
    },

    // Necromancy
    {
        skill: "Necromancy",
        name: "It's Alive...-ish",
        cost: ":m:",
        desc: "After succeeding, target Undead character within 3 yards gains the following Condition until the end of the scene: \"Visage of Life: This character appears to be Living. Characters who suspect otherwise may attempt a TN 12 Scrutiny Challenge to see through the deception.\""
    },
    {
        skill: "Necromancy",
        name: "Whispers of the Dead",
        cost: ":t:",
        desc: "After succeeding, you learn the location of any corpses within 3 yards of you (even if buried beneath you), plus 3 yards per :t: in the final duel total."
    },
    {
        skill: "Necromancy",
        name: "Bolster Undead",
        cost: ":c:",
        desc: "After succeeding, target Undead character within 3 yards heals 1 damage."
    },
    {
        skill: "Necromancy",
        name: "Fray Life",
        cost: ":r:",
        desc: "After succeeding, target Living character within 3 yards suffers 1 damage."
    },

    // Sorcery
    {
        skill: "Sorcery",
        name: "Telekinetic Shove",
        cost: ":m:",
        desc: "After succeeding, push a target within 3 yards up to 1 yard in any direction."
    },
    {
        skill: "Sorcery",
        name: "Bright Flash",
        cost: ":t:",
        desc: "After successfully casting a Spell or Manifested Power, all characters within Aura 1 of the target must succeed on a TN 10 Centering Duel or gain the Blind Condition until the end of the round."
    },
    {
        skill: "Sorcery",
        name: "Arcing Energies",
        cost: ":c:",
        desc: "After successfully casting a Spell or Manifested Power, choose an Elemental Immuto that you added to that Spell or Manifested Effect. A character within 2 yards of the target suffers the effects of a single instance of the chosen Elemental Immuto."
    },
    {
        skill: "Sorcery",
        name: "Brute Force",
        cost: ":r:",
        desc: "After damaging, a piece of hard cover within 2 yards of the target is reduced to soft cover or a piece of soft cover is destroyed and reduced to severe terrain."
    },

    // Prestidigitation
    {
        skill: "Prestidigitation",
        name: "Fade Away",
        cost: ":m:",
        desc: "After succeeding, you gain the following Condition until the start of your next turn: \"Fade Away: Attacks made against this character suffer :--:. This Condition immediately ends after an attack against this character is resolved.\""
    },
    {
        skill: "Prestidigitation",
        name: "Glimpse the Future",
        cost: ":t:",
        desc: "After succeeding during Dramatic Time, immediately increase your Initiative value by +2."
    },
    {
        skill: "Prestidigitation",
        name: "Distraction",
        cost: ":c:",
        desc: "After succeeding, a target character within line of sight gains the Dazed Condition until the end of its next turn."
    },
    {
        skill: "Prestidigitation",
        name: "Weapons of the Mind",
        cost: ":r:",
        desc: "After succeeding, a target within 2 yards of one of your illusions suffers 1 damage."
    },

    // ==========================================
    // 6. RANGED COMBAT SKILLS
    // ==========================================

    // Archery
    {
        skill: "Archery",
        name: "Awkward Shot",
        cost: ":m:",
        desc: "After damaging, the target gains the following Condition: \"Awkward Arrow: This character has a :-: to all attacks. This character may take a (1) Action to remove the arrow and end this Condition.\""
    },
    {
        skill: "Archery",
        name: "Pinned to the Ground",
        cost: ":t:",
        desc: "After succeeding, the target gains the following Condition until it moves or is pushed: \"Pinned to the Ground: This character may not declare Walk or Charge actions. This character may take a (1) Action to remove the arrow and end this Condition.\""
    },
    {
        skill: "Archery",
        name: "Poisoned Arrowhead",
        cost: ":c:",
        desc: "After damaging, the target gains the Poison +1 Condition."
    },
    {
        skill: "Archery",
        name: "Headshot",
        cost: ":r:",
        desc: "When damaging, this attack ignores Hard to Wound. If a Critical Effect is generated, it automatically affects the target's head."
    },

    // Heavy Guns
    {
        skill: "Heavy Guns",
        name: "No Man Can Outrun A Bullet",
        cost: ":m:",
        desc: "When damaging, reduce all damage dealt by this attack to 0. Move the target a number of yards equal to its Walk Aspect in any direction, so long as the target ends the move farther from you than it began."
    },
    {
        skill: "Heavy Guns",
        name: "Hit the Deck!",
        cost: ":t:",
        desc: "When damaging, reduce all damage dealt by this attack to 0. Every character that would have been damaged by this attack becomes Prone."
    },
    {
        skill: "Heavy Guns",
        name: "Perforate",
        cost: ":c:",
        desc: "After damaging, the target gains the Bleeding Out Condition."
    },
    {
        skill: "Heavy Guns",
        name: "Sweeping Fire",
        cost: ":r:",
        desc: "After damaging, immediately make another Heavy Guns attack against a different target that was not targeted by this attack or an attack generated by this Trigger this turn."
    },

    // Long Arms
    {
        skill: "Long Arms",
        name: "Precision Sniping",
        cost: ":m:",
        desc: "If the damage from this attack results in a Critical Effect, you may choose the location of the Critical Effect rather than flipping for it."
    },
    {
        skill: "Long Arms",
        name: "Sight In",
        cost: ":t:",
        desc: "After resolving this attack, you may discard a Twist Card to gain the Focused +1 Condition."
    },
    {
        skill: "Long Arms",
        name: "Punch Through",
        cost: ":c:",
        desc: "After damaging, deal 1/2/4 damage to a second character within 3 yards of the original target and behind them, relative to the firing character's position. This second damage flip may not be cheated."
    },
    {
        skill: "Long Arms",
        name: "Headshot",
        cost: ":r:",
        desc: "When damaging, this attack ignores Hard to Wound. If a Critical Effect is generated, it automatically affects the target's head."
    },

    // Pistol
    {
        skill: "Pistol",
        name: "Ricochet",
        cost: ":m:",
        desc: "After damaging, another character within 3 yards of the target suffers 1/2/4 damage. This damage flip may not be cheated."
    },
    {
        skill: "Pistol",
        name: "Armor-Piercing Bullets",
        cost: ":t:",
        desc: "When damaging, this attack ignores Armor."
    },
    {
        skill: "Pistol",
        name: "Loud Blank",
        cost: ":c:",
        desc: "After succeeding, reduce all damage dealt by this attack to 0. The target gains Slow."
    },
    {
        skill: "Pistol",
        name: "Unload",
        cost: ":r:",
        desc: "When damaging, if you have two or more bullets remaining in your weapon, deal +2 damage to the target. Your weapon is now empty."
    },

    // Shotgun
    {
        skill: "Shotgun",
        name: "Run ‘n Gun",
        cost: ":m:",
        desc: "After damaging, you may immediately move any distance towards the target, up to your Walk Aspect in yards."
    },
    {
        skill: "Shotgun",
        name: "What If…More Powder?",
        cost: ":t:",
        desc: "When damaging, this attack adds +b to its Moderate and Severe damage values."
    },
    {
        skill: "Shotgun",
        name: "Shotgun Surgeon",
        cost: ":c:",
        desc: "When damaging, this attack does not deal b damage. Instead, deal +1 damage to the target for each b that would have been created by the attack."
    },
    {
        skill: "Shotgun",
        name: "Blown Back",
        cost: ":r:",
        desc: "After damaging, if this attack dealt Moderate or Severe damage, the target is pushed 1 yard away and becomes Prone."
    },

    // Thrown Weapons
    {
        skill: "Thrown Weapons",
        name: "Ready Weapon",
        cost: ":m:",
        desc: "After resolving, take the (1) Ready Weapon Action."
    },
    {
        skill: "Thrown Weapons",
        name: "I Had An Extra",
        cost: ":t:",
        desc: "After succeeding, you find an additional item identical to the one you just threw in your gear (effectively replenishing the thrown item). This Trigger will not duplicate rare or unique items, at the Fatemaster’s discretion."
    },
    {
        skill: "Thrown Weapons",
        name: "Smacked in the Head",
        cost: ":c:",
        desc: "When damaging, the attack deals +1 damage. If a Critical hit is generated, it automatically affects the target's head."
    },
    {
        skill: "Thrown Weapons",
        name: "Hey! Over Here!",
        cost: ":r:",
        desc: "After resolving, take the Impose Action against the target."
    },

    // ==========================================
    // 7. SOCIAL SKILLS
    // ==========================================

    // Barter
    {
        skill: "Barter",
        name: "Flatter",
        cost: ":m:",
        desc: "After succeeding, the target becomes friendly and willing to assist you with gossip, directions, or other forms of information."
    },
    {
        skill: "Barter",
        name: "Can’t You Do A Little Better?",
        cost: ":t:",
        desc: "After succeeding, reduce the price of the item or service you are trying to purchase by an additional 20%."
    },
    {
        skill: "Barter",
        name: "I’ll Never Shop Here Again!",
        cost: ":c:",
        desc: "After failing, the target offers you a minor item or service to keep you as a customer. This could be a free piece of pie at a restaurant, a box of bullets at a weapons shop, or a sack of flour at a general store. This Trigger may not be declared against the same target more than once per day."
    },
    {
        skill: "Barter",
        name: "How Much For The Hat?",
        cost: ":r:",
        desc: "After succeeding, you may make another Barter Challenge, this time for an item that the target owns but was not otherwise willing to sell."
    },

    // Bewitch
    {
        skill: "Bewitch",
        name: "I’m Kinda Important",
        cost: ":m:",
        desc: "After succeeding, the target believes that you are a moderate- to high-ranking member of an organization they are friendly with and treats you accordingly until they have reason to believe otherwise."
    },
    {
        skill: "Bewitch",
        name: "Flirtatious Wink",
        cost: ":t:",
        desc: "After succeeding, the target develops a crush on you. While they will not immediately throw themselves at you, they will offer you small favors and speak favorably about you, highlighting your strengths while downplaying your flaws. The crush lasts for one week."
    },
    {
        skill: "Bewitch",
        name: "I Don’t Like You, Either",
        cost: ":c:",
        desc: "After failing, you may immediately make an Intimidate Challenge against the target with a :+: to the duel."
    },
    {
        skill: "Bewitch",
        name: "And Who’s Your Friend?",
        cost: ":r:",
        desc: "After succeeding, immediately make another Bewitch Challenge against a different target with a :+: to the duel."
    },

    // Convince
    {
        skill: "Convince",
        name: "Just Between Us",
        cost: ":m:",
        desc: "After succeeding, if you asked the target for a favor or to do something that might be considered questionable or illegal, they will keep the matter a secret unless forcefully questioned."
    },
    {
        skill: "Convince",
        name: "Revelation",
        cost: ":t:",
        desc: "After succeeding, the target now believes your opinion to be the correct one. They abandon their previous beliefs on the topic and adopt your beliefs as their own."
    },
    {
        skill: "Convince",
        name: "We’re Just Talking Is All",
        cost: ":c:",
        desc: "After failing, if you asked the target to perform a questionable or illegal action, they will keep your discussion a secret unless forcefully questioned."
    },
    {
        skill: "Convince",
        name: "The Honest Truth",
        cost: ":r:",
        desc: "After succeeding, if you are telling the truth and being sincere, you gain an additional Margin of Success."
    },

    // Deceive
    {
        skill: "Deceive",
        name: "Straight Faced",
        cost: ":m:",
        desc: "After failing during Narrative Time, if the target does not possess any ranks in the Scrutiny Skill, you win the Challenge."
    },
    {
        skill: "Deceive",
        name: "Revelation",
        cost: ":t:",
        desc: "After succeeding, the target now believes your opinion to be the correct one. They abandon their previous beliefs on the topic and adopt your beliefs as their own."
    },
    {
        skill: "Deceive",
        name: "\"Guys, He Said It's Not A Real Knife!\"",
        cost: ":c:",
        desc: "After succeeding during Narrative Time, the target turns their back on you. You may draw a one-handed weapon and make an immediate attack against the target with :++: to the attack flip."
    },
    {
        skill: "Deceive",
        name: "But Seriously...",
        cost: ":r:",
        desc: "After failing, you may make a Convince Challenge against the same target with a :+: to the duel. If you succeed, there are no repercussions for failing the Deceive duel."
    },

    // Intimidate
    {
        skill: "Intimidate",
        name: "It's Nothing Personal",
        cost: ":m:",
        desc: "After succeeding, you may make a Bewitch Challenge against the target with a :+: to the duel. If you succeed, the target's perception of you does not worsen as a result of the Intimidate Challenge."
    },
    {
        skill: "Intimidate",
        name: "Interrogation",
        cost: ":t:",
        desc: "After succeeding, the target must reveal a piece of helpful information she might not have otherwise given you (if possible)."
    },
    {
        skill: "Intimidate",
        name: "We’re Just Talking Is All",
        cost: ":c:",
        desc: "After failing, if you asked the target to perform a questionable or illegal action, they will keep your discussion a secret unless forcefully questioned."
    },
    {
        skill: "Intimidate",
        name: "Soften You Up",
        cost: ":r:",
        desc: "After succeeding against a target within 1 yard, you may make a free Pugilism attack against the target; this attack may not declare Triggers. If the attack is successful, gain a Margin of Success on the Intimidate Challenge."
    },

    // Leadership
    {
        skill: "Leadership",
        name: "It Wasn't My Idea",
        cost: ":m:",
        desc: "After resolving, all characters listening believe that the order or inspiring words spoken by the character are actually the sentiments of someone else (who does not have to be present), even if that character claims otherwise."
    },
    {
        skill: "Leadership",
        name: "I Believe In You",
        cost: ":t:",
        desc: "After succeeding, any NPCs performing a task as a result of your Leadership Challenge treat their Rank Value as +2 higher for the duration of the task."
    },
    {
        skill: "Leadership",
        name: "For Them!",
        cost: ":c:",
        desc: "After succeeding, all characters listening may make a TN 10 Tenacity Challenge. On a success, that character may ignore the first Critical Effect they suffer within the next hour."
    },
    {
        skill: "Leadership",
        name: "Let's Do This!",
        cost: ":r:",
        desc: "After succeeding during an Ongoing Challenge, every other character participating in the Ongoing Challenge gains a :+: to Challenge Duels they make during the next Duration."
    },

    // Scrutiny
    {
        skill: "Scrutiny",
        name: "Political Ties",
        cost: ":m:",
        desc: "After succeeding, you learn with which Faction the target is most closely associated (or every such Faction, if the target is closely associated with multiple Factions). If the target is not associated with any specific Faction, they count as being associated with Outcasts."
    },
    {
        skill: "Scrutiny",
        name: "Sense Magic",
        cost: ":t:",
        desc: "After succeeding, you learn the identity of every Magia in the target's current Grimoire (if any)."
    },
    {
        skill: "Scrutiny",
        name: "Wary",
        cost: ":c:",
        desc: "After succeeding, you gain the following Condition until the end of the scene: \"On Alert: When this character enters Dramatic Time, she may end this Condition to gain :+: to her Initiative flip.\""
    },
    {
        skill: "Scrutiny",
        name: "I've Seen Your Poster",
        cost: ":r:",
        desc: "After succeeding, you learn whether the target has a bounty on their head and, if so, how much it is worth."
    },

    // ==========================================
    // 8. TRAINING SKILLS
    // ==========================================

    // Acrobatics
    {
        skill: "Acrobatics",
        name: "Bouncy",
        cost: ":m:",
        desc: "After succeeding, you may move up to 2 yards in any direction."
    },
    {
        skill: "Acrobatics",
        name: "Show Boating",
        cost: ":t:",
        desc: "After succeeding, you may make an immediate Pugilism or Martial Arts attack against a character you are engaged with. The attack flip gains a :+:."
    },
    {
        skill: "Acrobatics",
        name: "Hold Still!",
        cost: ":c:",
        desc: "After succeeding, any Ranged Combat attack made against you before the start of your next turn suffers a :-: to the attack flip."
    },
    {
        skill: "Acrobatics",
        name: "Physique",
        cost: ":r:",
        desc: "After succeeding, gain one Margin of Success per :r: in the final duel total."
    },

    // Athletics
    {
        skill: "Athletics",
        name: "Like A Spider",
        cost: ":m:",
        desc: "After succeeding while climbing, you move twice the normal speed."
    },
    {
        skill: "Athletics",
        name: "Show Boating",
        cost: ":t:",
        desc: "After succeeding, you may make an immediate Pugilism or Martial Arts attack against a character you are engaged with. The attack flip gains a :+:."
    },
    {
        skill: "Athletics",
        name: "Pratfall",
        cost: ":c:",
        desc: "After failing, if you would suffer damage from the result, you suffer 2 less damage."
    },
    {
        skill: "Athletics",
        name: "Invigorating Exercise",
        cost: ":r:",
        desc: "After succeeding, you may discard a card to end one Condition affecting you."
    },

    // Carouse
    {
        skill: "Carouse",
        name: "Just Like Down On the Bayou",
        cost: ":m:",
        desc: "After succeeding, you gain the following ability for the next hour: \"Drunk and Reckless: At the start of this character's turn, it may suffer 2 damage to generate 1 additional General AP.\""
    },
    {
        skill: "Carouse",
        name: "Teetotaler",
        cost: ":t:",
        desc: "After succeeding, instead of partaking, you may dispose of your drinks or drugs without partaking and without anyone realizing you have done so."
    },
    {
        skill: "Carouse",
        name: "Drunken Strength",
        cost: ":c:",
        desc: "After succeeding, gain the following Condition for the next hour: \"Drunken Strength: This character has +1 Might, to a maximum of +4, but suffers a :-: to any Ranged Combat Challenges.\""
    },
    {
        skill: "Carouse",
        name: "Binge Drinker",
        cost: ":r:",
        desc: "After succeeding, you heal 1/2/3 damage and gain the Poison +1 Condition."
    },

    // Centering
    {
        skill: "Centering",
        name: "Strange Numbness",
        cost: ":m:",
        desc: "After succeeding, you gain a :+: on the next Challenge you make to resist a Social Skill, provided it occurs by the end of the day."
    },
    {
        skill: "Centering",
        name: "Calm Mind",
        cost: ":t:",
        desc: "After succeeding, you gain the following Condition for the next 30 minutes: \"Calm Mind: This character gains +1 Willpower.\""
    },
    {
        skill: "Centering",
        name: "Is That All?",
        cost: ":c:",
        desc: "After succeeding, any of your allies within line of sight that failed to resist the same effect may make a second Centering Challenge; on a success, their first failure is ignored."
    },
    {
        skill: "Centering",
        name: "No More Words",
        cost: ":r:",
        desc: "After succeeding, you may draw a one-handed weapon and make an immediate attack against the character you are speaking with (if they are in range)."
    },

    // Evade
    {
        skill: "Evade",
        name: "Check Please!",
        cost: ":m:",
        desc: "After succeeding, immediately take a (1) Walk Action."
    },
    {
        skill: "Evade",
        name: "Oww-reeka!",
        cost: ":t:",
        desc: "After failing, you may suffer 2 damage to draw a Twist card."
    },
    {
        skill: "Evade",
        name: "Pratfall",
        cost: ":c:",
        desc: "After failing, if you would suffer damage from the result, you suffer 2 less damage."
    },
    {
        skill: "Evade",
        name: "Ignore the Pain",
        cost: ":r:",
        desc: "After succeeding, if you suffer a Weak Critical Effect before the start of your next turn, it is ignored and has no effect."
    },

    // Pick Pocket
    {
        skill: "Pick Pocket",
        name: "Both Hands",
        cost: ":m:",
        desc: "After succeeding, make another Pick Pocket check against the same target with a :+: to the duel. This extra action may not declare Triggers."
    },
    {
        skill: "Pick Pocket",
        name: "Well Hello There",
        cost: ":t:",
        desc: "After failing, you may make an immediate Bewitch Challenge against the target. If successful, the target does not notice your failed Pick Pocket attempt."
    },
    {
        skill: "Pick Pocket",
        name: "Pat Down",
        cost: ":c:",
        desc: "After succeeding, you learn whether the target has any pneumatic limbs or hidden weapons on their person."
    },
    {
        skill: "Pick Pocket",
        name: "Must Have Been Payday",
        cost: ":r:",
        desc: "After succeeding, if you lift any amount of scrip off the target, double the amount."
    },

    // Stealth
    {
        skill: "Stealth",
        name: "Dart And Snatch",
        cost: ":m:",
        desc: "After succeeding, you may make a Pick Pocket Challenge against a target within 3 yards with a :+: to the duel."
    },
    {
        skill: "Stealth",
        name: "Stakeout",
        cost: ":t:",
        desc: "After succeeding, you may make a Notice or Scrutiny Challenge against a nearby character or location with a :+: to the duel."
    },
    {
        skill: "Stealth",
        name: "Stalker",
        cost: ":c:",
        desc: "After succeeding, you gain the following Condition for the next minute: \"Getting Closer: This character may end this Condition when making a Melee attack against a target that does not know she is present to gain :++: to the attack flip.\""
    },
    {
        skill: "Stealth",
        name: "Sniper",
        cost: ":r:",
        desc: "After succeeding during Narrative Time, you may make a Long Arms attack with a readied weapon against a target within range. If it hits, the damage flip gains :+:."
    },

    // Toughness
    {
        skill: "Toughness",
        name: "Motivated By Pain",
        cost: ":m:",
        desc: "After succeeding, you may suffer 1 damage to take a (1) Walk Action."
    },
    {
        skill: "Toughness",
        name: "Stanch the Bleeding",
        cost: ":t:",
        desc: "After succeeding, you may choose to end one Weak or Moderate Critical Effect affecting you."
    },
    {
        skill: "Toughness",
        name: "It Doesn't Hurt Anymore",
        cost: ":c:",
        desc: "After succeeding during Dramatic Time, you gain the following Condition until the end of Dramatic Time: \"Hard to Wound +1: Damage flips against this character suffer :-:.\""
    },
    {
        skill: "Toughness",
        name: "Tough As Nails",
        cost: ":r:",
        desc: "After succeeding, heal 1 damage."
    }
];
