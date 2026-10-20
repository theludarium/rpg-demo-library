# RPG Demo Library

Try-before-you-buy demos of tabletop roleplaying games. Each demo is a short intro adventure that runs in the browser: the page plays the Game Master, the visitor makes the choices, and every roll follows the game's real rules. It ends with a link to get the full game.

## Demos

| Game | Adventure | Folder |
|---|---|---|
| Skellies | Clogged! (solo, ~15 min) | `games/skellies/` |
| Ironsworn | The Bell Beneath the Fen, Act One (solo, ~20 min) | `games/ironsworn/` |
| Ironsworn: Starforged | The Long Sleep of the Lodestar, Act One | `games/starforged/` |
| Knave | The Dead Baron's Mint, Act One | `games/knave/` |
| Forged in the Dark | The Cinderhouse Score, Act One | `games/forged-dark/` |
| Fate Condensed | Thunder on the Silver Meridian, Act One | `games/fate/` |
| 24XX | The Silence at Well Nine, Act One | `games/24xx/` |
| Lasers & Feelings | Mayday at the Glass Moon, Act One | `games/lasers-feelings/` |
| Dungeon World | The Salt King's Stair, Act One | `games/dungeon-world/` |
| Cypher System | The Glass Comet, Act One | `games/cypher/` |
| Pathfinder Second Edition (compatible) | The Sleepless Mill, Act One | `games/pf2e/` |

## Structure

- `index.html`: the library front page
- `games/<game>/index.html`: one self-contained page per demo (no build step)
- `store.js`: product list and Lemon Squeezy checkout links. Paste a checkout link into a product's `checkout` field and its demo shows a Buy button instead of "coming soon". Paid PDFs are never stored in this repo.

