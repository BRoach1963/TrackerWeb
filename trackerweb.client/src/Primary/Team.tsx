import React, { useState } from 'react';
import ToolbarButton from '../Buttons/ToolbarButton';
import AddTeamMemberDialog from '../Dialogs/AddTeamMemberDialog';
import { TeamMember } from '../DataStructures/TeamMember';
import '../Dialogs/AddTeamMemberDialog.css';
import './Team.css';  

const initialTeamMembers: TeamMember[] = [
    {
        id: 1,
        firstName: 'Anthony',
        lastName: 'Casson',
        nickName: 'The Best',
        email: 'a.c@example.com',
        cellPhone: '123-456-7890',
        jobTitle: 'Developer',
        birthDay: new Date('1990-01-01'),
        hireDate: new Date('2015-06-15'),
        terminationDate: new Date('9999-12-31'),
        isActive: true,
        managerId: 0,
        profileImage: null,  
    },
    {
        id: 2,
        firstName: 'Brian',
        lastName: 'Roach',
        nickName: 'Dude',
        email: 'b.r@example.com',
        cellPhone: '987-654-3210',
        jobTitle: 'Designer',
        birthDay: new Date('1992-02-02'),
        hireDate: new Date('2016-03-20'),
        terminationDate: new Date('9999-12-31'),
        isActive: true,
        managerId: 0,
        profileImage: null,
    },
];

const Team: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);

    const handleAddClick = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleSaveTeamMember = (teamMember: TeamMember) => {
        setTeamMembers([...teamMembers, teamMember]);
    };

    const handleRowClick = (id: number, event: React.MouseEvent<HTMLTableRowElement>) => {
        setSelectedRow(id === selectedRow ? null : id);

        updateStyles(event.currentTarget);
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLTableRowElement>) => {
        const element = event.currentTarget;
        if (!element.classList.contains('selected')) {
            updateStyles(element);
        }
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLTableRowElement>) => {
        const element = event.currentTarget;
        if (!element.classList.contains('selected')) {
            updateStyles(element);
        }
    };

    const updateStyles = (element: HTMLElement | null) => {
        if (element) {
            const isSelected = selectedRow !== null && element.classList.contains('selected');
            const svgPaths = element.querySelectorAll('svg path');

            svgPaths.forEach((path) => {
                (path as SVGPathElement).style.fill = isSelected ? 'black' : '#FFB612';
            });

            const profilePicElement = element.querySelector('.profile-pic') as HTMLElement;
            if (profilePicElement) {
                profilePicElement.style.borderColor = isSelected ? 'black' : '#FFB612';
            }
        }
    };

    const addIconPath = "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z";

    return (
        <div className="team-content">
            <div className="toolbar">
                <ToolbarButton
                    onClick={handleAddClick}
                    tooltip="Add Member"
                    iconPath={addIconPath}
                />
            </div>
            <div className="data-grid">
                <table>
                    <thead>
                        <tr>
                            <th className="profile-header"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembers.map((member) => (
                            <tr
                                key={member.id}
                                className={selectedRow === member.id ? 'selected' : ''}
                                onClick={(event) => handleRowClick(member.id, event)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <td>
                                    {member.profileImage ? (
                                        <img
                                            src={member.profileImage as string}
                                            alt="Profile Pic"
                                            className="profile-pic"
                                        />
                                    ) : (
                                        <svg className="profile-pic" viewBox="0 0 24 24">
                                            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="#FFB612" />
                                        </svg>
                                    )}
                                </td>
                                <td>{`${member.firstName} ${member.lastName}`}</td>
                                <td>{member.email}</td>
                                <td>{member.jobTitle}</td>
                                <td>{member.cellPhone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isDialogOpen && (
                <AddTeamMemberDialog
                    onClose={handleDialogClose}
                    onSave={handleSaveTeamMember}
                />
            )}
        </div>
    );
};

export default Team;
