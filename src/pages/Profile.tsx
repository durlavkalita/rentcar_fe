import { FaRegUser, FaSlidersH, FaUserEdit } from "react-icons/fa";

function Profile() {
    return (
        <div>
            <div className="flex justify-between px-4 py-4">
                <div className="text-3xl my-auto mx-4">Hi User</div>
                <div className="bg-blue-400 rounded-full p-14 mx-4">
                    <FaRegUser />
                </div>
            </div>
            <div className="flex justify-between p-4 items-center">
                <div className="container flex justify-between bg-slate-200 rounded-full p-4 m-4 shadow-xl">
                    <span className="text-sm">Settings</span>
                    <FaSlidersH />
                </div>
                <div className="container flex justify-between bg-slate-200 rounded-full p-4 m-4 shadow-xl">
                    <span className="text-sm">Edit Profile</span>
                    <FaUserEdit />
                </div>
            </div>
            <div className="shadow-xl p-4 m-8 rounded-md">
                <div className="divide-y divide-solid">
                    <div className="m-3 p-3">
                        <span className="text-xl">Likes</span>
                    </div>
                    <div className="m-3 p-3">
                        <span className="text-xl">My Bookings</span>
                    </div>
                    <div className="m-3 p-3">
                        <span className="text-xl">Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;