import React, { useState } from 'react'
import { Github, Globe, Loader2 } from 'lucide-react'
import LivePreview from './LivePreview'

const PortfolioPlayground = () => {
  const [username, setUsername] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [isUsernameTaken, setIsUsernameTaken] = useState(false)
  const [bio, setBio] = useState('')
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState({ name: '', description: '', link: '' })

  const checkUsername = () => {
    setIsChecking(true)
    // Simulating a backend call
    setTimeout(() => {
      setIsUsernameTaken(Math.random() < 0.5) // 50% chance the username is taken
      setIsChecking(false)
    }, 1000)
  }

  const addProject = () => {
    if (currentProject.name && currentProject.description) {
      setProjects([...projects, currentProject])
      setCurrentProject({ name: '', description: '', link: '' })
    }
  }

  return (
    <div className="flex h-full w-4xl w-full md:max-w-7xl mx-auto  rounded-lg mt-6 mb-2 bg-red-500 space-x-2">
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-6 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Create Your Portfolio</h2>
          <p className="text-gray-600">Enter your details to generate a real-time portfolio</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block font-medium text-gray-700">Username</label>
              <div className="flex space-x-2">
                <input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="p-2 border rounded w-full"
                  placeholder="Enter your username"
                />
                <button
                  onClick={checkUsername}
                  disabled={isChecking || !username}
                  className="p-2 bg-blue-600 text-white rounded">
                  {isChecking ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Check'}
                </button>
              </div>
              {isUsernameTaken && <p className="text-sm text-red-500">Username is already taken</p>}
            </div>
            {!isUsernameTaken && username && (
              <div className="space-y-2">
                <label htmlFor="bio" className="block font-medium text-gray-700">Bio</label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="p-2 border rounded w-full"
                  placeholder="Tell us about yourself"
                />
              </div>
            )}
          </div>
        </div>
        
        {!isUsernameTaken && username && (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Add Projects</h2>
            <p className="text-gray-600">Showcase your work</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="projectName" className="block font-medium text-gray-700">Project Name</label>
                <input
                  id="projectName"
                  value={currentProject.name}
                  onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })}
                  className="p-2 border rounded w-full"
                  placeholder="Enter project name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="projectDescription" className="block font-medium text-gray-700">Project Description</label>
                <textarea
                  id="projectDescription"
                  value={currentProject.description}
                  onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                  className="p-2 border rounded w-full"
                  placeholder="Describe your project"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="projectLink" className="block font-medium text-gray-700">Project Link</label>
                <input
                  id="projectLink"
                  value={currentProject.link}
                  onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })}
                  className="p-2 border rounded w-full"
                  placeholder="https://..."
                />
              </div>
            </div>
            <button onClick={addProject} className="mt-4 p-2 bg-green-600 text-white rounded">
              Add Project
            </button>
          </div>
        )}
      </div>
       
       {/* Live Preview */}
         <LivePreview username={username} bio={bio} projects={projects}/>
    </div>
  )
}

export default PortfolioPlayground
