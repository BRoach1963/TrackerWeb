import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { TeamMember } from '../DataStructures/TeamMember';
interface AddTeamMemberDialogProps {
    onClose: () => void;
    onSave: (teamMember: TeamMember) => void;
}

const AddTeamMemberDialog: React.FC<AddTeamMemberDialogProps> = ({ onClose, onSave }) => {
    const [teamMember, setTeamMember] = useState<TeamMember>({
        id: 0,
        firstName: '',
        lastName: '',
        nickName: '',
        email: '',
        cellPhone: '',
        jobTitle: '',
        birthDay: new Date(),
        hireDate: new Date(1900, 0, 1),
        terminationDate: new Date(1900, 0, 1),
        isActive: true,
        managerId: 0,
        profileImage: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTeamMember({ ...teamMember, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTeamMember({ ...teamMember, profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(teamMember);
        onClose();
    };

    return (
        <div className="dialog-overlay">
            <Draggable bounds="body">
                <div className="dialog">
                    <h2>
                        <div className="logo-container">
                        <svg className="logo" viewBox="0 0 24 24" width="30" height="30">
                                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="#FFB612" />
                        </svg>
                        <span className="title">Add Team Member</span>
                        </div>
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>First Name:</span>
                            <input type="text" name="firstName" value={teamMember.firstName} onChange={handleChange} required />
                        </label>
                        <label>
                            <span>Last Name:</span>
                            <input type="text" name="lastName" value={teamMember.lastName} onChange={handleChange} required />
                        </label>
                        <label>
                            <span>Nick Name:</span>
                            <input type="text" name="nickName" value={teamMember.nickName} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Email:</span>
                            <input type="email" name="email" value={teamMember.email} onChange={handleChange} required />
                        </label>
                        <label>
                            <span>Cell Phone:</span>
                            <input type="tel" name="cellPhone" value={teamMember.cellPhone} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Job Title:</span>
                            <input type="text" name="jobTitle" value={teamMember.jobTitle} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Birth Day:</span>
                            <input type="date" name="birthDay" value={teamMember.birthDay.toISOString().substr(0, 10)} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Hire Date:</span>
                            <input type="date" name="hireDate" value={teamMember.hireDate.toISOString().substr(0, 10)} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Termination Date:</span>
                            <input type="date" name="terminationDate" value={teamMember.terminationDate.toISOString().substr(0, 10)} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Manager ID:</span>
                            <input type="number" name="managerId" value={teamMember.managerId} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Profile Image:</span>
                            <input type="file" name="profileImage" accept="image/*" onChange={handleFileChange} />
                        </label>
                        <div className="dialog-actions">
                            <button type="button" onClick={onClose}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </Draggable>
        </div>
    );
};

export default AddTeamMemberDialog;
