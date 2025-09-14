"use client";

import Badge from "@/components/ui/Badge";
import { useParams } from "next/navigation"

const ProjectDetails = () => {

const projectId = useParams<{projectDetails:string}>();

  return (
    <div className="m-10">
      <Badge variant="secondary">Nayim Hasan</Badge>
      Project Details: {projectId.projectDetails} 
      </div>
  )
}

export default ProjectDetails