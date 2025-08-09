

const UserAccountPage = () => {
    // Mock user data 
  const user = {
    name: "Mokshika",
    email: "mokshika@gmail.com",
    phone: "+(91) 7123456789",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-green-100 p-6 ">{/* change the colours top left and bottom right to look cool */}
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 space-y-6"> {/* change mt-value to increase or decrease space jab header lagega */}
        <div className="flex items-center justify-between border-b border-green-400 pb-4">
          <h2 className="text-2xl font-bold text-green-800">Personal Details</h2>
          <a href="#" className="text-green-600 hover:text-green-800 text-sm">Edit Profile</a>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow-inner space-y-2">
          <p className="text-lg font-semibold text-green-900">{user.name}</p>
          <p className="text-sm text-green-700">{user.email}</p> 
          <p className="text-sm text-green-700">{user.phone}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          <div className="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <h3 className="text-md font-semibold text-green-800 mb-2">Edit Address</h3>
            <ul className="space-y-1 text-green-600 text-sm">
              <li><a href="#" className="hover:underline">Delivery Addresses</a></li>
              <li><a href="#" className="hover:underline">Email Addresses</a></li>
            </ul>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <h3 className="text-md font-semibold text-green-800 mb-2">View Orders</h3>
            <ul className="space-y-1 text-green-600 text-sm">
              <li><a href="#" className="hover:underline">Past Orders</a></li>
              <li><a href="#" className="hover:underline">Pending Orders</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountPage;
