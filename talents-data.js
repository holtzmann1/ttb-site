const GENERAL_TALENTS = [
  {
    "name": "Advanced Training",
    "desc": "Choose a Skill that meets this Talent’s requirement. When performing a duel using the chosen Skill, the character increases her final duel total by +1.\n\nA character can take this Talent multiple times, but each time a different Skill must be chosen.",
    "req": "Skill: Chosen Skill Rank 5",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Armor Training",
    "desc": "This character reduces the penalty to Defense from wearing armor by 1, to a minimum of 0.\n\nA character can take this Talent multiple times.",
    "req": "Aspect: Tenacity 2 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Back to the Wall",
    "desc": "When this character is within 1 yard of a wall or other solid object at least as tall as she is, she gains +1 Defense.",
    "req": "Aspect: Tenacity -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Better Part of Valor",
    "desc": "This character’s Charge Aspect becomes “—” (rendering her unable to take the Charge Action), but she gains a +2 to her Walk Aspect.",
    "req": "None",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Blissful Ignorance",
    "desc": "When this character fails a Horror Duel, if it is her turn, her current Action immediately fails, but she does not become Paralyzed. If it is not her turn, she becomes Slow instead of Paralyzed",
    "req": "Aspect: Cunning -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Call Shot",
    "desc": "Choose a Skill. When this character generates a Critical Effect with an attack that used the chosen Skill, she may discard a card to change the suit of the Critical Effect to the suit of the discarded card.\n\nA character may take this Talent multiple times, but each time a different Skill must be chosen.",
    "req": "Type: Fated",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Calm And Collected",
    "desc": "This character adds +1 to the value of any Focused condition that she receives, to a maximum of Focused +3.",
    "req": "Aspect: Speed -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Clear Orders",
    "desc": "When this character takes the Order Action to give commands to one or more subordinate characters, she may Cheat Fate for those characters",
    "req": "Skill: Leadership 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Combat Reading",
    "desc": "When making disengaging strikes, this character adds her Scrutiny Skill Ranks to her final duel total.",
    "req": "Aspect: Cunning 1 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Counterspell",
    "desc": "When this character is targeted by an enemy’s Magical Action, the enemy loses any suits associated with their Magical Skill.",
    "req": "Skill: Counter-Spelling 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Critical Strike",
    "desc": "Choose a Skill that meets this Talent’s requirement. All attacks with the chosen Skill gain the following Trigger:\n\nRAMS Critical Strike: When damaging, deal 1 additional damage for each RAMS in the final duel total.\n\nA character may take this Talent multiple times, but each time a different Skill must be chosen.",
    "req": "Skill: Close Combat or Ranged Combat Skill 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Cynic",
    "desc": "This character gains + on any duel made to resist deception (including Deceive and Pick Pocket Challenges, as well as the Trick Action).",
    "req": "Aspect: Charm -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Defensive Protocols",
    "desc": "This character's subordinate characters that are within Aura 6 of her may choose to flip cards when they are attacked, in the same manner as a Fated character.",
    "req": "Skill: Leadership 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Duck and Cover",
    "desc": "This character gains the following ability:\n\nBlast Resistant +1: Reduce all damage this character suffers from Pulse and Blast effects by +1, to a minimum of 1.",
    "req": "Skill: Evade 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Flick of the Wrist",
    "desc": "When making a Melee or Pugilism attack, this character may substitute Grace for Might when calculating her Acting value.",
    "req": "Aspect: Might -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Governor’s Gift",
    "desc": "Choose male or female. This character gains + on any Bewitch or Scrutiny duels made against members of the chosen gender.",
    "req": "Aspect: Charm 1 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Great Fate",
    "desc": "When this character draws her Control Hand at the end of the Prologue, she draws one additional card.\n\nA character may take this Talent multiple times, and its effects stack.",
    "req": "Type: Fated",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Gruesome Attack",
    "desc": "Choose a Skill that meets this Talent's requirements. All Critical Effect flips this character generates from attacks using the chosen Skill receive +.\n\nA character may take this Talent multiple times, but each time a different Skill must be chosen.",
    "req": "Skill: Close Combat or Ranged Combat Skill 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Gruff",
    "desc": "This character gains a + to Deceive and Intimidate Challenges.",
    "req": "Aspect: Charm -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Hobbling Attack",
    "desc": "Choose a Skill that meets this Talent’s requirement. All attacks with the chosen Skill gain the following Trigger:\n\nCROWS Hobble: After succeeding, the target gains the following Condition for the remainder of Dramatic Time: “Hobbled: This character may only declare one Movement General Action per turn and may not declare the Run Action.”\n\nA character may take this Talent multiple times, but each time a different Skill must be chosen.",
    "req": "Skill: Close Combat or Ranged Combat Skill 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Honest",
    "desc": "This character gains + to all Convince and Leadership Duels.",
    "req": "Aspect: Cunning -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Imposing Mass",
    "desc": "This character gains + to her disengaging strikes and to any Impose Action she takes.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Let Me Show You",
    "desc": "This character has a natural affinity for teaching other people how to do things. She may spend 15 minutes and discard a Twist Card to explain how one of her General Talents works to another character. That character may then discard a Twist Card to gain the taught General Talent for the rest of the day.\n\nThe taught character must still meet all the necessary physical prerequisites for the Talent (such as a pneumatic limb for a Talent involving pneumatic limbs or wings for a Talent involving flight). Talents with a requirement of Invested, Stitched, or Twisted cannot be taught to another character.",
    "req": "Skill: Leadership 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Open Hand Fighting",
    "desc": "If the character is wielding a Melee weapon and has nothing in her other hand when she makes a successful disengaging strike, she may choose to have her disengaging strike deal damage to her target.",
    "req": "Skill: Melee 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Paired Weapons",
    "desc": "Choose a Skill that meets this Talent’s requirement. When this character is wielding two weapons of the chosen type, one in each hand, she gains + to any attacks made with either weapon. Despite fighting with two weapons, the character only makes a single attack flip and only deals damage with one of her wielded weapons; the second weapon merely gives her a bonus to hit.\n\nIf she is wielding two Ranged Combat weapons, using this Talent expends one round of ammunition from each wielded weapon.",
    "req": "Skill: Close Combat or Ranged Combat Skill 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Plain-Spoken",
    "desc": "This character gains + to Social Duels made during Dramatic Time.",
    "req": "Aspect: Intellect -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Polyglot",
    "desc": "When this character gains this Talent, she chooses two languages that she does not already speak and learns how to speak them. When conversing with another character in their native, non-English language, this character gains + to her Barter and Bewitch duels.",
    "req": "Aspect: Intellect 1 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Quick Study",
    "desc": "During the Epilogue, when presented with Skill Advancement options by the Fatemaster, this character may instead advance in any Skill she does not already possess instead of the Skill Advancement options presented by the Fatemaster.\n\nThis character must have witnessed a friendly character succeed at the chosen Skill at some point during the session.",
    "req": "Aspect: Intellect 1 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Rush",
    "desc": "The character increases her Charge Aspect by +1.\n\nA character may take this Talent multiple times, and its effects stack.",
    "req": "Aspect: Speed 1 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Secretive Spellcasting",
    "desc": "When this character casts a Spell or Manifested power, she may discard a card to make her Magical Theory appear to be the Thalarian Doctrine to anyone who attempts to detect it.",
    "req": "Other: Magical Theory",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Seize the Day",
    "desc": "This character gains + to her Initiative flips.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Shot Studies",
    "desc": "If this character has the Focused Condition and is firing a shotgun loaded with slug ammunition, she multiplies the range of the shotgun by +10.",
    "req": "Skill: Shotgun 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Shove Aside",
    "desc": "This character can move through characters with a Height lower than her own without being impeded. Such characters cannot make disengaging strikes against this character.",
    "req": "Aspect: Might 1 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Shrug Off",
    "desc": "This character gains the following Tactical Action:\n\n(0) Shrug Off: This character may discard a Twist card to end a Condition affecting her.",
    "req": "Aspect: Resilience -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Specialized Skill",
    "desc": "Choose a Skill and a suit. Add the chosen suit to the chosen Skill’s value.\n\nA character may take this Talent multiple times, but each time, a different Skill must be chosen.",
    "req": "Type: Fated, Destiny: 2+",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Specialized Toxins",
    "desc": "The character chooses one of the following Characteristics: Living, Construct, Undead, Spirit, or Nightmare. When this character performs an Action or declares a Trigger that would gives a target with the chosen Characteristic the Poison Condition, it affects the target (even if the target is not Living), and the target gains an additional Poison +1 for each chosen Characteristic that it possesses.\n\nA character may take Talent multiple times, but each time a different Characteristic must be chosen.",
    "req": "Skill: Alchemistry 2 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Speed Loading",
    "desc": "Choose the Long Arms, Pistols, Shotguns, or Heavy Weapons Skill. The character gains the following Trigger on any attack Action using the chosen Skill:\n\nRAMS Speed Loading: If this weapon’s Reload AP cost is 2 or lower, reload this weapon.",
    "req": "Skill: Chosen Skill Rank 2 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Steam-Powered Charge",
    "desc": "When this character declares the Charge Action, she may choose to make a single (1) AP or (2) AP Close Combat attack instead of two (1) AP Close Combat attacks. If she chooses to makes a single (1) AP Close Combat attack, it deals +1 damage and knocks the target Prone if successful.",
    "req": "Other: Construct or possess one or more pneumatic limbs",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Sturdy",
    "desc": "This character gains +2 Wounds.\n\nThis Talent may be taken multiple times; each additional time this Talent is taken, this character gains +1 Wound.",
    "req": "None",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Sure-Footed",
    "desc": "When this character is pushed or moved by an effect, she may apply her Speed Aspect as a penalty to the distance (in yards) that she is pushed or moved by the effect.",
    "req": "Aspect: Speed -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Tenacious Warrior",
    "desc": "When an enemy makes a successful attack against this character and declares a Trigger, this character may discard a card. If she does so, the Trigger has no effect on the character (though the Trigger may affect other characters, and the character still suffers the other effects of the attack normally).",
    "req": "Aspect: Resilience 2 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Threatening Posture",
    "desc": "Enemies engaged with this character suffer a - penalty on Close Combat attacks made against targets other than her who do not also possess this Talent.",
    "req": "Skill: Intimidate 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Tricky Shot",
    "desc": "Choose a Ranged Combat Skill. While making an attack with the chosen Skill, this character may choose to ignore one -.",
    "req": "Skill: Chosen Skill Rank 2 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Twisted Fates",
    "desc": "When this Talent is chosen, choose a card in the character’s Twist deck and permanently increase its value by 1, to a maximum value of 13.\n\nA character may take this Talent multiple times.",
    "req": "Type: Fated",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Unassuming",
    "desc": "This character gains + to any duels made to avoid being noticed in a group or angering someone.",
    "req": "Aspect: Might -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Undermine Confidence",
    "desc": "This character gains + to all Intimidate Challenges made during Narrative Time.",
    "req": "Aspect: Resilience -1 or lower",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Unequaled Accuracy",
    "desc": "Choose a Skill that meets this Talent’s requirement. This character does not randomize her target when firing into an engagement using the chosen Skill.",
    "req": "Skill: Magical or Ranged Combat Skill 2 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Wall of Muscle",
    "desc": "Increase this character’s Height to 3. In addition, increase the range of all y weapons wielded by this character by 1 yard, to a maximum of 3 yards.\n\nIf this Talent is taken after character creation, the character must have some sort of justification for this sudden growth spurt.",
    "req": "Aspect: Resilience 1 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Will of Ages",
    "desc": "When this character uses Magical Shielding, she may shield a number of additional friendly characters (including herself) equal to her Tenacity.",
    "req": "Skill: Counter-Spelling 3 or higher",
    "book": "Second Edition Core",
    "notes": ""
  },
  {
    "name": "Advanced Sensors",
    "desc": "This character gains a + on Notice duels and is capable of detecting things that other characters might miss, such as the presence of invisible creatures (though not their exact position) with a Difficult Notice Challenge.",
    "req": "Type: Invested, Other: Light Chassis",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Avoidant",
    "desc": "This character permanently loses 1 Wound but gains +1 Defense.",
    "req": "Aspect: Resilience -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Blot the Sky",
    "desc": "When the character makes an Archery attack, her Moderate damage gains +b, and her Severe damage gains +bb (provided that she expends two additional arrows per resulting Blasts).",
    "req": "Skill: Archery 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Book Smart",
    "desc": "While this character has learned quite a bit from her\nbooks, all that reading has dulled her reaction time.\nThis character gains a - to Initiative but a + to all non- Magical Intellect Challenges.",
    "req": "Aspect: Cunning -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "C-C-C-Combo!!!!",
    "desc": "The character gains the following Trigger on her Martial Arts Close Combat attacks:\n\nMASKS Combo!: This character may take this attack again against the same target. This second attack may not declare Triggers.",
    "req": "Skill: Martial Arts 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Channel Destiny",
    "desc": "When this character performs a duel, she may suffer 2 damage before flipping any cards to add a suit of her choice to her final duel total. If this damage causes the character to suffer a Critical Effect or Toughness check to remain conscious, resolve the initial duel before checking for either.",
    "req": "None",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Cheating So and So",
    "desc": "The character gains the following Trigger on all Expertise Challenges:\n\nMASKS Stack the Deck: After resolving, you may look at the top card of the Fate deck and then choose whether or not to put it on the bottom of the deck.",
    "req": "Skill: Gambling 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Common Sense",
    "desc": "This character may discard a Twist Card during Narrative Time to gain a + on a duel.",
    "req": "Aspect: Cunning 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Concussive Force",
    "desc": "Any time the character deals damage with the Martial Arts or Pugilism Skills, she may push her target directly away from her a number of yards equal to her Might Aspect.",
    "req": "Aspect: Might 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Demanding Taskmaster",
    "desc": "The character gains the following Trigger on her Flexible Close Combat attacks:\n\nMASKS Motivation: After succeeding, move the target 1 yard if this attack dealt Weak damage, 2 yards if Moderate, and 3 yards if Severe.",
    "req": "Skill: Flexible 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Disarming Attack",
    "desc": "The character’s Martial Arts Close Combat attacks gain the following Trigger:\n\nCROWS Disarming Attack: After succeeding, the target drops a single item of your choice held in its hands. This attack’s damage flip receives a -.",
    "req": "Skill: Martial Arts 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Fickle",
    "desc": "The character gains a + on any Skill she hasn’t used that session, but it costs 1 extra experience point whenever she attempts to raise a Skill higher than 2 ranks.",
    "req": "Aspect: Tenacity -2 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Gaussian Logic Engine",
    "desc": "The character reduces its highest Physical Aspect by 1, but may then raise a Mental Aspect by 1, to a maximum Aspect Value of 4.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Heavy Mount and Bracing",
    "desc": "The character may attach a weapon with the Heavy rule to their weapon mount with five minutes of work; it is then considered to be braced to a weapon mount. The character may use the (1) Ready Weapon Action as a (0) Action when readying this attached weapon.",
    "req": "Type: Invested, Other: Heavy Chassis",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Improvised Parts",
    "desc": "When creating a Construct, the character gains an additional number of Construct Points equal to her Intellect Aspect.",
    "req": "Aspect: Intellect 1 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Inscription",
    "desc": "The character may add up to two total Magia and/or Immuto to a single Grimoire in her possession.\n\nThese Magia or Immuto need not be ones that the character has in another Grimoire; Malifaux is a magical place, and most Grimoires “want” to become more powerful. Any special rules which apply to the Grimoire also apply to these new Magia and/or Immuto.",
    "req": "Skill: Literacy 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Interface",
    "desc": "The character gains the following Trigger to all Social Duels:\n\nTOMES Interface: After succeeding against a Construct, gain 1 additional Margin of Success.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Leg Modification",
    "desc": "This character’s legs can be swapped out for different models. Replacing the character’s legs requires 30 minutes of work and a successful Artefacting or Engineering duel against TN 12 (which may be made by the character or someone else assisting them). If successful, the character gains one of the options below until it uses this Talent again.\n\n•Standard: No adjustments.\n•Chargers: Gain +2 Charge and -1 Walk\n•Light Alloy: Gain + 1 Walk and -1 Wound\n•Treads: Gain Unimpeded, -1 Walk, and -2 Charge\n•Hinged: Character may take the Drop Prone and Stand Up Actions as (0) Actions but may not take the Run Action.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Lightning Rod",
    "desc": "The character gains a + on any duels made to resist Spells or Manifested Powers, but when targeted by an enemy’s Spell or Manifested Power, the enemy can add a single suit of their choice to the final duel total.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Metal on Metal",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (TOMES) Metal on Metal: Reduce the damage caused by an Attack Action by 2, to a minimum of 1.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Mostly Blind",
    "desc": "The character gains a + on Close Combat attacks but a - on Ranged Combat attacks and Notice Challenges.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Into the Steam",
    "notes": "Хоумрул"
  },
  {
    "name": "Mountaineer",
    "desc": "When climbing a surface, the character’s speed is increased to her full Walk speed rather than half her Walk speed. The character gains a + on any Athletics Challenges made to climb a surface and moves 2 yards for every Margin of Success (rather than 1 yard).",
    "req": "Aspect: Grace 1 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Mow Down",
    "desc": "When this character makes a Ranged Combat attack with a Heavy Gun, she may use 2 AP instead of 1 AP to gain ++ on the attack flip. The character may not Cheat Fate on this attack. This attack uses three times as many bullets as normal.",
    "req": "Skill: Heavy Guns 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Queensbury Rules",
    "desc": "The character gains the following Trigger on her Pugilism Close Combat attacks:\n\nRAMS Win By Knockout: After damaging, the target takes the Drop Prone action.",
    "req": "Skill: Pugilism 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Quick",
    "desc": "The character gains a + to any Challenges made to resist a Pulse and takes 1 less damage from Pulse and Blasts effects (to a minimum of 1 damage).",
    "req": "Aspect: Speed 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Rebound",
    "desc": "The character gains the following Trigger on her Thrown Weapons Ranged Combat attacks:\n\nMASKS Rebound: After damaging, you may deal 1/2/3 damage to another target within 3 yards of the original target.",
    "req": "Skill: Thrown Weapons 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Riposte",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (RAMS MASKS) Riposte: After a Close Combat attack fails against this character, this character deals the damage of one of her readied sword or blade weapons to the attacker. This damage flip receives a -.",
    "req": "Skill: Melee 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Self Sufficient",
    "desc": "This character gains +1 Willpower but cannot take the Assist Action and cannot voluntarily take part in Ongoing Challenges alongside other characters (though the Fatemaster can still force her to participate if it makes sense for the Ongoing Challenge in question).",
    "req": "Aspect: Charm -2 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Slow Learner",
    "desc": "This character gains +1 to an Aspect of her choice. During the Epilogue step, the Fatemaster chooses which Skill the character will advance in, rather than the player.",
    "req": "Aspect: Intellect -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Steel Wall",
    "desc": "At the end of the character’s turn, if it did not take any Move or Charge Actions, the character gains Armor +1 until the start of its next turn and provides Hard Cover to characters with a Height equal to or lower than its own.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Street Fighter",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (CROWS) Street Fighter: After a Close Combat attack fails against this character, if this character is wielding no weapons, this character deals 1/2/3 damage to the attacker. This damage flip may not be cheated.",
    "req": "Skill: Pugilism 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "C-C-C-Combo!!!!",
    "desc": "The character gains the following Trigger on her Martial Arts Close Combat attacks:\n\nMASKS Combo!: This character may take this attack again against the same target. This second attack may not declare Triggers.",
    "req": "Skill: Martial Arts 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Cheating So and So",
    "desc": "The character gains the following Trigger on all Expertise Challenges:\n\nMASKS Stack the Deck: After resolving, you may look at the top card of the Fate deck and then choose whether or not to put it on the bottom of the deck.",
    "req": "Skill: Gambling 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Common Sense",
    "desc": "This character may discard a Twist Card during Narrative Time to gain a + on a duel.",
    "req": "Aspect: Cunning 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Concussive Force",
    "desc": "Any time the character deals damage with the Martial Arts or Pugilism Skills, she may push her target directly away from her a number of yards equal to her Might Aspect.",
    "req": "Aspect: Might 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Demanding Taskmaster",
    "desc": "The character gains the following Trigger on her Flexible Close Combat attacks:\n\nMASKS Motivation: After succeeding, move the target 1 yard if this attack dealt Weak damage, 2 yards if Moderate, and 3 yards if Severe.",
    "req": "Skill: Flexible 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Disarming Attack",
    "desc": "The character’s Martial Arts Close Combat attacks gain the following Trigger:\n\nCROWS Disarming Attack: After succeeding, the target drops a single item of your choice held in its hands. This attack’s damage flip receives a -.",
    "req": "Skill: Martial Arts 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Fickle",
    "desc": "The character gains a + on any Skill she hasn’t used that session, but it costs 1 extra experience point whenever she attempts to raise a Skill higher than 2 ranks.",
    "req": "Aspect: Tenacity -2 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Gaussian Logic Engine",
    "desc": "The character reduces its highest Physical Aspect by 1, but may then raise a Mental Aspect by 1, to a maximum Aspect Value of 4.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Heavy Mount and Bracing",
    "desc": "The character may attach a weapon with the Heavy rule to their weapon mount with five minutes of work; it is then considered to be braced to a weapon mount. The character may use the (1) Ready Weapon Action as a (0) Action when readying this attached weapon.",
    "req": "Type: Invested, Other: Heavy Chassis",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Improvised Parts",
    "desc": "When creating a Construct, the character gains an additional number of Construct Points equal to her Intellect Aspect.",
    "req": "Aspect: Intellect 1 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Inscription",
    "desc": "The character may add up to two total Magia and/or Immuto to a single Grimoire in her possession.\n\nThese Magia or Immuto need not be ones that the character has in another Grimoire; Malifaux is a magical place, and most Grimoires “want” to become more powerful. Any special rules which apply to the Grimoire also apply to these new Magia and/or Immuto.",
    "req": "Skill: Literacy 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Interface",
    "desc": "The character gains the following Trigger to all Social Duels:\n\nTOMES Interface: After succeeding against a Construct, gain 1 additional Margin of Success.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Leg Modification",
    "desc": "This character’s legs can be swapped out for different models. Replacing the character’s legs requires 30 minutes of work and a successful Artefacting or Engineering duel against TN 12 (which may be made by the character or someone else assisting them). If successful, the character gains one of the options below until it uses this Talent again.\n\n•Standard: No adjustments.\n•Chargers: Gain +2 Charge and -1 Walk\n•Light Alloy: Gain + 1 Walk and -1 Wound\n•Treads: Gain Unimpeded, -1 Walk, and -2 Charge\n•Hinged: Character may take the Drop Prone and Stand Up Actions as (0) Actions but may not take the Run Action.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Lightning Rod",
    "desc": "The character gains a + on any duels made to resist Spells or Manifested Powers, but when targeted by an enemy’s Spell or Manifested Power, the enemy can add a single suit of their choice to the final duel total.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Metal on Metal",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (TOMES) Metal on Metal: Reduce the damage caused by an Attack Action by 2, to a minimum of 1.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Mostly Blind",
    "desc": "The character gains a + on Close Combat attacks but a - on Ranged Combat attacks and Notice Challenges.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Into the Steam",
    "notes": "Хоумрул"
  },
  {
    "name": "Mountaineer",
    "desc": "When climbing a surface, the character’s speed is increased to her full Walk speed rather than half her Walk speed. The character gains a + on any Athletics Challenges made to climb a surface and moves 2 yards for every Margin of Success (rather than 1 yard).",
    "req": "Aspect: Grace 1 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Mow Down",
    "desc": "When this character makes a Ranged Combat attack with a Heavy Gun, she may use 2 AP instead of 1 AP to gain ++ on the attack flip. The character may not Cheat Fate on this attack. This attack uses three times as many bullets as normal.",
    "req": "Skill: Heavy Guns 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Queensbury Rules",
    "desc": "The character gains the following Trigger on her Pugilism Close Combat attacks:\n\nRAMS Win By Knockout: After damaging, the target takes the Drop Prone action.",
    "req": "Skill: Pugilism 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Quick",
    "desc": "The character gains a + to any Challenges made to resist a Pulse and takes 1 less damage from Pulse and Blasts effects (to a minimum of 1 damage).",
    "req": "Aspect: Speed 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Rebound",
    "desc": "The character gains the following Trigger on her Thrown Weapons Ranged Combat attacks:\n\nMASKS Rebound: After damaging, you may deal 1/2/3 damage to another target within 3 yards of the original target.",
    "req": "Skill: Thrown Weapons 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Riposte",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (RAMS MASKS) Riposte: After a Close Combat attack fails against this character, this character deals the damage of one of her readied sword or blade weapons to the attacker. This damage flip receives a -.",
    "req": "Skill: Melee 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Self Sufficient",
    "desc": "This character gains +1 Willpower but cannot take the Assist Action and cannot voluntarily take part in Ongoing Challenges alongside other characters (though the Fatemaster can still force her to participate if it makes sense for the Ongoing Challenge in question).",
    "req": "Aspect: Charm -2 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Slow Learner",
    "desc": "This character gains +1 to an Aspect of her choice. During the Epilogue step, the Fatemaster chooses which Skill the character will advance in, rather than the player.",
    "req": "Aspect: Intellect -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Steel Wall",
    "desc": "At the end of the character’s turn, if it did not take any Move or Charge Actions, the character gains Armor +1 until the start of its next turn and provides Hard Cover to characters with a Height equal to or lower than its own.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Street Fighter",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (CROWS) Street Fighter: After a Close Combat attack fails against this character, if this character is wielding no weapons, this character deals 1/2/3 damage to the attacker. This damage flip may not be cheated.",
    "req": "Skill: Pugilism 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "C-C-C-Combo!!!!",
    "desc": "The character gains the following Trigger on her Martial Arts Close Combat attacks:\n\nMASKS Combo!: This character may take this attack again against the same target. This second attack may not declare Triggers.",
    "req": "Skill: Martial Arts 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Cheating So and So",
    "desc": "The character gains the following Trigger on all Expertise Challenges:\n\nMASKS Stack the Deck: After resolving, you may look at the top card of the Fate deck and then choose whether or not to put it on the bottom of the deck.",
    "req": "Skill: Gambling 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Common Sense",
    "desc": "This character may discard a Twist Card during Narrative Time to gain a + on a duel.",
    "req": "Aspect: Cunning 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Concussive Force",
    "desc": "Any time the character deals damage with the Martial Arts or Pugilism Skills, she may push her target directly away from her a number of yards equal to her Might Aspect.",
    "req": "Aspect: Might 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Demanding Taskmaster",
    "desc": "The character gains the following Trigger on her Flexible Close Combat attacks:\n\nMASKS Motivation: After succeeding, move the target 1 yard if this attack dealt Weak damage, 2 yards if Moderate, and 3 yards if Severe.",
    "req": "Skill: Flexible 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Disarming Attack",
    "desc": "The character’s Martial Arts Close Combat attacks gain the following Trigger:\n\nCROWS Disarming Attack: After succeeding, the target drops a single item of your choice held in its hands. This attack’s damage flip receives a -.",
    "req": "Skill: Martial Arts 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Fickle",
    "desc": "The character gains a + on any Skill she hasn’t used that session, but it costs 1 extra experience point whenever she attempts to raise a Skill higher than 2 ranks.",
    "req": "Aspect: Tenacity -2 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Gaussian Logic Engine",
    "desc": "The character reduces its highest Physical Aspect by 1, but may then raise a Mental Aspect by 1, to a maximum Aspect Value of 4.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Heavy Mount and Bracing",
    "desc": "The character may attach a weapon with the Heavy rule to their weapon mount with five minutes of work; it is then considered to be braced to a weapon mount. The character may use the (1) Ready Weapon Action as a (0) Action when readying this attached weapon.",
    "req": "Type: Invested, Other: Heavy Chassis",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Improvised Parts",
    "desc": "When creating a Construct, the character gains an additional number of Construct Points equal to her Intellect Aspect.",
    "req": "Aspect: Intellect 1 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Inscription",
    "desc": "The character may add up to two total Magia and/or Immuto to a single Grimoire in her possession.\n\nThese Magia or Immuto need not be ones that the character has in another Grimoire; Malifaux is a magical place, and most Grimoires “want” to become more powerful. Any special rules which apply to the Grimoire also apply to these new Magia and/or Immuto.",
    "req": "Skill: Literacy 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Interface",
    "desc": "The character gains the following Trigger to all Social Duels:\n\nTOMES Interface: After succeeding against a Construct, gain 1 additional Margin of Success.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Leg Modification",
    "desc": "This character’s legs can be swapped out for different models. Replacing the character’s legs requires 30 minutes of work and a successful Artefacting or Engineering duel against TN 12 (which may be made by the character or someone else assisting them). If successful, the character gains one of the options below until it uses this Talent again.\n\n•Standard: No adjustments.\n•Chargers: Gain +2 Charge and -1 Walk\n•Light Alloy: Gain + 1 Walk and -1 Wound\n•Treads: Gain Unimpeded, -1 Walk, and -2 Charge\n•Hinged: Character may take the Drop Prone and Stand Up Actions as (0) Actions but may not take the Run Action.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Lightning Rod",
    "desc": "The character gains a + on any duels made to resist Spells or Manifested Powers, but when targeted by an enemy’s Spell or Manifested Power, the enemy can add a single suit of their choice to the final duel total.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Metal on Metal",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (TOMES) Metal on Metal: Reduce the damage caused by an Attack Action by 2, to a minimum of 1.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Mostly Blind",
    "desc": "The character gains a + on Close Combat attacks but a - on Ranged Combat attacks and Notice Challenges.",
    "req": "Aspect: Grace -1 or lower",
    "book": "Into the Steam",
    "notes": "Хоумрул"
  },
  {
    "name": "Mountaineer",
    "desc": "When climbing a surface, the character’s speed is increased to her full Walk speed rather than half her Walk speed. The character gains a + on any Athletics Challenges made to climb a surface and moves 2 yards for every Margin of Success (rather than 1 yard).",
    "req": "Aspect: Grace 1 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Mow Down",
    "desc": "When this character makes a Ranged Combat attack with a Heavy Gun, she may use 2 AP instead of 1 AP to gain ++ on the attack flip. The character may not Cheat Fate on this attack. This attack uses three times as many bullets as normal.",
    "req": "Skill: Heavy Guns 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Queensbury Rules",
    "desc": "The character gains the following Trigger on her Pugilism Close Combat attacks:\n\nRAMS Win By Knockout: After damaging, the target takes the Drop Prone action.",
    "req": "Skill: Pugilism 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Quick",
    "desc": "The character gains a + to any Challenges made to resist a Pulse and takes 1 less damage from Pulse and Blasts effects (to a minimum of 1 damage).",
    "req": "Aspect: Speed 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Rebound",
    "desc": "The character gains the following Trigger on her Thrown Weapons Ranged Combat attacks:\n\nMASKS Rebound: After damaging, you may deal 1/2/3 damage to another target within 3 yards of the original target.",
    "req": "Skill: Thrown Weapons 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Riposte",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (RAMS MASKS) Riposte: After a Close Combat attack fails against this character, this character deals the damage of one of her readied sword or blade weapons to the attacker. This damage flip receives a -.",
    "req": "Skill: Melee 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Self Sufficient",
    "desc": "This character gains +1 Willpower but cannot take the Assist Action and cannot voluntarily take part in Ongoing Challenges alongside other characters (though the Fatemaster can still force her to participate if it makes sense for the Ongoing Challenge in question).",
    "req": "Aspect: Charm -2 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Slow Learner",
    "desc": "This character gains +1 to an Aspect of her choice. During the Epilogue step, the Fatemaster chooses which Skill the character will advance in, rather than the player.",
    "req": "Aspect: Intellect -1 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Steel Wall",
    "desc": "At the end of the character’s turn, if it did not take any Move or Charge Actions, the character gains Armor +1 until the start of its next turn and provides Hard Cover to characters with a Height equal to or lower than its own.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Street Fighter",
    "desc": "The character gains the following Defensive Trigger:\n\nDf (CROWS) Street Fighter: After a Close Combat attack fails against this character, if this character is wielding no weapons, this character deals 1/2/3 damage to the attacker. This damage flip may not be cheated.",
    "req": "Skill: Pugilism 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Mind in the Sewer",
    "desc": "This character is immune to the Blighted and Infected Conditions and ignores severe terrain penalties for moving through water.",
    "req": "Skill: Toughness 3 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Necrochemist",
    "desc": "When this character creates a compound (whether from the options presented on page 98 or from the Elixir of Life, Mystery Brew, Transformative Vigor, or Truth Serum Talents of the Chemist Pursuit), she may choose to have it affect Undead instead of Living characters.",
    "req": "Skill: Alchemistry 3 or higher, Necromancy 2 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Noxious Undead",
    "desc": "Undead characters this character creates gain the following ability:\n\nNoxious Cloud: At the end of this character's turn, all characters without Noxious Cloud within p1 of this character gain the Poison +1 Condition.",
    "req": "Skill: Alchemistry 3 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Pyromaniac",
    "desc": "When this character gives the Burning Condition to another character, that character gains an additional Burning +1.",
    "req": "Other: Applied 10 or more ranks of the Burning Condition to her enemies during a single combat.",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Reattach",
    "desc": "At the start of this character's turn during Dramatic Time, she may heal up to 2 damage and gain the following Condition until the end of Dramatic Time: “Fragile +1: Damage flips against this character gain +.”\n\nIn addition, this character can heal any Amputated Critical Effect on her arms or legs by holding the severed limb against her stump for one minute, at which point the limb reattaches.",
    "req": "Aspect: Resilience -1 or lower, Type: Stitched",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Reset Fate",
    "desc": "At the end of Dramatic Time, before she discards any unwanted Twist Cards, this character may reshuffle her Twist Card discard pile back into her Twist Deck.",
    "req": "Type: Fated",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Rusts n' Oils",
    "desc": "When this character creates a compound (whether from the options presented on page 98 or from the Elixir of Life, Mystery Brew, Transformative Vigor, or Truth Serum Talents of the Chemist Pursuit), she may choose to have it affect Constructs instead of Living characters.",
    "req": "Skill: Alchemistry 3 or higher, Engineering 2 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Sadistic Streak",
    "desc": "At the start of this character's turn, she may deal 1 damage to one of her subordinate characters within 3 yards to push up to 3 yards in any direction.",
    "req": "None",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Shambling Gait",
    "desc": "This character gains +1 to either all Physical Aspects or all Mental Aspects, but gains the Slow Condition at the start of each of her turns during Dramatic Time.",
    "req": "Aspect: Speed -2 or lower, Type: Stitched",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Spiritual Sensitivity",
    "desc": "This character gains the following Tactical Action:\n\n(0) Sense Spirits: This character becomes aware of the presence of any characters with the Spirit Characteristic within 10 yards (even if they are invisible or hidden).",
    "req": "Other: Failed an Unconsciousness Challenge while at negative Wounds.",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Spelunker",
    "desc": "This character gains a + on all Track and Wilderness duels made underground. Furthermore, she is immune to the Claustrophobia Condition.",
    "req": "None",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Swagger",
    "desc": "At the end of this character's turn, she gains the Defensive +1 Condition if she declared only Walk Actions during her turn.",
    "req": "Aspect: Speed -1 or lower",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Touched by the Grave Spirit",
    "desc": "When this character fails an unconsciousness challenge, she heals 1/2/3 damage. She still remains unconscious until the end of the combat or until healed by another character.",
    "req": "Other: The character has either died or been at -10 Wounds or below.",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Twisted Mind",
    "desc": "This character gains the following Defensive Trigger:\n\nWp (CROWS) Twisted Mind: After succeeding, this character deals 2 damage to the attacker.",
    "req": "None",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Warding Gestures",
    "desc": "When this character suffers damage, she may discard a Twist card to reduce the damage suffered by 2, to a minimum of 1.",
    "req": "Aspect: Resilience -2 or lower",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Well-Preserved",
    "desc": "This character is capable of passing as a Living human without any difficulty. Any character attempting to determine that this character is Undead must succeed on a Scrutiny Challenge with a TN equal to 12 + this character's Charm Aspect.",
    "req": "Aspect: Charm 1 or higher, Type: Stitched",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Advice for Idiots",
    "desc": "This character can spend 1 hour and 2 scrip of paper and ink to write a book on a specific non-Combat Skill. Any character that spends an hour reading this book gains + to Challenges made with that Skill for the rest of the session.",
    "req": "Skill: Printing 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Aetheric Resonator",
    "desc": "When creating a Construct or pneumatic limb, this character can spend 5 scrip to add an aetheric resonator to it. Spells and Manifested Powers that target the Construct or character with the limb receive an additional suit of the caster's choice.",
    "req": "Skill: Engineering 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Badge of Office",
    "desc": "Once per session, when this character would suffer damage from an attack, she may flash her badge and discard a Twist Card to reduce the damage to 0.",
    "req": "Aspect: Resilience -2 or lower, Other: Guild employee or have the Infiltration Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Clumsy",
    "desc": "This character gains the following Defensive Trigger:\n\nDf (MASKS) Clumsy Fall: After failing, this character falls Prone, and the attack deals half damage (rounding down).",
    "req": "Aspect: Grace -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Covering Fire",
    "desc": "When firing a firearm, this character may declare she is providing covering fire. She expends 3 rounds of ammunition, and all friendly characters within 2 yards of the target gain Soft Cover until the start of this character's next turn.",
    "req": "Skill: Chosen Skill Rank 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Cultured",
    "desc": "When making Social Skill Challenges, this character may substitute her Art Skill for the required Social Skill.",
    "req": "Skill: Art 1 or higher, Chosen Skill Rank 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Death Marshal Apostate",
    "desc": "This character retains her training with the Death Marshals. She may wield a Pine Box and gain access to Death Marshal specific talents and equipment.",
    "req": "Skill: Necromancy 2 or higher, Other: Guild Training (Death Marshals)",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Devour Magic",
    "desc": "When this character is targeted by an enemy Spell and successfully resists it, she gains the Focused +1 Condition.",
    "req": "Skill: Counter-Spelling 4 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Everyman",
    "desc": "This character is thoroughly unremarkable. Other characters suffer a - on Notice and Scrutiny duels made to recognize or remember her.",
    "req": "Aspect: No Aspects higher than 1",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Fickle Fate",
    "desc": "Once per session, this character may reshuffle her Fate Deck at any time.",
    "req": "Skill: Gambling 4 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Guild Training",
    "desc": "This character gains + to all Bureaucracy duels. In addition, when interacting with Guild officials, she may present herself as a recognized Guild operative.",
    "req": "Skill: Bureaucracy 2 or higher, Other: Guild employee or have the Infiltration Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Idiot",
    "desc": "This character gains a + on any duels made to resist the Bewitch or Deceive Skills, but suffers a - on any duels involving the Literacy or Mathematics Skills.",
    "req": "Aspect: Intellect -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Implacable",
    "desc": "When this character would suffer the Paralyzed or Slow Condition from an enemy effect, she may discard a Twist Card to ignore the Condition.",
    "req": "Skill: Centering 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Instinctive Grip",
    "desc": "This character may draw or holster a weapon as a (0) Action instead of a (1) Action.",
    "req": "Skill: Thrown Weapons 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "I’ve Got Your Back",
    "desc": "When a friendly character within 2 yards of this character is targeted by an attack, this character may suffer the attack and its effects in place of the target.",
    "req": "Aspect: Cunning -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Lackadaisical",
    "desc": "This character gains +1 to her maximum Wounds, but she always acts last in the Initiative order during Dramatic Time.",
    "req": "Aspect: Speed -2 or lower, Other: Or the Sloth Vice",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "On My Mark",
    "desc": "When this character uses the Order Action, she may choose to have the subordinate character delay its activation until a specific trigger event occurs during the round.",
    "req": "Skill: Leadership 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Partial Reload",
    "desc": "As a (1) Action, this character may reload a single round of ammunition into any firearm she is wielding.",
    "req": "Aspect: Speed 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Patient",
    "desc": "If this character does not take any Move or Attack Actions on her turn, she gains the Focused +2 Condition.",
    "req": "Skill: Centering 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Permanent Enchantment",
    "desc": "Enchantments placed on items by this character become permanent until dispelled, rather than fading at the end of the session.",
    "req": "Other: Enchant Item Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Personal Soulstone",
    "desc": "This character gains a personal Soulstone with a maximum capacity of 3 charges. It recharges 1 charge during each Epilogue.",
    "req": "Other: Guild Training (any Division),  Guild employee or have the Infiltration Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Prejudice",
    "desc": "Choose a specific faction or species. This character gains + to Intimidate duels against them, but suffers - to all other Social duels against them.",
    "req": "Aspect: Charm -2 or lower",
    "book": "Above the Law",
    "notes": "?????"
  },
  {
    "name": "Quick to Act",
    "desc": "This character adds her Athletics Skill Ranks to her Initiative flips.",
    "req": "Skill: Athletics 1 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Self-Preservation",
    "desc": "When this character declares the Defensive Stance Action, she may immediately move up to 2 yards.",
    "req": "Aspect: Might -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Side Arm",
    "desc": "Once per turn, after making an attack with a two-handed weapon, this character may make a (1) AP Pistol attack with a readied one-handed pistol without spending AP.",
    "req": "Aspect: Speed 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Soulstone Healer",
    "desc": "When using a Soulstone to heal damage, this character heals an additional +2 Wounds.",
    "req": "None",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Steady Advance",
    "desc": "This character may ignore severe terrain penalties caused by mud, rubble, or steep slopes while taking a Walk Action.",
    "req": "Skill: Leadership 4 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Study Opponent",
    "desc": "As a (1) Action, this character studies an enemy within 6 yards. Until the end of combat, this character's attacks against that enemy gain +.",
    "req": "Skill: Scrutiny 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Subtle Magic",
    "desc": "Spells cast by this character do not produce visible flashes of light or loud sounds unless she chooses otherwise.",
    "req": "Aspect: Tenacity -1 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Unrelenting",
    "desc": "When this character is reduced to 0 Wounds, she does not fall unconscious until the end of the current round of Dramatic Time.",
    "req": "Aspect: Tenacity 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Craft Grimoire",
    "desc": "This character may craft a Grimoire containing Spells she knows with 1 week of work and 10 scrip in materials.",
    "req": "Skill: One Magical Skill 4 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Soulstone Efficiency",
    "desc": "When this character spends a Soulstone charge, flip a card. If the card is a 10 or higher, the charge is not expended.",
    "req": "Type: Fated",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Neverborn Anthropology",
    "desc": "This character can speak and read the ancient languages of the Neverborn. She gains + on Lore and Scrutiny duels regarding Neverborn culture.",
    "req": "Skill: History 4 or higher",
    "book": "From Nightmares",
    "notes": "Подредактировал"
  },
  {
    "name": "Fortunate Familiarity",
    "desc": "Choose a specific creature type (Beast, Undead, Construct, or Neverborn). This character gains + to defense flips against attacks from that creature type.",
    "req": "Aspect: Charm 2 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Cursed Existence",
    "desc": "When this character suffers a Critical Effect, she may discard a Twist Card to reduce the severity of the Critical Effect by 1 step.",
    "req": "Aspect: Two Aspects -3 or less",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Sacrificial Pawn",
    "desc": "When this character is targeted by an attack, she may redirect the attack to an adjacent friendly subordinate character.",
    "req": "Aspect: Charm -3 or less, Other: 3+ Gifts of Darkness",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "A Spot of Sunshine",
    "desc": "Friendly characters within Aura 3 of this character gain + to Willpower duels to resist Horror.",
    "req": "Aspect: Charm 2 or higher, Tenacity -2 or lower",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Aetheric Calibrator",
    "desc": "When this character casts an Enchanting spell, she may reduce the TN of the spell by 2 by suffering 1 point of unpreventable damage.",
    "req": "Type: Invested",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Plead Insanity",
    "desc": "When this character fails a Willpower duel, she may gain the Dazed Condition instead of suffering any other negative effects of the failure.",
    "req": "Other: Had the Crazy +4 or greater Condition at some point during a session",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Vascular Studies",
    "desc": "This character's Doctor healing flips gain +. In addition, attacks made by this character gain Critical Strike against Living targets.",
    "req": "None",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Hatred of the Dead",
    "desc": "This character deals +1 damage on all attacks made against Undead characters.",
    "req": "None",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Rend Steel",
    "desc": "Attacks made by this character ignore Armor on targets with the Construct Characteristic.",
    "req": "Aspect: Might 4 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Running and Screaming",
    "desc": "When this character fails a Horror Duel, she immediately performs a Walk Action directly away from the source of the Horror.",
    "req": "Aspect: At least one Mental Aspect -1 or less",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Nocturnal",
    "desc": "This character ignores penalties for low light and darkness. She gains + on Notice and Stealth duels conducted at night.",
    "req": "None",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Deeper Connection",
    "desc": "This character treats any Grimoire attuned to her as having 1 additional Immuto of her choice.",
    "req": "Skill: Magical Skill 1 or higher, Destiny: 2+",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Identify Magic",
    "desc": "This character automatically knows if an object within 2 yards is magical, and can identify its properties with a TN 10 Scrutiny duel.",
    "req": "Skill: Magical Skill 3 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Grounded",
    "desc": "This character cannot be pushed, moved, or knocked Prone against her will by enemy spells or abilities.",
    "req": "Skill: Mental Aspect 4 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Murder Methodology",
    "desc": "When this character attacks a target that has not yet activated this round, her damage flip gains +.",
    "req": "Aspect: Physical Aspect 2 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Scaredy-Cat",
    "desc": "When an enemy ends its movement within 2 yards of this character, this character may immediately push up to 2 yards away.",
    "req": "Aspect: Tenacity -2 or lower",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Black Blood Scars",
    "desc": "This character takes 1 less damage from Black Blood effects and gains + to resist being poisoned.",
    "req": "Other: Survived a Nephilim attack after being brought down to negative Wounds",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Necromantic Tithe",
    "desc": "When this character kills an enemy with a Necromancy spell, she heals 2 Wounds.",
    "req": "Skill: Necromancy 3 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Sleepless Elite",
    "desc": "This character only requires 2 hours of rest per night to gain the benefits of a full night's sleep, and cannot be forced to sleep magically.",
    "req": "Aspect: Tenacity 2 or higher, Other: Living Characteristic",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Coded Speech",
    "desc": "This character can communicate complex tactical commands to allies in plain hearing without enemies understanding the meaning.",
    "req": "Skill: Literacy 2 or higher",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Soul Vessel",
    "desc": "This character can store 1 soul counter when a Living model dies within 6 yards, which can be spent later like a Soulstone charge.",
    "req": "Destiny: 1+, Other: Construct Characteristic",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Speed Is Safety",
    "desc": "While this character has moved at least 6 yards during her turn, she gains +1 Defense until the start of her next turn.",
    "req": "Skill: Evade 4 or more",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Cultural Crafting",
    "desc": "Items crafted by this character sell for +25% scrip value and have +1 durability against wear or breakdown.",
    "req": "Skill: Crafting 2 or higher",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Backup Plan",
    "desc": "Once per session, when an Action declared by this character fails completely, she may immediately refund 1 spent AP.",
    "req": "Aspect: Intellect -1",
    "book": "From Shadows",
    "notes": "Хоумрул"
  },
  {
    "name": "Same Mistake Twice",
    "desc": "When this character fails a duel, she gains + to her next attempt at the same duel within the same round.",
    "req": "Aspect: Charm -2 or Tenacity -2",
    "book": "From Shadows",
    "notes": "Хоумрул"
  },
  {
    "name": "Teachings of Worlds Beyond",
    "desc": "This character may choose to have her Close Combat or Ranged Combat attacks deal Magical damage instead of physical damage.",
    "req": "Other: Have met with a Shinto priest, Oni hunter, or other organization (like the Red Library) with knowledge about how to best exploit these spirits and their weaknesses.",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Calm Passage",
    "desc": "This character is ignored by non-aggressive Spirits and Beasts unless she takes an hostile Action against them first.",
    "req": "Other: Has reached -5 Wounds or lower",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Oath of Nonviolence",
    "desc": "While this character carries no readied weapons, she gains +2 Defense and +2 Willpower.",
    "req": "None",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Don't Look at Explosions",
    "desc": "This character gains Blast Resistant +2 and is immune to being knocked Prone by Blast or Pulse effects.",
    "req": "None",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Protect the Innocent",
    "desc": "When an ally with fewer Wounds than this character is targeted within 2 yards, this character may suffer the attack instead.",
    "req": "None",
    "book": "From Shadows",
    "notes": ""
  }
];
