import { Sidebar } from '../components/sidebar';


export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-black selection:bg-blue-600 selection:text-white">
      
      <div className="flex ">
       
            <Sidebar />

        <div className="p-2 w-full text-slate-900">
            { children }
        </div>

      </div>
    </div>
  );
}