Served at [theludarium.com/rpg-demo-library](https://theludarium.com/rpg-demo-library/). The website repo (theludarium/website) includes this repo as a git submodule and copies the demos in at build time, so a change here goes live after the submodule is updated there.

## Credits and license

The Skellies demo adapts the rules, the example lich "Skald, the Immortal Bard", and the example adventure "Clogged!" from *Skellies* by Griffin Macaulay and John Webb, published by Criir, a subdivision of The Griffon's Saddlebag. *Skellies* is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Skellies, Criir, The Griffon's Saddlebag, and their logos are trademarks of The Griffon's Saddlebag B.V. Get the game at [playskellies.com](https://playskellies.com).

The text of the Skellies demo (`games/skellies/`) is shared under CC BY-SA 4.0. This project is not affiliated with or endorsed by The Griffon's Saddlebag.

### Ironsworn

This work is based on Ironsworn (found at www.ironswornrpg.com), created by Shawn Tomkin, and licensed for our use under the Creative Commons Attribution 4.0 International license (creativecommons.org/licenses/by/4.0/). Move and oracle text in the demo comes from the Ironsworn SRD via the [Datasworn](https://github.com/rsek/datasworn) project (CC BY 4.0). This is not an official Ironsworn product. The adventure "The Bell Beneath the Fen", its characters, and its custom oracles are © 2026 RPG Demo Library, all rights reserved.

### Ironsworn: Starforged

The Long Sleep of the Lodestar is based on Ironsworn: Starforged (found at www.ironswornrpg.com), created by Shawn Tomkin, and licensed for our use under the Creative Commons Attribution 4.0 International license (creativecommons.org/licenses/by/4.0/). Move, asset, and oracle text comes from the Starforged Reference Guide and asset cards via the Datasworn project (github.com/rsek/datasworn), CC BY 4.0. No Tomkin Press art, icons, or trade dress are used. This is not an official Ironsworn product. Adventure content © 2026 RPG Demo Library.

### Knave

The Dead Baron's Mint is based on Knave (version 1.0) by Ben Milton (questingbeast.itch.io/knave), licensed under the Creative Commons Attribution 4.0 International License (creativecommons.org/licenses/by/4.0/). Changes were made: the rules are summarized and adapted in our own words for solo play. The adventure, setting, characters, spells and tables are © 2026 RPG Demo Library. This is not an official Knave product and is not affiliated with or endorsed by Ben Milton or Questing Beast.

### Forged in the Dark

This work is based on Blades in the Dark (found at http://www.bladesinthedark.com/), product of One Seven Design, developed and authored by John Harper, and licensed for our use under the [Creative Commons Attribution 3.0 Unported license](http://creativecommons.org/licenses/by/3.0/). Rules text quoted in the demo comes from the Blades in the Dark SRD via the [blades-in-the-dark-srd-content](https://github.com/amazingrando/blades-in-the-dark-srd-content) repository, with punctuation edits. Blades in the Dark™ is a trademark of One Seven Design. This is not an official Blades in the Dark product and uses no Blades in the Dark setting, art, logos, or trade dress. The adventure "The Cinderhouse Score", the city of Vesk, and its characters are © 2026 RPG Demo Library, all rights reserved.

### Fate Condensed

Thunder on the Silver Meridian is based on Fate Condensed (found at https://www.faterpg.com/), a product of Evil Hat Productions, LLC, developed, authored, and edited by PK Sullivan, Lara Turner, Fred Hicks, Richard Bellingham, Robert Hanz, and Sophie Lagacé, and licensed for our use under the Creative Commons Attribution 3.0 Unported license (https://creativecommons.org/licenses/by/3.0/). Fate™ is a trademark of Evil Hat Productions, LLC. This is not an official Fate product and is not affiliated with or endorsed by Evil Hat. The adventure, setting and characters are © 2026 RPG Demo Library.

### 24XX

"The Silence at Well Nine" (games/24xx) is built on the 24XX rules by Jason Tocci. 24XX rules are CC BY Jason Tocci: the 24XX System Reference Document v1.4 (24xx-srd.carrd.co) is licensed under CC BY 4.0. Rules are summarized in our own words. This is not an official 24XX product and is not part of Jason Tocci's 2400 series. The adventure, the Underice setting and its characters are © 2026 RPG Demo Library.

### Lasers & Feelings

This adventure is based on Lasers & Feelings by John Harper, licensed for use under a Creative Commons Attribution 4.0 license: http://creativecommons.org/licenses/by/4.0. The demo implements the rules in our own words and reproduces no Lasers & Feelings text, art, or setting. This is not an official Lasers & Feelings product and is not affiliated with or endorsed by John Harper or One Seven Design. "Mayday at the Glass Moon" is © 2026 RPG Demo Library.

### Dungeon World

The Salt King's Stair is based on Dungeon World by Sage LaTorra and Adam Koebel (dungeon-world.com), licensed under the Creative Commons Attribution 3.0 Unported License. Move and spell text is reproduced from the Dungeon World source text at github.com/Sagelt/Dungeon-World, which also includes material from the System Reference Document 5.1 by Wizards of the Coast LLC (CC BY 4.0). This is not an official Dungeon World product. Adventure content © 2026 RPG Demo Library.

### Cypher System

This product is an independent production and is not affiliated with Monte Cook Games, LLC. It is published under the Cypher System Open License, found at http://csol.montecookgames.com. CYPHER SYSTEM and its logo are trademarks of Monte Cook Games, LLC in the U.S.A. and other countries. All Monte Cook Games characters and character names, and the distinctive likenesses thereof, are trademarks of Monte Cook Games, LLC. The demo is compatible with the Cypher System and implements its rules in our own words. "The Glass Comet" is © 2026 RPG Demo Library.

### Pathfinder Second Edition (compatible)

The Sleepless Mill uses game mechanics from Pathfinder Player Core and Pathfinder GM Core © 2023, Paizo Inc., under the ORC License (paizo.com/orclicense). It is compatible with Pathfinder Second Edition, but it is not an official Pathfinder product and is not published, endorsed, or approved by Paizo Inc. It uses no Paizo art, logos, setting, or trade dress. The adventure, setting, and characters are © 2026 RPG Demo Library, and its new game mechanics are released under the ORC License.
