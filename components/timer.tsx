"use client";

import React, {useEffect, useMemo, useState} from 'react';
import {cn} from "@/lib/utils";
import localFont from "next/font/local";
import {Button} from "@/components/ui/button";


interface TimerProps {
    minute?: number;
    second?: number;
}

const digitalFont = localFont({ src: '../app/fonts/Digital_Dismay.otf' })

const Timer = ({minute = 15, second = 0}: TimerProps) => {
    const [min, setMinute] = useState(15)
    const [sec, setSecond] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    const formatMinute = useMemo(() => {
        return min.toString().padStart(2, '0')
    }, [min])

    const formatSecond = useMemo(() => {
        return sec.toString().padStart(2, '0')
    }, [sec])


    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const interval = setInterval(() => {
            if (sec > 0 ) {
                setSecond(sec - 1)
            } else if (second === 0 && minute > 0) {
                setMinute(min - 1)
                if (min !== 0) {
                    setSecond(59)
                }
            }
        }, 1000)

        return () => clearInterval(interval)
    });

    const onClick = () => {
        setIsRunning(isRunning => !isRunning);
    }

    return (
        <>
            <span className={cn("text-xl", digitalFont.className )}>{formatMinute}:</span>
            <span className={cn("text-xl", digitalFont.className )}>{formatSecond}</span>
            <Button onClick={onClick}>{isRunning ? 'Stop':'Start'}</Button>
        </>
    );
};

export default Timer;