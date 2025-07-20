const crochetPatterns = [
  {
    id: 'pattern1',
    name: 'Simple Coaster',
    description: 'A quick and easy coaster, perfect for beginners learning basic stitches.',
    materials: ['Worsted weight cotton yarn (approx. 50g)', 'Yarn needle', 'Scissors'],
    hookSize: '4.0mm (G/6)',
    instructions: [
      'Chain 4, slip stitch to first chain to form a ring.',
      'Round 1: Chain 2 (counts as first DC), 11 DC into the ring. Join with slip stitch to top of starting chain 2. (12 DC)',
      'Round 2: Chain 2, 1 DC in same stitch. 2 DC in each stitch around. Join with slip stitch to top of starting chain 2. (24 DC)',
      'Round 3: Chain 2, 1 DC in same stitch, 1 DC in next stitch. *2 DC in next stitch, 1 DC in next stitch*. Repeat from * around. Join with slip stitch. (36 DC)',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/crochet-coaster.jpg'
  },
  {
    id: 'pattern2',
    name: 'Granny Square',
    description: 'The classic granny square, versatile for blankets, bags, and more.',
    materials: ['Worsted weight yarn (any color)', 'Yarn needle', 'Scissors'],
    hookSize: '5.0mm (H/8)',
    instructions: [
      'Chain 4, slip stitch to first chain to form a ring.',
      'Round 1: Chain 3 (counts as DC), 2 DC into ring, (chain 3, 3 DC into ring) 3 times, chain 3, slip stitch to top of beginning chain 3.',
      'Round 2: Slip stitch into first chain 3 space. Chain 3, (2 DC, chain 3, 3 DC) into same chain 3 space. *(3 DC, chain 3, 3 DC) into next chain 3 space*. Repeat from * around. Join with slip stitch.',
      'Continue adding rounds, making (3 DC, chain 3, 3 DC) in each corner space and 3 DC in each side space between corners.',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/granny-square.jpg'
  },
  {
    id: 'pattern3',
    name: 'Simple Scarf',
    description: 'A basic scarf using single crochet, great for practicing tension.',
    materials: ['Worsted weight yarn (approx. 200g)', 'Yarn needle', 'Scissors'],
    hookSize: '5.5mm (I/9)',
    instructions: [
      'Chain 20 (or desired width).',
      'Row 1: SC in 2nd chain from hook and in each chain across. Chain 1, turn. (19 SC)',
      'Row 2: SC in each stitch across. Chain 1, turn. (19 SC)',
      'Repeat Row 2 until scarf reaches desired length (approx. 60 inches or 150 cm).',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/simple-scarf.jpg'
  },
  {
    id: 'pattern4',
    name: 'Amigurumi Ball',
    description: 'A small, squishy ball, foundational for amigurumi projects.',
    materials: ['DK weight yarn (small amount)', 'Safety eyes (optional)', 'Stuffing', 'Yarn needle', 'Scissors'],
    hookSize: '3.0mm (C/2)',
    instructions: [
      'Start with a magic ring.',
      'Round 1: 6 SC in magic ring. (6)',
      'Round 2: 2 SC in each stitch around. (12)',
      'Round 3: *SC in next stitch, 2 SC in next stitch*. Repeat from * around. (18)',
      'Round 4: *SC in next 2 stitches, 2 SC in next stitch*. Repeat from * around. (24)',
      'Rounds 5-8: SC in each stitch around. (24)',
      'Insert safety eyes between rounds 6 and 7, about 5 stitches apart (optional).',
      'Round 9: *SC in next 2 stitches, SC2tog*. Repeat from * around. (18) Start stuffing.',
      'Round 10: *SC in next stitch, SC2tog*. Repeat from * around. (12) Finish stuffing firmly.',
      'Round 11: *SC2tog*. Repeat from * around. (6)',
      'Fasten off, leave a tail. Weave tail through remaining 6 stitches and pull tight to close. Weave in ends.'
    ],
    imageUrl: 'images/crochet-ball.jpg'
  },
  {
    id: 'pattern5',
    name: 'Dishcloth (Half Double Crochet)',
    description: 'A textured and absorbent dishcloth using the half double crochet stitch.',
    materials: ['Worsted weight cotton yarn (approx. 70g)', 'Yarn needle', 'Scissors'],
    hookSize: '5.0mm (H/8)',
    instructions: [
      'Chain 26.',
      'Row 1: HDC in 3rd chain from hook and in each chain across. Chain 2, turn. (24 HDC)',
      'Row 2: HDC in each stitch across. Chain 2, turn. (24 HDC)',
      'Repeat Row 2 until piece measures approximately 8x8 inches (20x20 cm).',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/crochet-dish-cloth.jpg'
  },
  {
    id: 'pattern6',
    name: 'Simple Headband',
    description: 'A cozy and quick headband made with simple stitches.',
    materials: ['Worsted weight yarn (approx. 100g)', 'Yarn needle', 'Scissors'],
    hookSize: '5.5mm (I/9)',
    instructions: [
      'Chain 8 (or desired width).',
      'Row 1: HDC in 3rd chain from hook and in each chain across. Chain 2, turn. (6 HDC)',
      'Row 2: HDC in BLO (back loop only) of each stitch across. Chain 2, turn. (6 HDC)',
      'Repeat Row 2 until headband reaches desired length to fit around head (slightly stretched).',
      'Fold headband in half, short ends together. Slip stitch or sew edges together to form a loop.',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/crochet-head-band.jpg'
  },
  {
    id: 'pattern7',
    name: 'Beginner Beanie',
    description: 'A simple beanie worked flat and seamed, perfect for first hat projects.',
    materials: ['Aran/Worsted weight yarn (approx. 150g)', 'Yarn needle', 'Scissors'],
    hookSize: '5.0mm (H/8)',
    instructions: [
      'Chain 60 (or desired height of hat).',
      'Row 1: SC in 2nd chain from hook and in each chain across. Chain 1, turn. (59 SC)',
      'Row 2: SC in each stitch across. Chain 1, turn. (59 SC)',
      'Repeat Row 2 until piece measures desired width to fit around head (e.g., 20 inches / 50 cm).',
      'Fold piece in half, short ends together. Slip stitch or sew edges together to form a tube.',
      'To close top: Weave yarn needle through top edge stitches, pull tight to gather and close. Secure tightly.',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/crochet-beanie.jpg'
  },
  {
    id: 'pattern8',
    name: 'Crochet Flower Applique',
    description: 'A cute little flower to add to hats, bags, or other projects.',
    materials: ['Small amount of DK or worsted weight yarn', 'Yarn needle', 'Scissors'],
    hookSize: '4.0mm (G/6)',
    instructions: [
      'Start with a magic ring.',
      'Round 1: Chain 2 (counts as first HDC), 9 HDC into ring. Join with slip stitch to top of starting chain 2. (10 HDC)',
      'Round 2 (Petals): *Chain 2, 3 DC in next stitch, chain 2, slip stitch in next stitch*. Repeat from * 4 more times. (5 petals)',
      'Fasten off, leave a tail for sewing if attaching. Weave in ends.'
    ],
    imageUrl: 'images/crochet-flower.jpg'
  },
  {
    id: 'pattern9',
    name: 'Chunky Blanket (Single Crochet)',
    description: 'A warm and quick blanket using chunky yarn and simple single crochet.',
    materials: ['Super bulky weight yarn (approx. 1000g-1500g, depending on size)', 'Yarn needle', 'Scissors'],
    hookSize: '10.0mm (N/P/15)',
    instructions: [
      'Chain 50 (or desired width).',
      'Row 1: SC in 2nd chain from hook and in each chain across. Chain 1, turn. (49 SC)',
      'Row 2: SC in each stitch across. Chain 1, turn. (49 SC)',
      'Repeat Row 2 until blanket reaches desired length.',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/crochet-blanket.jpg'
  },
  {
    id: 'pattern10',
    name: 'Potholder (Double Crochet)',
    description: 'A functional and decorative potholder using double crochet.',
    materials: ['Worsted weight cotton yarn (approx. 100g)', 'Yarn needle', 'Scissors'],
    hookSize: '5.0mm (H/8)',
    instructions: [
      'Chain 25.',
      'Row 1: DC in 4th chain from hook and in each chain across. Chain 3, turn. (23 DC)',
      'Row 2: DC in each stitch across. Chain 3, turn. (23 DC)',
      'Repeat Row 2 until piece forms a square (approx. 7x7 inches or 18x18 cm).',
      'Optional: Add a loop for hanging by chaining 10 at one corner and slip stitching back to the corner.',
      'Fasten off and weave in ends.'
    ],
    imageUrl: 'images/crochet-coaster.jpg'
  }
];

export default crochetPatterns;