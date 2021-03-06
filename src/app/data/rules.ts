import { IRule } from '../interfaces/irule';
const rules: IRule[] = [
    {
        source: 'The Nagus (DS9 episode)',
        number: 1,
        rule: 'Once you have their money, you never give it back. '
    },
    {
        source: 'The 34th Rule (DS9 novel)',
        number: 2,
        rule: 'The best deal is the one that makes the most profit. '
    },
    {
        source: 'The Maquis, Part II (DS9 episode)',
        number: 3,
        rule: 'Never spend more for an acquisition than you have to. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 4,
        rule: 'A woman wearing clothes is like a man in the kitchen. '
    },
    {
        source: 'Cold Fusion (SCE novel)',
        number: 5,
        rule: 'Always exaggerate your estimates. '
    },
    {
        source: 'The Nagus (DS9 episode)',
        number: 6,
        rule: 'Never let family stand in the way of opportunity. '
    },
    {
        source: 'In the Hands of the Prophets (DS9 episode)',
        number: 7,
        rule: 'Always keep your ears open. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 8,
        rule: 'Small print leads to large risk. '
    },
    {
        source: 'The Storyteller (DS9 episode)',
        number: 9,
        rule: 'Instinct, plus opportunity, equals profit. '
    },
    {
        source: 'Prophet Motive (VOY episode)',
        number: 10,
        rule: 'Greed is eternal. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 11,
        rule: 'Even if its free, you can always buy it cheaper. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 12,
        rule: 'Anything worth selling is worth selling twice. '
    },
    {
        source: 'Legends of the Ferengi (DS9 novel)',
        number: 13,
        rule: 'Anything worth doing is worth doing for money. '
    },
    {
        source: 'Demons of Air and Darkness (DS9 novel)',
        number: 15,
        rule: 'Dead men close no deals. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 16,
        rule: 'A deal is a deal (is a deal)...until a better one comes along. '
    },
    {
        source: 'Body Parts (DS9 episode)',
        number: 17,
        rule: 'A contract is a contract is a contract... but only between Ferengi. '
    },
    {
        source: 'Heart of Stone (DS9 episode)',
        number: 18,
        rule: 'A Ferengi without profit is no Ferengi at all. '
    },
    {
        source: 'Legends of the Ferengi (DS9 novel)',
        number: 19,
        rule: 'Satisfaction is not guaranteed. '
    },
    {
        source: 'Ferenginar: Satisfaction is Not Guaranteed (DS9 novella)',
        number: 20,
        rule: 'He who dives under the table today lives to profit tomorrow. '
    },
    {
        source: 'Rules of Acquisition (DS9 episode)',
        number: 21,
        rule: 'Never place friendship before profit. '
    },
    {
        source: 'Rules of Acquisition (DS9 episode)',
        number: 22,
        rule: 'Wise men can hear profit in the wind. '
    },
    {
        source: 'Acquisition (ENT episode)',
        number: 23,
        rule: 'Nothing is more important than your health...except for your money. '
    },
    {
        source: 'The Siege of Ar-558 (DS9 episode)',
        number: 25,
        rule: 'You can\'t make a deal if you\'re dead. '
    },
    {
        source: 'Legends of the Ferengi (DS9 novel)',
        number: 27,
        rule: 'There\'s nothing more dangerous than an honest businessman. '
    },
    {
        source: 'Highest Score (DS9 novel)',
        number: 29,
        rule: 'What\'s in it for me? '
    },
    {
        source: 'The Badlands, Part IV (DS9 novel)',
        number: 30,
        rule: 'A wise man knows that confidentiality equals profit. '
    },
    {
        source: 'The Siege (DS9 episode)',
        number: 31,
        rule: 'Never make fun of a Ferengi\'s mother. '
    },
    {
        source: 'Elite Force II',
        number: 32,
        rule: 'Insult something he cares about. '
    },
    {
        source: 'Rules of Acquisition (DS9 episode)',
        number: 33,
        rule: 'It never hurts to suck up to the boss. '
    },
    {
        source: 'Destiny (DS9 episode); The 34th Rule (DS9 novel)',
        number: 34,
        rule: 'War is good for business. '
    },
    {
        source: 'Destiny (DS9 episode); The 34th Rule (DS9 novel)',
        number: 35,
        rule: 'Peace is good for business. '
    },
    {
        source: 'ST novella: Reservoir Ferengi',
        number: 37,
        rule: 'The early investor reaps the most interest. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 40,
        rule: 'She can touch your lobes but never your latinum. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 41,
        rule: 'Profit is its own reward. '
    },
    {
        source: 'The Buried Age (TNG novel)',
        number: 43,
        rule: 'Feed your greed, but not enough to choke it. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 44,
        rule: 'Never confuse wisdom with luck. '
    },
    {
        source: 'Acquisition (ENT episode)',
        number: 45,
        rule: 'Expand or die.* '
    },
    {
        source: 'Rivals (DS9 episode)',
        number: 47,
        rule: 'Never trust a man wearing a better suit than your own. '
    },
    {
        source: 'Rules of Acquisition (DS9 episode)',
        number: 48,
        rule: 'The bigger the smile, the sharper the knife. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 52,
        rule: 'Never ask when you can take. '
    },
    {
        source: 'Mission Gamma: Twilight (DS9 novel)',
        number: 53,
        rule: 'Never trust anybody taller than you. '
    },
    {
        source: 'Raise the Dawn (Typhon Pact novel)',
        number: 54,
        rule: 'Rate divided by time equals profit. (Also known as The Velocity of Wealth.) '
    },
    {
        source: 'Worlds of Deep Space Nine: Bajor: Fragments and Omens (DS9 novel)',
        number: 55,
        rule: 'Take joy from profit, and profit from joy. '
    },
    {
        source: 'Armageddon Game (DS9 episode)',
        number: 57,
        rule: 'Good customers are almost as rare as latinum...treasure them. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 58,
        rule: 'There is no substitute for success. '
    },
    {
        source: 'Rules of Acquisition (DS9 episode)',
        number: 59,
        rule: 'Free advice is seldom cheap. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 60,
        rule: 'Keep your lies consistent. '
    },
    {
        source: 'Rules of Acquisition (DS9 episode)',
        number: 62,
        rule: 'The riskier the road, the greater the profit. '
    },
    {
        source: 'Over a Torrent Sea (TTN novel)',
        number: 63,
        rule: 'Work is the best therapy-at least for your employees. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 65,
        rule: 'Win or lose, there\'s always Hupyrian beetle snuff. '
    },
    {
        source: 'Balance of Power (TNG novel)',
        number: 69,
        rule: 'Ferengi are not responsible for the stupidity of other races. '
    },
    {
        source: 'Inside Man (VOY episode)',
        number: 74,
        rule: 'Knowledge equals profit. '
    },
    {
        source: 'Civil Defense (DS9 episode)',
        number: 75,
        rule: 'Home is where the heart is, but the stars are made of latinum. '
    },
    {
        source: 'The Homecoming (DS9 episode)',
        number: 76,
        rule: 'Every once in a while, declare peace. It confuses the Hell out of your enemies. '
    },
    {
        source: 'Star Trek Online',
        number: 77,
        rule: 'If you break it, you bought it. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 79,
        rule: 'Beware of the Vulcan greed for knowledge. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 82,
        rule: 'The flimsier the product, the higher the price. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 85,
        rule: 'Never let the competition know what you\'re thinking. '
    },
    {
        source: 'Highest Score (DS9 novel)',
        number: 87,
        rule: 'Learn the customer\'s weaknesses, so that you can better take advantage of him. '
    },
    {
        source: 'Ferenginar: Satisfaction is Not Guaranteed (DS9 novella)',
        number: 88,
        rule: 'It ain\'t over \'til its over. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 89,
        rule: 'Ask not what you can do for your profits, but what your profits can do for you. '
    },
    {
        source: 'Highest Score (DS9 novel)',
        number: 92,
        rule: 'There are many paths to profit. '
    },
    {
        source: 'Ferengi Love Songs (DS9 episode)',
        number: 94,
        rule: 'Females and finances don\'t mix. '
    },
    {
        source: 'False Profits (VOY episode)',
        number: 95,
        rule: 'Expand or die.* '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 97,
        rule: 'Enough...is never enough. '
    },
    {
        source: 'In the Pale Moonlight (DS9 episode)',
        number: 98,
        rule: 'Every man has his price. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 99,
        rule: 'Trust is the biggest liability of all. '
    },
    {
        source: 'The Jem\'Hadar (DS9 episode)',
        number: 102,
        rule: 'Nature decays, but latinum lasts forever. '
    },
    {
        source: 'Rules of Acquisition (DS9 episode)',
        number: 103,
        rule: 'Sleep can interfere with... '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 104,
        rule: 'Faith moves mountains...of inventory. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 106,
        rule: 'There is no honor in poverty. '
    },
    {
        source: 'Rivals (DS9 episode)',
        number: 109,
        rule: 'Dignity and an empty sack is worth the sack. '
    },
    {
        source: 'Star Trek Online',
        number: 110,
        rule: 'Exploitation begins at home. '
    },
    {
        source: 'Past Tense, Part I (DS9 episode)',
        number: 111,
        rule: 'Treat people in your debt like family... exploit them. '
    },
    {
        source: 'Playing God (DS9 episode)',
        number: 112,
        rule: 'Never have sex with the boss\' sister. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 113,
        rule: 'Always have sex with the boss. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 121,
        rule: 'Everything is for sale - even friendship. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 123,
        rule: 'Even a blind man can recognize the glow of Latinum. '
    },
    {
        source: 'The Siege of AR-558 (DS9 episode)',
        number: 125,
        rule: 'You can\'t make a deal if you\'re dead. '
    },
    {
        source: 'Necessary Evil (DS9 episode)',
        number: 139,
        rule: 'Wives serve; brother inherit. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 141,
        rule: 'Only fools pay retail. '
    },
    {
        source: 'Legends of the Ferengi (DS9 novel)',
        number: 144,
        rule: 'There\'s nothing wrong with charity... as long as it winds up in your pocket. '
    },
    {
        source: 'Fearful Symmetry (DS9 novel)',
        number: 147,
        rule: 'People love the bartender. '
    },
    {
        source: 'Deep Space Mine (DS9 comic)',
        number: 153,
        rule: 'Sell the sizzle, not the steak. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 162,
        rule: 'Even in the worst of times, someone turns a profit. '
    },
    {
        source: 'Treachery, Faith, and the Great River (DS9 episode)',
        number: 168,
        rule: 'Whisper your way to success. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 177,
        rule: 'Know your enemies... but do business with them always. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 181,
        rule: 'Not even dishonesty can tarnish the shine of profit. '
    },
    {
        source: 'Hollow Men (DS9 novel)',
        number: 183,
        rule: 'When life hands you ungaberries, make detergent. '
    },
    {
        source: 'Balance of Power (TNG novel)',
        number: 184,
        rule: 'A Ferengi waits to bid until his opponents have exhausted themselves. '
    },
    {
        source: 'Star Trek Online',
        number: 188,
        rule: 'Not even dishonesty can tarnish the shine of profit. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 189,
        rule: 'Let others keep their reputation. You keep their money. '
    },
    {
        source: 'DS9 episode: Call to Arms',
        number: 190,
        rule: 'Hear all, trust nothing. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 novel)',
        number: 192,
        rule: 'Never cheat a Klingon... unless you\'re sure you can get away with it. '
    },
    {
        source: 'Star Trek Online',
        number: 193,
        rule: 'Trouble comes in threes. '
    },
    {
        source: 'Whispers (DS9 episode)',
        number: 194,
        rule: 'It\'s always good business to know about new customers before they walk in your door. '
    },
    {
        source: 'The Soul Key (DS9 novel)',
        number: 199,
        rule: 'Location, location, location. '
    },
    {
        source: '(DS9 novel: Ferenginar: Satisfaction is Not Guaranteed)',
        number: 200,
        rule: 'A Ferengi chooses no side but his own '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 202,
        rule: 'The justification for profit is profit. '
    },
    {
        source: 'DS9 episode: Little Green Men',
        number: 203,
        rule: 'New customers are like razor-toothed gree worms. They can be succulent, but sometimes they bite back. '
    },
    {
        source: 'DS9 episode: Ferengi Love Songs',
        number: 208,
        rule: 'Sometimes, the only thing more dangerous than a question is an answer. '
    },
    {
        source: 'DS9 episode: Bar Association',
        number: 211,
        rule: 'Employees are the rungs on the ladder of success, don\'t hesitate to step on them. '
    },
    {
        source: 'Star Trek Online',
        number: 212,
        rule: 'A good lie is easier to believe than the truth. '
    },
    {
        source: 'DS9 episode: The Maquis, Part I',
        number: 214,
        rule: 'Never begin a business transaction on an empty stomach. '
    },
    {
        source: 'DS9 novel: The Laertian Gamble',
        number: 216,
        rule: 'Never gamble with a telepath. '
    },
    {
        source: 'DS9 episode: Past Tense, Part I',
        number: 217,
        rule: 'You can\'t free a fish from water. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 218,
        rule: 'Always know what you\'re buying. '
    },
    {
        source: 'Baby on Board (DS9 Malibu Comics)',
        number: 218,
        rule: 'Sometimes what you get free cost entirely too much. '
    },
    {
        source: 'TNG novel: Balance of Power',
        number: 219,
        rule: 'Possession is eleven-tenths of the law! '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 223,
        rule: 'Beware the man who doesn\'t take time for Oo-mox. '
    },
    {
        source: 'Star Trek Online',
        number: 227,
        rule: 'If that\'s what\'s written, then that\'s what\'s written. '
    },
    {
        source: 'DS9 episode: Ferengi Love Songs',
        number: 229,
        rule: 'Latinum lasts longer than lust. '
    },
    {
        source: 'Mission Gamma: Twilight (DS9 novel)',
        number: 235,
        rule: 'Duck; death is tall. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 236,
        rule: 'You can\'t buy fate. '
    },
    {
        source: 'DS9 episode: Body Parts',
        number: 239,
        rule: 'Never be afraid to mislabel a product. '
    },
    {
        source: 'Star Trek Online',
        number: 240,
        rule: 'Time, like latinum, is a highly limited commodity. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 242,
        rule: 'More is good...all is better. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 255,
        rule: 'A wife is [a] luxury... a smart accountant a neccessity. '
    },
    {
        source: 'False Profits (Voyager)',
        number: 257,
        rule: 'When the messenger comes to appropriate your profits, kill the messenger. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 261,
        rule: 'A wealthy man can afford everything except a conscience. '
    },
    {
        source: 'DS9 episode: Bar Association',
        number: 263,
        rule: 'Never let doubt interfere with your lust for Latinum. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 266,
        rule: 'When in doubt, lie. '
    },
    {
        source: 'Star Trek Online',
        number: 272,
        rule: 'Always inspect the merchandise before making a deal. '
    },
    {
        source: 'DS9 novel: Ferenginar: Satisfaction is Not Guaranteed)',
        number: 280,
        rule: 'If it ain\'t broke, don\'t fix it. '
    },
    {
        source: 'The Ferengi Rules of Acquisition (DS9 reference book)',
        number: 284,
        rule: 'Deep down, everyone\'s a Ferengi. '
    },
    {
        source: 'DS9 episode: The Collaborator',
        number: 285,
        rule: 'No good deed ever goes unpunished. '
    }
];

export { rules };
