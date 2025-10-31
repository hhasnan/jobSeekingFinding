import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/Homepage';
import JobPage from './pages/JobPage';
import ViewJob, { JobLoader } from './pages/ViewJob';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import NotFoundPage from './pages/NotFoundPage';
import Input from './pages/Input';
import { toast } from 'react-toastify';



const App = () => {

  // add job
  const addJob = async (newJob) => {
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob)
      })

      toast.success("job added succesfully")

      return res
    } catch (error) {
      console.error(error)
    }
  }

  // delete job
  const deleteJob = async (jobToDelete) => {
    try {
      const res = await fetch(`/api/jobs/${jobToDelete}`, {
        method: 'DELETE',
      })
      toast.success("job deleted succesfully")
      return res
    } catch (error) {
      console.error(error)
      console.log("deletetion failed")
    }
  }

  // update job
  const updateJob = async (job) => {
    try {
      console.log(job)
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job)
      })

      toast.success("job added succesfully")

      return res
    } catch (error) {
      console.error(error)
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<MainLayout />} >
      <Route index element={<Homepage />} />
      <Route path='/jobs' element={<JobPage />} />
      <Route path='/jobs/:id' element={<ViewJob toDeleteJob={deleteJob} />} loader={JobLoader} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/jobs/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={JobLoader} />
      <Route path='/*' element={<NotFoundPage />} />
      <Route path='/practice' element={<Input />} />

    </Route>)
  )
  return <RouterProvider router={router} />

}

export default App