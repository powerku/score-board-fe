"use client";

import { useState } from 'react';

interface TeamNameProps {
    name?: string;
}

const TeamName = ({ name }: TeamNameProps) => {
    const [teamName, setTeamName] = useState(name);

    const onClick = () => {
        const name = prompt("Enter new team name", teamName);
        setTeamName(name ?? "");
    }

    return (
        <div
            className="cursor-pointer"
            onClick={onClick}>
            {teamName}
        </div>
    );
};

export default TeamName;