
import React, { useState } from 'react';
import { MdCalendarMonth, MdCheck, MdInfo, MdLockClock } from 'react-icons/md';
import { Card } from './Card';
import { cn } from '@/utils/cn/utils';
import { IoChevronDown } from 'react-icons/io5';
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface PredictionCardProps {
    sport: string;
    match: string;
    date: string;
    time: string;
    prediction: string;
    confidenceLevel: number;
    status: 'win' | 'loss' | 'pending';
    detail: string;
}

const PredictionCard: React.FC<PredictionCardProps> = ({
    sport,
    match,
    date,
    time,
    prediction,
    confidenceLevel,
    status,
    detail
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getStatusColor = () => {
        switch (status) {
            case 'win':
                return 'border-l-green-500 before:bg-green-500';
            case 'loss':
                return 'border-l-red-500 before:bg-red-500';
            case 'pending':
                return 'border-l-amber-500 before:bg-amber-500';
            default:
                return '';
        }
    };

    const getStatusBadge = () => {
        switch (status) {
            case 'win':
                return (
                    <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full">
                        <MdCheck size={16} />
                        <span className="text-sm font-medium">Won</span>
                    </div>
                );
            case 'loss':
                return (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Loss
                    </div>
                );
            case 'pending':
                return (
                    <div className="flex items-center gap-1 border border-amber-500 text-amber-600 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">Pending</span>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= confidenceLevel ? "text-gold" : "text-gray-300"}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <Card className={cn(
            "overflow-hidden border-l-4 relative bg-slate-50",
            getStatusColor()
        )}>
            <div className="p-5">
                {/* Sport Label and Status */}
                <div className="flex justify-between items-center mb-4">
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-navy">
                        {sport}
                    </div>
                    {getStatusBadge()}
                </div>

                {/* Match Title */}
                <h3 className="text-lg font-bold text-navy mb-1">{match}</h3>

                {/* Date and Time */}
                <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center text-navy-light">
                        <MdCalendarMonth size={16} className="mr-1" />
                        <span className="text-sm">{date}</span>
                    </div>
                    <div className="flex items-center text-navy-light">
                        <MdLockClock size={16} className="mr-1" />
                        <span className="text-sm">{time}</span>
                    </div>
                </div>

                {/* Prediction */}
                <div className="mb-2">
                    <div className="text-sm text-navy-light">Our Prediction:</div>
                    <div className="text-lg font-bold text-navy">{prediction}</div>
                </div>

                {/* Confidence Level */}
                <div className="mb-2">
                    <div className="text-sm text-navy-light">Confidence Level:</div>
                    <div className="text-lg">
                        {renderStars()}
                    </div>
                </div>

                {/* Expert Analysis */}
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="border-t border-gold pt-3"
                >
                    <div>
                        <span className="w-full bg-slate-100 cursor-pointer flex items-center justify-center gap-2 text-navy p-0 h-8 hover:bg-slate-200">
                            <MdInfo size={16} />
                            <span>Expert Analysis</span>
                            <IoChevronDown
                                size={16}
                                className={cn("transition-transform duration-200", {
                                    "transform rotate-180": isExpanded
                                })}
                            />
                        </span>
                    </div>
                    {
                        isExpanded &&
                        <div className="pt-3 text-sm text-navy-light">
                            <p>
                                {detail}
                            </p>
                        </div>
                    }

                </div>
            </div>
        </Card>
    );
};

export default PredictionCard;
