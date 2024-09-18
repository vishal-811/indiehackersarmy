



const LivePreview=({username,bio,projects})=>{
    return(
        <div className="flex-1 ps-6  h-full">
            <div className="border-2 border-slate-300 h-full ms-4 me-4 mt-4  overflow-y-scroll">
                   <div>
                     
                   </div> 
            </div>
        </div>
    )
}

{/* <div className="p-4 bg-gray-50 rounded shadow h-[662px]">
<h2 className="text-xl font-bold">{username || 'Your Username'}</h2>
<p className="text-gray-600">{bio || 'Your bio will appear here'}</p>
{projects.length > 0 ? (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Projects</h3>
    {projects.map((project, index) => (
      <div key={index} className="p-4 bg-white rounded shadow">
        <h4 className="text-lg font-bold">{project.name}</h4>
        <p>{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
            <Globe className="mr-2 h-4 w-4" />
            View Project
          </a>
        )}
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-600">Your projects will appear here</p>
)}
</div> */}
export default LivePreview;