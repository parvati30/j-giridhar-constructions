export default function Loader() {
    return (
        <div className="flex flex-col items-center gap-2  z-[10]" role="status" aria-live="polite">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <p className="text-sm text-white">Loading...</p>
        </div>
    );
}