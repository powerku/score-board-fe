"use client";

import {useState} from 'react';
import {Button} from "@/components/ui/button";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";

const digitalFont = localFont({ src: '../app/fonts/Digital_Dismay.otf' })

const TeamScore = () => {
    const [score, setScore] = useState(0);
    return (
        <div>
            <span className={cn("text-xl", digitalFont.className )}>{score}</span>
            <div>
                <Button onClick={() => setScore(score + 1)}>+</Button>
                <Button onClick={() => setScore(score - 1)}>-</Button>
            </div>
        </div>
    );
};

export default TeamScore;