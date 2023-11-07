const ProjectCardLoader = ({ className }) => {
    return (
        <div className={`animate-pulse ${className}`}>
            <div className="bg-gray-300 h-60 w-full" />
            <div className="space-y-3 mt-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
        </div>
    );
};

export default ProjectCardLoader;
