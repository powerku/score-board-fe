"use client";

import Timer from '@/components/timer';
import { useState } from 'react';
import Team from "@/components/team";

const FootBallPage = () => {
    const [quarter, setQuarter] = useState(1);

    return (
        <main className="flex flex-col justify-center">
            <Timer quarter={quarter} setQuarter={setQuarter}></Timer>
            <div className="flex justify-between items-center px-20">
                <Team name="Home"></Team>
                <span className="text-[5rem] align-middle text-green-500">{quarter}Q</span>
                <Team name="Away"></Team>
            </div>
        </main>
    );
};

export default FootBallPage;