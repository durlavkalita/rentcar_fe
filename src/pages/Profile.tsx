import { FaRegCalendarCheck, FaRegHeart, FaRegUser, FaSlidersH, FaUserEdit } from "react-icons/fa";

function Profile() {
    return (
        <div>
            <div className="flex justify-between p-4">
                <div className="text-3xl my-auto mx-4">Hi User</div>
                <div className="bg-blue-400 rounded-full p-10 mx-4">
                    <FaRegUser size={50} />
                </div>
            </div>
            <div className="flex justify-between p-4 items-center">
                <div className="container flex justify-between bg-slate-200 rounded-full p-4 m-4 shadow-xl">
                    <span>Settings</span>
                    <div className="my-auto">
                        <FaSlidersH />
                    </div>
                </div>
                <div className="container flex justify-between bg-slate-200 rounded-full p-4 m-4 shadow-xl">
                    <span>Edit Profile</span>
                    <div className="my-auto">
                        <FaUserEdit />
                    </div>
                </div>
            </div>
            <div className="shadow-xl m-8 rounded-md">
                <div className="divide-y divide-solid">
                    <div className="flex justify-between p-5">
                        <span className="text-xl">Likes</span>
                        <div className="my-auto">
                            <FaRegHeart size={25} />
                        </div>
                    </div>
                    <div className="flex justify-between p-5">
                        <span className="text-xl">My Bookings</span>
                        <div className="my-auto">
                            <FaRegCalendarCheck size={25} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-8 text-lg text-red-500 font-semibold">
                <span>Log Out</span>
            </div>
        </div>
    )
}

export default Profile;