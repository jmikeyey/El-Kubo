import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { SearchUsers } from "./_search-users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_actions";

export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  const query = params.searchParams.search;

  const users = query
    ? (await clerkClient.users.getUserList({ query })).data
    : [];

  return (
    <div className="p-4">
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the admin role.</p>
      <SearchUsers />

      {users.map((user) => {
        return (
          <div key={user.id} className="bg-white p-4 shadow-md rounded">
            <div className="text-xl font-bold mb-2">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-gray-700 mb-2">
              {
                user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress
              }
            </div>
            <div className="text-gray-600 mb-4">
              {user.publicMetadata.role as string}
            </div>
            <div className="flex flex-col space-y-2">
              <form action={setRole} className="flex space-x-2">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="admin" name="role" />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Make Admin
                </button>
              </form>
              <form action={setRole} className="flex space-x-2">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="kitchen" name="role" />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Make Kitchen Staff
                </button>
              </form>
              <form action={setRole} className="flex space-x-2">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="user" name="role" />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Make User Staff
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}
