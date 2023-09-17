import AdminNav from "./components/adminNav";

export default function AdminLayout({ children }) {
    return (
        <div className="bg-light h-min-screen">
            <AdminNav />
            {children}
        </div>
    )
}