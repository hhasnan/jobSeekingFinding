import React, { useState, useEffect } from 'react'
import JobData from './JobData'
import Spinner from './Spinner'

const JobListing = ({ showAllCards = false }) => {

    const [Jobs, setJobs] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            const apiUrl = !showAllCards ? "/api/jobs?_limit=3" : "/api/jobs"
            try {
                const response = await fetch(apiUrl)
                const data = await response.json();
                setJobs(data);
                setLoading(false)
            } catch (error) {
                console.error(error)
            }

        }

        fetchData()
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {!showAllCards ? "Browse Jobs" : "Recent Jobs"}
                </h2>

                {Loading ? <Spinner loading={Loading}/> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Jobs.map((job) => (
                        <JobData key={job.id} job={job} />
                    ))}
                </div>}


            </div>
        </section>
    )
}

export default JobListing