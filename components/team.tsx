import React from 'react';
import TeamName from "@/components/team-name";
import TeamScore from "@/components/team-score";


interface TeamProps {
    name?: string;
}

const Team = ({name}) => {
    return (
        <>
            <TeamName name={name}></TeamName>
            <TeamScore></TeamScore>
        </>
    );
};

export default Team;