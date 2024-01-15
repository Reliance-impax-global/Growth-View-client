import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ErrorPage from "../Shared/ErrorPage";

const ManagerRoute = ({ children }) => {
  const { loading, userRole } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto my-12">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (userRole == "manager") {
    return children;
  } else {
    return <ErrorPage></ErrorPage>;
  }
};

export default ManagerRoute;
