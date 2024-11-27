// components/UserProfile.tsx
interface User {
    id: number;
    name: string;
    email: string;
    }
    const UserProfileComponent: React.FC<{ user: User }> = ({ user }) => {
    return (
    <div>
        <h1> ID:{user.id}</h1>
        <h1> Name:{user.name}</h1>
        <p>Email: {user.email}</p>
    </div>
    );
    };
export default UserProfileComponent;