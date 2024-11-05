import Monster from "./_monsters/monster.js";

let sloth = new Monster(
  "Sloth (Evil Bear)",
  `
          __        __
       ~_\(o \|      /o )~
         (_  /      \\ ) 
          / /  ..  \\ \\
         ( (   /\\   ) )
         \\  '--'--'  /
           '._._.._._.'
           `,
  "A slow but terrifying evil bear, lumbering toward you with heavy steps.",
  "The bear is slow. Maybe running is the best choice.",
  100,
  10,
  2
);

let vampire = new Monster(
  "Pride (Vampire)",
  `
         / \\    / \\
        (   '---'  )
         \\       /
         /) . . ( \\
        ( (  -  ) ))
        '-/  \\/ \\-'
         /        \\
        (_/\\/\\____)
           `,
  "A proud vampire with an air of arrogance, distracted by its own reflection.",
  "The vampire might be distracted by its reflection. Perhaps hiding could work.",
  100,
  10,
  2
);

let slug = new Monster(
  "Greed (Slug)",
  `
          ___
        /' o\`\\
       :       :
       \`-. .-'
         | |
        (   )
         \`\"'
           `,

  "A greedy, sluggish creature that craves everything in its path but is quite weak.",
  "This creature doesn’t seem strong. Maybe it’s best to fight it.",
  100,
  10,
  2
);

let wrath = new Monster(
  "Wrath (Red Hulk)",
  `               /\/\\/
            _________/~~~~/
           /        \\/ //
          |>-      -<|| |
          |  --o--   || |
          ||    --    | |
         /_\\______/__\\\
           `,

  "A giant creature seething with rage that grows stronger as it gets angrier.",
  "Running might be wise, as fighting it would only make it angrier.",
  100,
  10,
  2
);

let greed = new Monster(
  "Greed (Thousand Eyes)",
  `
          _______
         ( O O O )
       ( O O O O )
      ( O O O O O )
      \`----------\`
           `,
  "A creature with a thousand eyes, though it can’t see everything at once.",
  "Perhaps hiding would be effective since it can’t focus on everything at once.",
  100,
  10,
  2
);

let experiment = new Monster(
  "Experiment Gone Wrong",
  `
            ,     ,
           ( o o )
          / \\_X_/  \\
         /   \\_/    \\
        /     v      \\
       (_/           \_)
        \             /
         '--._____.--'
       `,

  "An experiment that should have never seen the light of day. Its twisted form staggers toward you, a grotesque blend of animal and machine, with a disturbing look in its eyes.",
  "It looks unpredictable and unstable. Perhaps keeping your distance would be wise.",
  100,
  10,
  20
);
const monsters = [sloth, vampire, slug, wrath, greed, experiment];

export default monsters;
