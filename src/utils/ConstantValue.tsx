import { FaBan, FaBasketballBall, FaMousePointer, FaRegLightbulb, FaShieldAlt, FaWallet } from "react-icons/fa";
import { FaAward, FaBaseball, FaClock, FaRegCircleCheck } from "react-icons/fa6";
import { FiTarget, FiZap } from "react-icons/fi";
import { IoFootballSharp } from "react-icons/io5";
import { MdOutlineTrendingUp, MdPeople, MdSportsHockey } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

export const PredictionType = [
  {
    label: "Win",
    value: "WIN"
  },
  {
    label: "Lose",
    value: "LOSE"
  },
  {
    label: "Over_under",
    value: "OVER_UNDER"
  },
  {
    label: "Handicap",
    value: "HANDICAP"
  },
  {
    label: "Other",
    value: "OTHER"
  },

]

export const PredictionResultType = [
  {
    label: "Pending",
    value: "PENDING"
  },
  {
    label: "Correct",
    value: "CORRECT"
  },
  {
    label: "Incorrect",
    value: "INCORRECT"
  },
  {
    label: "Handicap",
    value: "HANDICAP"
  },
  {
    label: "Other",
    value: "OTHER"
  },

]

export const features = [
  {
    icon: <FaRegCircleCheck size={40} />,
    title: "Expert Analysis",
    description: "Our team of professional handicappers analyzes stats, trends, and insider information to provide the most accurate picks."
  },
  {
    icon: <MdOutlineTrendingUp size={40} />,
    title: "Proven Results",
    description: "Our documented win rate of 60%+ across all sports gives you the edge needed to beat the bookmakers consistently."
  },
  {
    icon: <FaAward size={40} />,
    title: "Premium Selections",
    description: "Get access to our highest-confidence picks that are only available to paying members."
  },
  {
    icon: <FaClock size={40} />,
    title: "Daily Updates",
    description: "Receive timely picks delivered directly to your inbox, allowing you to place bets with confidence."
  }
];

export const sports = [
  {
    name: "NBA",
    icon: <FaBasketballBall size={48} className="text-gold" />,
    description: "Professional basketball league picks",
    features: ["Player Props", "Game Spreads", "Over/Under Totals"]
  },
  {
    name: "NFL",
    icon: <IoFootballSharp size={48} className="text-gold" />,
    description: "Professional football league picks",
    features: ["Game Spreads", "Money Lines", "Player Performances"]
  },
  {
    name: "MLB",
    icon: <FaBaseball size={48} className="text-gold" />,
    description: "Major League Baseball picks",
    features: ["Run Lines", "Total Runs", "Player Stats"]
  },
  {
    name: "NHL",
    icon: <MdSportsHockey size={48} className="text-gold" />,
    description: "National Hockey League picks",
    features: ["Puck Lines", "Game Totals", "Period Betting"]
  },
  {
    name: "College Basketball",
    icon: <FaBasketballBall size={48} className="text-gold" />,
    description: "NCAA basketball picks and insights",
    features: ["Tournament Specials", "Game Spreads", "Team Totals"]
  }
];

export const stats = [
  { value: "7+", label: "Years of Experience", icon: <MdOutlineTrendingUp className="text-gold w-8 h-8" /> },
  { value: "85%", label: "Win Rate", icon: <FaAward className="text-gold w-8 h-8" /> },
  { value: "5,000+", label: "Satisfied Members", icon: <MdPeople className="text-gold w-8 h-8" /> },
  { value: "15K+", label: "Winning Picks", icon: <FaRegCircleCheck className="text-gold w-8 h-8" /> },
];

export const team = [
  {
    name: "Michael Thompson",
    role: "Head of Sports Analysis",
    bio: "With over 10 years in statistical analytics and 7 years in sports betting, Michael brings unparalleled expertise to our team.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' fill='%230a1e3b'%3E%3Crect width='100' height='100' /%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='Avenir, sans-serif' fill='white'%3EMT%3C/text%3E%3C/svg%3E"
  },
  {
    name: "Sarah Wilson",
    role: "NFL & NBA Specialist",
    bio: "Former sports journalist turned analyst, Sarah has developed proprietary models for predicting outcomes in major league sports.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' fill='%230a1e3b'%3E%3Crect width='100' height='100' /%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='Avenir, sans-serif' fill='white'%3ESW%3C/text%3E%3C/svg%3E"
  },
  {
    name: "David Rodriguez",
    role: "MLB & NHL Analyst",
    bio: "David combines his passion for baseball and hockey with data science to identify value betting opportunities overlooked by the market.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' fill='%230a1e3b'%3E%3Crect width='100' height='100' /%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='Avenir, sans-serif' fill='white'%3EDR%3C/text%3E%3C/svg%3E"
  },
];

