import React from "react";
import Sidebar from "../Component/Sidebar";

const Admin = () => {
  return (
    <div className="grid">
      <div className="flex gap-3">
        {/* sidebar */}
        <Sidebar />
        {/* tutup sidebar */}

        {/* dashboard kanan */}
        <div className="border w-[80%] h-screen">
          <div className="p-10">
            {/* Hotl List */}
            <div className="text-5xl -semibold border-b-[5px] border-black py-5 mb-10">
              HOTEL LIST
            </div>
            {/* Hotel List tutup */}
            {/* start Table */}
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-black text-white">
                  <tr>
                    <th>Name</th>

                    <th className="bg-green-400">Location <br /></th>

                    <th>Description</th>

                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_9QUN0EKQgr8mI3pY39t5wVyQG3CnXMfoejXpb8h&s"
                              alt=""
                            />
                          </div>
                        </div>

                        <div>
                          <div className="">Santika</div>

                          <div className="text-sm opacity-50">Jakarta</div>
                        </div>
                      </div>
                    </td>

                    <td>
                      Jakarta
                      <br />
                    </td>
                    <td>
                      <span className="">Office Assistant I</span>
                      <br />
                    </td>

                    <td className="flex gap-5">
                      <span>Crimson</span>
                      <br/>
                      <span>
                        <button className="btn btn-ghost btn-xs bg-black text-white">
                          edit
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* tutup table */}
          </div>
        </div>
        {/* dashboard kanan end */}
      </div>
    </div>
  );
};

export default Admin;
