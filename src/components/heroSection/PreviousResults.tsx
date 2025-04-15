import Button from "@/ui/button/Button";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";


const PreviousResults = () => {
    // Sample results data
    const results = [
        {
            sport: "NBA",
            date: "Apr 7, 2025",
            pick: "Los Angeles Lakers -4.5",
            result: "Won",
            score: "Lakers 112 - Warriors 98"
        },
        {
            sport: "NFL",
            date: "Apr 5, 2025",
            pick: "Kansas City Chiefs ML",
            result: "Won",
            score: "Chiefs 28 - Ravens 24"
        },
        {
            sport: "MLB",
            date: "Apr 4, 2025",
            pick: "New York Yankees -1.5",
            result: "Lost",
            score: "Yankees 3 - Red Sox 4"
        },
        {
            sport: "NHL",
            date: "Apr 3, 2025",
            pick: "Vegas Golden Knights ML",
            result: "Won",
            score: "Knights 3 - Bruins 1"
        },
        {
            sport: "NBA",
            date: "Apr 2, 2025",
            pick: "Boston Celtics -6",
            result: "Won",
            score: "Celtics 108 - Heat 94"
        },
    ];

    return (
        <section className="py-12 md:py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Recent Results
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Check out our recent performance - transparency is our priority
                    </p>
                </div>

                <div className="bg-white w-full rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-navy font-semibold">Sport</th>
                                    <th className="px-6 py-4 text-navy font-semibold">Date</th>
                                    <th className="px-6 py-4 text-navy font-semibold">Pick</th>
                                    <th className="px-6 py-4 text-navy font-semibold">Result</th>
                                    <th className="px-6 py-4 text-navy font-semibold">Final Score</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {results.map((result, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <span className="bg-navy/5 text-navy px-2 py-1 rounded-lg">
                                                {result.sport}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{result.date}</td>
                                        <td className="px-6 py-4 font-medium text-navy">{result.pick}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-lg ${result.result === "Won" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                                {result.result}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{result.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center">
                    <Button title=" View Full History" width="fit">
                        <Link href="/history">
                            <MdArrowForward className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PreviousResults;