// Trust pillars data
export const trustPillars = [
  {
    title: "Complete Transparency",
    description: "We share wins AND losses - no hiding the bad days",
    icon: <FaRegCircleCheck className="w-10 h-10 text-white" />
  },
  {
    title: "Verified Performance",
    description: "Our track record is public and independently verifiable",
    icon: <MdOutlineTrendingUp className="w-10 h-10 text-white" />
  },
  {
    title: "Proven Strategy",
    description: "Our disciplined approach delivers consistent long-term results",
    icon: <FaAward className="w-10 h-10 text-white" />
  }
];

// Smart betting advantages
export const smartBetting = [
  {
    title: "Data-Driven Insights",
    description: "Make decisions based on statistical analysis, not gut feelings",
    icon: <RiLineChartLine className="w-8 h-8 text-gold" />,
    color: "from-blue-400 to-indigo-600"
  },
  {
    title: "Expert Strategies",
    description: "Learn professional betting techniques used by successful bettors",
    icon: <FiTarget className="w-8 h-8 text-gold" />,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Immediate Advantage",
    description: "Start making smarter bets from day one with our proven system",
    icon: <FiZap className="w-8 h-8 text-gold" />,
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Personalized Approach",
    description: "Tailored advice to match your goals and risk tolerance",
    icon: <FaMousePointer className="w-8 h-8 text-gold" />,
    color: "from-green-400 to-emerald-600"
  }
];

export const tipCards = [
  {
    icon: <FaWallet size={48} className="text-gold" />,
    title: "1. Manage Your Bankroll Like a Pro",
    description: "Managing your bankroll is the most crucial part of betting. Think of your bankroll as the total amount of money you set aside for betting—it's your budget. Here's the golden rule: only bet 1% to 3% of your bankroll on each stake. This keeps you from losing big on any one bet and helps you ride the ups and downs of the game without going bust. Following this system helps keep you in the game, no matter how hot or cold your streak is.",
    image: "/photo3.jpg"
  },
  {
    icon: <FaBan size={48} className="text-gold" />,
    title: "2. No Emotional Betting!",
    description: "We get it, emotions can run high in sports! But when it comes to betting, you have to leave your heart at the door. There will be times when you'll need to bet against your favorite team—don't let your emotions cloud your judgment. Stick to the facts and data (we've got you covered with expert picks), and avoid chasing that \"feel-good\" bet. In the long run, being logical wins.",
    image: "/stick-to-plan.jpg"
  },
  {
    icon: <FiTarget size={48} className="text-gold" />,
    title: "3. Stay Calm and Stick to the Plan",
    description: "Everyone has a bad day—it's part of the game. Don't panic or try to recover by doubling your stake the next day. That's emotional betting, and it can drain your bankroll fast. Winning or losing is part of the journey, and consistency is key. Stick to your bankroll plan, stay disciplined, and follow the expert tips we provide. Our advice is designed to help you stay the course and avoid knee-jerk reactions when things don't go your way.",
    image: "/photo2.jpg"
  },
  {
    icon: <FaRegLightbulb size={48} className="text-gold" />,
    title: "4. Always Look for Value Bets",
    description: "Betting is about finding value, not just betting on the favorite. A heavy favorite doesn't guarantee a win, and if the odds aren't worth it, it's a good idea to pass. Remember, betting is a 50-50 game, and nothing is 100% guaranteed, no matter how confident you feel about a pick. Focus on bets that offer good value and better returns—this is how smart bettors build long-term success.",
    image: "/look-value-bets.jpg"
  },
  {
    icon: <FaShieldAlt size={48} className="text-gold" />,
    title: "5. Spot Fake Handicappers",
    description: "Unfortunately, there are scammers out there. Fake handicappers will lure you in with pictures of luxury cars and big winnings, but they never show you the full story. Here's what you need to know:",
    image: "/manage-payroll.jpg"
  }
];