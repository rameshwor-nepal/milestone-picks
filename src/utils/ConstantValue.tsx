import { FaBasketballBall } from "react-icons/fa";
import { FaBaseball } from "react-icons/fa6";

import { IoFootballSharp } from "react-icons/io5";
import { MdSportsHockey } from "react-icons/md";

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

export const ContentType = [
  { value: "point_spreads", label: "Point Spreads" },
  { value: "moneylines", label: "Moneylines" },
  { value: "totals", label: "Totals (Over/Under)" },
  { value: "prop_bets", label: "Prop Bets" },
  { value: "parlays", label: "Parlays" },
  { value: "teasers", label: "Teasers" }
]


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


