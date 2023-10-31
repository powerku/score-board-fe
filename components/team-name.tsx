"use client";

import { useState } from 'react';

interface TeamNameProps {
    name?: string;
}


const TeamName = ({ name = "Home" }: TeamNameProps) => {
    const [teamName, setTeamName] = useState(name);

    const onClick = () => {
        const name = prompt("Enter new team name", teamName);
        setTeamName(name ?? "");
    }

    return (
        <span
            className="text-xl cursor-pointer"
            onClick={onClick}>
            {teamName}
        </span>
    );
};

export default TeamName;