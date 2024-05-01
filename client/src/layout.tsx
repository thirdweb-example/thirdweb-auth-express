function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-screen bg-black text-slate-100">
			<div className="min-h-screen max-w-7xl mx-auto p-4 flex items-start justify-center py-48">
				{children}
			</div>
		</div>
	);
}

export default Layout;
