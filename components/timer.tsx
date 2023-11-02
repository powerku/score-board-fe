"use client";

import React, {useEffect, useMemo, useState} from 'react';
import localFont from "next/font/local";

import {cn} from "@/lib/utils";

import {Button} from "@/components/ui/button";


interface TimerProps {
    initialMinute?: number;
    initialSecond?: number;
    quarter: number;
    setQuarter: React.Dispatch<React.SetStateAction<number>>;
}

const digitalFont = localFont({ src: '../app/fonts/Digital_Dismay.otf' })

const Timer = ({initialMinute = 15, initialSecond = 0, quarter, setQuarter}: TimerProps) => {
    const [min, setMinute] = useState(initialMinute)
    const [sec, setSecond] = useState(initialSecond)
    const [milliSec, setMilliSec] = useState(0)
    const [saveMin, setSaveMinute] = useState(initialMinute)
    const [isRunning, setIsRunning] = useState(false);
    const [minuteSecondMode, setIsMinuteSecondMode] = useState(true);

    const formatMinute = useMemo(() => {
        return min.toString().padStart(2, '0')
    }, [min])

    const formatSecond = useMemo(() => {
        return sec.toString().padStart(2, '0')
    }, [sec])

    useEffect(() => {
        if (min === 0) {
            setIsMinuteSecondMode(false);
        }
    }, [min]);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        let interval;

        if (minuteSecondMode) {
            interval = setInterval(() => {
                if (sec > 0 ) {
                    setSecond(sec - 1)
                } else if (sec === 0 && min > 0) {
                    setMinute(min - 1)
                    if (min !== 0) {
                        setSecond(59)
                    }
                }
            }, 1000)
        } else {
            interval = setInterval(() => {
                if (milliSec > 0 ) {
                    setMilliSec(milliSec - 1)
                } else if (milliSec === 0 && sec > 0) {
                    setSecond(sec - 1)
                    if (sec !== 0) {
                        setMilliSec(9)
                    }
                }
            }, 100)
        }

        return () => clearInterval(interval)
    });

    const go = () => {
        setIsRunning(isRunning => !isRunning);
    }

    const reset = () => {
        setMinute(saveMin);
        setSecond(0);
        setMilliSec(0)
        setIsRunning(false);
        setIsMinuteSecondMode(true);
    }

    const onSave = () => {
        setSaveMinute(min);
    }

    return (
        <>
            <div className="text-center text-yellow-400">
            {minuteSecondMode ? <>
                <span className={cn("text-[25rem]", digitalFont.className )}>{formatMinute}:</span>
                <span className={cn("text-[25rem]", digitalFont.className )}>{formatSecond}</span>
            </>: <>
                <span className={cn("text-[25rem]", digitalFont.className )}>{formatSecond}.</span>
                <span className={cn("text-[25rem]", digitalFont.className )}>{milliSec}</span>
            </>
            }
            </div>
            <div className="text-center flex justify-center gap-1">
                <Button onClick={() => setMinute(min + 1)}>+</Button>
                <Button onClick={() => setMinute(min - 1)}>-</Button>
                <Button onClick={() => setMinute(15)}>15min</Button>
                <Button onClick={() => setMinute(30)}>30min</Button>
                <Button onClick={() => setMinute(45)}>45min</Button>
                <Button onClick={go} className="primary">{isRunning ? 'Stop':'Start'}</Button>
                <Button onClick={reset}>Reset</Button>
                <Button onClick={() => {
                    reset();
                    setQuarter(quarter + 1)
                }}>Quarter</Button>
                <Button onClick={onSave}>Save</Button>
            </div>
        </>
    );
};

export default Timer;