import UserProfileComponent from"@/component/UserProfileComponent";
const UserProfilePage = ()=> {
    const user = { id:1 , name:" YengVue",email: " ather@gmail.com"};
    return (<div> <UserProfileComponent user={user}/></div>   );

};
export default UserProfilePage;