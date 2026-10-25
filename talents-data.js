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
    "req": "None",
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
    "req": "None",
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
    "desc": "Choose a Skill that meets this Talent’s requirement. All attacks with the chosen Skill gain the following Trigger:\n\nCritical Strike: When damaging, deal 1 additional damage for each RAMS in the final duel total.\n\nA character may take this Talent multiple times, but each time a different Skill must be chosen.",
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
    "req": "None",
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
    "req": "Destiny: 2+",
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
    "req": "None",
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
    "name": "Stubborn",
    "desc": "This character gains a + on all Willpower duels but a - on all Convince Challenges.",
    "req": "Aspect: Tenacity 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Sycophant",
    "desc": "The character choose a Peon or Minion level Commoner from the Fatemaster’s Almanac (page 124) to be her sycophant. The sycophant goes everywhere with the character (or at least, tries to) but is still under the Fatemaster’s control. If the sycophant dies or the character abandons them, the character may gain a new sycophant after a few days spent in any reasonably populated area.",
    "req": "Aspect: Charm 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Taskmaster",
    "desc": "When a friendly character within 3 yards of this character takes an action involving a non-Social Skill, they may choose to suffer 1 damage to gain a + to the resulting Challenge. This Talent may only be used while this character is wielding a Flexible weapon.",
    "req": "Skill: Flexible 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Threading the Needle",
    "desc": "When making an Archery Ranged Combat attack, this character may ignore other characters when determining line of sight and does not randomly determine her target when firing into an engagement.",
    "req": "Skill: Archery 3 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Torso Modifications",
    "desc": "This character’s torso can be swapped out for different models. Replacing the character’s torso requires 30 minutes of work and a successful Artefacting or Engineering duel against TN 14 (which may be made by the character or someone else assisting them). If successful, the character gains one of the options below until it uses this Talent again.\n\n•Standard: No adjustments.\n•Reinforced Armor: The character’s Armor may reduce damage to 0, but it suffers -2 to its Walks and Charge Aspects.\n•Lightweight Chest Plate: The character gains +1 Defense and -1 Wound.\n•Parade Armor: The character lowers its Defense and Armor by 1 (to a minimum of 0) but gains a + to Social Challenges.",
    "req": "Type: Invested",
    "book": "Into the Steam",
    "notes": "Хоумрул"
  },
  {
    "name": "Tough as Nails",
    "desc": "Critical Effect flips made against the character receive a -.",
    "req": "Aspect: Resilience 2 or higher",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "Unceasing",
    "desc": "Once per turn, the character may discard a Twist Card to take a Walk action without spending any AP.",
    "req": "Aspect: Speed -2 or lower",
    "book": "Into the Steam",
    "notes": ""
  },
  {
    "name": "A Gremlin's Luck",
    "desc": "When performing a duel, this character may discard a card or suffer 1 damage to Cheat Fate with the top card of the Fate Deck.",
    "req": "Aspect: Cunning -2 or lower, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "All the Big Words",
    "desc": "If this character succeeds on a Social Skill Challenge during Narrative Time, the target of the Challenge gains the Dazed Condition for one minute. If the character achieves a Margin of Success on the challenge, every other character within listening distance gains the Dazed Condition for one minute.",
    "req": "Skill: Literacy 3 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Creative Refurbishment",
    "desc": "With one hour of work, this character may remove a single property of a firearm (including range, capacity, damage, or one special rule) to add it to another firearm. Neither firearm can possess the Shoddy special rule. If the second firearm already possesses the chosen property (such as range, capacity, or damage), it gains the better of the two properties. The first firearm is destroyed in the process of modifying the second firearm, which then gains the Shoddy special rule.",
    "req": "Skill: Artefacting or Blacksmithing 3 or higher",
    "book": "Into the Bayou",
    "notes": "Никогда"
  },
  {
    "name": "Crude Sense of Humor",
    "desc": "This character gains the following Tactical Action:\n\n(0) Pull My Finger: If this character is adjacent to a friendly character, that character may choose to pull this character's finger. If she does, all non-Gremlin characters within Pulse 2 of this character gain the Poison +2 Condition. If this character chooses to discard a card when the adjacent character pulls her finger, any non-Gremlin characters within Pulse 2 also become Slow.",
    "req": "Aspect: Resilience 1 or higher, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Dirty Cheater",
    "desc": "Whenever this character Cheats Fate from her Twist Hand, she heals 1 damage after resolving the current Action.",
    "req": "Aspect: Tenacity -2 or lower, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Forgotten Lore",
    "desc": "This character has managed to successfully identify a powerful Grimoire and claim it for her own. The character gains a Grimoire with 3 Magia and 3 Immuto of her choice, but no more than 2 of these Magia can be of the same type of magic (i.e., Enchanting, Necromancy, etc.). Grimoires gained by this Talent tend toward uncommon appearances; the character is encouraged to work with the Fatemaster to determine her Grimoire's appearance.",
    "req": "Skill: Notice 3 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "From the Hip",
    "desc": "When making a Long Arms attack, this character may substitute Grace for Intellect when calculating her Acting Value.",
    "req": "Aspect: Grace 1 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Gremlin Engineering",
    "desc": "After one of this character's subordinate Constructs within engagement range of one of this character's melee weapons fails a Skill Challenge (including an attack), this character may make a damage flip against the Construct. If the Construct suffers at least 1 damage from this character's weapon, it may immediately reflip its result on the Challenge.",
    "req": "Skill: Engineering 3 or higher, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Helping Hand",
    "desc": "When this character takes the Assist Action during Dramatic Time, the target of her assistance gains the Focused +1 Condition instead of the usual benefits of the Assist Action. When this character takes the Pass Action during Dramatic Time, she may add 1 to the Initiative Value of every other friendly character within Pulse 3",
    "req": "Aspect: Cunning 1 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Herding Squirrels",
    "desc": "This character may use a (1) Order Action to command a subordinate character controlled by another friendly character, with its controller's permission. A subordinate character may only take one turn per round, no matter how many (1) Order Actions it receives.",
    "req": "Skill: Leadership 3 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Hyperactive",
    "desc": "At the start of this character's turn, she may suffer 1 damage to remove the Slow Condition from herself, or 2 damage to remove the Paralyzed Condition. This damage cannot be reduced.",
    "req": "Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Hysterical Fury",
    "desc": "When this character becomes wounded, she enters a manic frenzy, fighting desperately to claw her way out from under the looming threat of death. When this character has zero or fewer Wounds remaining, she gains + to her attack and damage flips.",
    "req": "Aspect: Resilience -1 or lower",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "I Got My Bro",
    "desc": "One of this character’s Gremlin relatives accompanies her on her adventures! If the character is not a Gremlin, this will probably raise more questions than answers, but the little fellow insists that the character is his sibling no matter how hard she tries to convince him otherwise. \n\nThe Gremlin relative is a subordinate character and may be commanded with the (1) Order Action. If the Gremlin relative dies or the character abandons them, a new one will show up after a day spent in or near the Bayou.",
    "req": "Aspect: Charm 1 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Low Standards",
    "desc": "This character gains a + on Social Skill Challenges with Gremlins and counts as a Kin character for meeting the requirements of Talents.",
    "req": "Type: Non-Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Ooo, Glowy",
    "desc": "When this character uses a (1) Action to protect another character with Magical Shielding, the protected character also emits faint light, and her attacks ignore Armor and Hard to Wound for the duration of the Magical Protection.",
    "req": "Skill: Counter-Spelling 3 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Pickled",
    "desc": "This character no longer suffers damage from the Poison Condition.",
    "req": "Skill: Carouse 4 or higher, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Pig Friend",
    "desc": "At the start of her turn during Dramatic Time, if this character is within 1 yard of a friendly Pig, she heals 1 damage. Additionally, when a Pig character is determining the closest target that can be charged with its Stampede Trigger, this character is not considered to be a legal target.",
    "req": "Aspect: Charm -2 or lower, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Pounce",
    "desc": "When an enemy character ends a push or move within this character’s engagement range that is not part of a Walk or Charge Action, this character may immediately take a (1) AP Close Combat attack against the enemy character.",
    "req": "Aspect: Speed 1 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Quit Screwin’ Around!",
    "desc": "This character gains the following Tactical Action:\n\n(0) Quit Screwin’ Around: Until the start of this character’s next turn, characters within Aura 6 of this character may not declare Triggers. If this character discards a card when she uses this Action, it does not affect her or her allies.",
    "req": "Skill: Intimidate 4 or higher, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Role Model",
    "desc": "When this character takes the Assist Action to help a friendly Gremlin character, that character gains an additional + to their Challenge Duel. If this character discards a card when she takes the Assist Action, the friendly Gremlin may also add the suit of the discarded card to her final duel total.",
    "req": "Skill: Leadership 3 or higher, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "School of Hard Knocks",
    "desc": "After this character fails a Challenge involving a Skill she has no ranks in, she gains 1 rank in that Skill until the end of the session.",
    "req": "Aspect: Intellect -2 or lower",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Skulking Around",
    "desc": "At the end of any round of Dramatic Time, if this character was not targeted by any enemy attacks (regardless of whether or not those attacks succeeded), she may immediately move a number of yards up to her Walk Aspect.",
    "req": "Aspect: Speed -2 or lower, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Squeal",
    "desc": "This character gains the following Defensive Trigger:\n\nDf (MASKS) “Squeal!”: After this character is damaged by an enemy Close Combat attack, push this character 4 yards directly away from the attacker.",
    "req": "Aspect: Might -1 or lower, Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Stalker",
    "desc": "When attacking a target that is not within 4 yards of a character it considers to be friendly, this character deals +1 damage.",
    "req": "Skill: Wilderness 3 or higher",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Versatile",
    "desc": "After this character succeeds on a Challenge involving a Skill she has no ranks in, she may draw a Twist Card.",
    "req": "Type: Kin",
    "book": "Into the Bayou",
    "notes": ""
  },
  {
    "name": "Addict",
    "desc": "While this character has the Brilliance Condition, she gains the following Tactical Action:\n\n(0) Drawn to the Light: This character may move up to its Walk Aspect towards a character with the Brilliance Condition and must end this movement as close to the target as possible.",
    "req": "Other: Brilliance Condition",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Bent Fate",
    "desc": "This character may remove two cards from her Twist Deck.",
    "req": "Destiny: 2+",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Bloated Stench",
    "desc": "When this character suffers damage from a [когти] attack, the attacker suffers 1 damage after resolving the attack.",
    "req": "Aspect: Charm -1 or lower, Type: Stitched",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Blood Scent",
    "desc": "If a Living character is killed within 1 yard of this character while she has the Blood Sickness Condition, she may discard a card to gain the Fast Condition.",
    "req": "Other: Blood Sickness Condition",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Brain Surgery",
    "desc": "The character can transplant the brain of a corpse (or soon-to-be corpse) into a Flesh Construct or special jar with an hour of work. The donor must have the Living Characteristic, and the brain counts as one body part when determining how many a character may replace. The Flesh Construct gains the donor's Skill ranks (replacing the Flesh Construct's Skills, if the donor's Skills are higher) and her Mental Aspects. Some elements of the donor's personality and memories may carry over to the Flesh Construct.\n\nIf the transplanted brain belongs to a Fated, the Fatemaster should consider allowing the character to become a Stitched in control of her new body. The character will retain its Mental Aspects and Skills as noted above, as well as any Talents she possesses (which are normally lost when a non-Fated character has her brain transferred into a Flesh Construct).",
    "req": "Skill: Doctor 4 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Burning Man",
    "desc": "This character gains the following Defensive Trigger:\n\nDf/Wp (TOMES) Smoldering Heart: After this character succeeds, the attacker gains the Burning +1 Condition.",
    "req": "Other: Burning +5 or greater Condition resolve",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Ceaseless Advance",
    "desc": "At the end of each round of Dramatic Time, if this character does not have any Twist Cards in her hand, she may take a (1) Walk Action.",
    "req": "Aspect: Tenacity 1 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Evil Eye",
    "desc": "This character gains the following Defensive Trigger:\n\nDf/Wp (CROWS) Evil Eye: After this character succeeds, the attacker gains the Cursed +1 Condition with a Taboo against attacking this character.",
    "req": "Other: Willpower 6 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Fate's Messenger",
    "desc": "Whenever this character would discard a Twist card for any reason other than Cheating Fate, she may instead choose to suffer 2 damage; this damage may not be reduced or prevented.",
    "req": "Destiny: 2+",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Favored of Fate",
    "desc": "When this character draws a Twist Card, she may suffer 2 damage to immediately discard it and draw again; this damage may not be reduced or prevented.",
    "req": "Destiny: 1+",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Ferocious Loyalty",
    "desc": "When this character uses the (1) Order Action to command a subordinate character, this character may discard a card to give her subordinate + to all Skill Challenges (including attacks) it makes for the duration of its turn.",
    "req": "Skill: Leadership 3 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Final Repose",
    "desc": "When this character kills another character, she may choose to instantly render her target's remains unfit to be reanimated into an Undead (or any other type of) creature.",
    "req": "Aspect: Cunning 1 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "From Beyond",
    "desc": "This character is immune to the mechanical symptoms of the Haunted Condition (weird stuff still happens around her, but it tends to be less frequent and much less creepy).\n\nThe spirits also whisper small bits of useful information into the character's ear: if she fails a Notice or Scrutiny Challenge, this character may lower her Haunted Condition value by exactly 1 (to a minimum of 0) to reflip the duel.",
    "req": "Other: Haunted Condition",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Glimpse Fate's Plan",
    "desc": "This character's maximum Control Hand size is increased by +1. This character may take this Talent multiple times, and its effects stack.",
    "req": "None",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Hole in the Chest",
    "desc": "This character is unable to pass as a Living creature while this hole is visible, but she gains the following Defensive Trigger:\n\nDf (MASKS) Through the Hole: After failing against a Ranged Combat attack, the attack deals no damage to this character.",
    "req": "Aspect: Resilience -1 or lower, Type: Stitched",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Hunter",
    "desc": "This character gains a + to damage flips made against Beasts.",
    "req": "Skill: Wilderness 3 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "I Thought You Died?!",
    "desc": "The next time this character is killed - no matter how grisly or final it may have been - this character returns to life (or unlife, if the character was previously Undead) and rejoins her companions at some point during the next day. This resurrection occurs \"off camera,\" though the character may sport some bandages or superficial injuries as a result of her \"near death\" experience. This Talent may only be used once; any subsequent deaths affect the character normally.",
    "req": "Aspect: Resilience 3 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "It's Raining Scrip",
    "desc": "This character gains 5 scrip when she takes this Talent. When she gains scrip from any non-Fated source - whether as part of a reward for a completed adventure, gambling winnings, or just looting the pockets of the dead -- she gains an additional +20% scrip.",
    "req": "None",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Killswitch",
    "desc": "This character is able to implant explosives within an Undead or Construct subordinate with a TN 11 Explosives Challenge and 2 scrip of raw materials (which are lost if she fails the Explosives Challenge). The subordinate gains the following ability:\n\nExplosive Demise 2: All characters within Pulse 2 suffer 2 damage when this character is killed.",
    "req": "Skill: Explosives 3 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Man's Best Friend",
    "desc": "This character has earned the devotion of a canine companion. Living or Construct characters gain a Guard Dog, while Undead characters gain a Canine Remains.\n\nIf the canine companion is killed, this character may discard a card during Narrative Time to attract a new canine companion. The canine companion is a subordinate character and may be commanded with the (1) Order Action.\n\nIf this character has the Animal Companion Talent, the canine companion benefits from any Talents that grant bonuses to Animal Companions (but does not otherwise count as an Animal Companion).",
    "req": "Skill: Husbandry 3 or higher",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Mechanized Undead",
    "desc": "This character gains the Construct Characteristic and may purchase Talents as if she\nwere an Invested character.",
    "req": "Type: Stitched",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Medical Genius",
    "desc": "This character gains the following Trigger on all Doctor Challenges:\n\nTOMES It's Not Lupus: After succeeding, gain 1 additional Margin of Success.",
    "req": "Skill: Doctor 3 or higher",
    "book": "Under Quarantine",
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
    "req": "None",
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
    "desc": "When this character fails an unconsciousness challenge, she heals 1/2/3 damage. She still remains unconscious until the Fatemaster determines otherwise (generally until the end of Dramatic Time or until she is revived with the Doctor Skill).",
    "req": "Other: The character has either died or been at -10 Wounds or below.",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Twisted Mind",
    "desc": "This character gains the following Trigger:\n\nWp (CROWS) Twisted Mind: After this character succeeds, the attacker suffers 2 damage.",
    "req": "None",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Warding Gestures",
    "desc": "When this character suffers damage, she may discard a Twist Card reduce the damage by 2.",
    "req": "Aspect: Resilience -2 or lower",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Well-Preserved",
    "desc": "This character's body is intact and preserved enough for her to easily pass as a Living character in polite company. The TNs of Scrutiny Challenges made to determine if this character is Undead are increased by +2.",
    "req": "Aspect: Charm 1 or higher, Type: Stitched",
    "book": "Under Quarantine",
    "notes": ""
  },
  {
    "name": "Advice for Idiots",
    "desc": "This character can spend an hour and 2 scrip worth of raw materials to produce an instruction manual. When she produces the manual, she chooses a Skill that she possesses with one or more Ranks.\n\nFrom that point on, any other character in possession of the instruction manual may consult it as a (1) AP Action. For the rest of the consulting character’s turn, they are considered to be assisted by this character when using the Skill referenced by the manual, just as if this character had used the Assist Action to help her.",
    "req": "Skill: Printing 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Aetheric Resonator",
    "desc": "When this character builds a Construct or pneumatic limb, she may spend 5 scrip to add an aetheric resonator to the machine. If she does so, when the Construct is targeted with a Spell or Manifested Power using the Animate Construct Magia, or when the pneumatic limb is targeted with the Animate Limb Magia, one instance of the Increased Duration Immuto is applied to the Magia at no increase to its TN.",
    "req": "Skill: Engineering 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Badge of Office",
    "desc": "Once per session after this character suffers damage from an enemy’s attack, she may discard a card to have the attack strike her badge of office. If she does so, the damage from the attack is reduced to 1, its Triggers and other effects are negated, and it does not cause any Critical Effects to this character.\n\nThis Talent cannot be used on attacks that have one or more B in their damage track (regardless of whether or not the attack actually generated Blast damage).",
    "req": "Aspect: Resilience -2 or lower, Other: Guild employee or have the Infiltration Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Clumsy",
    "desc": "This character gains the following Defensive Trigger:\n\nDf (MASKS) Trip Over Something: If this character fails and is not Prone, she becomes Prone and the attack is considered to have missed this character unless the attacker achieved a Margin of Success.",
    "req": "Aspect: Grace -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Covering Fire",
    "desc": "Choose a Ranged Combat Skill. This character gains the following Tactical Action:\n\n(2) Covering Fire: Target an enemy within range and line of sight of a ranged weapon of the chosen type wielded by this character and expend three rounds of ammunition. If you do so, the enemy subtracts this character's ranks in the weapon’s Skill from its final duel totals until the start of this character's next turn.",
    "req": "Skill: Chosen Skill Rank 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Cultured",
    "desc": "Choose a Social Skill. When this character makes a Challenge involving the chosen Skill, she may use her ranks in the Art Skill in place of her Mental Aspect.",
    "req": "Skill: Art 1 or higher, Chosen Skill Rank 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Death Marshal Apostate",
    "desc": "Whenever this character successfully removes another character from reality (whether through the use of a Spell, Manifested Power, the Get In The Box Trigger granted by the Death Marshal Advanced Pursuit in the Core Rules, or some other source), the target suffers 2 damage that may not be reduced and this character heals 2 damage.\n\nWhen this Talent is chosen, the character may change her Magical Theory to The Whisper. If she does not already have a Magical Theory, she gains The Whisper Magical Theory.",
    "req": "Skill: Necromancy 2 or higher, Other: Guild Training (Death Marshals)",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Devour Magic",
    "desc": "Enemy characters within Aura 3 of this character suffer a - on Magical Skill Challenges.",
    "req": "Skill: Counter-Spelling 4 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Everyman",
    "desc": "When this character's current Wounds are below 0, her attacks that deal damage deal +1 damage. If her current Wounds are below -10, this bonus increases to +2 damage.",
    "req": "Aspect: No Aspects higher than 1",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Fickle Fate",
    "desc": "Before this character flips a Fate Card from the Fate Deck, she may declare “even” or “odd.” If the value of the flipped card matches the character’s prediction, its value is increased by +1. If not, its value is decreased by -1. If the character flips a Joker card, its value is not modified.",
    "req": "Skill: Gambling 4 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Guild Training",
    "desc": "This character gains a + on all Social Skill Challenges involving Guild personnel and an additional bonus depending upon the division that trained her:\n\n•Amalgamation Office: If this character uses Guild resources when building a Construct (and registers the machine with the Amalgamation Office), the final cost of the Construct is halved, and any additional costs required to add custom pneumatic weapons, aetheric resonators, or Soulstone fittings to the Construct are waived.\n•Death Marshals: This character ignores the Hard to Wound Ability when attacking Undead characters.\n•Department of Public Relations: When this character joins an Ongoing Challenge made to learn or disseminate information, this character immediately adds a number of successes equal to her Charm Aspect (minimum one).\n•Elite Division: This character may spend ten minutes, discard a card, and choose an Academic, Crafting, Expertise, Social, or Training Skill she has at least one Rank in to create a cover identity. So long as this character remains “in character” with her cover identity, she gains a + to the chosen Skill. The cover identity lasts until the end of the day or until the character ceases to remain in character.\n•Guild Guard: The character gains a + on Social Skill Challenges with non-Guild characters when in uniform and acting (or pretending to act) on behalf of the Guild.\n•Neverborn Hunters: This character is immune to damage caused by the Black Blood Ability.\n•Witch Hunters: After this character successfully resists a Spell or Manifested Power cast by an enemy, she may draw a card.\n\nThis Talent may be taken multiple times. Each time, it must be taken for a different division (which requires the character to be trained by that division).",
    "req": "Skill: Bureaucracy 2 or higher, Other: Guild employee or have the Infiltration Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Idiot",
    "desc": "When this character fails a Social Skill Challenge, she generates no Margins of Failure, and unless this character was outright threatening, the character she is interacting with does not take offense to anything she might have said or realize that this character was attempting to manipulate her.",
    "req": "Aspect: Intellect -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Implacable",
    "desc": "This character may add her ranks in the Centering Skill to the final total of any Horror Duel she makes",
    "req": "Skill: Centering 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Instinctive Grip",
    "desc": "This character may treat the (1) Ready Weapon Action as if it were a (0) Action when drawing a Thrown Weapon, and she may draw two Thrown Weapons instead of one.",
    "req": "Skill: Thrown Weapons 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "I’ve Got Your Back",
    "desc": "At the start of this character’s turn during Dramatic Time, she may nominate another friendly character within 1 yard. Until the start of this character’s next turn, the nominated character gains Armor +1 (without any reduction to their Defense) whenever they are within 1 yard of this character.",
    "req": "Aspect: Cunning -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Lackadaisical",
    "desc": "When this character takes the Wait Action, the AP cost is equal to the AP cost of the named Action (instead of the AP cost of the named Action +1).",
    "req": "Aspect: Speed -2 or lower, Other: Or the Sloth Vice",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "On My Mark",
    "desc": "When the Wait Action resolves, her Order Action takes effect and one of her subordinate characters may immediately take its turn. The subordinate character’s turn interrupts the named action before any duels (if any) take place. The subordinate character may still only receive one turn per round (unless it has Reactivate).",
    "req": "Skill: Leadership 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Partial Reload",
    "desc": "When this character takes the Reload action with a weapon with a Capacity of 4 or greater, she may discard a card to take the Reload action as a (0) Action. If she does so, the weapon gains an amount of ammunition based upon the value of the discarded card: 1-5 gives the weapon 1 round of ammunition, 6-10 gives it 2 rounds, and 11+ gives it 3 rounds.",
    "req": "Aspect: Speed 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Patient",
    "desc": "When this character takes the Wait Action, if the named Action does not occur before the start of this character’s next turn, she becomes Fast at the start of that turn.",
    "req": "Skill: Centering 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Permanent Enchantment",
    "desc": "When this character uses the Enchant Item Talent to infuse magical energies into an item, she may choose to make the enchantment permanent. If she does so, the energies of the stored Spell do not dissipate when it is discharged; the enchanted item can be used over and over again without diminishing the magic stored inside it.\n\nThe character may only make a single enchantment permanent in this way, and the stored Spell counts against her maximum number of stored Spells for as long as the enchanted item exists.\n\nThis Talent may be chosen multiple times. Each time, the character may permanently enchant one additional item.",
    "req": "Other: Enchant Item Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Personal Soulstone",
    "desc": "This character gains a Soulstone of Lade 3 (Size 2 and Quality 1). If she loses or sells this Soulstone, it is not replaced (and the Guild will certainly have a few questions for her, if its agents find out).\n\nThis Talent may be chosen multiple times. Each time, the character gains another Soulstone.",
    "req": "Other: Guild Training (any Division),  Guild employee or have the Infiltration Talent",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Prejudice",
    "desc": "At the start of Dramatic Time, this character may choose an enemy character and discard a card. If she does so, she gains + to all flips against the enemy character until the end of Dramatic Time.\n\nIf this character attempts to use a Social Skill other than Intimidate to influence the enemy character’s behavior at any point (even after Dramatic Time has finished), she gains no benefit from this Talent and instead suffers a - to her flip.",
    "req": "Aspect: Charm -2 or lower",
    "book": "Above the Law",
    "notes": "?????"
  },
  {
    "name": "Quick to Act",
    "desc": "This character adds her ranks in Athletics to the final duel total of her Initiative flips.",
    "req": "Skill: Athletics 1 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Self-Preservation",
    "desc": "When this character takes the Defensive Stance Action, she may move up to two yards in any direction.",
    "req": "Aspect: Might -2 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Side Arm",
    "desc": "On her turn, if this character has not made a Pistol attack that turn, she may make an attack with a readied Pistol as a (0) AP Action. This character may not make any further Pistol attacks on her turn.",
    "req": "Aspect: Speed 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Soulstone Healer",
    "desc": "When this character uses the Absorb Soul property of a Soulstone to heal herself or another character, the target heals 3/4/5 damage and removes a lasting Critical Effect.",
    "req": "None",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Steady Advance",
    "desc": "At the end of this character’s turn, any of her unengaged subordinate characters that did not receive a (1) Order Action may move a number of yards equal to half their Walk Aspect.",
    "req": "Skill: Leadership 4 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Study Opponent",
    "desc": "When this character declares an attack against an opponent, she may discard a card. If she does so, each time she makes an attack against that opponent, she may choose whether the opponent resists the attack with Defense or Willpower. This bonus lasts until the end of Dramatic Time.",
    "req": "Skill: Scrutiny 3 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Subtle Magic",
    "desc": "After this character successfully casts a Spell or Manifested Power that uses the Tenacity Aspect, she generates a number of additional Margins of Success equal to her negative Tenacity Aspect (i.e., one Margin of Success at Tenacity -1, two Margins of Success at Tenacity -2, and so on).",
    "req": "Aspect: Tenacity -1 or lower",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Unrelenting",
    "desc": "At the start of this character’s turn during Dramatic Time, if she is not Slow or Paralyzed, she may choose to become Slow. If she does so, she heals 1 damage.",
    "req": "Aspect: Tenacity 2 or higher",
    "book": "Above the Law",
    "notes": ""
  },
  {
    "name": "Craft Grimoire",
    "desc": "This character begins to craft her own unique Grimoire, which may take whatever form she wishes. The first time this Talent is taken, add one Magia of the appropriate Magical Skill requirement this character has to the Grimoire. This must be a Magia she has previously encountered or has otherwise spent the time learning how to produce herself. Each additional time this General Talent is chosen, this character can add one additional Magia and any one Immuto to the Grimoire.\n\nOnly she may attune to this Grimoire; it is useless if any other character tries to utilize it. Finally, this Grimoire is special in that the Fated character that creates it can remain attuned to both it and one additional Grimoire; she is able to cast Magia and Immuto from both.",
    "req": "Skill: One Magical Skill 4 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Soulstone Efficiency",
    "desc": "When expending a Charge from a Soulstone, this character may select two of the benefits from using a Soulstone rather than just one.",
    "req": "None",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Neverborn Anthropology",
    "desc": "This character can read and decipher the ancient Neverborn language and its runic text; while its meaning might be slightly unclear (even to native Neverborn), the general concept and intention of the words is understandable. She is also able to (very roughly) communicate with the Neverborn in their native tongue.",
    "req": "Skill: History 4 or higher",
    "book": "From Nightmares",
    "notes": "Подредактировал"
  },
  {
    "name": "Fortunate Familiarity",
    "desc": "Declare a number 1-13 when this character takes this Talent. Any time she includes a card with that value in her acting duel total, she may add a single suit of her choice to that duel.",
    "req": "Aspect: Charm 2 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Cursed Existence",
    "desc": "If this character would ever have any of her Aspects or Derived Aspects’ values reduced (aside from Wounds), she may choose to not lower those values.",
    "req": "Aspect: Two Aspects -3 or less",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Sacrificial Pawn",
    "desc": "When this character suffers damage, she can count as suffering one additional point of damage for resolving any Triggers, effects, or similar actions. She does not actually suffer this additional point of damage (i.e. a character suffering 2 damage could count as suffering 3 damage, but would still only suffer 2 damage).",
    "req": "Aspect: Charm -3 or less, Other: 3+ Gifts of Darkness",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "A Spot of Sunshine",
    "desc": "This character gains + to all non-Magical Skill Challenges or duels with the Charm Associated Aspect",
    "req": "Aspect: Charm 2 or higher, Tenacity -2 or lower",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Aetheric Calibrator",
    "desc": "When this character is targeted by a Spell or Manifested Power, it may discard any number of cards from its hand. The attacker suffers 1/2/3 damage based on the value of each discarded card. Then, this character can draw 1 card for each value or suit its discarded cards matched with the attacking character’s final acting value.",
    "req": "Type: Invested",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Plead Insanity",
    "desc": "This character may discard two cards to gain Armor equal to half of her current Crazy Condition, rounded up, for one round. At the start of her next turn, she gains Crazy +1.",
    "req": "Other: Had the Crazy +4 or greater Condition at some point during a session",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Vascular Studies",
    "desc": "The TN of the Use Doctor Action against any injury this character causes is increased by +2. If this character takes the Use Doctor Action, the TN is reduced by -1.",
    "req": "None",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Hatred of the Dead",
    "desc": "When resolving an attack against a character with the Undead Characteristic, this character may discard a card to increase the damage she deals on an attack by exactly one degree (Weak to Moderate to Severe). The damage cannot be increased beyond Severe.",
    "req": "None",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Rend Steel",
    "desc": "This character gains the following Trigger on all non-Flexible Close Combat attacks:\n\nRAMS Rending: After causing a Moderate or Severe Critical Effect, this character may elect to destroy one piece of Armor the target is wearing instead of resolving the Critical Effect. If this would not be possible (such as when targeting a Construct), the target instead permanently lowers its Armor by +1 until it can be repaired.",
    "req": "Aspect: Might 4 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Running and Screaming",
    "desc": "After this character resolves the effects from a failed a Horror Duel, she can choose to immediately Push her Walk value in yards directly away from the character that caused the Horror Duel.",
    "req": "Aspect: At least one Mental Aspect -1 or less",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Nocturnal",
    "desc": "When in a dark environment or during nighttime (normally 9pm-6am, but this can decrease based on the seasons and/or a character’s location), this character gains +1 to all non-Ranged Combat or Close Combat Skill Challenges she takes.",
    "req": "None",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Deeper Connection",
    "desc": "Once every week, this character can utilize one of the benefits of expending a charge from a Soulstone, resolving its effects as though she had used a normal Soulstone. This can be used in conjunction with normal Soulstones but cannot be recharged in any fashion other than waiting 7 days.",
    "req": "Skill: Magical Skill 1 or higher, Destiny: 2+",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Identify Magic",
    "desc": "This character is automatically aware of all currently active magical effects that she comes within 2 yards of; while she may not know exactly what the spell does, this character can roughly ascertain its effects (i.e. someone is under the effect of a Necromancy spell, or there is the tang of Prestidigitation magic in the air). Additionally, she knows all special effects and Magia a Grimoire might have, and does not need to attune to the Grimoire to know these qualities.",
    "req": "Skill: Magical Skill 3 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Grounded",
    "desc": "Once per day, during Dramatic Time, this character may declare she is resisting the mental tricks of the Neverborn. She must select a character with the Nightmare or Woe trait that is currently taking their turn. For the remainder of that activation, she ignores the Terrifying Talent from the chosen Neverborn, and counts their Rank Value as 1 when targeting this character with any action that is resisted by Willpower.",
    "req": "Skill: Mental Aspect 4 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Murder Methodology",
    "desc": "If this character deals a Critical Effect that affects a specific body part, she may flip a second card from the Fate Deck and choose where the attack lands based either of the flipped suits. If the same suit is flipped on the second card, this character can choose where her attack lands.",
    "req": "Aspect: Physical Aspect 2 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Scaredy-Cat",
    "desc": "If this character fails a Horror Duel, she immediately gains Defensive +1.",
    "req": "Aspect: Tenacity -2 or lower",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Black Blood Scars",
    "desc": "This character reduces the TN of all Willpower and Horror Duels Nephilim characters inflict by 1. She also gains the Critical Strike Trigger on all Ranged Combat and Close Combat attacks made against Nephilim characters. If she already has the Critical Strike Trigger, this character adds RAMS to those final duel totals instead.\n\nRAMS Critical Strike: When damaging, deal 1 additional damage for each RAMS in the final duel total.",
    "req": "Other: Survived a Nephilim attack after being brought down to negative Wounds",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Necromantic Tithe",
    "desc": "This character may destroy one friendly subordinate Undead character as a (0) Action to gain Fast.",
    "req": "Skill: Necromancy 3 or higher",
    "book": "From Nightmares",
    "notes": ""
  },
  {
    "name": "Sleepless Elite",
    "desc": "This character only requires half the normal amount of sleep, about 3 hours, to avoid becoming fatigued and gaining the Dazed Condition. If she would ever gain the Dazed Condition, she may take a TN 14 Centering Challenge. On a success, she does not gain Dazed.",
    "req": "Aspect: Tenacity 2 or higher, Other: Living Characteristic",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Coded Speech",
    "desc": "This character creates a special coded language, which only she can understand. This might include hand movements, unique phrases, metaphors, and other confusing elements of speech. Regardless of how it functions, nobody else will be able to understand this character without first passing a TN 16 Literacy Challenge after observing her communicate in this code for at least a cumulative hour of time.\n\nWhen taking this Talent, a character may select another character she knows with Literacy 2 or higher. Both characters can communicate fluently in the code. Other characters taking this Talent can select a preexisting code they have been introduced to; if they do so, they are treated as understanding it as well.",
    "req": "Skill: Literacy 2 or higher",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Soul Vessel",
    "desc": "This character is able to act like a reservoir for souls, whether through alterations to her metallic body or enchantments placed upon her through ceremonies. She is always treated as having a Soulstone; because it is simply a web of magical connections, this is not an actual Soulstone, and so cannot be removed, stolen, or otherwise lost. It must still contain a charge to use any Soulstone effects. Each completed Destiny Step after the first increases the number of charges her “Soulstone” can carry by +1, to a maximum of 3.\n\nIf a Living character dies within Aura 8 of this character, she may immediately choose to charge her own “Soulstone” instead of allowing someone closer to do it. If multiple characters have this Talent, the one with the lowest number of charges has priority when recharging the “Soulstone”. If tied for equal Charges, characters should take an Opposed Tenacity Duel to determine who receives the Charge.",
    "req": "Destiny: 1+, Other: Construct Characteristic",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Speed Is Safety",
    "desc": "When being targeted by a character whose Initiative is at least 4 lower than hers, this character gains Defense +1 until the end of the acting character’s turn.\n\nA character loses all benefits from this Talent if her Armor value is +2 or higher.",
    "req": "Skill: Evade 4 or more",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Cultural Crafting",
    "desc": "When using a Crafting Skill to make objects from her native homeland or culture (like cuisine, medicine, weapons, art, clothing, etc.), this character considers her Skill rank to be 2 greater than its actual value.",
    "req": "Skill: Crafting 2 or higher",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Backup Plan",
    "desc": "When taking the Wait Action, this character may name 2 events instead of 1. When either of the named events occurs, she may resolve Wait as normal",
    "req": "Aspect: Intellect -1",
    "book": "From Shadows",
    "notes": "Хоумрул"
  },
  {
    "name": "Same Mistake Twice",
    "desc": "This character can only generate a maximum of 1 Margin of Failure for each Skill she uses during an Ongoing Challenge. If a failed Skill Challenge would generate additional Margins of Failure, they are ignored. Note that if the character uses two different Skills (like Barter and Bewitch), both can each generate 1 Margin of Failure during the Ongoing Challenge.",
    "req": "Aspect: Charm -2 or Tenacity -2",
    "book": "From Shadows",
    "notes": "Хоумрул"
  },
  {
    "name": "Teachings of Worlds Beyond",
    "desc": "Gain the following Trigger on all Ranged, Close Combat, or Magical attacks:\n\n[TOMES TOMES] Bind to this World: After damaging, the target becomes Paralyzed if it is a Peon, Minion, or Enforcer Oni or Spirit; Henchmen and Masters gain Slow instead. This effect lasts until the character that applied this Condition takes any action other than Pass, or is moved",
    "req": "Other: Have met with a Shinto priest, Oni hunter, or other organization (like the Red Library) with knowledge about how to best exploit these spirits and their weaknesses.",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Calm Passage",
    "desc": "This character is unaffected by all Demise Talents generated by allies and enemies. She must still resolve her own Demise Talents, if she has any",
    "req": "Other: Has reached -5 Wounds or lower",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Oath of Nonviolence",
    "desc": "At the start of this character’s turn, if she took no Attack actions and dealt no damage during her last turn, she may add +2 and any one suit to any Doctor or Magical Skill duels she takes on her current turn or gain Defensive +1. This bonus does not apply to any Magia or Immuto that have the potential to deal damage.",
    "req": "None",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Don't Look at Explosions",
    "desc": "Whenever this character would suffer damage from Blast, she may discard any number of cards. For each card discarded this way, she may ignore 2 damage caused and any Conditions she would gain (like Dazed or Poison) from the Blast.",
    "req": "None",
    "book": "From Shadows",
    "notes": ""
  },
  {
    "name": "Protect the Innocent",
    "desc": "Once per turn, this character may discard a card to gain the following Condition until the end of Dramatic Time:\n\nProtect the Innocent +1: When an enemy within 10 yards resolves an attack action against an Innocent, she may reduce the value of this Condition by exactly 1. Before the enemy character resolves their action, this character may resolve a 1 AP action. If this is an attack, it must be resolved against the enemy character; it cannot declare Triggers. This Condition can have a maximum value of 3.\n\nAn Innocent is any character the Fated considers friendly, with a Wounds Aspect of 5 or less, who does not have any Ranged or Close Combat Skills with a value of 3+.",
    "req": "None",
    "book": "From Shadows",
    "notes": ""
  }
];
