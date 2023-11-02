import React from 'react';
import TeamName from "@/components/team-name";
import TeamScore from "@/components/team-score";


interface TeamProps {
    name?: string;
}

const Team = ({name}: TeamProps) => {
    return (
        <div className="flex flex-col text-center w-[500px]">
            <TeamName name={name}></TeamName>
            <TeamScore></TeamScore>
        </div>
    );
};

export default Team;