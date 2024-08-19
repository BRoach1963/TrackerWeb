export interface TeamMember {
    id: number;
    firstName: string; 
    lastName: string;
    nickName: string;
    email: string;
    cellPhone: string; 
    jobTitle: string;
    birthDay: Date;
    hireDate: Date;
    terminationDate: Date;
    isActive: boolean;
    managerId: number;
    profileImage: string | ArrayBuffer | null; // Handle image as base64 string or ArrayBuffer
}
 
