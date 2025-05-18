// import React, {useState, useEffect} from "react";

function UserTable({users = []}){
    return(
    <div className="overflow-x-auto mt-4">
  <table className="w-full border-separate border-spacing-0 table-auto">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-3 border-l border-b border-t border-gray-700 text-left">Name</th>
        <th className="p-3 border-l border-b border-t border-gray-700 text-left">Username</th>
        <th className="p-3 border-l border-b border-t border-gray-700 text-left">Email</th>
        <th className="p-3 border-l border-b border-t border-r border-gray-700 text-left">Address</th>
      </tr>
    </thead>
    <tbody>
      {users.map((element, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="p-3 border-t border-l border-b border-gray-500">{element.name}</td>
          <td className="p-3 border-t border-l border-b border-gray-500">{element.username}</td>
          <td className="p-3 border-t border-l border-b border-gray-500">{element.email}</td>
          <td className="p-3 border-t border-l border-r border-b border-gray-500">{element.address.city}, {element.address.street}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
}
export default UserTable;